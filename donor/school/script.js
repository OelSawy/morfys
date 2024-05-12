document.addEventListener('DOMContentLoaded', function () {
    const requestsList = document.getElementById('requestsList');
    const searchInput = document.getElementById('searchInput');
    const filterButton = document.getElementById('filterButton');
    const filterOptions = document.querySelector('.filter-options');
    const applyFilterButton = document.getElementById('applyFilterButton');
    const notificationMenu = document.getElementById('notification-icon');

    // Dummy data for school supplies requests
    const requestsData = [
        { title: 'English Grammar Book', itemType: 'Books', author: 'Betty S. Azar, Stacy A. Hagen', language: 'English', edition: '5th Edition', description: 'A comprehensive guide to English grammar suitable for high school students.', quantityNeeded: 50, organizationName: 'Summits School', itemCategory: 'school', image: 'r1' },
        { title: 'Math Workbook', itemType: 'Books', author: 'Steph King, JoshLury', language: 'English', edition: '2nd Edition', description: 'Workbook containing math exercises for elementary students.', quantityNeeded: 100, organizationName: 'Manarat El Maddi School', itemCategory: 'school', image: 'r2' },
        { title: 'Ballpoint Pens', itemType: 'Stationery', description: 'Pack of 50 ballpoint pens for writing.', quantityNeeded: 200, organizationName: 'Desert School', itemCategory: 'school', image: 'r3' },
        { title: 'Drawing Paper', itemType: 'Stationery', description: 'Pack of 500 sheets of drawing paper.', quantityNeeded: 300, organizationName: 'Stars School', itemCategory: 'school', image: 'r4' },
        { title: 'Scientific Calculator', itemType: 'Stationery', description: 'A scientific calculator for performing complex calculations.', quantityNeeded: 50, organizationName: 'Rajac School', itemCategory: 'school', image: 'r5' }
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
                    ${request.description ? `<div class="description">Description: ${request.description}</div>` : ''}
                    <div class="quantity-needed">Quantity Needed: ${request.quantityNeeded}</div>
                </div>
                <div class="donate-section">
                    <button class="donate-button">Donate</button>
                </div>
            `;
            // Add event listener to the donate button
            const donateButton = requestElement.querySelector('.donate-button');
            donateButton.addEventListener('click', function () {
                donateItem(request, requestElement);
            });
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
            request.title.toLowerCase().includes(searchTerm)
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
        const selectedItemType = document.getElementById('itemType').value;

        // Filter requests based on selected item type
        const filteredRequests = requestsData.filter(request =>
            selectedItemType === '' || request.itemType === selectedItemType
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
