document.addEventListener('DOMContentLoaded', function () {
    const volunteersList = document.getElementById('volunteersList');
    const searchInput = document.getElementById('searchInput');
    const filterButton = document.getElementById('filterButton');
    const filterOptions = document.querySelector('.filter-options');
    const applyFilterButton = document.getElementById('applyFilterButton');

    
const peopleData = [
    {
      firstName: "John",
      lastName: "Doe",
      gender: "Male",
      email: "johndoe@example.com",
      phoneNumber: "+1234567890",
      address: "123 Main Street",
      area: "Community Service",
      governorate: "Cairo",
      type: "teacher",
      subjects: "Math, Science",
      numberOfClasses: 3,
      numberOfStudents: 30,
      status: "accepted"
    },
    {
      firstName: "Jane",
      lastName: "Smith",
      gender: "Female",
      email: "janesmith@example.com",
      phoneNumber: "+1987654321",
      address: "456 Elm Avenue",
      area: "Healthcare",
      governorate: "Giza",
      type: "doctor",
      clinicLocation: "789 Oak Street",
      speciality: "Pediatrics",
      numberOfProbonoCases: 10,
      status: "rejected"
    },
    {
      firstName: "James",
      lastName: "Johnson",
      gender: "Male",
      email: "jamesjohnson@example.com",
      phoneNumber: "+1122334455",
      address: "789 Pine Road",
      area: "Education",
      governorate: "Alexandria",
      type: "teacher",
      subjects: "English, History",
      numberOfClasses: 2,
      numberOfStudents: 25,
      status: "pending"
    },
    {
      firstName: "Emily",
      lastName: "Williams",
      gender: "Female",
      email: "emilywilliams@example.com",
      phoneNumber: "+1987456321",
      address: "345 Cedar Lane",
      area: "Medical",
      governorate: "Aswan",
      type: "doctor",
      clinicLocation: "123 Maple Avenue",
      speciality: "Dentistry",
      numberOfProbonoCases: 5,
      status: "pending"
    },
    {
      firstName: "Michael",
      lastName: "Brown",
      gender: "Male",
      email: "michaelbrown@example.com",
      phoneNumber: "+1346798520",
      address: "567 Walnut Drive",
      area: "Social Work",
      governorate: "Luxor",
      type: "teacher",
      subjects: "Art, Music",
      numberOfClasses: 4,
      numberOfStudents: 40,
      status: "accepted"
    },
    {
      firstName: "Olivia",
      lastName: "Jones",
      gender: "Female",
      email: "oliviajones@example.com",
      phoneNumber: "+1555666777",
      address: "890 Birch Street",
      area: "Public Health",
      governorate: "Hurghada",
      type: "doctor",
      clinicLocation: "456 Pine Avenue",
      speciality: "Oncology",
      numberOfProbonoCases: 8,
      status: "rejected"
    },
    {
      firstName: "William",
      lastName: "Davis",
      gender: "Male",
      email: "williamdavis@example.com",
      phoneNumber: "+1987654321",
      address: "123 Oak Avenue",
      area: "Community Development",
      governorate: "Cairo",
      type: "teacher",
      subjects: "Physical Education, Geography",
      numberOfClasses: 2,
      numberOfStudents: 20,
      status: "pending"
    },
    {
      firstName: "Sophia",
      lastName: "Martinez",
      gender: "Female",
      email: "sophiamartinez@example.com",
      phoneNumber: "+1234567890",
      address: "456 Maple Street",
      area: "Mental Health",
      governorate: "Giza",
      type: "doctor",
      clinicLocation: "789 Elm Road",
      speciality: "Psychiatry",
      numberOfProbonoCases: 12,
      status: "accepted"
    }
  ];

    // Function to display volunteer data
    function displayVolunteerData(peopleData) {
        volunteersList.innerHTML = ''; // Clear existing content
        peopleData.forEach(volunteer => {
            const volunteerElement = document.createElement('div');
            volunteerElement.classList.add('volunteer');
            if (volunteer.type == "teacher") {
                // Create HTML structure for teacher volunteer
                volunteerElement.innerHTML = `
                    <div class="volunteer-info">
                        <div class="volunteer-name">${volunteer.firstName} ${volunteer.lastName}</div>
                        <div class="volunteer-type">Volunteer Type: ${volunteer.type}</div>
                        <div class="volunteer-type">Volunteer Status: ${volunteer.status}</div>
                        <div class="additional-info" style="display: none;">
                            <div class="volunteer-gender"><strong>Gender:</strong> ${volunteer.gender}</div>
                            <div class="request-contact">
                                <strong>Contact Details:</strong>
                                <div>Email: ${volunteer.email}</div>
                                <div>Phone: ${volunteer.phoneNumber}</div>
                            </div>
                            <div class="volunteer-location"><strong>Location:</strong> Address: ${volunteer.address}, Area: ${volunteer.area}, Governorate: ${volunteer.governorate}</div>
                            <div class="extra1"><strong>Subjects:</strong> ${volunteer.subjects}</div>
                            <div class="extra2"><strong>Number of Classes:</strong> ${volunteer.numberOfClasses}</div>
                            <div class="extra3"><strong>Number of Students:</strong> ${volunteer.numberOfStudents}</div>
                        </div>
                    </div>
                    <button class="more info-button">More Info</button>
                `;
            } else {
                // Create HTML structure for doctor volunteer
                volunteerElement.innerHTML = `
                    <div class="volunteer-info">
                        <div class="volunteer-name">${volunteer.firstName} ${volunteer.lastName}</div>
                        <div class="volunteer-type">Volunteer Type: ${volunteer.type}</div>
                        <div class="volunteer-type">Volunteer Status: ${volunteer.status}</div>
                        <div class="additional-info" style="display: none;">
                            <div class="volunteer-gender"><strong>Gender:</strong> ${volunteer.gender}</div>
                            <div class="request-contact">
                                <strong>Contact Details:</strong>
                                <div>Email: ${volunteer.email}</div>
                                <div>Phone: ${volunteer.phoneNumber}</div>
                            </div>
                            <div class="volunteer-location"><strong>Location:</strong> Address: ${volunteer.address}, Area: ${volunteer.area}, Governorate: ${volunteer.governorate}</div>
                            <div class="extra1"><strong>Clinic Location:</strong> ${volunteer.clinicLocation}</div>
                            <div class="extra2"><strong>Speciality:</strong> ${volunteer.speciality}</div>
                            <div class="extra3"><strong>Number of Probono Cases:</strong> ${volunteer.numberOfProbonoCases}</div>
                        </div>
                    </div>
                    <button class="more info-button">More Info</button>
                `;
            }
            volunteersList.appendChild(volunteerElement); // Append to the volunteers list
        });
    }

    // Initial display of all volunteers
    displayVolunteerData(peopleData);

    // Event listener for "More Info" button
    volunteersList.addEventListener('click', function (event) {
        if (event.target.classList.contains('info-button')) {
            const additionalInfo = event.target.parentNode.querySelector('.additional-info');
            if (additionalInfo.style.display === 'none') {
                additionalInfo.style.display = 'block';
                const button = document.getElementsByClassName('info-button')[0];
                button.textContent = "Less Info";
            } else {
                additionalInfo.style.display = 'none';
                const button = document.getElementsByClassName('info-button')[0];
                button.textContent = "More Info";
            }
            // additionalInfo.style.display = additionalInfo.style.display === 'none' ? 'block' : 'none';
        }
    });

    // Event listener for search input
    searchInput.addEventListener('input', function () {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredVolunteers = peopleData.filter(volunteer =>
            `${volunteer.firstName} ${volunteer.lastName}`.toLowerCase().includes(searchTerm)
        );
        displayVolunteerData(filteredVolunteers);
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
        const selectedType = document.getElementById('type').value;
        const selectedGender = document.getElementById('gender').value;
        const selectedStatus = document.getElementById('status').value;

        // Filter volunteers based on selected options
        const filteredVolunteers = peopleData.filter(volunteer =>
            (selectedType === '' || volunteer.type === selectedType) &&
            (selectedGender === '' || volunteer.gender === selectedGender) &&
            (selectedStatus === '' || volunteer.status === selectedStatus)
        );

        // Display filtered volunteers
        displayVolunteerData(filteredVolunteers);
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

});
