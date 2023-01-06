 // Set the latitude and longitude coordinates of the United States
 const lat = 39.8283;
 const lng = -98.5795;
 
 // Initialize the map
 const map = L.map('map').setView([lat, lng], 4);
 
 // Add a tile layer to the map
 var tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
     maxZoom: 19,
     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
 }).addTo(map);
 
 const url = "https://6ujnn3t3vo4tjqvsv5wvzfgtiu0botuh.lambda-url.us-west-2.on.aws/"
 
 
 function getColor(d) {
   return d > 1000 ? '#800026' :
          d > 500  ? '#BD0026' :
          d > 200  ? '#E31A1C' :
          d > 100  ? '#FC4E2A' :
          d > 50   ? '#FD8D3C' :
          d > 20   ? '#FEB24C' :
          d > 10   ? '#FED976' :
                     '#FFEDA0';
 }
 
 function style(feature) {
   return {
       fillColor: getColor(feature.properties.density),
       weight: 2,
       opacity: 1,
       color: 'white',
       dashArray: '3',
       fillOpacity: 0.7
   };
 }
 
 L.geoJson(statesData, {style: style}).addTo(map);
 
//  function highlightFeature(e) {
//    var layer = e.target;
 
//    layer.setStyle({
//        weight: 5,
//        color: '#676',
//        dashArray: '',
//        fillOpacity: 0.7
//    });
 
//    layer.bringToFront();
//  }
 
//  function resetHighlight(e) {
//    geojson.resetStyle(e.target);
//  }


function onEachFeature(feature, layer) {
  layer.on('click', function (e) {
    // Get the name of the state from the feature properties and convert it to uppercase
    let stateSelected = e.target.feature.properties.name.toUpperCase();

    // Use the d3.json function to get the favorite drink data
    d3.json(url).then(function(data) {
      // Get the cocktails data, which is the first element in the list
      let cocktailsData = data[0].Cocktails;
      let cocktailsData_ = data[1];

      // Get the favorite drink for the selected state from the cocktails data
      let favoriteDrink = cocktailsData[stateSelected];

      // If the favorite drink is not found, use a default value
      if (favoriteDrink == undefined) {
        favoriteDrink = "unknown";
      }

      // Bind the popup to the state layer
      layer.bindPopup(stateSelected + "'s favorite drink is " + favoriteDrink)
      .openPopup();

        // Nested function to get the ingredients for the favorite drink
  function getIngredients(cocktailsData_, favoriteDrink) {
    if (!cocktailsData_) {
      return [];
    }
    let ingredients = [];
    for (const [key, value] of Object.entries(cocktailsData_)) {
      for (const [innerKey, innerValue] of Object.entries(value)) {
        if (innerKey.startsWith(favoriteDrink)) {
          ingredients.push(innerValue);
        }
      }
    }
    // If there are no ingredients, add "some stuff" to the list
    if (ingredients.length === 0) {
      ingredients.push("ingredients that were not found in our dataset");
    }
    return ingredients;
  }

      

      // Get the ingredients for the favorite drink
      let faveIng = getIngredients(cocktailsData_, favoriteDrink);
      console.log(favoriteDrink);
      // Update the ingredients bar
      let ingBar = d3.select("#ingredients-bar");
      ingBar.html("");
      let ingState = ingBar.append("h4");
      ingState.text(`To make a ${favoriteDrink} you need`);
      let ingList = ingState.append("ul");
      faveIng.forEach(ingredient => {
        let dritem = ingList.append("li");
        dritem.text(ingredient);
      })
     });
   });
 }




 
 
 
 
 
 // Use this link to get the GeoJSON data.
 var link = "https://leafletjs.com/examples/choropleth/us-states.js";
 
 var choroplethLayer = L.geoJSON(statesData, {
   onEachFeature: onEachFeature,
   style: function(feature) {
     var value = feature.properties.value;
     var color = getColor(value);
     return {
       color: color,
       fillColor: color,
       fillOpacity: 0.7
     };
   }
 }).addTo(map);
 
 // Create the state layer
 var stateLayer = L.geoJSON(statesData, {
   style: function(feature) {
     return {color: '#ff0000'};
   }
 });
 
 
 
 
 // Set up the state info element
 const stateInfo = document.getElementById('state-info');
 
 function newOption(stateSelected) {
   const url = "https://6ujnn3t3vo4tjqvsv5wvzfgtiu0botuh.lambda-url.us-west-2.on.aws/" + stateSelected;
   d3.json(url).then(data => { // better is specify EXACTLY the structure of data at this point
     // meaning {key: value, ...} exact key names & data types of values
     console.log("requesting:", url, "response:", data);
 
   
     // viz re-render here, given data back from API
   })
   newOption();
 }
