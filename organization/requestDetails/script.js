document.addEventListener('DOMContentLoaded', function () {
    const requestDetailsDiv = document.getElementById('requestDetails');
    const notificationMenu = document.getElementById('notification-icon');
    const scheduleDelivery = document.getElementById('scheduleDelivery');

    // Dummy request data
    const request = {
        title: "Winter Clothing for Infants",
        description: "Join our NGO in providing warmth and protection to infants by donating winter clothing. Your contributions will ensure that these vulnerable little ones stay cozy and safe during the cold winter months.",
        age: "0-2 years old",
        gender: "All Genders",
        category: "Clothing",
        organizationName: "Alexandria Clothing Bank",
        clothingType: "jackets",
        season: "Winter",
        material: "Wool",
        quantity: "25",
        itemCategory: 'clothes',
        image: 'r1'
    };

    // Display request details
    const requestInfo = document.createElement('div');
    requestInfo.innerHTML = `
        <h2>${request.title}</h2>
        <h3>Organization: ${request.organizationName}</h3>
        <h4>Category: ${request.category}</h4>
        <h4>Quantity: ${request.quantity}</h4>
        <p>Description: ${request.description}</p>
        <p>Age: ${request.age}, Gender: ${request.gender}</p>
        <p>Clothing Type: ${request.clothingType}, Material: ${request.material}, Season: ${request.season}</p>
        <div style="display:flex; width:100%; justify-content:center;"><img src="../../assets/images/clothes/${request.image}.jpeg" alt="Item Image" style="max-width: 100%; border-radius: 5px; margin-top: 20px;"></div>
    `;
    requestDetailsDiv.appendChild(requestInfo);

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


    scheduleDelivery.addEventListener('click', function() {
        window.location.href = "../timeslot/timeslot.html";
    });
});
