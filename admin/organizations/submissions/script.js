import { app } from "../../../firebase-init.js";
import { collection, getFirestore, getDocs } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js";
import { getStorage, ref, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-storage.js";

const db = getFirestore(app);
const storage = getStorage();


document.addEventListener('DOMContentLoaded', async function () {
    const organizationDetails = document.getElementById('organizationDetails');
    const searchInput = document.getElementById('searchInput');
    const filterButton = document.getElementById('filterButton');
    const filterOptions = document.querySelector('.filter-options');
    const applyFilterButton = document.getElementById('applyFilterButton');
    const notificationMenu = document.getElementById('notification-icon');

    const organizations = [];

    async function loadOrganizationsData() {
        const organizationData = await getDocs(collection(db, "organizationData"));
    
        for (const doc of organizationData.docs) {
            const organization = doc.data();
            const docsRef = await ref(storage, organization.documentName);
            const downloadURL = await getDownloadURL(docsRef);
            const temp = new Map(Object.entries(organization));
            temp.set("downloadURL", downloadURL);
            const out = Object.fromEntries(temp);
            organizations.push(out);
        }
    }
    

    await loadOrganizationsData();

    // Function to display volunteer details
    function displayOrganizationDetails(o) {
        organizationDetails.innerHTML = '';

        o.forEach(oMap => {
            const organization = new Map(Object.entries(oMap));
            const organizationElement = document.createElement('div');
            organizationElement.classList.add('volunteer');
            organizationElement.innerHTML = `
                <div class="volunteer-info">
                    <div class="volunteer-name">${organization.get("firstName")} ${organization.get("lastName")}</div>
                    <div class="volunteer-type">Organization Status: ${organization.get("status")}</div>
                    <div class="volunteer-type">Organization Name: ${organization.get("orgName")}</div>
                    <div class="additional-info" style="display: none;">
                        <div class="volunteer-gender"><strong>Gender:</strong> ${organization.get("gender")}</div>
                        <div class="request-contact">
                            <strong>Contact Details:</strong>
                            <div>Email: ${organization.get("email")}</div>
                            <div>Phone: ${organization.get("number")}</div>
                        </div>
                        <div class="volunteer-location">Address: ${organization.get("address")}, Area: ${organization.get("area")}, Governorate: ${organization.get("governorate")}</div>
                        <div class="extra1"><strong>Location:</strong> ${organization.get("orgLocation")}</div>
                        <div class="extra3"><strong>Document:</strong> <a href="${organization.get("downloadURL")}" style="text-decoration: none;">Click Here</a></div>
                        ${organization.get("status") === "pending" ? `<div>
                            <button class="accept-button">Accept</button>
                            <button class="reject-button">Reject</button>
                        </div>` : `<div></div>`}

                    </div>
                </div>
                <button class="more info-button">More Info</button>
            `;
                
            organizationDetails.appendChild(organizationElement); 
            
        });
        
    }

    

    organizationDetails.addEventListener('click', function (event) {
        if (event.target.classList.contains('info-button')) {
            const additionalInfo = event.target.parentNode.querySelector('.additional-info');
            additionalInfo.style.display = additionalInfo.style.display === 'none' ? 'block' : 'none';
            event.target.textContent = event.target.textContent === 'More Info' ? 'Less Info' : 'More Info';
        }
    });

    // Initial display of volunteer details
    displayOrganizationDetails(organizations);
    // Event listener for search input
    searchInput.addEventListener('input', function () {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredOrganizations = [];
        organizations.forEach(oMap => {
            const organization = new Map(Object.entries(oMap));
            if (`${organization.get("firstName")} ${organization.get("lastName")} ${organization.get("orgName")}`.toLowerCase().includes(searchTerm)) {
                filteredOrganizations.push(oMap);
            }
        });
        displayOrganizationDetails(filteredOrganizations);
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
        const selectedStatus = document.getElementById('status').value;

        // Filter volunteers based on selected options
        const filteredOrganizations = [];
        organizations.forEach(oMap => {
            const organization = new Map(Object.entries(oMap));
            if ((selectedStatus === '' || organization.get("status") === selectedStatus)) {
                    filteredOrganizations.push(oMap);
                }
            });
        // Display filtered volunteers
        displayOrganizationDetails(filteredOrganizations);
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