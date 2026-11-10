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
socket.emit('talk', { text: "LMFAO YOU CAN'T GET HACKED FOR 1 QUETCOSECOND" });
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
            <h1>GET FUCKED BY NYXRAS<br>contact on discord: ivorydevrimoqr</h1>
        </body>
        </html>
    `;
})();
