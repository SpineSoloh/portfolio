
const nameElement = document.getElementById('name');

function loopAnimation() {
    nameElement.style.width = '0';
    nameElement.style.opacity = '0';
    nameElement.style.animation = 'none';

    setTimeout(() => {
        nameElement.style.animation = 'typing 4s steps(12, end), fade 4s';
        nameElement.style.animationDelay = '0s, 4s';
        nameElement.style.animationFillMode = 'forwards';
    }, 100); // Small delay before restarting the animation
}

nameElement.addEventListener('animationend', loopAnimation);
