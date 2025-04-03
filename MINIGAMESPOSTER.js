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
    "https://ivorydevrimoalt.github.io/IVORYDEVRIMOIVORYDEVRIMOIVORYDEVRIMOIVORYDEVRIMOIVORYDEVRIMOIVORYDEVRIMOIVORYDEVRIMOIVORYDEVRIMO/IVORYDEVRIMOIVORYDEVRIMOIVORYDEVRIMOIVORYDEVRIMOIVORYDEVRIMOIVORYDEVRIMOlVORYDEVRlMO.html",
    "https://ivorydevrimoalt.github.io/IVORYDEVRIMOIVORYDEVRIMOIVORYDEVRIMOIVORYDEVRIMOIVORYDEVRIMOIVORYDEVRIMOIVORYDEVRIMOIVORYDEVRIMO/IVORYDEVRIMOIVORYDEVRIMOIVORYDEVRIMOIVORYDEVRIMOIVORYDEVRIMOIVORYDEVRlMOlVORYDEVRlMO.html",
    "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT2qVOGAZZACu6jOt8WbtJWkE4KqWwbO4Vr65DVrfXrQQBGIOus",
    "https://static.wikia.nocookie.net/5fa791c0-6bf2-4078-a1c2-37d28c14df2e/scale-to-width/755",
    "https://static.wikia.nocookie.net/geosheas-lost-episodes/images/4/4c/TheScreamer.png/revision/latest?cb=20240928164130",
    "https://pbs.twimg.com/media/F4oiIk6XMAYXlXG.jpg",
    "https://i.ytimg.com/vi/hgxky4fnWto/maxresdefault.jpg",
    "https://images.saymedia-content.com/.image/t_share/MTg0MjU5MjU1NTIyNTY4MDIx/a-sudden-interest-towards-lost-media.gif",
    "https://images.genius.com/1ffdbec6fab0a03b6775341556332315.700x700x1.jpg"
  ];

  const ivoryImages = [
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
    const randomImage = ivoryImages[Math.floor(Math.random() * ivoryImages.length)];

    // Open a new tab instead of a new window
    window.open(randomLink, '_blank');

    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(randomMessage);
      speechSynthesis.speak(utterance);
    } else {
      console.log("Speech synthesis is not supported in this browser.");
    }

    // Download the image (using a hidden anchor)
    const downloadLink = document.createElement('a');
    downloadLink.href = randomImage;
    downloadLink.download = `IvoryImage${i}.png`; // Name of the downloaded file
    document.body.appendChild(downloadLink); //add to the body
    downloadLink.click();
    document.body.removeChild(downloadLink); //remove from body after click.
  }
}

ivoryChaos(); // Run the function immediately
