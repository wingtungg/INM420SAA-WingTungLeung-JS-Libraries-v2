// Leaflet JS library for displaying interactive map

// Initialize the map with Toronto as the center and a suitable zoom level
var map = L.map('map').setView([43.65200086422973, -79.38175092142488], 15);

// Add a marker at the address location
var marker = L.marker([43.65200086422973, -79.38175092142488]).addTo(map);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


marker.bindPopup("Our store is here!").openPopup();
