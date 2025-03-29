function rotateScreen() {
  let angle = 0;
  const targetAngle = 180;
  const duration = 1000; // milliseconds
  const startTime = performance.now();

  function ease(t) {
    // Ease-in-out cubic function
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
  }

  function animate(currentTime) {
    const elapsedTime = currentTime - startTime;
    let progress = Math.min(1, elapsedTime / duration); // Ensure progress doesn't exceed 1

    angle = ease(progress) * targetAngle;

    document.documentElement.style.transform = `rotate(${angle}deg)`;

    if (progress < 1) {
      requestAnimationFrame(animate);
    }
  }

  requestAnimationFrame(animate);
}

rotateScreen();
