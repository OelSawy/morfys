document.addEventListener('DOMContentLoaded', function () {
    const requestsList = document.getElementById('requestsList');
    const searchInput = document.getElementById('searchInput');
    const filterButton = document.getElementById('filterButton');
    const filterOptions = document.querySelector('.filter-options');
    const applyFilterButton = document.getElementById('applyFilterButton');
    const notificationMenu = document.getElementById('notification-icon');


    // Dummy data for blood donation requests
    const requestsData = [
        {   
            description: 'Urgently seeking blood donors to support accident victims at City Hospital. Your donation can save lives and provide critical medical assistance to those in need.', 
            patientName: 'John Doe',
            bloodType: 'O+', 
            urgency: 'Urgent', 
            hospital: 'City Hospital',
            title: 'Emergency Blood Donation for Accident Victims', 
            governorate: 'Cairo',
            area: 'Nasr City',
            hospitalAddress: '123 Main Street, Nasr City, Cairo',
            itemCategory: 'blood'
        },
        {   
            description: 'Join our blood drive to help cancer patients undergoing treatment at Hope Medical Center. Your donation will provide vital support to individuals fighting cancer.', 
            patientName: 'Jane Smith',
            bloodType: 'A-', 
            urgency: 'High', 
            hospital: 'Hope Medical Center',
            title: 'Blood Drive for Cancer Patients', 
            governorate: 'Giza',
            area: 'Dokki',
            hospitalAddress: '456 Elm Street, Dokki, Giza',
            itemCategory: 'blood'
        },
        { 
            description: 'Participate in our community blood donation event to ensure an adequate blood supply for local hospitals. Your contribution will make a significant difference in saving lives.', 
            patientName: 'Michael Johnson',
            bloodType: 'B+', 
            urgency: 'Medium', 
            hospital: 'Community Center',
            title: 'Community Blood Donation Event', 
            governorate: 'Alexandria',
            area: 'Sidi Gaber',
            hospitalAddress: '789 Oak Avenue, Sidi Gaber, Alexandria',
            itemCategory: 'blood'
        },
        { 
            description: 'Support expectant mothers and newborns by donating blood at our donation camp organized for the maternity ward at Sunrise Hospital. Your donation can help prevent maternal and infant mortality.', 
            patientName: 'Emily Brown',
            bloodType: 'AB+', 
            urgency: 'Low', 
            hospital: 'Sunrise Hospital',
            title: 'Blood Donation Camp for Maternity Ward', 
            governorate: 'Luxor',
            area: 'Al-Karnak',
            hospitalAddress: '101 Pine Road, Al-Karnak, Luxor',
            itemCategory: 'blood'
        },
        { 
            description: 'Contribute to our blood donation drive aimed at providing essential transfusions to patients with thalassemia. Your donation will improve the quality of life for individuals living with this genetic disorder.', 
            patientName: 'David Wilson',
            bloodType: 'B-', 
            urgency: 'Critical', 
            hospital: 'Thalassemia Center',
            title: 'Blood Donation Drive for Thalassemia Patients', 
            governorate: 'Aswan',
            area: 'Aswan City',
            hospitalAddress: '222 Cedar Street, Aswan City, Aswan',
            itemCategory: 'blood'
        }
    ];

    // Function to display blood donation requests
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

    // Initial display of all blood donation requests
    displayRequests(requestsData);

    // Event listener for search input
    searchInput.addEventListener('input', function () {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredRequests = requestsData.filter(request =>
            request.title.toLowerCase().includes(searchTerm) ||
            request.description.toLowerCase().includes(searchTerm) ||
            request.patientName.toLowerCase().includes(searchTerm) ||
            request.hospital.toLowerCase().includes(searchTerm) ||
            request.hospitalAddress.toLowerCase().includes(searchTerm) ||
            request.area.toLowerCase().includes(searchTerm) ||
            request.governorate.toLowerCase().includes(searchTerm)
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
        const selectedUrgency = document.getElementById('urgency').value;
        const selectedHospital = document.getElementById('hospital').value;
        const selectedGovernorate = document.getElementById('governorate').value;
        const selectedArea = document.getElementById('area').value;

        // Filter blood donation requests based on selected options
        const filteredRequests = requestsData.filter(request =>
            (selectedUrgency === '' || request.urgency === selectedUrgency) &&
            (selectedHospital === '' || request.hospital === selectedHospital) &&
            (selectedGovernorate === '' || request.governorate === selectedGovernorate) &&
            (selectedArea === '' || request.area === selectedArea)
        );

        // Display filtered blood donation requests
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
