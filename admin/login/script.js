import {app} from "../../firebase-init.js";
import { collection, getFirestore, getDocs } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js"; 

const db = getFirestore(app);

document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');

    loginForm.onsubmit = async function (event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        try {
            const querySnapshot = await getDocs(collection(db, "adminData"));

            querySnapshot.forEach((doc) => {
                if (doc.data().username == username && doc.data().password == password) {
                    window.location.href = "../dashboard/dashboard.html";
                    return;
                }
            });

            alert("Incorrect username or password");
        } catch (error) {
            console.log(error);
        }
        
    };
});
