const dialogWindow = document.querySelector('.dialog-window');
const startBtn = document.getElementById('start-button');
const closeButton = document.getElementById('close-button');

startBtn.addEventListener('click', () => {
    dialogWindow.style.visibility = "visible";
    startBtn.style.visibility = "hidden"
});

closeButton.addEventListener('click', () => {
    dialogWindow.style.visibility = "hidden";
    startBtn.style.visibility = "visible"
})