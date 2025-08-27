


// heart icon funtionality
function incrementHeart() {
    const display = document.getElementById('heartValue');
    display.innerText = parseInt(display.innerText || 0) + 1;
}