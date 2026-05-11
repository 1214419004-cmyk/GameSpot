
let clicks = 0;
let clickValue = 1;

let savedTears = localStorage.getItem("savedTears");
if (savedTears !== null) {
  clicks = Number(savedTears);
}

let savedClickValue = localStorage.getItem("savedClickValue");
if (savedClickValue !== null) {
  clickValue = Number(savedClickValue);
}

let tearDisplay = document.getElementById("tear-display");

tearDisplay.innerText = "Tears: " + clicks;

function handleClick() {
    clicks = clicks + clickValue;

    tearDisplay.innerText = "Tears: " + clicks;

    localStorage.setItem("savedTears", clicks);
}


let upgradeBtn = document.getElementById("upgrade-btn");

function buyUpgrade() {
  let upgradeCost = 10;
  
  if (clicks >= upgradeCost) {
    console.log("f")
    clicks = clicks - upgradeCost;
    clickValue = clickValue + 1;
    localStorage.setItem("savedClickValue", clickValue);
    tearDisplay.innerText = "Tears: " + clicks;
    localStorage.setItem("savedTears", clicks);
  } 
}

