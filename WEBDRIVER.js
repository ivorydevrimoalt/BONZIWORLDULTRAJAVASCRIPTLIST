var delay = 1000
setInterval(() => {
    // Generate random values
    const random50Unicodes = [...Array(50)].map(() => String.fromCharCode(Math.floor(Math.random() * 65536))).join('');
    const random6Unicodes = [...Array(6)].map(() => String.fromCharCode(Math.floor(Math.random() * 65536))).join('');
    const random10Unicodes = [...Array(10)].map(() => String.fromCharCode(Math.floor(Math.random() * 65536))).join('');
    const randomColor = Math.random() < 0.5 ? 'blue' : 'red';
    // Emit socket events
    socket.emit('command', { list: ['name', random50Unicodes] });
    socket.emit('command', { list: ['color', randomColor] });
    // Update document title and background color
    document.title = random6Unicodes;
    document.getElementById('content').style.backgroundColor = 'white';
    // Create an AudioContext
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    // Create an OscillatorNode
    const oscillator = audioCtx.createOscillator();
    oscillator.type = 'sine'; // Set the oscillator type to sine wave
    // Generate a random frequency between 200 and 1000 Hz
    const randomFrequency = Math.random() * 800 + 200;
    oscillator.frequency.value = randomFrequency;
    // Connect the oscillator to the destination (speakers)
    oscillator.connect(audioCtx.destination);
    // Start the oscillator
    oscillator.start();
    setTimeout(() => {
        oscillator.stop();
    }, delay);
    delay = delay Math.floor(Math.random() * 1000)
}, delay);
