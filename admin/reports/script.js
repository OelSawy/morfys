// JavaScript for reports page

document.addEventListener('DOMContentLoaded', function () {
    
    // Notification icon functionality
    const notificationMenu = document.getElementById('notification-icon');
    

    notificationMenu.addEventListener('click', function toggleNotificationMenu() {
        const menu = document.getElementById('notificationMenu');
        menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
    });
});
