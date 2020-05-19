/* --------------------------- Charts --------------------------- */

// Line chart canvas selctor
let lineChartId = document.getElementById('myChart');

// Variables
let activeChart = document.getElementById("traffic-nav");
let chartList = activeChart.querySelectorAll("li");

// Chart labels
let hourlyChart = ['12-3','3-5','5-8','9-11','11-1','1-3','3-6','7-9','9-11','11-12'];
let weeklyChart = ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10',
'11-17','18-24','25-31'];
let dailyChart = ['S','M','T','W','TH','F','S'];
let monthlyChart = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];


/* Clean list by removing "active" class name from all items in list */
let removeActive = ()=>{
  for(let i = 0; i < chartList.length; i++){
    chartList[i].classList.remove("active");
  }
};

/* Look for item with "active" class,
assign corrct labels to chart, and refresh chart */
let updateChart = ()=>{
  for(let i = 0; i < chartList.length; i++){
    if(chartList[i].className === "active"){
      if(chartList[i].textContent === "Hourly"){
        trafficData.labels = hourlyChart;
        lineChart.update();
      }else if(chartList[i].textContent === "Daily"){
        trafficData.labels = dailyChart;
        lineChart.update();
      }else if(chartList[i].textContent === "Weekly"){
        trafficData.labels = weeklyChart;
        lineChart.update();
      }else{
        trafficData.labels = monthlyChart;
        lineChart.update();
      }
    }
  }
};

/* Event listener for switching timeframes for line chart */
activeChart.addEventListener("click", e =>{
  // Variables
  let element = e.target;

  // Removes "active" class
  removeActive();

  // Add "active" class name to clicked item
  if(element.tagName === "LI"){
    element.classList.toggle("active");
  }

  // function to update chart
  updateChart();
});

// Chart Data Object
let trafficData = {
  labels: weeklyChart, // labels from above code
  datasets: [{
    data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2300, 2500], // data on side of chart
    backgroundColor: 'rgba(116, 119, 191, 0.3 )',
    borderwidth: 1,
  }]
};

// Chart Options Object
let trafficOptions = {
  aspectRatio: 2.5,
  animation: {
    duration: 0
  },
  scales: {
    yAxes: [{
        ticks: {
            beginAtZero: true
        }
    }]
  },
  legend: {
    display: false
  }
};

// Chart Ojbect
let lineChart = new Chart(lineChartId, {
  type: 'line',
  data: trafficData,
  options: trafficOptions
});


// Bar chart
let barChartId = document.getElementById('myBarChart');

// Data
let dailyData = {
  labels: ['S','M','T','W','T','F','S'],
  datasets: [{
    label: '# of hits',
    data: [75, 115, 175, 125, 225, 200, 100],
    backgroundColor: '#7477BF',
    borderWidth: 1
  }]
};

// Options
let dailyOptions = {
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero: true
      }
    }]
  },
  legend: {
    display: false
  }
};

// Chart Object
let barChart = new Chart(barChartId, {
  type: 'bar',
  data: dailyData,
  options: dailyOptions
});

// Donut Chart
let donutChartId = document.getElementById('myDonutChart');

// Data
let mobileData = {
  labels: ['Desktop','Tablet','Phones'],
  datasets: [{
    label: '# of Users',
    data: [2000, 550, 500],
    borderWidth: 0,
    backgroundColor: [
      '#7477BF',
      '#78CF82',
      '#51B6C8'
    ]
  }]
};

// Options
let mobileOptions = {
  legend: {
    position: 'right',
    labels: {
      boxWidth: 20,
      fontStyle: 'bold'
    }
  }
};

// Chart Object
let donutChart = new Chart(donutChartId, {
  type: 'doughnut',
  data: mobileData,
  options: mobileOptions
});
