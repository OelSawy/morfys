let map;
let marker;

function initMap() {
  const initialLocation = { lat: 37.7749, lng: -122.4194 }; // Default location
  map = new google.maps.Map(document.getElementById("map"), {
    center: initialLocation,
    zoom: 12, // Default zoom level
  });

  map.addListener("click", (event) => {
    placeMarker(event.latLng); // Place marker on map click
  });
}

function placeMarker(location) {
  if (marker) {
    marker.setPosition(location); // Update existing marker position
  } else {
    marker = new google.maps.Marker({
      position: location,
      map,
    });
  }

  document.getElementById("lat").value = location.lat(); // Update latitude
  document.getElementById("lng").value = location.lng(); // Update longitude
}

function saveLocation() {
  const lat = document.getElementById("lat").value;
  const lng = document.getElementById("lng").value;

  alert(`Location saved: Latitude = ${lat}, Longitude = ${lng}`);
  // Further processing, like saving to a server, can be added here
}
