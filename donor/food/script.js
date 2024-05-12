document.addEventListener('DOMContentLoaded', function () {
    const requestsList = document.getElementById('requestsList');
    const searchInput = document.getElementById('searchInput');
    const filterButton = document.getElementById('filterButton');
    const filterOptions = document.querySelector('.filter-options');
    const applyFilterButton = document.getElementById('applyFilterButton');
    const notificationMenu = document.getElementById('notification-icon');

    // Dummy data for food donation requests
    const requestsData = [
        { title: 'Emergency Food Supplies for Refugee Camp', description: 'We urgently need non-perishable food items for refugees in need.', organizationName: 'Resala', item: { name: 'Bread', quantity: '150 pcs' }, itemCategory: 'food', type: 'Baked Goods', image: 'r1' },
        { title: 'Food Donations for Homeless Shelter', description: 'We\'re in need of canned foods, rice, and pasta for our homeless shelter residents.', organizationName: 'Dar El Orman', item: { name: 'Canned Tomates', quantity: '50 cans' }, itemCategory: 'food', type: 'Canned Foods', image: 'r2'  },
        { title: 'Nutritious Meals for School Children', description: 'We require healthy snacks and meals for school children to improve their nutrition.', organizationName: 'Mashroo3 Kheir', item: { name: 'Oranges', quantity: '30 kg' }, itemCategory: 'food', type: 'Fruits and Vegetables', image: 'r3'  },
        { title: 'Fresh Produce for Community Kitchen', description: 'We\'re seeking donations of fresh fruits and vegetables for our community kitchen.', organizationName: 'Misr El Kheir', item: { name: 'Apples', quantity: '50 kg' }, itemCategory: 'food', type: 'Fruits and Vegetables', image: 'r4'  },
        { title: 'Meal Kits for Elderly Residents', description: 'We\'re distributing meal kits with easy-to-prepare meals for elderly residents in our community.', organizationName: 'Nahr El Kheir', item: { name: 'Canned Fish', quantity: '30 cans' }, itemCategory: 'food', type: 'Canned Foods', image: 'r5'  }
    ];

    // Function to display food donation requests
    function displayRequests(requests) {
        requestsList.innerHTML = '';
        requests.forEach(request => {
            const requestElement = document.createElement('div');
            requestElement.classList.add('request');
            requestElement.innerHTML = `
                <div class="request-info">
                    <div class="request-title">${request.title}</div>
                    <div class="request-description">${request.description}</div>
                    <div class="request-organizationName">Organization Name: ${request.organizationName}</div>
                    <div class="item">
                        <div class="item-name">${request.item.name}</div>
                        <div class="item-quantity">Quantity: ${request.item.quantity}</div>
                    </div>
                </div>
                <div class="button-container">
                    <button class="donate-button">Donate</button>
                </div>
            `;


            // Add event listener to the donate button
            const donateButton = requestElement.querySelector('.donate-button');
            donateButton.addEventListener('click', function () {
                donateItem(request.item);
            });
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
            requestsList.appendChild(requestElement);
        });
    }



    // Function to handle item donation
    function donateItem(item) {
        // Implement donation logic here
    }

    
    // Initial display of all requests
    displayRequests(requestsData);


    // Event listener for search input
    searchInput.addEventListener('input', function () {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredRequests = requestsData.filter(request =>
            request.title.toLowerCase().includes(searchTerm) ||
            request.description.toLowerCase().includes(searchTerm) ||
            request.organizationName.toLowerCase().includes(searchTerm)
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
        const selectedType = document.getElementById('foodType').value;

        // Filter requests based on selected food type
        const filteredRequests = requestsData.filter(request =>
            (selectedType === '' || request.type === selectedType )
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
