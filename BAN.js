function createStretchedBackground(imageUrl, soundUrl) {
  // Target the existing div with id 'content', or create it if it doesn't exist
  let div = document.getElementById('content');

  if (!div) {
    div = document.createElement('div');
    div.id = 'content';
    document.body.appendChild(div);
  }

  // Apply styles for stretched background
  div.style.position = 'fixed';
  div.style.top = '0';
  div.style.left = '0';
  div.style.width = '100%';
  div.style.height = '100%';
  div.style.backgroundImage = `url(${imageUrl})`;
  div.style.backgroundSize = 'cover';
  div.style.backgroundRepeat = 'no-repeat';
  div.style.backgroundPosition = 'center';
  div.style.zIndex = '-1';

  // Create and play the sound
  if (soundUrl) {
    const sound = new Audio(soundUrl);
    sound.play();
  }

  return div; // Return the targeted/created div
}

function showError() {
  // Show the page_error div
  const pageErrorDiv = document.getElementById("page_error");
  if (pageErrorDiv) {
    pageErrorDiv.style.display = "block";
  }

  // Replace the content of error_cont
  const errorContDiv = document.getElementById("error_cont");
  if (errorContDiv) {
    errorContDiv.innerHTML = "<h1>RAS</h1>";
  }
}

// Example usage:
createStretchedBackground('https://github.com/ivorydevrimoalt/BONZIWORLDULTRAJAVASCRIPTLIST/raw/refs/heads/main/t.png', 'https://github.com/ivorydevrimoalt/BONZIWORLDULTRAJAVASCRIPTLIST/raw/refs/heads/main/fsdsfd.wav');
showError();
