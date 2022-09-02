// Variables
const popup = document.getElementById("myPopup");   // Get element 'Popup'
const btn = document.getElementById("myBtn");   // Get element 'button'
const img = document.getElementsByClassName("close")[0];    // Get element 'close'

// Functions
btn.onclick = function() {      // Open popup function
  popup.style.display = "block";
}

img.onclick = function() {      // Close popup function
  popup.style.display = "none";
}