// Set the latitude and longitude coordinates of the United States
const lat = 39.8283;
const lng = -98.5795;

// Initialize the map
const map = L.map('map').setView([lat, lng], 4);

// Add a tile layer to the map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Set up the state info element
const stateInfo = document.getElementById('state-info');

// // Add a click event listener to the map
// map.on('click', function(e) {
//   // Get the clicked state's name and favorite drink
//   const state = getState(e.latlng);
//   const drink = getFavoriteDrink(state);
//   const ingredients = getIngredients(drink);

//   // Update the state info element
//   stateInfo.innerHTML = `
//     <h2>${state}</h2>
//     <p>Favorite Drink: ${drink}</p>
//     <p>Ingredients: ${ingredients.join(', ')}</p>
//   `;
// });

