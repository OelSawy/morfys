// Import the functions you need from the SDKs you need
import {app} from "../../firebase-init.js";
import { collection, addDoc, getFirestore } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js"; 
import {getStorage, ref, uploadBytes} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-storage.js";

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
const storage = getStorage();

document.addEventListener('DOMContentLoaded', function () {
    const teacherRegisterForm = document.getElementById('teacherRegisterForm');

    var tempData = JSON.parse(localStorage.getItem("tempData"));

    const documentUpload = document.getElementById('documentUpload');

    teacherRegisterForm.onsubmit = async function (event) {
        event.preventDefault();
        

        document.getElementById("go-back").addEventListener("click", () => {history.back();

        });
    
    

        // Retrieve values from form fields
        const subjectsTeach = document.getElementById('teacherSubjects').value;
        const proBonoClasses = document.getElementById('proBonoClasses').value;
        const privateTutoring = document.getElementById('privateTutoring').value;
        
        try {
            const uploadedFile = documentUpload.files[0];
            const fileName = uploadedFile.name;

            await addDoc(collection(db, "teacherData"), {
              firstName: tempData.firstName,
              lastName: tempData.lastName,
              gender: tempData.gender,
              email: tempData.email,
              number: tempData.contactNumber,
              password: tempData.password,
              address: tempData.address,
              area: tempData.area,
              governorate: tempData.governorate,
              subjects: subjectsTeach,
              proBonoClasses: proBonoClasses,
              numberOfStudents: privateTutoring,
              documentName: fileName,
              status: "pending"
            });

            await addDoc(collection(db, "donorType"), {
                email: tempData.email,
                type: "teacher"
            });


            const storageRef = ref(storage, fileName); // Use the file name as the storage reference

            // Upload the file to Firebase Storage
            await uploadBytes(storageRef, uploadedFile).then((snapshot) => {
                console.log('Uploaded a blob or file!', snapshot);
                // You can handle the successful upload here, such as updating UI or database
            }).catch((error) => {
                console.error('Error uploading file:', error);
                // Handle any errors that occur during the upload process
            });
            localStorage.clear();
            window.location.href = '../login/login.html';
          } catch (e) {
            console.error("Error adding document: ", e);
          }
    };
});
