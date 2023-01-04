function polar() {
  const dataUrl = "https://6ujnn3t3vo4tjqvsv5wvzfgtiu0botuh.lambda-url.us-west-2.on.aws";
  d3.json(url).then(data => {
    let allConsumption = data[2]["All beverages (Per capita consumption)"];
    console.log( allConsumption);
    let states = Object.keys(allConsumption);
    console.log(states);
    let values = Object.values(allConsumption);
    console.log(values);

    var options = {
      series: values,
      labels: states,
      chart: {
          type: 'polarArea',
        },
      stroke: {
        colors: ['#fff']
      },
      fill: {
        opacity: 0.8
      },
      title: {
        text: "Alcohol Consumption (per capita) 2016",
        align: 'left',
        margin: 10,
        offsetX: 0,
        offsetY: 0,
        floating: false,
        style: {
          fontSize:  '14px',
          fontWeight:  'bold',
          fontFamily:  undefined,
          color:  '#263238'
        }
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
    })
}

polar();
  

function bar() {
  const dataUrl = "https://6ujnn3t3vo4tjqvsv5wvzfgtiu0botuh.lambda-url.us-west-2.on.aws";
  d3.json(dataUrl).then(data => {
    // Get the cocktail data
    let cocktailData = data[0]["Cocktails"];

    // Create an object to store the frequency of each drink
    let frequency = {};
    for (let state in cocktailData) {
      let drink = cocktailData[state];
      console.log(drink);
      if (drink in frequency) {
        frequency[drink]++;
      } else {
        frequency[drink] = 1;
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
        colors: ['yellow']
      },
      xaxis: {
        categories: chartData.map(dataPoint => dataPoint.name)
      },
      yaxis: {
        title: {
          text: 'Frequency of Favorite Drinks in the United States',
          align: 'center',
          style: {
            fontSize: '14px',
            color: '#333'
          }
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
  })
}

bar();

  
