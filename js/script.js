let alertBanner = document.getElementById("alert");

alertBanner.innerHTML = 
`
<div class="alert-banner">
  <p><strong>Alert: </strong>you have <strong>6 </strong>overdue tasks to complete</p>
  <p class="alert-banner-close">x</p>
</div>
`

alertBanner.addEventListener('click', e =>{
    const element = e.target;
    if(element.classList.contains("alert-banner-close")){
        alertBanner.style.display = "none"
    }
});

/* --------------------------- Charts --------------------------- */

// line chart
let lineChartId = document.getElementById('myChart');
var lineChart = new Chart(lineChartId, {
  type: 'line',
  data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
      }]
  },
  options: {
      scales: {
          yAxes: [{
              ticks: {
                  beginAtZero: true
              }
          }]
      }
  }
});


// bar chart
let barChartId = document.getElementById('myBarChart');
let barChart = new Chart(barChartId, {
  type: 'bar',
  data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
      }]
  },
  options: {
      scales: {
          yAxes: [{
              ticks: {
                  beginAtZero: true
              }
          }]
      }
  }
});

// donut chart
let donutChartId = document.getElementById('myDonutChart');
Chart.defaults.scale.ticks.beginAtZero = true;
let donutChart = new Chart(donutChartId, {
  type: 'doughnut',
  data: {
    labels: ['phones', 'tablets', 'desktops'],
    datasets: [{
      label: 'Points',
      backgroundColor: [
        'rgb(116, 177, 191, 1)',
        'rgb(129, 201, 143, 1)',
        'rgb(115, 119, 191, 1)'
      ],
      data: [10, 20, 45]
    }]
  }
});
