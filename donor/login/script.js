import {app} from "../../firebase-init.js";
import { collection, getFirestore, getDocs } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js"; 

const db = getFirestore(app);

document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');

    localStorage.clear();

    loginForm.onsubmit = async function (event) {
        event.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        try {
            const querySnapshot = await getDocs(collection(db, "donorType"));
            var type;
            querySnapshot.forEach((doc) => {
                if (doc.data().email == email) {
                    type = doc.data().type;
                }
            });

            let credentialsFound = false; // Flag to track if credentials are found

            if (type == "normal") {
                const donorData = await getDocs(collection(db, "donorData"));
                donorData.forEach((doc) => {
                    if (doc.data().email == email && doc.data().password == password) {
                        credentialsFound = true;
                        window.location.href = "../home/home.html";
                        return; // Exit the forEach loop
                    }
                });
            } else if (type == "teacher") {
                const teacherData = await getDocs(collection(db, "teacherData"));
                teacherData.forEach((doc) => {
                    if (doc.data().email == email && doc.data().password == password) {
                        credentialsFound = true;
                        if (doc.data().status == "accepted"){
                            localStorage.setItem("type", "teacher")
                            console.log(localStorage.getItem("temp"));
                            window.location.href = "../home/home.html";
                        }
                        else
                            window.location.href = "../home/home.html";
                        return; // Exit the forEach loop
                    }
                });
            } else if (type == "doctor") {
                const doctorData = await getDocs(collection(db, "doctorData"));
                doctorData.forEach((doc) => {
                    if (doc.data().email == email && doc.data().password == password) {
                        credentialsFound = true;
                        if (doc.data().status == "accepted"){
                            localStorage.setItem("type", "doctor")
                            window.location.href = "../home/home.html";
                        }
                        else
                            window.location.href = "../home/home.html";
                        return; // Exit the forEach loop
                    }
                });
            }

            // Show alert only if credentials were not found
            if (!credentialsFound) {
                alert("Incorrect email or password");
            }
        } catch (error) {
            console.log(error);
        }
    };
});

