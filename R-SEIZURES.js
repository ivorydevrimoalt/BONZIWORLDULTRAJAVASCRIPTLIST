(function () {
    // ----- FULLSCREEN SETUP -----
    document.body.style.margin = "0";
    document.body.style.overflow = "hidden";
    document.body.style.background = "black";

    // ----- CANVAS FOR RAINBOW -----
    const canvas = document.createElement("canvas");
    document.body.appendChild(canvas);
    canvas.style.position = "fixed";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.zIndex = "2147483646"; // just below the text
    const ctx = canvas.getContext("2d");

    let cw = canvas.width = window.innerWidth;
    let ch = canvas.height = window.innerHeight;

    // ----- COUNTDOWN TEXT -----
    const countdown = document.createElement("div");
    countdown.style.position = "fixed";
    countdown.style.top = "50%";
    countdown.style.left = "50%";
    countdown.style.transform = "translate(-50%, -50%) scaleY(1)";
    countdown.style.fontSize = "120px";
    countdown.style.fontWeight = "bold";
    countdown.style.fontFamily = "Arial, sans-serif";
    countdown.style.color = "black";
    countdown.style.zIndex = "2147483647"; // on top of everything
    countdown.style.pointerEvents = "none";
    countdown.style.whiteSpace = "nowrap"; // prevents line breaks
    document.body.appendChild(countdown);

    let time = 30;
    countdown.textContent = (time + " ").repeat(15).trim();

    // ----- RAINBOW GRADIENT CANVAS -----
    let rainbowHeightDynamic = ch * 2; // initial height for the rainbow
    const rainbowCanvas = document.createElement("canvas");
    rainbowCanvas.width = cw;
    rainbowCanvas.height = rainbowHeightDynamic;
    const rctx = rainbowCanvas.getContext("2d");

    const colors = ["red", "orange", "yellow", "lime", "cyan", "blue", "violet"];
    function drawRainbow() {
        const gradient = rctx.createLinearGradient(0, 0, 0, rainbowCanvas.height);
        colors.forEach((c, i) => gradient.addColorStop(i / colors.length, c));
        gradient.addColorStop(1, colors[0]); // seamless wrap
        rctx.fillStyle = gradient;
        rctx.fillRect(0, 0, cw, rainbowCanvas.height);
    }
    drawRainbow();

    let offset = 0;
    let speed = 0.5; // initial scroll speed

    // ----- COUNTDOWN TIMER -----
    const timer = setInterval(() => {
        time--;
        countdown.textContent = (time + " ").repeat(15).trim();
        if (time <= 0) {
            clearInterval(timer);
            window.location.href = "https://bonziworld-avalon.onrender.com";
        }
    }, 1000);

    // ----- AUDIO SETUP -----
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const ps = [1.49, 1.5, 1.51];
    const n = 7;
    const fundamental = 220;
    const cycleLength = 47; // seconds

    const masterGain = audioCtx.createGain();
    masterGain.gain.value = 1;
    masterGain.connect(audioCtx.destination);

    function startCycle(startTime) {
        ps.forEach((p) => {
            for (let i = 0; i < n; i++) {
                const pPow = Math.pow(p, i);
                createOsc(fundamental * pPow, startTime);
                if (i > 0) createOsc(fundamental / pPow, startTime);
            }
        });
    }

    function createOsc(freq, startTime) {
        const osc = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();

        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, startTime);

        const endTime = startTime + cycleLength;
        osc.frequency.exponentialRampToValueAtTime(freq * Math.pow(1.04, 128), endTime);

        gainNode.gain.value = 1 / (n * ps.length);

        osc.connect(gainNode);
        gainNode.connect(masterGain);

        osc.start(startTime);
        osc.stop(endTime);
    }

    // start immediately
    startCycle(audioCtx.currentTime);
    // schedule infinite looping
    setInterval(() => {
        startCycle(audioCtx.currentTime);
    }, cycleLength * 1000);

    // ----- ANIMATION LOOP -----
    let textScaleY = 1; // starting vertical scale
    const maxTextScaleY = 20; // allows text to grow way taller than screen

    function animate() {
        // ----- RAINBOW HEIGHT GROWTH -----
        rainbowHeightDynamic += 0.3; // gradual height increase
        if (rainbowHeightDynamic > ch * 8) rainbowHeightDynamic = ch * 8;
        if (rainbowCanvas.height !== rainbowHeightDynamic) {
            rainbowCanvas.height = rainbowHeightDynamic;
            drawRainbow();
        }

        // ----- RAINBOW SCROLL -----
        offset -= speed;
        if (offset <= -rainbowHeightDynamic) offset = 0;

        const yPos = offset % rainbowHeightDynamic;
        ctx.clearRect(0, 0, cw, ch);
        ctx.drawImage(rainbowCanvas, 0, yPos, cw, rainbowHeightDynamic);
        if (yPos + rainbowHeightDynamic < ch) {
            ctx.drawImage(rainbowCanvas, 0, yPos + rainbowHeightDynamic, cw, rainbowHeightDynamic);
        }

        // ----- ACCELERATE SCROLL -----
        speed += 0.5;

        // ----- COUNTDOWN TEXT SCALE AND SHAKE -----
        if (textScaleY < maxTextScaleY) textScaleY += 0.001; // gradually stretch taller
        const shakeY = (30 - time) * 2.5; // shake grows as countdown decreases
        const yShake = (Math.random() - 0.5) * shakeY;

        // move text off screen eventually
        const translateY = -50 - textScaleY * 10; // push upward over time
        countdown.style.transform = `translate(-50%, ${translateY + yShake}px) scaleY(${textScaleY})`;

        requestAnimationFrame(animate);
    }
    animate();

    // ----- HANDLE RESIZE -----
    window.addEventListener("resize", () => {
        cw = canvas.width = window.innerWidth;
        ch = canvas.height = window.innerHeight;

        rainbowCanvas.width = cw;
        if (rainbowHeightDynamic < ch * 2) rainbowHeightDynamic = ch * 2;
        drawRainbow();
    });
})();
