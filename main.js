
// global variables
let heartCount = 0;
let copyCount = 0;
let coinCount = 100;
// short function code for optimized code 
function getElement(id) {
    return document.getElementById(id);
}
// heart icon funtionality
function incrementHeart() {
    const display = document.getElementById('heartValue');
    display.innerText = parseInt(display.innerText || 0) + 1;
}
// for call button 
document.getElementById('callBtn').addEventListener('click', function() {
    console.log("btn clicked call");
    
});