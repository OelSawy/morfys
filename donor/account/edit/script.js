document.addEventListener('DOMContentLoaded', function () {
    // Retrieve user data from localStorage
    let userData = JSON.parse(localStorage.getItem('userData'));
    // Fill the form with existing user data

    document.getElementById("cancel").addEventListener("click", () => {history.back();

    });

    if (userData) {
        document.getElementById('firstName').value = userData.firstName;
        document.getElementById('lastName').value = userData.lastName;
        document.getElementById('gender').value = userData.gender;
        document.getElementById('email').value = userData.email;
        document.getElementById('contactNumber').value = userData.contactNumber;
        document.getElementById('password').value = userData.password;
        document.getElementById('address').value = userData.address;
        document.getElementById('area').value = userData.area;
        document.getElementById('governorate').value = userData.governorate;
    }

    // Form submission for editing user data
    const editForm = document.getElementById('editForm');
    editForm.addEventListener('submit', function (event) {
        event.preventDefault();
        
        // Update user data with form values
        userData.firstName = document.getElementById('firstName').value;
        userData.lastName = document.getElementById('lastName').value;
        userData.gender = document.getElementById('gender').value;
        userData.email = document.getElementById('email').value;
        userData.contactNumber = document.getElementById('contactNumber').value;
        userData.password = document.getElementById('password').value;
        userData.address = document.getElementById('address').value;
        userData.area = document.getElementById('area').value;
        userData.governorate = document.getElementById('governorate').value;

        // Store updated user data in localStorage
        localStorage.setItem('userData', JSON.stringify(userData));

        // Redirect back to the account page
        window.location.href = '../account.html';

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
