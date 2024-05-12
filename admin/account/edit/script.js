import { app } from "../../../firebase-init.js";
import { doc, getFirestore, setDoc } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js";

const db = getFirestore(app);

document.addEventListener('DOMContentLoaded', function () {

    // Form submission for editing user data
    const editForm = document.getElementById('editForm');
    editForm.addEventListener('submit', async function (event) {
        event.preventDefault();
        
        // Update user data with form values
        const password = document.getElementById('password').value;

        await setDoc(doc(db, "adminData", "admin"), {
            username: "admin",
            password: password
        });

        window.location.href = "../account.html";

    });

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
