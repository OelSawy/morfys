document.addEventListener('DOMContentLoaded', function () {
    const requestsList = document.getElementById('requestsList');
    const searchInput = document.getElementById('searchInput');
    const filterButton = document.getElementById('filterButton');
    const filterOptions = document.querySelector('.filter-options');
    const applyFilterButton = document.getElementById('applyFilterButton');

    // Dummy data for organization requests
    const organizationRequests = [
        {
            title: "Ma’an Foundation for Human and Community Development",
            description: "Ma’an Foundation for Human and Community Development is dedicated to providing education and support to underprivileged children in Egypt. We offer educational programs, scholarships, and mentorship opportunities to empower children and give them hope for a brighter future.",
            purpose: "Aims to foster holistic human and community development in Egypt by providing education, healthcare, vocational training, and social support services, empowering individuals and communities to thrive and contribute positively to society",
            contactDetails: {
                email: "info@maanfoundation.org",
                phone: "+20 123 456 789"
            },
            address: "123 Nile Street, Cairo, Egypt",
            location: "Cairo",
            organizationType: "schools",
            area: "Education and Child Welfare",
            government: "Non-governmental"
        },
        {
            title: "Health for All Association",
            description: "Health for All Association is committed to providing healthcare services and medical assistance to underserved communities in Egypt. We operate clinics, conduct health awareness campaigns, and provide access to essential medicines to improve the health and well-being of individuals and families.",
            purpose: "To provide healthcare services and medical assistance to underserved communities in Egypt through clinics, health awareness campaigns, and access to essential medicines",
            contactDetails: {
                email: "contact@healthforall.org",
                phone: "+20 987 654 321"
            },
            address: "456 Pyramid Avenue, Giza, Egypt",
            location: "Giza",
            organizationType: "hospitals",
            area: "Healthcare and Medical Assistance",
            government: "Non-profit"
        },
        {
            title: "Food for All Foundation",
            description: "Food for All Foundation is committed to addressing hunger and food insecurity in Egypt. We distribute food aid, support community kitchens, and advocate for policies that ensure access to nutritious food for all individuals and families.",
            purpose: "To address hunger and food insecurity in Egypt through food aid distribution, support for community kitchens, and advocacy for policies ensuring access to nutritious food for all individuals and families.",
            contactDetails: {
                email: "info@foodforallfoundation.org",
                phone: "+20 777 888 999"
            },
            address: "202 Nile Delta Road, Aswan, Egypt",
            location: "Aswan",
            organizationType: "charity",
            area: "Hunger Relief and Food Distribution",
            government: "Non-governmental"
        },
        {
            title: "Egypt Foundation for Orphans Care",
            description: "Egypt Foundation for Orphans Care is dedicated to providing a loving and nurturing environment for orphaned children in Egypt. We strive to offer comprehensive care, including shelter, nutritious meals, quality education, healthcare, and emotional support. Our mission is to empower orphaned children to overcome adversity, develop their potential, and lead fulfilling lives. Through our commitment to excellence in care and education, we aim to create a safe and supportive home where every child feels valued and has the opportunity to thrive.",
            purpose: "To provide a nurturing and supportive environment for orphaned children in Egypt by offering shelter, education, healthcare, and emotional support, empowering them to thrive and reach their full potential in a loving community",
            contactDetails: {
                email: "info@egyptorphans.org",
                phone: "+20 222 333 444"
            },
            address: "Gardens waterfalls, 111 Liberty, Alexandria, Egypt",
            location: "Alexandria",
            organizationType: "orphanage",
            area: "Orphanage Care and Support",
            government: "Non-governmental"
        },
        {
            title: "Egyptian Foundation for Refugee Rights (EFRR)",
            description: "Egyptian Foundation for Refugee Rights (EFRR) is a non-profit organization dedicated to advocating for and protecting the rights of refugees in Egypt by providing legal assistance, advocacy, and capacity-building programs. Their mission is to promote respect for refugee rights and create an inclusive society where refugees are treated with dignity.",
            purpose: "To provide comprehensive support to refugees in Egypt by offering shelter, legal aid, healthcare services, and community integration programs, ensuring their safety",
            contactDetails: {
                email: "info@efrr.org",
                phone: "+20 2 241 62985"
            },
            address: "35 Talaat Harb Street, Downtown, Cairo, Egypt",
            location: "Cairo",
            organizationType: "refugee",
            area: "Refugee Support and Advocacy",
            government: "Non-governmental"
        }
    ];

    // Function to display organization requests
    function displayOrganizationRequests(requests) {
        requestsList.innerHTML = '';
        requests.forEach(request => {
            const requestElement = document.createElement('div');
            requestElement.classList.add('request');
            requestElement.innerHTML = `
                <div class="request-info">
                    <div class="request-title">${request.title}</div>
                    <div class="request-description">${request.description}</div>
                    <div class="additional-info" style="display: none;">
                        <div class="request-purpose"><strong>Purpose:</strong> ${request.purpose}</div>
                        <div class="request-contact">
                            <strong>Contact Details:</strong>
                            <div>Email: ${request.contactDetails.email}</div>
                            <div>Phone: ${request.contactDetails.phone}</div>
                        </div>
                        <div class="request-address"><strong>Address:</strong> ${request.address}</div>
                        <div class="request-location"><strong>Location:</strong> ${request.location}</div>
                        <div class="request-org-type"><strong>Organization Type:</strong> ${request.organizationType}</div>
                        <div class="request-area"><strong>Area of Focus:</strong> ${request.area}</div>
                        <div class="request-government"><strong>Government:</strong> ${request.government}</div>
                    </div>
                </div>
                <button class="more info-button">More Info</button>
                <button class="delete delete-button">Delete</button>
            `;
            requestsList.appendChild(requestElement);
        });
    }

    // Initial display of all organization requests
    displayOrganizationRequests(organizationRequests);

    // Event listener for search input
    searchInput.addEventListener('input', function () {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredRequests = organizationRequests.filter(request =>
            request.title.toLowerCase().includes(searchTerm) ||
            request.description.toLowerCase().includes(searchTerm)
        );
        displayOrganizationRequests(filteredRequests);
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
        const selectedLocation = document.getElementById('location').value;
        const selectedOrganizationType = document.getElementById('organizationType').value;
        const selectedArea = document.getElementById('area').value;

        // Filter requests based on selected options
        const filteredRequests = organizationRequests.filter(request =>
            (selectedLocation === '' || request.location === selectedLocation) &&
            (selectedOrganizationType === '' || request.organizationType === selectedOrganizationType) &&
            (selectedArea === '' || request.area === selectedArea)
        );

        // Display filtered requests
        displayOrganizationRequests(filteredRequests);
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

    // Event listener for "More Info" button
    requestsList.addEventListener('click', function (event) {
        if (event.target.classList.contains('info-button')) {
            const additionalInfo = event.target.parentNode.querySelector('.additional-info');
            additionalInfo.style.display = additionalInfo.style.display === 'none' ? 'block' : 'none';
            event.target.textContent = event.target.textContent === 'More Info' ? 'Less Info' : 'More Info';
        }
    });
    requestsList.addEventListener('click', function (event) {
        if (event.target.classList.contains('delete-button')) {
            // Remove the request element
            const requestElement = event.target.parentNode;
            requestElement.remove();
            // You can add code here to handle deletion from the data source
        }
    });

    const notificationMenu = document.getElementById('notification-icon');
    
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