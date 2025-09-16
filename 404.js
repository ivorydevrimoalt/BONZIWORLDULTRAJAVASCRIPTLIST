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
