// Function to generate a random integer between min and max (inclusive)
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to generate a random hexadecimal color code
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[getRandomInt(0, 15)];
  }
  return color;
}

function scrambleElements() {
  const elements = document.querySelectorAll('*'); // Select all elements

  elements.forEach(element => {
    const randomMovement = getRandomInt(-50, 50); // Random movement between 1 and 5 pixels
    const randomTime = getRandomInt(1, 1000); // Random delay between 1 and 1000 milliseconds (1 second)

    element.style.transform = `translateY(${randomMovement}px)`; // Apply random downward movement

    setTimeout(() => {
      // Randomly decide between changing color or image
      if (Math.random() < 0.5) { // 50% chance of changing color
        element.style.backgroundColor = getRandomColor(); // Set random background color
      } else { // 50% chance of changing image
        if (element.tagName === 'IMG') { // Check if it's an image element
          element.src = `https://picsum.photos/200/300?random=${Date.now()}`; // Set random image from Picsum with cache busting
        }
      }
    }, randomTime);
  });
}
setInterval(scrambleElements, 1000); // Call every second
