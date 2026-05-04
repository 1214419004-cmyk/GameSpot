
let clicks = 0;
let clickValue = 1

let tearDisplay = document.getElementById("tear-display");

tearDisplay.innerText = "Tears: " + clicks;

function handleClick() {
    console.log("Click");

    clicks = clicks + clickValue;

    tearDisplay.innerText = "Tears: " + clicks;

}

