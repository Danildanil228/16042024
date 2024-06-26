function createLetter() {
    const letters = "❤️";
    const randomLetter = letters[Math.floor(Math.random() * letters.length)];
    const letterElement = document.createElement("span");
    letterElement.textContent = randomLetter;
    letterElement.classList.add("letter");
    letterElement.style.color = getRandomColor();
    const container = document.getElementById("container");
    container.appendChild(letterElement);
    const randomX = Math.random() * container.offsetWidth;
    const randomY = Math.random() * container.offsetHeight;
    letterElement.style.left = randomX + "px";
    letterElement.style.top = randomY + "px";
    setTimeout(() => {
        letterElement.style.animation = "fade 2s linear forwards";
        setTimeout(() => {
            container.removeChild(letterElement);
        }, 1000)
    }, 2000);
}
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
setInterval(createLetter, 50) 