// script.js

function viewDetails() {
    // Redirect to the page to view details of fulfilled donation posts
    window.location.href = "view_details.html";
}

function deletePost() {
    // Redirect to the page to delete the fulfilled donation post
    window.location.href = "delete_post.html";
}

function viewDonorDetails() {
    // Redirect to the page to view donor details for fulfilled posts
    window.location.href = "view_donor_details.html";
}
document.getElementById("go-back").addEventListener("click", () => {history.back();

});

function viewDonorContact() {
    // Get the donor contact details from the server
    const donorName = "John Doe";
    const donorEmail = "john@example.com";
    const donorPhone = "123-456-7890";

    // Create an alert to display donor contact details
    const alertContainer = document.createElement('div');
    alertContainer.classList.add('alert');

    // Title
    const title = document.createElement('div');
    title.classList.add('alert-title');
    title.textContent = "Donor Contact Details";
    alertContainer.appendChild(title);

    // Donor Details
    const details = document.createElement('div');
    details.classList.add('alert-details');
    details.innerHTML = `
        <p><strong>Name:</strong> ${donorName}</p>
        <p><strong>Email:</strong> ${donorEmail}</p>
        <p><strong>Phone:</strong> ${donorPhone}</p>
    `;
    alertContainer.appendChild(details);

    // Close Button
    const closeButton = document.createElement('button');
    closeButton.classList.add('alert-button');
    closeButton.textContent = "Close";
    closeButton.onclick = function() {
        alertContainer.remove(); // Remove the alert when close button is clicked
    };
    alertContainer.appendChild(closeButton);

    // Append the alert to the document body
    document.body.appendChild(alertContainer);
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


  
  });