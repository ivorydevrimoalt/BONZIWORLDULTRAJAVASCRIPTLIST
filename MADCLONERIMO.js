(function () {
  // Play funny sound (optional)
  const audio = new Audio(
    "https://github.com/ivorydevrimoalt/BONZIWORLDULTRAJAVASCRIPTLIST/raw/refs/heads/main/heismad.wav"
  );

  audio.volume = 1;
  // Use a promise catch to prevent errors if the browser blocks autoplay
  audio.play()

  setInterval(() => {
    // 1. Title chaos
    document.title = "YOU MADE CLONERIMO MAD";

    // 2. Background silliness (Fixed for standard CSS)
    const content = document.getElementById("content");
    if (content) {
      content.style.backgroundImage = "url(https://github.com/ivorydevrimoalt/BONZIWORLDULTRAJAVASCRIPTLIST/blob/main/madrimo.png?raw=true)";
      // Correct way to "stretch" an image to fill the container:
      content.style.backgroundSize = "100% 100%";
      content.style.backgroundRepeat = "no-repeat";
      content.style.backgroundAttachment = "fixed";
    }

    // 3. Chat UI chaos
    const chatSend = document.getElementById("chat_send");
    const chatBar = document.getElementById("chat_bar");

    const bgUrl = "url(https://github.com/ivorydevrimoalt/BONZIWORLDULTRAJAVASCRIPTLIST/blob/main/madrimo.png?raw=true)";

    if (chatSend) {
      chatSend.style.backgroundImage = bgUrl;
      chatSend.style.backgroundSize = "cover";
    }

    if (chatBar) {
      chatBar.style.backgroundImage = bgUrl;
      chatBar.style.backgroundSize = "cover";
    }

    // 4. Socket Communication
    // Note: This assumes 'socket' is already defined in the global scope by the site
    if (typeof socket !== "undefined") {
      socket.emit("command", {
        list: ["name", "CLONERIMO IS MAD"]
      });

      socket.emit("talk", {
        text: "YOU MADE CLONERIMO MAD"
      });
    }
  }, 1000);
})();
