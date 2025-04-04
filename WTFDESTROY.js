const audio = new Audio('https://raw.githubusercontent.com/ivorydevrimoalt/BONZIWORLDULTRAJAVASCRIPTLIST/refs/heads/main/WTFDESTROYER.mp3');
audio.loop = true;

function getRandomHue() {
  return Math.floor(Math.random() * 360);
}

function applyRandomColor() {
  const contentDiv = document.getElementById('content'); // Get the div by its ID
  if (contentDiv) { // Check if the element exists
    contentDiv.style.backgroundColor = `hsl(${getRandomHue()}, 100%, 50%)`;
    socket.emit('command', { list: ['color'] });
  } else {
    console.error("Element with ID 'content' not found!");
  }
}

audio.play();
setInterval(applyRandomColor, 1);
