document.addEventListener('DOMContentLoaded', function () {
    const registerForm = document.getElementById('registerForm');
    const donorOptions = document.getElementById('donorOptions');
    const notificationMenu = document.getElementById('notification-icon');
    const notification = document.getElementById('notification-menu-item');

    registerForm.onsubmit = function (event) {
        event.preventDefault();
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const gender = document.getElementById('gender').value;
        const email = document.getElementById('email').value;
        const contactNumber = document.getElementById('contactNumber').value;
        const password = document.getElementById('password').value;
        const address = document.getElementById('address').value;
        const area = document.getElementById('area').value;
        const governorate = document.getElementById('governorate').value;
        const userType = document.querySelector('input[name="userType"]:checked').value;
        let donorType = '';

        if (userType === 'donor') {
            donorType = document.getElementById('donorType').value;
            if (donorType === 'teacher' || donorType === 'doctor') {
                // Redirect to specific_page.html if donor type is teacher or doctor
                window.location.href = 'upload_documents/upload.html'; // Change 'specific_page.html' to your desired page
                return; // Stop further execution
            }
        }

        console.log('First Name:', firstName);
        console.log('Last Name:', lastName);
        console.log('Gender:', gender);
        console.log('Email:', email);
        console.log('Contact Number:', contactNumber);
        console.log('Password:', password);
        console.log('Address:', address);
        console.log('Area:', area);
        console.log('Governorate:', governorate);
        console.log('User Type:', userType);
        if (userType === 'donor') {
            console.log('Donor Type:', donorType);
        }

        // Additional logic can be added here, such as sending the data to a server
        // For demonstration purposes, let's redirect to a home page after registration
        window.location.href = '../login/login.html';
    };

    // Show/hide donor options based on user type selection
    const userTypeRadio = document.querySelectorAll('input[name="userType"]');
    userTypeRadio.forEach(function (radio) {
        radio.addEventListener('change', function () {
            if (this.value === 'donor') {
                donorOptions.style.display = 'block';
            } else {
                donorOptions.style.display = 'none';
            }
        });
    });
    window.onscroll = function () {
        stickHeader();
    };
    notificationMenu.addEventListener('click', function toggleNotificationMenu() {
        const menu = document.getElementById('notificationMenu');
        menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
    });
    notification.addEventListener('click', function toggleNotificationMenu() {
        window.location.href = '../notifications/notifications.html';
    
      });
    
    
});

function Alert() {
   

    // Display an alert message
    alert("Account Updated.")
}

    function resetFormAndAlert() {
        document.getElementById("firstName").value = "";
        document.getElementById("lastName").value = "";
        document.getElementById("gender").selectedIndex = 0;
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
        document.getElementById("contactNumber").value = "";
        document.getElementById("organizationName").value = "";
        document.getElementById("organizationType").value = "";
        document.getElementById("organizationaddress").value = "";
        document.getElementById("area").value = "";
        document.getElementById("governorate").value = "";
        document.getElementById("donorType").selectedIndex = 0;
        document.getElementById("Verification").value = "";

        // Display an alert message
        alert("Account Deleted.")
    }
   

    function deleteAccount() {
        resetFormAndAlert();
        window.location.href = "../register/register.html"; 
        
        // Additional logic to delete the account
    }
   

    
