document.addEventListener('DOMContentLoaded', function () {
    const medicalCasesList = document.getElementById('medicalCasesList');
    const searchInput = document.getElementById('searchInput');
    const filterButton = document.getElementById('filterButton');
    const filterOptions = document.querySelector('.filter-options');
    const applyFilterButton = document.getElementById('applyFilterButton');
    const notificationMenu = document.getElementById('notification-icon');



    // Real-life examples of medical cases
    const medicalCasesData = [
        { 
            title: 'Appendectomy for Acute Appendicitis', 
            description: 'A patient presents with classic symptoms of acute appendicitis, including abdominal pain, nausea, and vomiting. Urgent surgical intervention is required to remove the inflamed appendix.', 
            specialty: 'General Surgery', 
            organization: 'El Salam Hospital', 
            area: 'Cairo', 
            governorate: 'Giza',
            patientName: 'Ahmed Mohamed',
            age: 28,
            gender: 'Male',
            weight: '70 kg',
            address: '123 Street, Cairo'
        },
        { 
            title: 'Treatment of Myocardial Infarction', 
            description: 'A patient is admitted with chest pain, shortness of breath, and ECG changes indicative of an acute myocardial infarction (heart attack). Immediate medical therapy and possible intervention (angioplasty, stent placement) are needed.', 
            specialty: 'Cardiology', 
            organization: 'Heart Care Center', 
            area: 'Alexandria', 
            governorate: 'Alexandria',
            patientName: 'Fatma Ali',
            age: 55,
            gender: 'Female',
            weight: '65 kg',
            address: '456 Street, Alexandria'
        },
        { 
            title: 'Management of Severe Traumatic Brain Injury', 
            description: 'A patient sustains a severe head injury following a motor vehicle accident, resulting in loss of consciousness and abnormal neuroimaging findings. Urgent neurosurgical intervention and intensive care management are required.', 
            specialty: 'Neurosurgery', 
            organization: 'Neurocare Hospital', 
            area: 'Luxor', 
            governorate: 'Luxor',
            patientName: 'Mohamed Hassan',
            age: 40,
            gender: 'Male',
            weight: '80 kg',
            address: '789 Street, Luxor'
        },
        { 
            title: 'Treatment of Diabetic Ketoacidosis', 
            description: 'A patient with known diabetes presents with symptoms of hyperglycemia, dehydration, and altered mental status. Urgent medical treatment with intravenous fluids, insulin therapy, and electrolyte replacement is essential to correct the metabolic imbalance.', 
            specialty: 'Endocrinology', 
            organization: 'Diabetes Care Clinic', 
            area: 'Aswan', 
            governorate: 'Aswan',
            patientName: 'Noura Mahmoud',
            age: 35,
            gender: 'Female',
            weight: '60 kg',
            address: '101 Street, Aswan'
        },
        { 
            title: 'Management of Acute Asthma Exacerbation', 
            description: 'A patient presents to the emergency department with severe shortness of breath, wheezing, and decreased peak expiratory flow rates. Immediate medical treatment with bronchodilators, corticosteroids, and supplemental oxygen is necessary.', 
            specialty: 'Pulmonology', 
            organization: 'Lung Health Center', 
            area: 'Sharm El Sheikh', 
            governorate: 'South Sinai',
            patientName: 'Hassan Ali',
            age: 22,
            gender: 'Male',
            weight: '75 kg',
            address: '222 Street, Sharm El Sheikh'
        },
        { 
            title: 'Treatment of Acute Renal Failure', 
            description: 'A patient develops sudden kidney dysfunction with elevated serum creatinine and decreased urine output. Prompt medical evaluation and management, including fluid resuscitation, correction of electrolyte abnormalities, and potential renal replacement therapy, are required.', 
            specialty: 'Nephrology', 
            organization: 'Kidney Care Institute', 
            area: 'Hurghada', 
            governorate: 'Red Sea',
            patientName: 'Sarah Ahmed',
            age: 45,
            gender: 'Female',
            weight: '70 kg',
            address: '333 Street, Hurghada'
        }
    ];


    // Function to display medical cases
    function displayMedicalCases(cases) {
        medicalCasesList.innerHTML = '';
        cases.forEach(medicalCase => {
            const caseElement = document.createElement('div');
            caseElement.classList.add('request');
            caseElement.innerHTML = `
                <div class="request-info">
                    <div class="request-title">${medicalCase.title}</div>
                    <div class="request-description">${medicalCase.description}</div>
                    <div class="request-details">
                        Specialty: ${medicalCase.specialty}, 
                        Organization: ${medicalCase.organization}, 
                        Area: ${medicalCase.area}, 
                        Governorate: ${medicalCase.governorate}, 
                        Patient Name: ${medicalCase.patientName},
                        Age: ${medicalCase.age},
                        Gender: ${medicalCase.gender},
                        Weight: ${medicalCase.weight},
                        Address: ${medicalCase.address}
                    </div>
                </div>
                <button class="volunteer-button">Volunteer</button>
            `;
            caseElement.addEventListener('click', function () {
                // Here, define the behavior when a request is clicked
                window.location.href ='../confirmVol/confirmVol.html'
               // alert(Clicked on: ${request.title});
            });
            medicalCasesList.appendChild(caseElement);
        });
       
    }
   

    // Display real-life examples of medical cases
    displayMedicalCases(medicalCasesData);

    // Event listener for search input
    searchInput.addEventListener('input', function () {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredRequests = medicalCasesData.filter(request =>
            request.title.toLowerCase().includes(searchTerm) ||
            request.description.toLowerCase().includes(searchTerm)
        );
        displayMedicalCases(filteredRequests);
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
        const selectedSpeciality = document.getElementById('specialty').value;
        const selectedOrganization = document.getElementById('organization').value;
        const selectedArea = document.getElementById('area').value;
        const selectedGovernorate = document.getElementById('governorate').value;

        // Filter requests based on selected options
        const filteredRequests = medicalCasesData.filter(request =>
            (selectedSpeciality === '' || request.specialty === selectedSpeciality) &&
            (selectedOrganization === '' || request.organization === selectedOrganization) &&
            (selectedArea === '' || request.area === selectedArea) &&
            (selectedGovernorate === '' || request.governorate === selectedGovernorate)
        );

        // Display filtered requests
        displayMedicalCases(filteredRequests);
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
  
    document.getElementById("go-back").addEventListener("click", () => {history.back();

    });



});
