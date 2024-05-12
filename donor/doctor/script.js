import {app} from "../../firebase-init.js";
import { collection, addDoc, getFirestore } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js"; 
import {getStorage, ref, uploadBytes} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-storage.js";

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
const storage = getStorage();


function initMap() {
    const myLatLng = { lat: 30.043286146108326, lng: 31.2340876721988 };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 8,
        center: myLatLng,
    });

    const input = document.getElementById("pac-input");

    const autocomplete = new google.maps.places.Autocomplete(input);
    autocomplete.bindTo("bounds", map);

    const infowindow = new google.maps.InfoWindow();
    const marker = new google.maps.Marker({
        map,
        anchorPoint: new google.maps.Point(0, -29),
    });






    autocomplete.addListener("place_changed", () => {
        infowindow.close();
        marker.setVisible(false);

        const place = autocomplete.getPlace();

        if (!place.geometry || !place.geometry.location) {
            // Place details not found
            return;
        }

        // If the place has a geometry, then present it on a map.
        if (place.geometry.viewport) {
            map.fitBounds(place.geometry.viewport);
        } else {
            map.setCenter(place.geometry.location);
            map.setZoom(17); // Zoom in if location details are available
        }

        marker.setPosition(place.geometry.location);
        marker.setVisible(true);

        let address = "";
        if (place.address_components) {
            address = [
                (place.address_components[0] && place.address_components[0].short_name) || "",
                (place.address_components[1] && place.address_components[1].short_name) || "",
                (place.address_components[2] && place.address_components[2].short_name) || "",
            ].join(" ");
        }

        infowindow.setContent(`<div><strong>${place.name}</strong><br>${address}</div>`);
        infowindow.open(map, marker);
    });
}

// Assign initMap to window object
window.onload = initMap;

// Other event listeners or functions
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("donorForm");
    const area = document.getElementById("donorArea");
    const gov = document.getElementById("donorGovernorate");

    var tempData = JSON.parse(localStorage.getItem("tempData"));
    const documentUpload = document.getElementById("qualificationDocument");

    area.value = tempData.area ? tempData.area : "";
    gov.value = tempData.governorate ? tempData.governorate : "";


    
    form.addEventListener("submit", async function(event) {
        event.preventDefault();

        // Gather form data
        const clinicLocation = document.getElementById("pac-input").value;
        const specialty = document.getElementById("specialty").value;
        const proBonoCases = document.getElementById("proBonoCases").value;

        // Validate form data
        if (clinicLocation && specialty && proBonoCases && qualificationDocument) {
            try {
                const uploadedFile = documentUpload.files[0];
                const fileName = uploadedFile.name;
    
                await addDoc(collection(db, "doctorData"), {
                  firstName: tempData.firstName,
                  lastName: tempData.lastName,
                  gender: tempData.gender,
                  email: tempData.email,
                  number: tempData.contactNumber,
                  password: tempData.password,
                  address: tempData.address,
                  area: tempData.area,
                  governorate: tempData.governorate,
                  clinicLocation: clinicLocation,
                  specialty: specialty,
                  proBonoCases: proBonoCases,
                  documentName: fileName,
                  status: "pending"
                });
    
                await addDoc(collection(db, "donorType"), {
                    email: tempData.email,
                    type: "doctor"
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
        } else {
            alert("Please fill in all fields and upload a qualification document.");
        }
    });


    document.getElementById("go-back").addEventListener("click", () => {history.back();

    });
    
});
