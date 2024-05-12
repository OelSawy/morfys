// JavaScript for parsing and displaying request details
document.addEventListener('DOMContentLoaded', function () {
    const requestDetailsDiv = document.getElementById('requestDetails');
    const notificationMenu = document.getElementById('notification-icon');
    const donate = document.getElementById('donate');


    document.getElementById("go-back").addEventListener("click", () => {history.back();

    });

    // Parse request data from URL query parameter
    const params = new URLSearchParams(window.location.search);
    const requestData = params.get('data');
    const request = JSON.parse(decodeURIComponent(requestData));


    // Display request details
    const requestInfo = document.createElement('div');
    requestInfo.innerHTML = `
        <h2>${request.title}</h2>
        <h3>Organization: ${request.organizationName}</h3>
        <h4>Category: ${request.category}</h4>
        <h4>Type: ${request.type}</h4>
        <h4>Quantity: ${request.item.quantity}</h4>
        <p>Description: ${request.description}</p>
        <p>Item: ${request.item.name}</p>
        <div style="display:flex; width:100%; justify-content:center;"><img src="../../../assets/images/food/${request.image}.jpeg" alt="Item Image" style="max-width: 100%; border-radius: 5px; margin-top: 20px;"></div>
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

    donate.addEventListener('click',function(){
        window.location.href = '../../pickup/pickup.html';
    });
    
});