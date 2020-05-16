/* --------------------------- Charts --------------------------- */

// line chart
let lineChartId = document.getElementById('myChart');

let trafficData = {
  labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10',
   '11-17','18-24','25-31'],
  datasets: [{
    data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500],
    backgroundColor: 'rgba(116, 119, 191, 0.3 )',
    borderwidth: 1,
  }]
};

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

let lineChart = new Chart(lineChartId, {
  type: 'line',
  data: trafficData,
  options: trafficOptions
});


// bar chart
let barChartId = document.getElementById('myBarChart');

let dailyData = {
  labels: ['S','M','T','W','T','F','S'],
  datasets: [{
    label: '# of hits',
    data: [75, 115, 175, 125, 225, 200, 100],
    backgroundColor: '#7477BF',
    borderWidth: 1
  }]
};

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
}

let barChart = new Chart(barChartId, {
  type: 'bar',
  data: dailyData,
  options: dailyOptions
});

// donut chart
let donutChartId = document.getElementById('myDonutChart');

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

let mobileOptions = {
  legend: {
    position: 'right',
    labels: {
      boxWidth: 20,
      fontStyle: 'bold'
    }
  }
};

let donutChart = new Chart(donutChartId, {
  type: 'doughnut',
  data: mobileData,
  options: mobileOptions
});

/* ---------------------- Message section ---------------------- */

const user = document.getElementById('find-user');
const message = document.getElementById('text-area');
const send = document.getElementById('send');

console.log(`Message value is ${message.classList}`);
console.log(`User value is ${user.value}`);

send.addEventListener('click', ()=>{
  if(user.value === "" && message.value === ""){
    alert("Both fields musth be filled out to submit");
  }else if(user.value === ""){
    alert("Please fill out user serach field");
  }else if(message.value === "") {
    alert("Please fill out message field");
  }else{
    alert(`Message sent successfully to: ${user.value}`);
  }
});

/* ---------------------- Bell notification ---------------------- */

// variables
const bell = document.getElementById("bell");
const greenDot = bell.firstElementChild;

const dropdown = document.getElementById("dropdown");

// Notification List items
let itemOne = "Pick up cake";
let itemTwo = "Play Warzone";
let itemThree = "Make pizza";

// List
let listItems = 
`
<ul id="notifications">
  <li><span>x</span>${itemOne}</li>
  <li><span>x</span>${itemTwo}</li>
  <li><span>x</span>${itemThree}</li>
</ul>
`
// Notification Bell & add items
bell.addEventListener("click", ()=>{
  greenDot.style.backgroundColor = "#7377bf";
  greenDot.style.transitionDuration = "1s";

  // Adds items to list on bell click, and closes Items
  if(dropdown.innerHTML === ""){
    dropdown.classList.add("dropdown-style");
    dropdown.classList.add("show");
    dropdown.innerHTML = listItems;

    closeBox();  
  }
});

// Close Notification Items function
const closeBox = ()=>{
  let dropdownList = document.getElementById("notifications");
  dropdownList.addEventListener("click", e =>{
    if(e.target.textContent === "x"){
      let closedropdown = e.target;
      let dropdownItem = closedropdown.parentNode;
      dropdownItem.classList.add("remove");
      // Delay funciton to remove list item
      setTimeout(function(){
        dropdownItem.remove();
      }, 650);
    }
  });
}

/* ------------------------- Alert Banner Pop-up ------------------------- */

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
    alertBanner.classList.add("inactive");
    setTimeout(function(){
      alertBanner.style.display = "none";
    }, 400);
  }
});