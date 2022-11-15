window.addEventListener('DOMContentLoaded', main);

let timeoutRef;

function main() {
    //Start på programmet - callback till main i DOMContent.
    timeoutRef = setTimeout(changeBackgroundColor, 4000);
    addEventListeners();
}

function changeBackgroundColor() {
    document.body.style.backgroundColor = getRandomColor();
}

function addEventListeners() {

const cancelTimeoutbutton = document.getElementById('cancel');
  cancelTimeoutbutton.addEventListener('click', cancelBackgroundChange); 

const startIntervalButton = document.getElementById('start-interval');
 startIntervalButton.addEventListener('click', startBackgroundChangeInterval);

}

function cancelBackgroundChange() {
clearTimeout(timeoutRef);
}

function startBackgroundChangeInterval() {
    setInterval(changeBackgroundColor, 1000)
}

function getRandomColor() {
    const value = Math.random();
    
    if (value < 0.2) {
    return 'blue';
    } else if (value < 0.4) {
        return 'red';
    } else if (value < 0.6) {
        return 'green';
    } else if (value < 0.8) {
        return 'grey';
    } else {
        return 'pink';
    } 
}