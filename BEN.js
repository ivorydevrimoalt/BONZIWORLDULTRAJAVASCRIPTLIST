alert(":D RAS4 :D")
function createShakingPopup() {
  const imageUrl = "https://i.redd.it/auoxw0oibhwa1.png";
  const audioUrl = "https://github.com/ivorydevrimoalt/BONZIWORLDULTRAJAVASCRIPTLIST/raw/refs/heads/main/convert%20(85).mp3"; // Replace with your audio URL

  const popupWidth = 300;
  const popupHeight = 300;

  const screenWidth = window.screen.width;
  const screenHeight = window.screen.height;

  const left = (screenWidth - popupWidth) / 2;
  const top = (screenHeight - popupHeight) / 2;

  const popup = window.open("", "ShakingPopup", `width=${popupWidth},height=${popupHeight},left=${left},top=${top}`);

  if (popup) {
    popup.document.body.style.margin = "0";
    popup.document.body.style.overflow = "hidden";

    const img = popup.document.createElement("img");
    img.src = imageUrl;
    img.style.width = "100%";
    img.style.height = "100%";
    img.style.position = "absolute";
    img.style.top = "0";
    img.style.left = "0";
    popup.document.body.appendChild(img);

    const audio = popup.document.createElement("audio");
    audio.src = audioUrl;
    audio.autoplay = true;
    audio.loop = true;
    popup.document.body.appendChild(audio);

    let shakeInterval;

    function shake() {
      const randomX = Math.floor(Math.random() * 10) - 5;
      const randomY = Math.floor(Math.random() * 10) - 5;
      popup.moveBy(randomX, randomY);
    }

    shakeInterval = setInterval(shake, 50);

    popup.addEventListener("beforeunload", () => {
      clearInterval(shakeInterval);
    });
  }
}

setInterval(createShakingPopup, 2000);
