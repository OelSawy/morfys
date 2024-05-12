document.addEventListener('DOMContentLoaded', function () {
    const donateBtn = document.getElementById('donate-btn');
    const notificationMenu = document.getElementById('notification-icon');
    donateBtn.addEventListener('click', function () {
        window.location.href = '../confirm/confirm.html';
        // Here you can handle the donation process
        console.log(`Donating ${quantity} items`);
    });


    document.getElementById("go-back").addEventListener("click", () => {history.back();

    });

    const viewEtaBtn = document.getElementById('view-eta-btn');
    viewEtaBtn.addEventListener('click', function () {
        // Here you can implement logic to retrieve and display ETA
        const etaElement = document.getElementById('eta');
        etaElement.textContent = " Driver will arrive within 30 minutes "; 
    });
    notificationMenu.addEventListener('click', function toggleNotificationMenu() {
        const menu = document.getElementById('notificationMenu');
        menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
    });
});