document.addEventListener("DOMContentLoaded", function () {
  // Define an array of donation posts
  var donationPostsData = [
      { title: 'Medical Supplies for Remote Health Clinics', description: 'In need of essential medical supplies for remote health clinics serving underserved communities. Additionally, portable ultrasound machines and stethoscopes are needed for diagnostic purposes.', location: 'El Salam International Hospital', medicalSupply: ['Portable Ultrasound', 'Stethoscope'], quantityNeeded: 75, itemCategory: 'medical' , image: 'r5' },
      { title: 'English Grammar Book', itemType: 'Books', author: 'Betty S. Azar, Stacy A. Hagen', language: 'English', edition: '5th Edition', description: 'A comprehensive guide to English grammar suitable for high school students.', quantityNeeded: 50, organizationName: 'Summits School', itemCategory: 'school', image: 'r1' },
      {   
          description: 'Urgently seeking blood donors to support accident victims at City Hospital. Your donation can save lives and provide critical medical assistance to those in need.', 
          patientName: 'John Doe',
          bloodType: 'O+', 
          urgency: 'Urgent', 
          hospital: 'City Hospital',
          title: 'Emergency Blood Donation for Accident Victims', 
          governorate: 'Cairo',
          area: 'Nasr City',
          hospitalAddress: '123 Main Street, Nasr City, Cairo',
          itemCategory: 'blood'
      },
      {   
          description: 'Join our blood drive to help cancer patients undergoing treatment at Hope Medical Center. Your donation will provide vital support to individuals fighting cancer.', 
          patientName: 'Jane Smith',
          bloodType: 'A-', 
          urgency: 'High', 
          hospital: 'Hope Medical Center',
          title: 'Blood Drive for Cancer Patients', 
          governorate: 'Giza',
          area: 'Dokki',
          hospitalAddress: '456 Elm Street, Dokki, Giza',
          itemCategory: 'blood'
      },
      // Other donation posts...
  ];

  // Function to create a donation post element
  function createDonationPostElement(postData, index) {
      var postElement = document.createElement("div");
      postElement.classList.add("request");
      if (postData.fulfilled) {
          postElement.classList.add("fulfilled");
      }
      postElement.dataset.id = index;

      var requestInfo = document.createElement("div");
      requestInfo.classList.add("request-info");

      var requestTitle = document.createElement("div");
      requestTitle.classList.add("request-title");
      requestTitle.textContent = postData.title;

      var requestDescription = document.createElement("div");
      requestDescription.classList.add("request-description");
      requestDescription.textContent = postData.description;

      requestInfo.appendChild(requestTitle);
      requestInfo.appendChild(requestDescription);

      var requestActions = document.createElement("div");
      requestActions.classList.add("request-actions");

  // Create the edit button with an event listener for redirection
// Create the edit button with an event listener for redirection
var editButton = document.createElement("button");
editButton.classList.add("edit-button", "filter-button");
editButton.textContent = "Edit";
editButton.addEventListener("click", function() {
    if (!postData.fulfilled) {
        window.location.href = "../editPost/editPost.html?title=" + postData.title + "&description=" + postData.description;
    } else {
        alert("This post is fulfilled and cannot be edited.");
    }
});



      var deleteButton = document.createElement("button");
      deleteButton.classList.add("delete-button", "filter-button");
      deleteButton.textContent = "Delete";

      requestActions.appendChild(editButton);
      requestActions.appendChild(deleteButton);

      postElement.appendChild(requestInfo);
      postElement.appendChild(requestActions);

      return postElement;
  }

  // Get the donation list container
  var donationListContainer = document.querySelector(".donation-list");

  // Loop through the donation posts data and create elements for each post
  donationPostsData.forEach(function (postData, index) {
      var postElement = createDonationPostElement(postData, index);
      donationListContainer.appendChild(postElement);

      // Add event listener for edit button of each post
      var editButton = postElement.querySelector(".edit-button");
      editButton.addEventListener("click", function() {
        if (!postData.fulfilled) {
            window.location.href = "../editPost/editPost.html?title=" + postData.title + "&description=" + postData.description;
        } else {
            alert("This post is fulfilled and cannot be edited.");
        }
    });
    

      // Add event listener for delete button of each post
      var deleteButton = postElement.querySelector(".delete-button");
      deleteButton.addEventListener("click", function () {
          // Remove the post from the array
          donationPostsData.splice(index, 1);
          // Remove the post from the UI
          postElement.remove();
      });
  });

  // Sticky header functionality
  const header = document.querySelector('.sticky-header');
  const sticky = header.offsetTop;
  const notificationMenu = document.getElementById('notification-icon');
  const notification = document.getElementById('notification-menu-item');

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
