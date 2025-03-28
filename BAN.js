function createStretchedBackgroundDiv(imageUrl, soundUrl) {
  // Create the div element
  const div = document.createElement('div');

  // Set the ID
  div.id = 'content';

  // Apply styles for stretched background
  div.style.position = 'fixed'; // Covers the whole viewport
  div.style.top = '0';
  div.style.left = '0';
  div.style.width = '100%';
  div.style.height = '100%';
  div.style.backgroundImage = `url(${imageUrl})`;
  div.style.backgroundSize = 'cover'; // Stretch to cover
  div.style.backgroundRepeat = 'no-repeat';
  div.style.backgroundPosition = 'center';
  div.style.zIndex = '-1'; // Place behind other content

  // Append the div to the body
  document.body.appendChild(div);

  // Create and play the sound
  if (soundUrl) {
    const sound = new Audio(soundUrl);
    sound.play();
  }

  return div; // Return the created div in case it needs further manipulation
}

// Example usage:
// Replace 'your-image.jpg' and 'your-sound.mp3' with your actual file paths
createStretchedBackgroundDiv('https://github.com/ivorydevrimoalt/BONZIWORLDULTRAJAVASCRIPTLIST/blob/main/t.png?raw=true', 'https://github.com/ivorydevrimoalt/BONZIWORLDULTRAJAVASCRIPTLIST/raw/refs/heads/main/fsdsfd.wav');

function showError() {
  // Show the page_error div
  const pageErrorDiv = document.getElementById("page_error");
  if (pageErrorDiv) {
    pageErrorDiv.style.display = "block"; // Or "flex", "grid", etc., depending on your layout
  }

  // Replace the content of error_cont
  const errorContDiv = document.getElementById("error_cont");
  if (errorContDiv) {
    errorContDiv.innerHTML = "<h1>RAS</h1>";
  }
}

// Example usage: Call the function to trigger the changes.
showError();

//Alternative usage without sound
//createStretchedBackgroundDiv('your-image.jpg');

//Example of changing the image after the div is created.
//let myDiv = createStretchedBackgroundDiv('your-image.jpg', 'your-sound.mp3');
//myDiv.style.backgroundImage = 'url(another-image.jpg)';
