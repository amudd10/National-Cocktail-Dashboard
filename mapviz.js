 // Initialize the Leaflet map
 var map = L.map('map').setView([0, 0], 2);

 // Add a tile layer to the map
 L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
   attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
   maxZoom: 18
 }).addTo(map);

 // Add a marker to the map
 // var marker = L.marker([