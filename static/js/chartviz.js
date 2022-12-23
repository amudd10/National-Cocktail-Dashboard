var options = {
  series: [1.13,
    1.11,
    1.18,
    0.96,
    1,
    1.14,
    0.84,
    1.21,
    1.16,
    1.09,
    1.02,
    1.27,
    0.93,
    1.12,
    0.98,
    1.34,
    1.04,
    0.94,
    1.3,
    1.36,
    0.86,
    0.98,
    1.05,
    1.14,
    1.32,
    1.16,
    1.62,
    1.37,
    1.41,
    1.69,
    0.84,
    1.29,
    0.9,
    1.04,
    1.67,
    1.19,
    1.09,
    1.23,
    1.32,
    1.02,
    1.23,
    1.5,
    1.04,
    1.25,
    0.66,
    1.55,
    1.01,
    0.97,
    1.21,
    1.41,
    1.25],
  chart: {
  type: 'polarArea',
},
stroke: {
  colors: ['#fff']
},
fill: {
  opacity: 0.8
},
responsive: [{
  breakpoint: 480,
  options: {
    chart: {
      width: 1000
    },
    legend: {
      position: 'bottom'
    }
  }
}]
};

var chart = new ApexCharts(document.querySelector("#polar-area-chart"), options);
chart.render();

// """""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
const drinkFrequency = {};

const data = {
  "Cocktails": {
    "ALABAMA": "Bellini",
    "ALASKA": "White Russian",
    "ARIZONA": "Jack and Coke",
    "ARKANSAS": "Mojito",
    "CALIFORNIA": "Paloma",
    "COLORADO": "Mimosa",
    "CONNECTICUT": "Coquito",
    "DELAWARE": "Manhattan",
    "FLORIDA": "Piña Colada",
    "GEORGIA": "Mimosa",
    "HAWAII": "Mai Tai",
    "IDAHO": "Hot Buttered Rum",
    "ILLINOIS": "Mimosa",
    "INDIANA": "Tequila Sunrise",
    "IOWA": "Fuzzy Navel",
    "KANSAS": "Wine Cooler",
    "KENTUCKY": "Wine Cooler",
    "LOUISIANA": "Daiquiri",
    "MAINE": "Rusty Nail",
    "MARYLAND": "Mimosa",
    "MASSACHUSETTS": "Painkiller",
    "MICHIGAN": "7 and 7",
    "MINNESOTA": "White Russian",
    "MISSISSIPPI": "Old Fashioned",
    "MISSOURI": "Margarita",
    "MONTANA": "Dark N' Stormy",
    "NEBRASKA": "Moscow Mule",
    "NEVADA": "Shirley Temple",
    "NEW HAMPSHIRE": "Margarita",
    "NEW JERSEY": "Piña Colada",
    "NEW MEXICO": "Piña Colada",
    "NEW YORK": "Vodka Fizz",
    "NORTH CAROLINA": "Mimosa",
    "NORTH DAKOTA": "Sex on the Beach",
    "OHIO": "SHANDY",
    "OKLAHOMA": "Bellini",
    "OREGON": "Lemon Drop Martini",
    "PENNSYLVANIA": "Wine Cooler",
    "RHODE ISLAND": "Dark N' Stormy",
    "SOUTH CAROLINA": "Gin Fizz",
    "SOUTH DAKOTA": "Screwdriver",
    "TENNESSEE": "Mimosa",
    "TEXAS": "Margarita",
    "UTAH": "Rickey",
    "VERMONT": "Cosmopolitan",
    "VIRGINIA": "Mojito",
    "WASHINGTON": "Mojito",
    "WEST VIRGINIA": "White Russian",
    "WISCONSIN": "Old Fashioned",
    "WYOMING": "Long Island Iced Tea"
  }
};

// Get the cocktail data
let cocktailData = data["Cocktails"];

// Create an object to store the frequency of each drink
let frequency = {};
for (let state in cocktailData) {
  let drink = cocktailData[state];
  console.log(drink);
  if (drink in frequency) {
    frequency[drink]++;
  } else {
    frequency[drink] = 1
;
}
}

// Create an array of data points for the chart
let chartData = [];
for (let drink in frequency) {
chartData.push({
name: drink,
value: frequency[drink]
});
}
console.log(chartData);
// Create an array of the drinks to use as the x-axis categories
let categories = Object.keys(frequency);

var options = {
series: [{
name: 'United States Favorite Drinks (Frequency)',
data: chartData.map(dataPoint => dataPoint.value)
}],
chart: {
type: 'bar',
height: 450
},
plotOptions: {
bar: {
horizontal: true,
columnWidth: '55%',
endingShape: 'rounded'
},
},
dataLabels: {
enabled: false
},
stroke: {
show: true,
width: 2,
colors: ['blue']
},
xaxis: {
categories: chartData.map(dataPoint => dataPoint.name)
},
yaxis: {
title: {
text: 'United States Favorite Drinks (Frequency)'
}
},
fill: {
opacity: 1
},
tooltip: {
y: {
formatter: function (val) {
return val
}
}
}
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();
