
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

// copy button section 
const copyBtns = document.querySelectorAll('#copyBtn');
for (const btn of copyBtns){
    btn.addEventListener('click', function(e){
    const number = e.target.closest("#copyBtn").parentNode.parentNode.children[1].children[2].innerText;
    copyCount++;
    getElement("copy-count").innerText = copyCount;
    navigator.clipboard.writeText(number);
    alert(`নম্বর কপি হয়েছেঃ ${number}`);
    });
}

// clear button functionality
getElement("btn-clear").addEventListener("click", function () {
  getElement("history-container").innerHTML = "";
});