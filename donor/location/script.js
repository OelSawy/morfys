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


document.getElementById("go-back").addEventListener("click", () => {history.back();

});

// Assign initMap to window object
window.onload = initMap;

// Other event listeners or functions
document.addEventListener("DOMContentLoaded", function() {
   
    
    

    // Sticky header functionality
    const header = document.querySelector('.sticky-header');
    const sticky = header.offsetTop;
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
