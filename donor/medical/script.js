document.addEventListener('DOMContentLoaded', function () {
    const requestsList = document.getElementById('requestsList');
    const searchInput = document.getElementById('searchInput');
    const filterButton = document.getElementById('filterButton');
    const filterOptions = document.querySelector('.filter-options');
    const applyFilterButton = document.getElementById('applyFilterButton');
    const notificationMenu = document.getElementById('notification-icon');


    // Dummy data for medical supplies requests
    const requestsData = [
        { title: 'Medical Supplies for COVID-19 Hospital', description: 'We urgently need medical supplies including masks, gloves, and ventilators for treating COVID-19 patients at our hospital. Additionally, we require pulse oximeters and blood pressure monitors to monitor patient vital signs. For medications, we need antibiotics, antivirals, and fever reducers.', location: 'Ain Shams Specialized Hospital', medicalSupply: ['Masks', 'Gloves', 'Ventilators'] , medicalUse: 'Treatment of COVID-19 patients', quantityNeeded: 100, itemCategory: 'medical', image: 'r1'},
        { title: 'First Aid Kits for Disaster Relief', description: 'Seeking first aid kits and basic medical supplies for disaster relief efforts in the flood-affected areas.', location: 'Cairo Medical Hospital ', medicalSupply: ['First Aid Kits', 'Basic Medical Supplies'], quantityNeeded: 50, itemCategory: 'medical', image: 'r2'  },
        { title: 'Wheelchairs for Rehabilitation Center', description: 'Orthopedic braces and walkers are needed to assist patients with mobility issues.', location: 'Cleopatra Hospital', age: 'All Ages', medicalSupply: ['Orthopedic Braces', 'Walker'], quantityNeeded: 20, itemCategory: 'medical', image: 'r3'  },
        { title: 'Personal Protective Equipment (PPE) for Healthcare Workers', description: 'We need antiviral drugs and immune boosters.', location: 'Degla Medical Center', medicalSupply: ['Antiviral Drugs', 'Immune Boosters'], medicalUse: 'Protection of healthcare workers', quantityNeeded: 150, itemCategory: 'medical', image: 'r4'  },
        { title: 'Medical Supplies for Remote Health Clinics', description: 'In need of essential medical supplies for remote health clinics serving underserved communities. Additionally, portable ultrasound machines and stethoscopes are needed for diagnostic purposes.', location: 'El Salam International Hospital', medicalSupply: ['Portable Ultrasound', 'Stethoscope'], quantityNeeded: 75, itemCategory: 'medical' , image: 'r5' }
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
                    <div class="request-quantityNeeded">Quantity Needed: ${request.quantityNeeded}</div>
                </div>
                <button class="donate-button" data-id="${request.title}">Donate</button>
            `;
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
            request.description.toLowerCase().includes(searchTerm) ||
            request.location.toLowerCase().includes(searchTerm) ||
            (request.medicalEquipments && request.medicalEquipments.join(',').toLowerCase().includes(searchTerm)) ||
            (request.medicalDevices && request.medicalDevices.join(',').toLowerCase().includes(searchTerm)) ||
            (request.medications && request.medications.join(',').toLowerCase().includes(searchTerm))
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
        const selectedmedicalEquipments = document.getElementById('medicalEquipments').value;
        const selectedmedicalDevices = document.getElementById('medicalDevices').value;
        const selectedmedications = document.getElementById('medications').value;
        const selectedmedicalUse = document.getElementById('medicalUse').value;

        // Filter requests based on selected options
        const filteredRequests = requestsData.filter(request =>
            (selectedmedicalEquipments === '' || (request.medicalEquipments && request.medicalEquipments.includes(selectedmedicalEquipments))) &&
            (selectedmedicalDevices === '' || (request.medicalDevices && request.medicalDevices.includes(selectedmedicalDevices))) &&
            (selectedmedications === '' || (request.medications && request.medications.includes(selectedmedications))) &&
            (selectedmedicalUse === '' || (request.medicalUse && request.medicalUse.includes(selectedmedicalUse)))
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
