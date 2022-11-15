window.addEventListener('DOMContentLoaded', main);

function main() {
    //Start på programmet - callback till main i DOMContent.
    setTimeout(changeBackgroundColor, 4000);
}

function changeBackgroundColor() {
document.body.style.backgroundColor = 'lightblue';
}

