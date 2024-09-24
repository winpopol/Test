const button = document.querySelector("#flee");
const distanceThreshold = 350; // Increased distance for earlier movement

// Use mousemove to detect proximity
document.addEventListener("mousemove", function (e) {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const buttonRect = button.getBoundingClientRect();
    const buttonX = buttonRect.left + buttonRect.width / 2;
    const buttonY = buttonRect.top + buttonRect.height / 2;

    const distance = Math.hypot(mouseX - buttonX, mouseY - buttonY);

    // Check if the mouse is within the distance threshold
    if (distance < distanceThreshold) {
        // Calculate new random positions
        const top = getRandomNum(window.innerHeight - button.offsetHeight);
        const left = getRandomNum(window.innerWidth - button.offsetWidth);

        // Move the button to the new position
        moveElement(button, "left", left);
        moveElement(button, "top", top);
    }
});

const moveElement = (element, animeType, pixels) => {
    anime({
        targets: element,
        [animeType]: `${pixels}px`,
        easing: "easeOutQuad", // Smoother easing
        duration: 1000, // Increased duration for slower movement
    });
};

// Generate a random number within the max value
const getRandomNum = (max) => {
    return Math.floor(Math.random() * max);
};
