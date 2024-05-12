import {app} from "../../firebase-init.js";
import { collection, getFirestore, getDocs } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js"; 

const db = getFirestore(app);

document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');

    
  loginForm.addEventListener('submit', async function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    console.log(email,password);
    try {
        const querySnapshot = await getDocs(collection(db, "organizationData"));

        querySnapshot.forEach((doc) => {
            if (doc.data().email == email && doc.data().password == password) {
                window.location.href = "../home/home.html";
                return;
            }
        });

        alert("Incorrect username or password");
    } catch (error) {
        console.log(error);
    }

  });
});

