document.addEventListener('DOMContentLoaded', function () {
    const requestsList = document.getElementById('requestsList');
    const searchInput = document.getElementById('searchInput');
    const filterButton = document.getElementById('filterButton');
    const filterOptions = document.querySelector('.filter-options');
    const applyFilterButton = document.getElementById('applyFilterButton');
    const notificationMenu = document.getElementById('notification-icon');

    // Dummy data for toy requests
    const requestsData = [
        { title: 'Board Games for Elementary School Kids', description: 'We are seeking donations of board games to engage and entertain elementary school children in our community programs. These games will help foster social interaction and critical thinking skills among the children.', organization: 'Nahdet El Mahrousa' , age: '6-10', gender: 'Boys and Girls', category: 'Board Games' ,type:'monopoly',quantity:'50', itemCategory: 'toys', image: 'r1'},
        { title: 'Stuffed Toys for Toddlers', description: 'Support our cause to bring smiles and warmth to toddlers by donating stuffed toys. Your contribution will provide comfort and companionship, brightening their days.', organization: 'Egyptian Childhood Association (ECA)', age: '2-4', gender: 'Boys and Girls', category: 'Stuffed Toys', itemCategory: 'toys' , image: 'r2'},
        { title: 'Dolls Collection for Girls in Need', description: 'Help us empower young girls  by donating dolls that reflect diversity and promote positive self-image. These dolls will inspire imagination , fostering a sense of identity and confidence.', organization: 'Egyptian Foundation for the Advancement of Childhood Conditions (EFACC)', age: '5-8', gender: 'Girls', category: 'Dolls',type:'Barbie',quantity:'100', itemCategory: 'toys' , image: 'r3'},
        { title: 'Sports Equipment for Middle School Boys', description: 'Support our efforts to promote an active and healthy lifestyle among middle school boys by donating sports equipment. Your contributions will enable these boys to stay physically fit and develop teams.', organization: 'The Orman Charity Association', age: '11-14', gender: 'Boys', category: 'Sports',type:'ball',quantity:'10', itemCategory: 'toys', image: 'r4'},
        { title: 'Outdoor Toys Campaign for Children', description: 'Join us in providing opportunities for outdoor play and exploration to children. Your donations of outdoor toys will encourage physical activity, creativity, and a connection with nature.', organization: ' Alfanar Foundation', age: '3-6', gender: 'Boys and Girls', category: 'Outdoor',type:'trampoline',quantity:'5', itemCategory: 'toys', image: 'r5' }
    ];

    // Function to display requests
    function displayRequests(requests) {
        requestsList.innerHTML = '';
        requests.forEach(request => {
            const requestElement = document.createElement('div');
            requestElement.classList.add('request');
            requestElement.innerHTML = `
                <div class="request-info">
                    <div class="request-title">${request.title}</div>
                    <div class="request-description">${request.description}</div>

                </div>
                <button class="donate-button">Donate</button>
            `;
            // Add event listener to the request element
            requestElement.addEventListener('click', function () {
                // Here, define the behavior when a request is clicked
              // alert(Clicked on: ${request.title});
              const requestData = JSON.stringify(request);
              console.log(requestData);
              const url = `request_details/request_details.html?data=${encodeURIComponent(requestData)}`;
              window.location.href = url;
           });
           requestsList.appendChild(requestElement);
        });
    }

    // Initial display of all requests
    displayRequests(requestsData);

    // Event listener for search input
    searchInput.addEventListener('input', function () {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredRequests = requestsData.filter(request =>
            request.title.toLowerCase().includes(searchTerm) ||
            request.description.toLowerCase().includes(searchTerm) 
                );
        displayRequests(filteredRequests);
    });

    // Apply filter button functionality
    filterButton.addEventListener('click', function () {
        filterOptions.classList.toggle('show');
        // Position the filter options below the filter button
        const filterButtonRect = filterButton.getBoundingClientRect();
        filterOptions.style.top = `${filterButtonRect.bottom}px`;
        filterOptions.style.left = `${filterButtonRect.left}px`;
    });
    
    // Function to apply filters
    function applyFilters() {
        const selectedAge = document.getElementById('age').value;
        const selectedGender = document.getElementById('gender').value;
        const selectedCategory = document.getElementById('category').value;

        // Filter requests based on selected options
        const filteredRequests = requestsData.filter(request =>
            (selectedAge === '' || request.age === selectedAge) &&
            (selectedGender === '' || request.gender === selectedGender) &&
            (selectedCategory === '' || request.category === selectedCategory)
        );

        // Display filtered requests
        displayRequests(filteredRequests);
    }

    // Call applyFilters function when the Apply Filter button is clicked
    applyFilterButton.addEventListener('click', applyFilters);

    // Hide filter options when clicked outside
    document.addEventListener('click', function (event) {
        const target = event.target;
        if (!filterOptions.contains(target) && target !== filterButton) {
            filterOptions.classList.remove('show');
        }
    });


    // Sticky header functionality
    const header = document.querySelector('.sticky-header');
    const sticky = header.offsetTop;

    function stickHeader() {
        if (window.pageYOffset > sticky) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    }

    window.onscroll = function () {
        stickHeader();
    };
    
   
    notificationMenu.addEventListener('click', function toggleNotificationMenu() {
        const menu = document.getElementById('notificationMenu');
        menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
    });
});
