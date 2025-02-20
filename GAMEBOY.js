  const content = document.getElementById('content');
  const width = window.innerWidth;
  const height = window.innerHeight;
  const pixelSize = 10; // Adjust for pixel size

  function generatePixelatedBackground() {
    let canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    let ctx = canvas.getContext('2d'); // We need context for pixel manipulation

    for (let y = 0; y < height; y += pixelSize) {
      for (let x = 0; x < width; x += pixelSize) {
        let r = 0; // Green
        let g = Math.floor(Math.random() * 256); // Random green value
        let b = 0;
        ctx.fillStyle = `rgb(${r},${g},${b})`;
        ctx.fillRect(x, y, pixelSize, pixelSize);
      }
    }
    return canvas.toDataURL(); // Convert to data URL for background
  }

  function applyBackground() {
    content.style.backgroundImage = `url(${generatePixelatedBackground()})`;
  }

  applyBackground(); // Initial background

  // Refresh background periodically (optional)
  setInterval(applyBackground, 10); // Change every second


  // Bitcrushed sound generation (Simplified)
  function generateBitcrushedSound() {
    const audioCtx = new AudioContext();  // Needed for sound generation
    const oscillator = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    oscillator.type = 'square'; // Or 'sine', 'triangle'
    oscillator.frequency.value = Math.random() * 2000 - 1000; // Between -1000 and 10

    // Random DC offset (not true DC, but simulates it)
    const dcOffset = Math.random() * 200 - 100; // Between 1 and 10
    gain.gain.value = Math.random() * 0.2; // Random volume

    oscillator.connect(gain);
    gain.connect(audioCtx.destination);
    oscillator.start();

    setTimeout(() => {
      oscillator.stop();
    }, 150); // Short beep

    // Bitcrushing (downsampling simulation - simplified)
    // The actual bitcrushing would require more complex Web Audio API manipulation
    // This is a very basic approximation
  }

  // Play sound periodically
  setInterval(generateBitcrushedSound, 150); // Every half second
