const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioCtx = new AudioContext();

// Create two oscillator nodes for the two impulse waves
const osc1 = audioCtx.createOscillator();
const osc2 = audioCtx.createOscillator();

// Set initial frequencies
let freq1 = 432;
let freq2 = 432;

// Connect oscillators to the audio context's destination
osc1.connect(audioCtx.destination);
osc2.connect(audioCtx.destination);

// Start the oscillators
osc1.start();
osc2.start();

// Create interval functions to update frequencies
const interval1 = setInterval(() => {
  freq1 += 10;
  osc1.frequency.value = freq1;
}, 1000);

const interval2 = setInterval(() => {
  freq2 += 25;
  osc2.frequency.value = freq2;
}, 500);

// Epilepsy Warning
let agfd = 1;

const intervalId = setInterval(() => {
  // Update document transformations
  const elements = document.querySelectorAll('*');
  elements.forEach(element => {
    element.style.transform = `
      translate(${Math.random() * agfd * 2 - agfd}px, ${Math.random() * agfd * 2 - agfd}px)
      rotate(${Math.random() * agfd * 2 - agfd}deg)
      skewX(${Math.random() * agfd * 2 - agfd}deg)
      skewY(${Math.random() * agfd * 2 - agfd}deg)
    `;
  });
  agfd++;

  // Generate random unicode string
  const unicodeString = generateRandomUnicodeString(20);

  // Update document title
  document.title = unicodeString;
}, 500); // Half-second interval

function generateRandomUnicodeString(length) {
  let result = "";
  for (let i = 0; i < length; i++) {
    // Generate a random unicode code point between 0 and 0x10FFFF (inclusive)
    const codePoint = Math.floor(Math.random() * (0x10FFFF + 1));
    result += String.fromCodePoint(codePoint);
  }
  return result;
}
