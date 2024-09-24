const button = document.querySelector("#flee");
const distanceThreshold = 250; // Increased distance threshold for smoother avoidance

// Use mousemove instead of mouseover for detecting proximity
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
        easing: "easeOutCirc", // Changed easing to a smoother curve
        duration: 500, // Increased duration for smoother movement
    });
};

// Update the getRandomNum function to accept a max value
const getRandomNum = (max) => {
    return Math.floor(Math.random() * max); // Generate a random number within the specified max
};
