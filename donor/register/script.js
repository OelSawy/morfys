// Import the functions you need from the SDKs you need
import {app} from "../../firebase-init.js";
  import { collection, addDoc, getFirestore } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js"; 


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);


document.addEventListener('DOMContentLoaded', function () {
    
  const registerForm = document.getElementById('registerForm');

    registerForm.onsubmit = async function (event) {
        event.preventDefault();
        const donorType = document.getElementById('donorType').value;
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const gender = document.getElementById('gender').value;
        const email = document.getElementById('email').value;
        const contactNumber = document.getElementById('contactNumber').value;
        const password = document.getElementById('password').value;
        const address = document.getElementById('address').value;
        const area = document.getElementById('area').value;
        const governorate = document.getElementById('governorate').value;

        if (donorType === 'teacher') {
            var tempData = {
              firstName: firstName,
              lastName: lastName,
              gender: gender,
              email: email,
              number: contactNumber,
              password: password,
              address: address,
              area: area,
              governorate: governorate,
              contactNumber: contactNumber
            };
            localStorage.setItem("tempData", JSON.stringify(tempData));
            window.location.href = '../teacherRegister/teacherRegister.html';
        } else if (donorType === 'doctor') {
            var tempData = {
              firstName: firstName,
              lastName: lastName,
              gender: gender,
              email: email,
              number: contactNumber,
              password: password,
              address: address,
              area: area,
              governorate: governorate,
              contactNumber: contactNumber
            };
            localStorage.setItem("tempData", JSON.stringify(tempData));
            window.location.href = '../doctor/doctor.html';
        } else {
            try {
                await addDoc(collection(db, "donorData"), {
                  firstName: firstName,
                  lastName: lastName,
                  gender: gender,
                  email: email,
                  number: contactNumber,
                  password: password,
                  address: address,
                  area: area,
                  governorate: governorate
                });

                await addDoc(collection(db, "donorType"), {
                  email: email,
                  type: donorType
                });
              } catch (e) {
                console.error("Error adding document: ", e);
              }
            window.location.href = '../login/login.html';
        }
    };
});
