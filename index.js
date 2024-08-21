document.addEventListener("DOMContentLoaded", function () {
    const nameElement = document.getElementById('name');

    // Start the initial typing animation
    nameElement.style.animation = 'typing 4s steps(12, end), fade 4s';
    nameElement.style.animationDelay = '0s, 4s';
    nameElement.style.animationFillMode = 'forwards';

    // Re-write the name after 4 seconds (4000 ms)
    setTimeout(() => {
        // Reset the styles to make the name disappear
        nameElement.style.width = '0';
        nameElement.style.opacity = '0';
        nameElement.style.animation = 'none';

        // Start the typing animation again
        setTimeout(() => {
            nameElement.style.animation = 'typing 4s steps(12, end), fade 4s';
            nameElement.style.animationDelay = '0s, 4s';
            nameElement.style.animationFillMode = 'forwards';
        }, 100); // Small delay before restarting the animation
    }, 8000); // 4 seconds for typing and 4 seconds for fading
});
