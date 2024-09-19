const texts = document.querySelectorAll('.text');
let index = 0;

function showText() {
    if (index < texts.length) {
        texts[index].style.opacity = 1; // Show current text
        index++;
        setTimeout(() => {
            texts[index - 1].style.opacity = 0; // Hide previous text
            showText(); // Show next text
        }, 4000); // Display each text for 2 seconds
    }
}

const hamburger = document.getElementById('hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
});


