document.addEventListener('DOMContentLoaded', function () {
  const reportForm = document.getElementById('reportForm');
  const header = document.querySelector('.sticky-header');
  const sticky = header.offsetTop;
  const notificationMenu = document.getElementById('notification-icon');
  const notification = document.getElementById('notification-menu-item');

  reportForm.addEventListener('submit', function (event) {
      event.preventDefault();
      // Perform form submission handling here
      // For example, you can send the form data to a server using AJAX
      alert('Complaint submitted successfully!');
      // Reset the form after submission
      reportForm.reset();
  });

  // Sticky header functionality
  
  
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
notification.addEventListener('click', function toggleNotificationMenu() {
    window.location.href = '../notifications/notifications.html';
  
    });
  
});
