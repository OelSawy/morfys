document.addEventListener('DOMContentLoaded', function () {
    // Retrieve user data from localStorage
    const userData = JSON.parse(localStorage.getItem('userData'));

    // Display user data
    if (userData) {
        const userDataDiv = document.getElementById('userData');
        userDataDiv.innerHTML = `
            <p><strong>First Name:</strong> ${userData.firstName}</p>
            <p><strong>Last Name:</strong> ${userData.lastName}</p>
            <p><strong>Gender:</strong> ${userData.gender}</p>
            <p><strong>Email:</strong> ${userData.email}</p>
            <p><strong>Contact Number:</strong> ${userData.contactNumber}</p>
            <p><strong>Password:</strong> ${userData.password}</p>
            <p><strong>Address:</strong> ${userData.address}</p>
            <p><strong>Area:</strong> ${userData.area}</p>
            <p><strong>Governorate:</strong> ${userData.governorate}</p>
            <p><strong>User Type:</strong> ${userData.userType}</p>
            ${userData.userType === 'donor' ? `<p><strong>Donor Type:</strong> ${userData.donorType}</p>` : ''}
        `;
    }

    // Edit button click event
    const editBtn = document.getElementById('editBtn');
    editBtn.addEventListener('click', function () {
        // Redirect to edit page
        window.location.href = 'edit_account.html';
    });

    // Delete button click event
    const deleteBtn = document.getElementById('deleteBtn');
    deleteBtn.addEventListener('click', function () {
        // Clear user data from localStorage
        localStorage.removeItem('userData');
        // Redirect to login page
        window.location.href = '../login/login.html';
    });
});
document.addEventListener('DOMContentLoaded', function () {
    // Retrieve user data from localStorage
    let userData = JSON.parse(localStorage.getItem('userData'));

    // If no user data exists, create fake data for demonstration
    if (!userData) {
        userData = {
            firstName: "John",
            lastName: "Doe",
            gender: "male",
            email: "johndoe@example.com",
            contactNumber: "1234567890",
            password: "password123",
            address: "123 Main Street",
            area: "City",
            governorate: "State",
            userType: "donor",
            donorType: "normal"
        };
        // Store fake data in localStorage
        localStorage.setItem('userData', JSON.stringify(userData));
    }

    // Display user data
    if (userData) {
        const userDataDiv = document.getElementById('userData');
        userDataDiv.innerHTML = `
            <p><strong>First Name:</strong> ${userData.firstName}</p>
            <p><strong>Last Name:</strong> ${userData.lastName}</p>
            <p><strong>Gender:</strong> ${userData.gender}</p>
            <p><strong>Email:</strong> ${userData.email}</p>
            <p><strong>Contact Number:</strong> ${userData.contactNumber}</p>
            <p><strong>Password:</strong> ${userData.password}</p>
            <p><strong>Address:</strong> ${userData.address}</p>
            <p><strong>Area:</strong> ${userData.area}</p>
            <p><strong>Governorate:</strong> ${userData.governorate}</p>
            <p><strong>User Type:</strong> ${userData.userType}</p>
            ${userData.userType === 'donor' ? `<p><strong>Donor Type:</strong> ${userData.donorType}</p>` : ''}
        `;
    }

    // Edit button click event
    const editBtn = document.getElementById('editBtn');
    editBtn.addEventListener('click', function () {
        // Redirect to edit page
        window.location.href = 'edit/edit.html';
    });

    // Delete button click event
    const deleteBtn = document.getElementById('deleteBtn');
    deleteBtn.addEventListener('click', function () {
        // Clear user data from localStorage
        localStorage.removeItem('userData');
        // Redirect to login page
        window.location.href = '../login/login.html';
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

