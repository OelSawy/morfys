// script.js

function viewDetails() {
    // Redirect to the page to view details of fulfilled donation posts
    window.location.href = "../requestDetails/requestDetails.html";
}

function deletePost() {
    // Redirect to the page to delete the fulfilled donation post
    window.location.href = "delete_post.html";
}

function viewDonorDetails() {
    // Redirect to the page to view donor details for fulfilled posts
   window.location.href = '../contactDetails/contactDetails.html';
}



document.addEventListener('DOMContentLoaded', function () {
    const notificationMenu = document.getElementById('notification-icon');
    const notification = document.getElementById('notification-menu-item');

    window.onscroll = function () {
      stickHeader();
  };
  notificationMenu.addEventListener('click', function toggleNotificationMenu() {
      const menu = document.getElementById('notificationMenu');
      menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
  });

  notification.addEventListener('click', function toggleNotificationMenu() {
    window.location.href = 'notifications.html';

  });
  
  });