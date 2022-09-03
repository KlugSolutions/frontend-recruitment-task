// Variables for open and close popup
const popup = document.getElementById("myPopup");   // Get element 'Popup'
const myBtn = document.getElementById("myBtn");   // Get element 'button'
const img = document.getElementsByClassName("close")[0];    // Get element 'close'

// Variables for counting
const count = document.getElementById('count'); //Get element for counting
let counter = 0; // default value of counting (initial value)

// Variables fot reset
const reset = document.getElementById('reset');

// Functions
myBtn.onclick = () => {      // Open popup function
    popup.style.display = "block"; // show popup
    counter++; // each click +1
    count.innerHTML = counter + ' times'; // return value into html
    (counter > 5) ? reset.style.display = 'block' : reset.style.display = 'none'; // if counter is bigger 5 then show reset button
}

img.onclick = () => {      // Close popup function
    popup.style.display = "none"; // hidden popup
}

// Functions for reset to initial value (0)

reset.onclick = () => {     // Reset count value
    counter = 0;        // Value after click reset button 
    count.innerHTML = counter + ' times'; // Put value into html
}




