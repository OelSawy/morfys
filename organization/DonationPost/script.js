document.getElementById("category").addEventListener("change", function () {
    const category = this.value;
    const dynamicFields = document.getElementById("dynamic-fields");
   
    // Clear existing fields
    dynamicFields.innerHTML = "";
  
    switch (category) {
      case "clothes":
        dynamicFields.innerHTML = `
          <div class="form-group">
            <label for="clothing">Clothing Type:</label>
            <input type="text" id="clothing" name="clothing" placeholder="e.g., shirt, pants" required>
          </div>
          <div class="form-group">
            <label for="age">Age Group:</label>
            <input type="text" id="age" name="age" placeholder="e.g., 3-5 years" required>
          </div>
          <label for="gender">Gender:</label>
          <select id="Gender" name="Gender" required>
          <option value="">--Select Gender--</option>
          <option value="clothes">Male</option>
          <option value="toys">Female</option>
          <option value="food">Prefer not to say</option>
        </select>
          </div>
          <div class="form-group">
            <label for="season">Season:</label>
            <input type="text" id="season" name="season" placeholder="e.g., winter, summer" required>
          </div>
          <div class="form-group">
            <label for="material">Material:</label>
            <input type="text" id="material" name="material" placeholder="e.g., cotton, wool" required>
          </div>
          <div class="form-group">
            <label for="quantity">Quantity:</label>
            <input type="number" id="quantity" name="quantity" required>
          </div>
        `;
        break;
      case "school_supplies":
        dynamicFields.innerHTML = `
          <div class="form-group">
            <label for="item-type">Item Type:</label>
            <input type="text" id="item-type" placeholder="e.g., pens, notebooks" required>
          </div>
          <div class="form-group">
            <label for="amount">Amount:</label>
            <input type="number" id="amount" placeholder="Enter amount" required>
          </div>
        `;
        break;
      case "books":
        dynamicFields.innerHTML = `
          <div class="form-group">
            <label for="book-name">Book Name:</label>
            <input type="text" id="book-name" name="book-name" placeholder="Enter book name" required>
          </div>
          <div class="form-group">
            <label for="author">Author:</label>
            <input type="text" id="author" name="author" placeholder="Enter author's name" required>
          </div>
          <div class="form-group">
            <label for="language">Language:</label>
            <input type="text" id="language" name="language" placeholder="e.g., English, French" required>
          </div>
          <div class="form-group">
            <label for="edition">Edition:</label>
            <input type="text" id="edition" name="edition" placeholder="e.g., 1st, 2nd" required>
          </div>
          <div class="form-group">
            <label for="summary">Short Summary:</label>
            <textarea id="summary" name="summary" placeholder="Short summary of the book..." rows="3" required></textarea>
          </div>
          <div class="form-group">
            <label for="book-image">Picture of the Book:</label>
            <input type="file" id="book-image" name="book-image" accept="image/*" required>
          </div>
          <div class="form-group">
            <label for="book-quantity">Quantity Required:</label>
            <input type="number" id="book-quantity" name="book-quantity" required>
          </div>
        `;
        break;
      case "toys":
        dynamicFields.innerHTML = `
          <div class="form-group">
            <label for="type-of-toy">Type of Toy:</label>
            <input type="text" id="type-of-toy" name="type-of-toy" placeholder="e.g., action figure, doll" required>
          </div>
          <div class="form-group">
            <label for="age-group">Age Group:</label>
            <input type="text" id="age-group" name="age-group" placeholder="e.g., 3-5 years" required>
          </div>
          <div class="form-group">
            <label for="gender">Gender:</label>
            <input type="text" id="gender" placeholder="e.g., male, female" required>
          </div>
          <div class="form-group">
            <label for="category">Category:</label>
            <input type="text" id="category" name="category" placeholder="e.g., educational, stuffed toy" required>
          </div>
          <div class="form-group">
            <label for="toy-image">Picture of the Toy:</label>
            <input type="file" id="toy-image" name="toy-image" accept="image/*" required>
          </div>
          <div class="form-group">
            <label for="quantity">Quantity:</label>
            <input type="number" id="quantity" placeholder="Enter quantity" required>
          </div>
        `;
        break;
      case "food":
        dynamicFields.innerHTML = `
          <div class="form-group">
            <label for="item-name">Item Name:</label>
            <input type="text" id="item-name" placeholder="e.g., rice, potatoes" required>
          </div>
          <div class="form-group">
            <label for="quantity">Quantity (in KG if fruits or vegetables):</label>
            <input type="number" id="quantity" placeholder="Enter quantity" required>
          </div>
        `;
        break;
      case "medical_supplies":
        dynamicFields.innerHTML = `
          <div class="form-group">
            <label for="device-type">Device Type:</label>
            <input type="text" id="device-type" placeholder="e.g., syringes, bandages" required>
          </div>
          <div class="form-group">
            <label for="use">Use:</label>
            <input type="text" id="use" placeholder="e.g., wound care, injections" required>
          </div>
          <div class="form-group">
            <label for="device-image">Device Image:</label>
            <input type="file" id="device-image" name="device-image" accept="image/*" required>
          </div>
          <div class="form-group">
            <label for="quantity">Quantity:</label>
            <input type="number" id="quantity" required>
          </div>
        `;
        break;
      case "blood_donations":
        dynamicFields.innerHTML = `
          <div class="form-group">
            <label for="patient-name">Patient's Name:</label>
            <input type="text" id="patient-name" placeholder="Enter patient's name" required>
          </div>
          <div class="form-group">
            <label for="blood-type">Blood Type (including RH type):</label>
            <input type="text" id="blood-type" placeholder="e.g., A+, O+" required>
          </div>
          <div class="form-group">
            <label for="hospital-name">Hospital Name:</label>
            <input type="text" id="hospital-name" required>
          </div>
          <div class="form-group">
            <label for="hospital-area">Hospital Area:</label>
            <input type="text" id="hospital-area" required>
          </div>
          <div class="form-group">
            <label for="governorate">Governorate:</label>
            <input type="text" id="governorate" required>
          </div>
          <div class="form-group">
            <label for="hospital-address">Hospital Address:</label>
            <input type="text" id="hospital-address" required>
          </div>
        `;
        break;
      default:
        break;
     

      }   
});
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
  window.location.href = '../notifications/notifications.html';

});
});