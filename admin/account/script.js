import { app } from "../../firebase-init.js";
import { collection, getFirestore, getDocs } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js";

const db = getFirestore(app);

document.addEventListener('DOMContentLoaded', async function () {
    
    const querySnapshot = await getDocs(collection(db, "adminData"));

    
    const userDataDiv = document.getElementById('userData');
    
    for (const doc of querySnapshot.docs) {
        userDataDiv.innerHTML = `<h4><strong>Userame:</strong> ${doc.data().username}</h4>`;
    }

    // Edit button click event
    const editBtn = document.getElementById('editBtn');
    editBtn.addEventListener('click', function () {
        // Redirect to edit page
        window.location.href = 'edit/edit.html';
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

