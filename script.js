
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
tearDisplay.innerText = "Tears: " + formatNumber(clicks);

function handleClick() {
    clicks = clicks + clickValue;

    tearDisplay.innerText = "Tears: " + formatNumber(clicks);

    localStorage.setItem("savedTears", clicks);
}


function buyUpgrade() {
  let upgradeCost = 10;
  
  if (clicks >= upgradeCost) {
    clicks = clicks - upgradeCost;
    clickValue = clickValue + 1;
    localStorage.setItem("savedClickValue", clickValue);
    tearDisplay.innerText = "Tears: " + formatNumber(clicks);
    localStorage.setItem("savedTears", clicks);
  } 
}

function buyUpgrade2() {
  let upgradeCost = 200;
  
  if (clicks >= upgradeCost) {
    clicks = clicks - upgradeCost;
    clickValue = clickValue + 10;
    localStorage.setItem("savedClickValue", clickValue);
    tearDisplay.innerText = "Tears: " + formatNumber(clicks);
    localStorage.setItem("savedTears", clicks);
  } 
}

function buyUpgrade3() {
  let upgradeCost = 1500;
  
  if (clicks >= upgradeCost) {
    clicks = clicks - upgradeCost;
    clickValue = clickValue + 75;
    localStorage.setItem("savedClickValue", clickValue);
    tearDisplay.innerText = "Tears: " + formatNumber(clicks);
    localStorage.setItem("savedTears", clicks);
  } 
}

function formatNumber(num) {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(2) + " M";
  } else if (num >= 1000) {
    return (num / 1000).toFixed(2) + " k";
  } else {
    return num;
  }
}