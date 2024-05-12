document.addEventListener('DOMContentLoaded', function () {
    const requestsList = document.getElementById('requestsList');
    const searchInput = document.getElementById('searchInput');
    const filterButton = document.getElementById('filterButton');
    const filterOptions = document.querySelector('.filter-options');
    const applyFilterButton = document.getElementById('applyFilterButton');
    const notificationMenu = document.getElementById('notification-icon');

    // Dummy data for clothes requests
    const donationDrives = [
        {
            title: "Winter Clothing for Infants",
            description: "Join our NGO in providing warmth and protection to infants by donating winter clothing. Your contributions will ensure that these vulnerable little ones stay cozy and safe during the cold winter months.",
            age: "0-2 years old",
            gender: "All Genders",
            category: "Clothing",
            organizationName: "Alexandria Clothing Bank",
            clothingType: "jackets",
            season: "Winter",
            material: "Wool",
            quantity:"25",
            itemCategory: 'clothes',
            image: 'r1'
        },
        {
            title: "School Uniform Assistance Program for Girls",
            description: "Help us empower young girls by supporting our school uniform assistance program. Your donations of school uniforms will enable these girls to attend school with dignity and confidence, opening doors to a brighter future.",
            age: "6-12 years old",
            gender: "Female",
            category: "Clothing",
            organizationName: "Port Said Clothes Donation Center Association",
            clothingType: " tshirts",
            season: "Summer",
            material: "Cotton",
            quantity:"150",
            itemCategory: 'clothes',
            image: 'r2'

        },
        {
            title: "Teenage Boys' Casual Clothing",
            description: "Support our NGO's efforts to provide essential clothing to teenage boys. Your donations of casual clothing will help these young individuals feel comfortable and stylish as they navigate adolescence.",
            age: "13-17 years old",
            gender: "Male",
            category: "Clothing",
            organizationName: "Tanta Threads of Hope Charity Foundation",
            clothingType: " jeans/pants",
            season: "Year-round",
            material: "Cotton",
            quantity:"100",
            itemCategory: 'clothes',
            image: 'r3'

        },
        {
            title: "Maternity Clothing Collection for Expectant Mothers",
            description: "Join us in supporting expectant mothers by donating maternity clothing. Your contributions will provide comfort and support to these mothers-to-be as they embark on their journey into motherhood.",
            age: "Adult (expectant mothers)",
            gender: "Female",
            category: "Clothing",
            organizationName: "Delta Apparel Aid Foundation",
            clothingType: "Maternity wear (dresses)",
            season: "Year-round",
            material: "Lycra",
            quantity:"50",
            itemCategory: 'clothes',
            image: 'r4'
        },
        {
            title: "All-Season Clothing for Homeless Individuals",
            description: "Help us provide essential clothing to homeless individuals of all genders and ages. Your donations of all-season clothing will offer warmth, protection, and dignity to those experiencing homelessness in our community.",
            age: "Adult",
            gender: "Male",
            category: "Clothing",
            organizationName: "Giza Clothing Donation Hub Association",
            clothingType: "shirts, pants, jackets, etc.)",
            season: "Year-round",
            material: "Nylon and cotton and wool",
            quantity:"250",
            itemCategory: 'clothes',
            image: 'r3'
        }
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
    displayRequests(donationDrives);

    // Event listener for search input
    searchInput.addEventListener('input', function () {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredRequests = donationDrives.filter(request =>
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
        const selectedSeason = document.getElementById('season').value;

        // Filter requests based on selected options
        const filteredRequests = donationDrives.filter(request => {
            if (selectedAge === "Adult") {
                // If "Adult" is selected, include requests with "Adult" in the age range
                return request.age.toLowerCase().includes("adult");
            } else if (selectedAge !== "") {
                // If a specific age range is selected, include requests within that range
                const [minAge, maxAge] = selectedAge.split('-').map(Number);
                const requestAge = parseInt(request.age.split('-')[0]); // Consider only the lower end of the age range
                return requestAge >= minAge && requestAge <= maxAge;
            } else {
                return true; // Include all requests if no age range is selected
            }
        }).filter(request =>
            // Check if the selected gender and season match the request's gender and season
            (selectedGender === '' || request.gender === selectedGender) &&
            (selectedSeason === '' || request.season === selectedSeason)
        );

        // Display filtered requests
        displayRequests(filteredRequests);
    }

    // Call applyFilters function when the Apply Filter button is clicked
    applyFilterButton.addEventListener('click', applyFilters);
    applyFilters();

    // Hide filter options when clicked outside
    document.addEventListener('click', function (event) {
        const target = event.target;
        if (!filterOptions.contains(target) && target !== filterButton) {
            filterOptions.classList.remove('show');
        }
    });

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