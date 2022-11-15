window.addEventListener('DOMContentLoaded', main);

let timeoutRef;

function main() {
    //Start på programmet - callback till main i DOMContent.
    timeoutRef = setTimeout(changeBackgroundColor, 4000);
    addEventListeners();
}

function changeBackgroundColor() {
    document.body.style.backgroundColor = 'lightblue';
}

function addEventListeners() {

const button = document.getElementById('cancel');
  button.addEventListener('click', cancelBackgroundChange); 
}

function cancelBackgroundChange() {
clearTimeout(timeoutRef);
}