// JavaScript for parsing and displaying request details
document.addEventListener('DOMContentLoaded', function () {
    const requestDetailsDiv = document.getElementById('requestDetails');
    const notificationMenu = document.getElementById('notification-icon');
    const donate = document.getElementById('donate');

    // Parse request data from URL query parameter
    const params = new URLSearchParams(window.location.search);
    const requestData = params.get('data');
    const request = JSON.parse(decodeURIComponent(requestData));


    document.getElementById("go-back").addEventListener("click", () => {history.back();

    });


    // Display request details
    const requestInfo = document.createElement('div');
    requestInfo.innerHTML = `
        <h2>${request.title}</h2>
        <h3>Organization: ${request.organizationName}</h3>
        <h4>Quantity: ${request.quantityNeeded}</h4>
        <p>Description: ${request.description}</p>
        ${request.author ? `<p class="author">Author: ${request.author}</p>` : ''}
        ${request.language ? `<p class="language">Language: ${request.language}</p>` : ''}
        ${request.edition ? `<p class="edition">Edition: ${request.edition}</p>` : ''}
        ${request.summary ? `<p class="summary">${request.summary}</p>` : ''}
        <div style="display:flex; width:100%; justify-content:center;"><img src="../../../assets/images/school/${request.image}.jpeg" alt="Item Image" style="max-width: 100%; border-radius: 5px; margin-top: 20px;"></div>
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