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