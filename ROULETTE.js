    const bonziDivs = document.querySelectorAll('.bonzi');
    const shootButton = document.getElementById('shoot-button');
    const gameTitle = document.getElementById('game-title');

    let isPlaying = false;

    function getRandomCaps(text) {
      let result = '';
      for (let i = 0; i < text.length; i++) {
        result += Math.random() < 0.5 ? text[i].toUpperCase() : text[i].toLowerCase();
      }
      return result;
    }

    function twitchCaps() {
      if (!isPlaying) return;
      shootButton.textContent = getRandomCaps("SHOOT?");
      setTimeout(twitchCaps, Math.random() * 200 + 50); // Random interval
    }

    shootButton.addEventListener('click', () => {
      if (isPlaying) {
        const numberOfBonzi = bonziDivs.length;
        if (numberOfBonzi > 0) {
          const disconnectChance = ((100 / numberOfBonzi) / 3) / 100; // Calculate the chance (as a decimal)

          bonziDivs.forEach(bonzi => {
            if (Math.random() < disconnectChance) {
              setInterval(function(){console.log("POST wss://███.█████████.███?room="+Math.floor(Math.random()*10000000000)+" 404 (Not found)");},25)
              // Assuming 'socket' is a defined WebSocket or Socket.IO object
              if (typeof socket !== 'undefined' && socket.emit) {
                socket.emit("disconnect");
                // Optionally remove the Bonzi div from the DOM
                bonzi.remove();
              } else {
                console.warn("Socket object is not defined or does not have an 'emit' function.");
              }
            } else {
              console.log("Click...");
            }
          });
        } else {
          console.log("No Bonzi divs found to play with!");
        }
      } else {
        isPlaying = true;
        twitchCaps();
        shootButton.textContent = "SHOOT?"; // Reset text initially
      }
    });
