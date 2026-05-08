
let clicks = 0;
let clickValue = 1;

let savedTears = localStorage.getItem("savedTears");
if (savedTears !== null) {
  clicks = Number(savedTears);
}



let tearDisplay = document.getElementById("tear-display");

tearDisplay.innerText = "Tears: " + clicks;

function handleClick() {
    clicks = clicks + clickValue;

    tearDisplay.innerText = "Tears: " + clicks;

    localStorage.setItem("savedTears", clicks);
}

function buyUpgrade(event) {
  let upgradeCost = 10;
  
  if (clicks >= upgradeCost) {
    clicks - upgradeCost;
    clickValue = clickValue++;
    tearDisplay.innerText = "Tears: " + clicks;
    localStorage.setItem("savedTears", clicks);
    .addEventListener(“click”, myFunction); 
  } 
}
