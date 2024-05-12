document.addEventListener('DOMContentLoaded', function () {
    const requestsList = document.getElementById('requestsList');
    const searchInput = document.getElementById('searchInput');
    const filterButton = document.getElementById('filterButton');
    const filterOptions = document.getElementById('filterOptions'); // Change to get the filter options container
    const applyFilterButton = document.getElementById('applyFilterButton');
    const notificationMenu = document.getElementById('notification-icon');
    // Updated requestsData array with two more examples
    const requestsData = [
        { title: 'Mathematics Teacher Needed for Fatma ELZahraa Elementary School', description: 'We urgently need a mathematics teacher for an elementary school in New Cairo area', location: 'Cairo', subject: 'Mathematics', area: 'New Cairo', governorate: 'Cairo' },
        { title: 'Science Teacher Needed for Moastafa Kamal High School', description: 'We require a science teacher for a high school in Masr ElGdeda area.', location: 'Cairo', subject: 'Science', area: 'Masr ElGdeda', governorate: 'Cairo' },
        { title: 'History Teacher Needed for Naguib Mahfoz Middle School', description: 'We\'re in need of a History teacher for a middle school in Sidi Gaber area.', location: 'Alexandria', subject: 'History', area: 'Sidi Gaber', governorate: 'Alexandria' },
        { title: 'English Teacher Needed for Maadi Secondary School', description: 'We are looking for an English teacher for our school in Maadi.', location: 'Cairo', subject: 'English', area: 'Maadi', governorate: 'Cairo' },
        { title: 'Physics Teacher Needed for Heliololis Public School', description: 'Heliololis Public School in Cairo is seeking a qualified Physics teacher for its high school section.', location: 'Cairo', subject: 'Physics', area: 'Masr ElGdeda', governorate: 'Cairo' }
    ];


    document.getElementById("go-back").addEventListener("click", () => {history.back();

    });

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
                    <div class="request-location">Location: ${request.location}</div>
                    <div class="request-details">Subject: ${request.subject}, Area: ${request.area}, Governorate: ${request.governorate}</div>
                </div>
                <button class="donate-button">Fulfill</button>
            `;
            // Add event listener to the request element
            requestElement.addEventListener('click', function () {
                // Here, define the behavior when a request is clicked
                window.location.href ='../confirmVol/confirmVol.html'
               // alert(Clicked on: ${request.title});
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
            request.description.toLowerCase().includes(searchTerm) ||
            request.location.toLowerCase().includes(searchTerm)
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
        const selectedSubject = document.getElementById('subject').value;
        const selectedArea = document.getElementById('area').value;
        const selectedGovernorate = document.getElementById('governorate').value;

        // Filter requests based on selected options
        const filteredRequests = requestsData.filter(request =>
            (selectedSubject === '' || request.subject === selectedSubject) &&
            (selectedArea === '' || request.area === selectedArea) &&
            (selectedGovernorate === '' || request.governorate === selectedGovernorate)
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



