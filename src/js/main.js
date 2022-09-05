// Variables 
const popup = document.getElementById('myPopup')   // Get element 'Popup'
const myBtn = document.getElementById('myBtn')   // Get element 'button'
const xicon = document.getElementsByClassName('close')[0]    // Get element 'close'
const count = document.getElementById('count') //Get element for counting
const reset = document.getElementById('reset') // Get element for reset to initial value (0)
let counter = 0



// Functions

/* Show popup, chceck LS and count. 
Check the number, if it is bigger than 5, 
show the reset button. */
myBtn.onclick = () => {
    popup.style.display = 'block';

    (localStorage.clickcount) ?
        localStorage.clickcount = Number(localStorage.clickcount) + 1
        : localStorage.clickcount = counter++

    count.innerHTML = localStorage.clickcount;

    (count.innerHTML > 5) ? reset.style.display = 'block' : reset.style.display = 'none'
}

// Function for reset to initial value (0)
reset.onclick = () => {
    localStorage.clickcount = 0
    count.innerHTML = localStorage.clickcount
    reset.style.display = 'none'
}

// Close popup by xicon
xicon.onclick = () => {
    popup.style.display = 'none'
}

// Close popup by click anywhere
onclick = (event) => {
    (event.target == popup) ? popup.style.display = 'none' : ''
}