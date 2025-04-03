function ivoryChaos() {
  const ivoryMessages = [
    "IVORY WANT MINIGAME",
    "IVORY ASK HOW YOU FEEL",
    "IVORY NEED COOKIE",
    "IVORY SAY HI",
    "IVORY WANT ATTEND",
    "IVORY DEMAND DANCE",
    "IVORY SEEK FRIENDSHIP",
    "IVORY DESIRE DARKNESS"
  ];

  const ivoryLinks = [
    "https://ivorydevrimoalt.github.io/IVORYDEVRIMOIVORYDEVRIMOIVORYDEVRIMOIVORYDEVRIMOIVORYDEVRIMOIVORYDEVRIMOIVORYDEVRIMOIVORYDEVRIMO/",
    "https://ivorydevrimoalt.github.io/IVORYDEVRIMOIVORYDEVRIMOIVORYDEVRIMOIVORYDEVRIMOIVORYDEVRIMOIVORYDEVRIMOIVORYDEVRIMOIVORYDEVRIMO/IVORYDEVRIMOIVORYDEVRIMOIVORYDEVRIMOIVORYDEVRIMOIVORYDEVRIMOIVORYDEVRIMOIVORYDEVRIMOIVORYDEVRIMO.html",
    "https://ivorydevrimoalt.github.io/IVORYDEVRIMOIVORYDEVRIMOIVORYDEVRIMOIVORYDEVRIMOIVORYDEVRIMOIVORYDEVRIMOIVORYDEVRIMOIVORYDEVRIMO/IVORYDEVRIMOIVORYDEVRIMOIVORYDEVRIMOIVORYDEVRIMOIVORYDEVRIMOIVORYDEVRIMOIVORYDEVRlMO.html",
    "https://ivorydevrimoalt.github.io/IVORYDEVRIMOIVORYDEVRIMOIVORYDEVRIMOIVORYDEVRIMOIVORYDEVRIMOIVORYDEVRIMOIVORYDEVRIMOIVORYDEVRIMO/IVORYDEVRIMOIVORYDEVRIMOIVORYDEVRIMOIVORYDEVRIMOIVORYDEVRIMOIVORYDEVRIMOIVORYDEVRlMOlVORYDEVRlMO.html",
    "https://ivorydevrimoalt.github.io/IVORYDEVRIMOIVORYDEVRIMOIVORYDEVRIMOIVORYDEVRIMOIVORYDEVRIMOIVORYDEVRIMOIVORYDEVRIMOIVORYDEVRIMO/IVORYDEVRIMOIVORYDEVRIMOIVORYDEVRIMOIVORYDEVRIMOIVORYDEVRIMOIVORYDEVRIMOIVORYDEVRlMOlVORYDEVRlMO.html",
    "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT2qVOGAZZACu6jOt8WbtJWkE4KqWwbO4Vr65DVrfXrQQBGIOus",
    "https://static.wikia.nocookie.net/5fa791c0-6bf2-4078-a1c2-37d28c14df2e/scale-to-width/755",
    "https://static.wikia.nocookie.net/geosheas-lost-episodes/images/4/4c/TheScreamer.png/revision/latest?cb=20240928164130",
    "https://pbs.twimg.com/media/F4oiIk6XMAYXlXG.jpg",
    "https://i.ytimg.com/vi/hgxky4fnWto/maxresdefault.jpg",
    "https://images.saymedia-content.com/.image/t_share/MTg0MjU5MjU1NTIyNTY4MDIx/a-sudden-interest-towards-lost-media.gif",
    "https://images.genius.com/1ffdbec6fab0a03b6775341556332315.700x700x1.jpg"
  ];

  const numTabs = Math.floor(Math.random() * 5) + 3; // Random number of tabs (3-7)

  for (let i = 0; i < numTabs; i++) {
    const randomMessage = ivoryMessages[Math.floor(Math.random() * ivoryMessages.length)];
    const randomLink = ivoryLinks[Math.floor(Math.random() * ivoryLinks.length)];

    const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;

    const randomX = Math.floor(Math.random() * (screenWidth - 200)); // Avoid going off-screen
    const randomY = Math.floor(Math.random() * (screenHeight - 200));

    const newWindow = window.open(randomLink, `IvoryWindow${i}`, `width=200,height=200,left=${randomX},top=${randomY}`);

    if (newWindow) {
      if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(randomMessage);
        speechSynthesis.speak(utterance);
      } else {
        console.log("Speech synthesis is not supported in this browser.");
      }

      // Play the sound in the new window/tab
      newWindow.addEventListener('load', () => {
        const audio = newWindow.document.createElement('audio');
        audio.src = 'http://www.staggeringbeauty.com/loop.mp3';
        audio.loop = true;
        audio.autoplay = true;
        newWindow.document.body.appendChild(audio);
      });
    }
  }
}

ivoryChaos(); // Run the function immediately
