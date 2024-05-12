document.addEventListener('DOMContentLoaded', function () {
    const requestsList = document.getElementById('requestsList');
    const searchInput = document.getElementById('searchInput');
    const filterButton = document.getElementById('filterButton');
    const filterOptions = document.querySelector('.filter-options');
    const applyFilterButton = document.getElementById('applyFilterButton');
    const type = localStorage.getItem("type");


    // Dummy data for clothes requests
    const requestsData = [
        { title: 'Medical Supplies for Remote Health Clinics', description: 'In need of essential medical supplies for remote health clinics serving underserved communities. Additionally, portable ultrasound machines and stethoscopes are needed for diagnostic purposes.', location: 'El Salam International Hospital', medicalSupply: ['Portable Ultrasound', 'Stethoscope'], quantityNeeded: 75, itemCategory: 'medical' , image: 'r5' },
        { title: 'English Grammar Book', itemType: 'Books', author: 'Betty S. Azar, Stacy A. Hagen', language: 'English', edition: '5th Edition', description: 'A comprehensive guide to English grammar suitable for high school students.', quantityNeeded: 50, organizationName: 'Summits School', itemCategory: 'school', image: 'r1' },
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
        { title: 'Food Donations for Homeless Shelter', description: 'We\'re in need of canned foods, rice, and pasta for our homeless shelter residents.', organizationName: 'Dar El Orman', item: { name: 'Canned Tomates', quantity: '50 cans' }, itemCategory: 'food', type: 'Canned Foods', image: 'r2'  },
        { title: 'Wheelchairs for Rehabilitation Center', description: 'Orthopedic braces and walkers are needed to assist patients with mobility issues.', location: 'Cleopatra Hospital', age: 'All Ages', medicalSupply: ['Orthopedic Braces', 'Walker'], quantityNeeded: 20, itemCategory: 'medical', image: 'r3'  },
        { title: 'Ballpoint Pens', itemType: 'Stationery', description: 'Pack of 50 ballpoint pens for writing.', quantityNeeded: 200, organizationName: 'Desert School', itemCategory: 'school', image: 'r3' },
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
        { title: 'Emergency Food Supplies for Refugee Camp', description: 'We urgently need non-perishable food items for refugees in need.', organizationName: 'Resala', item: { name: 'Bread', quantity: '150 pcs' }, itemCategory: 'food', type: 'Baked Goods', image: 'r1' },
        { title: 'Dolls Collection for Girls in Need', description: 'Help us empower young girls  by donating dolls that reflect diversity and promote positive self-image. These dolls will inspire imagination , fostering a sense of identity and confidence.', organization: 'Egyptian Foundation for the Advancement of Childhood Conditions (EFACC)', age: '5-8', gender: 'Girls', category: 'Dolls',type:'Barbie',quantity:'100', itemCategory: 'toys' , image: 'r3'},
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
        },
        { title: 'Meal Kits for Elderly Residents', description: 'We\'re distributing meal kits with easy-to-prepare meals for elderly residents in our community.', organizationName: 'Nahr El Kheir', item: { name: 'Canned Fish', quantity: '30 cans' }, itemCategory: 'food', type: 'Canned Foods', image: 'r5'  },
        { title: 'Medical Supplies for COVID-19 Hospital', description: 'We urgently need medical supplies including masks, gloves, and ventilators for treating COVID-19 patients at our hospital. Additionally, we require pulse oximeters and blood pressure monitors to monitor patient vital signs. For medications, we need antibiotics, antivirals, and fever reducers.', location: 'Ain Shams Specialized Hospital', medicalSupply: ['Masks', 'Gloves', 'Ventilators'] , medicalUse: 'Treatment of COVID-19 patients', quantityNeeded: 100, itemCategory: 'medical', image: 'r1'},
        { title: 'First Aid Kits for Disaster Relief', description: 'Seeking first aid kits and basic medical supplies for disaster relief efforts in the flood-affected areas.', location: 'Cairo Medical Hospital ', medicalSupply: ['First Aid Kits', 'Basic Medical Supplies'], quantityNeeded: 50, itemCategory: 'medical', image: 'r2'  },
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
        { title: 'Drawing Paper', itemType: 'Stationery', description: 'Pack of 500 sheets of drawing paper.', quantityNeeded: 300, organizationName: 'Stars School', itemCategory: 'school', image: 'r4' },
        { title: 'Stuffed Toys for Toddlers', description: 'Support our cause to bring smiles and warmth to toddlers by donating stuffed toys. Your contribution will provide comfort and companionship, brightening their days.', organization: 'Egyptian Childhood Association (ECA)', age: '2-4', gender: 'Boys and Girls', category: 'Stuffed Toys', itemCategory: 'toys' , image: 'r2'},
        { title: 'Scientific Calculator', itemType: 'Stationery', description: 'A scientific calculator for performing complex calculations.', quantityNeeded: 50, organizationName: 'Rajac School', itemCategory: 'school', image: 'r5' },
        { title: 'Board Games for Elementary School Kids', description: 'We are seeking donations of board games to engage and entertain elementary school children in our community programs. These games will help foster social interaction and critical thinking skills among the children.', organization: 'Nahdet El Mahrousa' , age: '6-10', gender: 'Boys and Girls', category: 'Board Games' ,type:'monopoly',quantity:'50', itemCategory: 'toys', image: 'r1'},
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
        { title: 'Fresh Produce for Community Kitchen', description: 'We\'re seeking donations of fresh fruits and vegetables for our community kitchen.', organizationName: 'Misr El Kheir', item: { name: 'Apples', quantity: '50 kg' }, itemCategory: 'food', type: 'Fruits and Vegetables', image: 'r4'  },
        { title: 'Math Workbook', itemType: 'Books', author: 'Steph King, JoshLury', language: 'English', edition: '2nd Edition', description: 'Workbook containing math exercises for elementary students.', quantityNeeded: 100, organizationName: 'Manarat El Maddi School', itemCategory: 'school', image: 'r2' },
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
        { title: 'Personal Protective Equipment (PPE) for Healthcare Workers', description: 'We need antiviral drugs and immune boosters.', location: 'Degla Medical Center', medicalSupply: ['Antiviral Drugs', 'Immune Boosters'], medicalUse: 'Protection of healthcare workers', quantityNeeded: 150, itemCategory: 'medical', image: 'r4'  },
        { title: 'Nutritious Meals for School Children', description: 'We require healthy snacks and meals for school children to improve their nutrition.', organizationName: 'Mashroo3 Kheir', item: { name: 'Oranges', quantity: '30 kg' }, itemCategory: 'food', type: 'Fruits and Vegetables', image: 'r3'  },
        { title: 'Outdoor Toys Campaign for Children', description: 'Join us in providing opportunities for outdoor play and exploration to children. Your donations of outdoor toys will encourage physical activity, creativity, and a connection with nature.', organization: ' Alfanar Foundation', age: '3-6', gender: 'Boys and Girls', category: 'Outdoor',type:'trampoline',quantity:'5', itemCategory: 'toys', image: 'r5' },
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
        },
                
    ];

    const medicalCases = [{ 
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
    }];

    const teachingPosts = [{ title: 'Sports Equipment for Middle School Boys', description: 'Support our efforts to promote an active and healthy lifestyle among middle school boys by donating sports equipment. Your contributions will enable these boys to stay physically fit and develop teams.', organization: 'The Orman Charity Association', age: '11-14', gender: 'Boys', category: 'Sports',type:'ball',quantity:'10', itemCategory: 'toys', image: 'r4'},
    { title: 'Mathematics Teacher Needed for Fatma ELZahraa Elementary School', description: 'We urgently need a mathematics teacher for an elementary school in New Cairo area', location: 'Cairo', subject: 'Mathematics', area: 'New Cairo', governorate: 'Cairo' },
    { title: 'Science Teacher Needed for Moastafa Kamal High School', description: 'We require a science teacher for a high school in Masr ElGdeda area.', location: 'Cairo', subject: 'Science', area: 'Masr ElGdeda', governorate: 'Cairo' },
    { title: 'History Teacher Needed for Naguib Mahfoz Middle School', description: 'We\'re in need of a History teacher for a middle school in Sidi Gaber area.', location: 'Alexandria', subject: 'History', area: 'Sidi Gaber', governorate: 'Alexandria' },
    { title: 'English Teacher Needed for Maadi Secondary School', description: 'We are looking for an English teacher for our school in Maadi.', location: 'Cairo', subject: 'English', area: 'Maadi', governorate: 'Cairo' },
    { title: 'Physics Teacher Needed for Heliololis Public School', description: 'Heliololis Public School in Cairo is seeking a qualified Physics teacher for its high school section.', location: 'Cairo', subject: 'Physics', area: 'Masr ElGdeda', governorate: 'Cairo' },
];
console.log(type);
    // Function to display requests
    function displayRequests(requests) {
        requestsList.innerHTML = '';
        requests.forEach(request => {
            const requestElement = document.createElement('div');
            requestElement.classList.add('request');
            requestElement.innerHTML = requestElement.innerHTML + `
            <div class="request-info">
            <div class="request-title">${request.title}</div>
            <div class="request-description">${request.description}</div>
            </div>
            <button class="donate-button">Donate</button>
            `;
            // Add event listener to the request element
            requestElement.addEventListener('click', function () {
              const requestData = JSON.stringify(request);
              var url;
              switch (request.itemCategory) {
                case 'clothes':
                    url = `../clothes/request_details/request_details.html?data=${encodeURIComponent(requestData)}`;
                    break;
                case 'blood':
                    url = `../blood/request_details/request_details.html?data=${encodeURIComponent(requestData)}`;
                    break;
                case 'food':
                    url = `../food/request_details/request_details.html?data=${encodeURIComponent(requestData)}`;
                    break;
                case 'school':
                    url = `../school/request_details/request_details.html?data=${encodeURIComponent(requestData)}`;
                    break;
                case 'medical':
                    url = `../medical/request_details/request_details.html?data=${encodeURIComponent(requestData)}`;
                    break;
                case 'toys':
                    url = `../toys/request_details/request_details.html?data=${encodeURIComponent(requestData)}`;
                    break;
              }
              window.location.href = url;
           });
            requestsList.appendChild(requestElement);
        });
        if (type === 'teacher') {
            displayTeachingPosts();
        }
        if (type === 'doctor') {
            displayDoctorCases();
        }
    }


    
    function displayTeachingPosts() {
        // requestsList.innerHTML = '';
        teachingPosts.forEach(request => {
            const requestElement = document.createElement('div');
            requestElement.classList.add('request');
            requestElement.innerHTML = requestElement.innerHTML +`
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

    function displayDoctorCases() {
        
        medicalCases.forEach(request => {
            const requestElement = document.createElement('div');
            requestElement.classList.add('request');
            requestElement.innerHTML = requestElement.innerHTML +`
                <div class="request-info">
                    <div class="request-title">${request.title}</div>
                    <div class="request-description">${request.description}</div>
                    <div class="request-details">
                    Specialty: ${request.specialty}, 
                        Organization: ${request.organization}, 
                        Area: ${request.area}, 
                        Governorate: ${request.governorate}, 
                        Patient Name: ${request.patientName},
                        Age: ${request.age},
                        Gender: ${request.gender},
                        Weight: ${request.weight},
                        Address: ${request.address}
                        </div>
                        </div>
                <button class="volunteer-button">Volunteer</button>
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
        const selectedCategory = document.getElementById('category').value;

        // Filter requests based on selected options
        const filteredRequests = requestsData.filter(request =>
            (selectedCategory === '' || request.itemCategory === selectedCategory)
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

