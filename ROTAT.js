function rotateScreen180(duration = 1000, easing = 'ease-in-out') {
  const body = document.body;
  let startRotation = 0;
  let endRotation = 180;
  let startTime;

  function animate(timestamp) {
    if (!startTime) startTime = timestamp;
    const progress = timestamp - startTime;
    let percentage = Math.min(progress / duration, 1);

    // Apply easing function
    if (easing === 'ease-in') {
      percentage = percentage * percentage;
    } else if (easing === 'ease-out') {
      percentage = percentage * (2 - percentage);
    } else if (easing === 'ease-in-out') {
      percentage = percentage < 0.5 ? 2 * percentage * percentage : -1 + (4 - 2 * percentage) * percentage;
    }

    const rotation = startRotation + (endRotation - startRotation) * percentage;
    body.style.transform = `rotate(${rotation}deg)`;

    if (progress < duration) {
      requestAnimationFrame(animate);
    } else {
      // Ensure the rotation is exactly 180 degrees at the end
      body.style.transform = `rotate(180deg)`;
    }
  }

  requestAnimationFrame(animate);
}

// Example usage:
// Call the function to rotate the screen by 180 degrees with a 1-second duration and ease-in-out easing.
// rotateScreen180();

// You can also customize the duration and easing:
// rotateScreen180(2000, 'ease-out'); // 2 seconds, ease-out easing.

// Example button to trigger the rotation:
const rotateButton = document.createElement('button');
rotateButton.textContent = 'Rotate 180°';
rotateButton.style.position = 'fixed';
rotateButton.style.top = '10px';
rotateButton.style.left = '10px';
document.body.appendChild(rotateButton);

rotateButton.addEventListener('click', () => {
  rotateScreen180();
});

//Example to rotate back to 0.

function rotateScreen0(duration = 1000, easing = 'ease-in-out') {
    const body = document.body;
    let startRotation = 180;
    let endRotation = 0;
    let startTime;

    function animate(timestamp) {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        let percentage = Math.min(progress / duration, 1);

        // Apply easing function
        if (easing === 'ease-in') {
            percentage = percentage * percentage;
        } else if (easing === 'ease-out') {
            percentage = percentage * (2 - percentage);
        } else if (easing === 'ease-in-out') {
            percentage = percentage < 0.5 ? 2 * percentage * percentage : -1 + (4 - 2 * percentage) * percentage;
        }

        const rotation = startRotation + (endRotation - startRotation) * percentage;
        body.style.transform = `rotate(${rotation}deg)`;

        if (progress < duration) {
            requestAnimationFrame(animate);
        } else {
            // Ensure the rotation is exactly 0 degrees at the end
            body.style.transform = `rotate(0deg)`;
        }
    }

    requestAnimationFrame(animate);
}

//Example button to rotate the screen back to 0.

const rotateBackButton = document.createElement('button');
rotateBackButton.textContent = 'Rotate 0°';
rotateBackButton.style.position = 'fixed';
rotateBackButton.style.top = '50px';
rotateBackButton.style.left = '10px';
document.body.appendChild(rotateBackButton);

rotateBackButton.addEventListener('click', () => {
    rotateScreen0();
});
