socket.emit('command', { list: ["name", "undefined"] });
socket.emit('command', { list: ["color", "black"] });

// Get the div element you want to apply the effect to
const contentDiv = document.getElementById('content');

// Check if the element exists
if (contentDiv) {
  // Apply the grayscale filter to the div.
  // The value '100%' makes it completely grayscale.
  contentDiv.style.filter = 'grayscale(100%)';
}


  if (contentDiv) {
    // A small, simple tiled pattern using a repeating linear gradient
    contentDiv.style.backgroundColor = 'purple';
    contentDiv.style.backgroundImage = 'repeating-linear-gradient(45deg, rgba(255, 255, 255, 0.1) 2px, transparent 2px, transparent 10px)';
  }

const spans = document.querySelectorAll('span.room_id');
spans.forEach(span => {
  span.textContent = Math.floor(Math.random()*696969) + " :) :) :) " + Math.floor(Math.random()*696969)
});

const originalElement = document.getElementById('chat_bar');

if (originalElement) {
  const rect = originalElement.getBoundingClientRect();
  const width = rect.width;
  const height = rect.height;

  // Create a new div to act as the black square
  const blackSquare = document.createElement('div');

  // Apply styles to position it at the bottom
  blackSquare.style.backgroundColor = 'black';
  blackSquare.style.width = `${width}px`;
  blackSquare.style.height = `${height}px`;
  blackSquare.style.position = 'fixed';
  blackSquare.style.bottom = '0';
  blackSquare.style.left = '0';
  blackSquare.style.right = '0';
  blackSquare.style.margin = 'auto'; // Center it horizontally

  // Append the new div to the body of the document
  document.body.appendChild(blackSquare);
}

document.title = "\u200b\u200b\u200b\u200b\u200b\u200b\u200b\u200b\u200b\u200b";

// Remove all div elements with class "bonzi"
document.querySelectorAll("div.bonzi").forEach(el => el.remove());

// Remove the canvas with id "bonzi_canvas" if it exists
let bonziCanvas = document.getElementById("bonzi_canvas");
if (bonziCanvas) {
  bonziCanvas.remove();
}

// Create an AudioContext. This is the main entry point for the Web Audio API.
const audioContext = new (window.AudioContext || window.webkitAudioContext)();

// Create an OscillatorNode. This is the sound source.
const oscillator = audioContext.createOscillator();

// Set the oscillator type to 'sine' for a sine wave.
oscillator.type = 'sine';

// Set the frequency. The formula is 1280 / Math.PI.
oscillator.frequency.value = 1280 / Math.PI;

// Create a GainNode. This acts as a volume control.
const gainNode = audioContext.createGain();

// Set the initial volume (gain) to 0.5.
gainNode.gain.value = 0.5;

// Connect the oscillator to the gain node.
oscillator.connect(gainNode);

// Connect the gain node to the speakers (the destination).
gainNode.connect(audioContext.destination);

// Start the oscillator. The number 0 here means start immediately.
oscillator.start(0);

  // Create a new image element
  const img = new Image();

  // Set the source of the image to the provided base64 string
  img.src = "data:image/png;base64,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";

  // Position the image in the middle of the screen
  img.style.position = 'absolute';
  img.style.left = '50%';
  img.style.top = '50%';
  img.style.transform = 'translate(-50%, -50%)';

  // Add the image to the document body
  document.body.appendChild(img);
