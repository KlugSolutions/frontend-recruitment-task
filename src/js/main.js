// Variables for open and close popup
const popup = document.getElementById("myPopup");   // Get element 'Popup'
const myBtn = document.getElementById("myBtn");   // Get element 'button'
const img = document.getElementsByClassName("close")[0];    // Get element 'close'

// Variables for counting
const count = document.getElementById('count'); //Get element for counting
let counter = 0; // default value of counting (initial value)

// Functions
myBtn.onclick = function () {      // Open popup function
    popup.style.display = "block"; // show popup
    counter++; // each click +1
    count.innerHTML = counter; // return value into html
}

img.onclick = function () {      // Close popup function
    popup.style.display = "none"; // hidden popup
}



