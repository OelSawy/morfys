document.addEventListener('DOMContentLoaded', function () {
  const reportForm = document.getElementById('reportForm');





  reportForm.addEventListener('submit', function (event) {
      event.preventDefault();
      // Perform form submission handling here
      // For example, you can send the form data to a server using AJAX
      alert('Complaint submitted successfully!');
      // Reset the form after submission
      reportForm.reset();
  });


  document.getElementById("go-back").addEventListener("click", () => {history.back();

  });
 
  
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
});
