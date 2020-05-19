/* ---------------------- Message section ---------------------- */

// Check if search and message fields are empty. Alert user if empty
send.addEventListener('click', ()=>{
  // Variables
  const user = document.getElementById('find-user');
  const message = document.getElementById('text-area');
  const send = document.getElementById('send');
  
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

/* ---------------------- Bell & Notifications ---------------------- */

// variables
const bell = document.getElementById("bell");
const blueDot = bell.firstElementChild;

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
`;

// Event listener for notification bell & add items to notification list
bell.addEventListener("click", ()=>{
  // make blue notification dot disappear into background color
  blueDot.style.backgroundColor = "#7377bf";
  blueDot.style.transitionDuration = "1s";

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
      }, 450);
    }
  });
};

/* ------------------------- Alert Banner Pop-up ------------------------- */

let alertBanner = document.getElementById("alert");

alertBanner.innerHTML = 
`<div class="alert-banner">
  <p><strong>Alert: </strong>you have <strong>3 </strong>overdue tasks to complete</p>
  <p class="alert-banner-close">x</p>
</div>`;

// Make banner fade out, and add "inactive" class
alertBanner.addEventListener('click', e =>{
  const element = e.target;
  if(element.classList.contains("alert-banner-close")){
    alertBanner.classList.add("inactive");
    setTimeout(function(){
      alertBanner.style.display = "none";
    }, 400);
  }
});

/* ---------------------- Auto Complete ---------------------- */

let names = ['Victoria Chambers','Dayle Byrd','Dawn Wood','Dan Oliver'];
let autoComlpleteItems = document.getElementById("auto-complete-items");

let autoFillBox = document.getElementById("auto-fill");
let userResults = [];
let autoFillList = [];

let searchValue = ()=>{

  let searchBar = document.getElementById("find-user");
  let userInputValue = searchBar.value;

  autoComlpleteItems.style.listStyle = "none";

    if(userInputValue !== ""){
      userResults = names.filter(name => name.toLowerCase().indexOf(userInputValue.toLowerCase()) !== -1);
      autoFillList = userResults.map(names => `<li>${names}<li>`);
    }else {
      autoFillList = [];
    }
    autoComlpleteItems.innerHTML = autoFillList.join(" ");
}

  // if click on item, make textcontent of item into textcontent of searchbar
  autoComlpleteItems.addEventListener("click", e =>{
    let searchBar = document.getElementById("find-user");
    if(e.target.tagName === "LI"){
      searchBar.value = e.target.textContent;
      autoComlpleteItems.innerHTML = "";
    }
  });

/* --------------------------- Local Storage --------------------------- */

// Variables
const emailSwitchButton = document.getElementById("email-switch");
const publicSwitchButton = document.getElementById("public-switch");
const timezone = document.getElementById("timezone");

// Functions

// Check if local storage supported
const supportLocalStorage = ()=>{
  try{
    return localStorage in window && window["localStorage"] !== null;
  }catch (e){
    return false;
  }
};

const checkSettings = (switchName, key)=>{
/* 
  See if button is toggled on or off,
  and set key name and setting in setItem
*/
  if(switchName.checked !== true){
    localStorage.setItem(key, false);
    return false;
  }else{
    localStorage.setItem(key, true);
    return true;
  }
}

// Check which time zone is selected
const timezoneSetting = ()=>{
  let index = timezone.selectedIndex;
  localStorage.setItem("Timezone", index);
};

const getItemFunction = ()=>{
  /* 
    Get saved items, parse JSON so boolean works instead of string
  */
  let emailCheckBox = localStorage.getItem("Emails");
  emailSwitchButton.checked = JSON.parse(emailCheckBox);

  let profileCheckBox = localStorage.getItem("Public");
  publicSwitchButton.checked = JSON.parse(profileCheckBox);

  timezone.selectedIndex = localStorage.getItem("Timezone");
};


if(supportLocalStorage){
/*
 Check if supported, if so, run event listener for save/cancel buttons
 Then load saved items.
*/
  const saveButton = document.querySelector(".save");
  const cancelButton = document.querySelector(".cancel");
  
  saveButton.addEventListener("click", ()=>{
    checkSettings(emailSwitchButton, "Emails");
    checkSettings(publicSwitchButton, "Public");
    timezoneSetting();
  });

  cancelButton.addEventListener("click", ()=>{
    localStorage.removeItem("Emails");
    localStorage.removeItem("Public");
    localStorage.removeItem("Timezone");
  });

  getItemFunction();
};







