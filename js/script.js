/* ---------------------- Message section ---------------------- */

send.addEventListener('click', ()=>{
/* 
Check if search and message fields are empty. Alert user if empty
 */

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
let listItems = ['Pick up cake','Play Warzone','Make pizza'];

const addToList = ()=>{
  let ulList = document.createElement("ul");
  ulList.setAttribute("id","notifications");
  let items = document.createElement("li");
  for(let i = 0; i < listItems.length; i++){
    ulList.innerHTML += `<li><span>x</span>${listItems[i]}</li>`;
  }
  return ulList;
};

// Event listener for notification bell & add items to notification list
bell.addEventListener("click", ()=>{
  // make blue notification dot disappear into background color
  blueDot.style.backgroundColor = "#7377bf";
  blueDot.style.transitionDuration = "1s";

  // Adds items to list on bell click, and closes Items
  if(dropdown.innerHTML === ""){
    dropdown.classList.add("dropdown-style");
    dropdown.classList.add("show");
    let newList = addToList();
    dropdown.appendChild(newList);
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
let filteredResults = [];
let autoCompleteList = [];

let searchValue = ()=>{
/* 
  Checks if user input matches anything name inside "names" array
  If so, adds list tags with map function, and returns to new array "autoCompleteList"
  Adds items from array to page, and deletes commas with .join function
*/
  let searchBar = document.getElementById("find-user");
  let userInputValue = searchBar.value;

  // Removes list-style dots
  autoComlpleteItems.style.listStyle = "none";

  if(userInputValue !== ""){
    // Filter function goes through all names in array, and sees if user input matches any names
    filteredResults = names.filter(name => name.toLowerCase().indexOf(userInputValue.toLowerCase()) !== -1);
    autoCompleteList = filteredResults.map(names => `<li>${names}<li>`);
  }else {
    // Clear array if no matches
    autoCompleteList = [];
  }
  // Add results from array to HTML
  autoComlpleteItems.innerHTML = autoCompleteList.join(" ");
}

  // If click on item in list, put textcontent of item into textcontent of searchbar
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







