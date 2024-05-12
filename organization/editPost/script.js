document.addEventListener("DOMContentLoaded", function () {
    // Extract post details from URL parameters
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const title = urlParams.get('title');
    const description = urlParams.get('description');
  
    // Populate form fields with post details
    document.getElementById('title').value = title;
    document.getElementById('description').value = description;
  
    // Add event listener for form submission
    document.getElementById('editForm').addEventListener('submit', function (event) {
      // Handle form submission (save changes)
      // Add your code here to handle form submission
    });
    
    document.getElementById('Save Changes').addEventListener('click', function() {
      window.location.href = '../home/home.html';
  });
  document.getElementById('editForm').addEventListener('click', function() {
    window.location.href = '../home/home.html';
});

  
  
  });
  