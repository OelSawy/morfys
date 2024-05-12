document.getElementById("time-slot-form").addEventListener("submit", function (event) {
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
  
    if (!date || !time) {
      alert("Please select both a date and a time slot.");
      event.preventDefault(); // Prevent form from submitting if fields are incomplete
    }
  
    // Additional validation or backend interaction could be added here
  });
  document.addEventListener('DOMContentLoaded', function () {
    const notificationMenu = document.getElementById('notification-icon');
    const notification = document.getElementById('notification-menu-item');


  notificationMenu.addEventListener('click', function toggleNotificationMenu() {
      const menu = document.getElementById('notificationMenu');
      menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
  });
  notification.addEventListener('click', function toggleNotificationMenu() {
    window.location.href = '../notifications/notifications.html';
  
    });
  
  });