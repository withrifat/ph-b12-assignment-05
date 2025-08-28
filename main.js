// Global variables
let heartCount = 0;
let copyCount = 0;
// let coinCount = 100;
// let coinCount = document.getElementById;

// Function to get element by ID
function getElement(id) {
    return document.getElementById(id);
}

// Function to update the display
function updateDisplay() {
    getElement('heartValue').innerText = heartCount;
    getElement('coinValue').innerText = coinCount;
    getElement('copy-count').innerText = copyCount;
}

// Event listener for the entire card container
document.addEventListener('click', function(e) {
    // Heart icon functionality
    if (e.target.closest('.heartBtnClk')) {
        heartCount++;
        updateDisplay();
    }

    // Copy button functionality
    if (e.target.closest('.copyBtn')) {
        const card = e.target.closest('.bg-white');
        const number = card.querySelector('.serviceNum').innerText;
        copyCount++;
        navigator.clipboard.writeText(number);
        alert(`Copied: ${number}`);
        updateDisplay();
    }

    // Call button functionality
    if (e.target.closest('.callBtn')) {
        if (coinCount < 20) {
            alert("You do not have enough coins to make a 📞 call.");
            return;
        }
        const card = e.target.closest('.bg-white');
        const number = card.querySelector('.serviceNum').innerText;
        const name = card.querySelector('.serviceName').innerText;
        coinCount -= 20;
        alert(`Calling 📞 ${name} at ${number}`);
        const time = new Date().toLocaleTimeString();
        const historyContainer = getElement('historyContainer');
        const history = document.createElement('div');
        history.innerHTML = `
            <div class="bg-gray-100 flex items-center justify-between p-3 rounded-lg mb-2">
                <div>
                    <p>${name}</p>
                    <p class="text-gray-600">${number}</p>
                </div>
                <p>${time}</p>
            </div>
        `;
        historyContainer.prepend(history);
        updateDisplay();
    }
    // Clear history button functionality
    if (e.target.closest('#btnClearHistory')) {
        const historyContainer = getElement('historyContainer');
        historyContainer.innerHTML = '';
    }
});
// Initial display update
updateDisplay();