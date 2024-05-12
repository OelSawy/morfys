// JavaScript for handling edit and delete operations on donation posts
document.addEventListener("DOMContentLoaded", function () {
    // Handle edit button click
    document.querySelectorAll(".edit-post").forEach((button) => {
      button.addEventListener("click", function () {
        const post = this.closest(".donation-post");
        const postId = post.dataset.id;
        const postTitle = post.querySelector("h2").innerText.replace("Donation Post: ", "");
        const postDescription = post.querySelector("p").innerText;
  
        const editForm = document.getElementById("edit-post-form");
        editForm.style.display = "block"; // Show the edit form
  
        // Populate the form with current details
        document.getElementById("post-title").value = postTitle;
        document.getElementById("post-description").value = postDescription;
  
        // Store the post ID for the update request
        document.getElementById("update-post-form").dataset.id = postId;
      });
    });
  
    // Handle form submission for updating
    document.getElementById("update-post-form").addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent default form submission
  
      const postId = this.dataset.id;
      const postTitle = document.getElementById("post-title").value;
      const postDescription = document.getElementById("post-description").value;
  
      const post = document.querySelector(`.donation-post[data-id="${postId}"]`);
  
      // Update the post details
      post.querySelector("h2").innerText = `Donation Post: ${postTitle}`;
      post.querySelector("p").innerText = postDescription;
  
      // Hide the edit form
      document.getElementById("edit-post-form").style.display = "none";
  
      alert("Donation post updated!");
    });
  
    // Handle delete button click with confirmation
    document.querySelectorAll(".delete-post").forEach((button) => {
      button.addEventListener("click", function () {
        if (confirm("Are you sure you want to delete this donation post? This action cannot be undone.")) {
          const post = this.closest(".donation-post");
          post.remove(); // Remove the post from the DOM
  
          alert("Donation post deleted!");
        }
      });
    });
  
    // Handle cancel update
    document.getElementById("cancel-update").addEventListener("click", function () {
      document.getElementById("edit-post-form").style.display = "none"; // Hide the edit form
    });
  });



var full =false;
function zeft(){
if (full == false) {
  document.write(`
    <h2>Edit Donation Post</h2>
    <form id="update-post-form">
      <div class="form-group">
        <label for="post-title">Post Title:</label>
        <input type="text" id="post-title" name="post-title" required>
      </div>
      <div class="form-group">
        <label for="post-description">Description:</label>
        <textarea id="post-description" name="post-description" rows="4" required></textarea>
      </div>
      <button type="submit" onclick='x(this)'>Update Post</button>
      <button type="button" id="cancel-update">Cancel</button>
    </form>
  `);
} else {
  alert("Posts are full!");
}}

function x(t){
    var divValue = document.getElementById("t").innerHTML;
    document.getElementById("j").innerHTML = "The value of the div is: " + divValue;
  }

