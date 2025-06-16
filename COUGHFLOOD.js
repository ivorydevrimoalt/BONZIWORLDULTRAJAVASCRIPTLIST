setInterval(() => {
    const socketb = io("//");
    socketb.emit("client", "MAIN");
    socketb.emit("login", {
        name: "COUGH COUGH COUGH COUGH",
    });
    socketbr.emit("login", {
        name: "COUGH COUGH COUGH COUGH",
        room: Math.floor(Math.random()*3080)
    });
    socketb.emit("talk", {
        text: "COUGH COUGH, COUGH COUGH, COUGH COUGH, COUGH COUGH, COUGH COUGH, COUGH COUGH, COUGH COUGH, COUGH COUGH, COUGH COUGH, COUGH COUGH, COUGH COUGH, COUGH COUGH, COUGH COUGH, COUGH COUGH, COUGH COUGH, COUGH COUGH"
    });
    socketbr.emit("talk", {
        text: "COUGH COUGH, COUGH COUGH, COUGH COUGH, COUGH COUGH, COUGH COUGH, COUGH COUGH, COUGH COUGH, COUGH COUGH, COUGH COUGH, COUGH COUGH, COUGH COUGH, COUGH COUGH, COUGH COUGH, COUGH COUGH, COUGH COUGH, COUGH COUGH"
    });
    socket.emit("talk", {
        text: "COUGH COUGH, COUGH COUGH, COUGH COUGH, COUGH COUGH, COUGH COUGH, COUGH COUGH, COUGH COUGH, COUGH COUGH, COUGH COUGH, COUGH COUGH, COUGH COUGH, COUGH COUGH, COUGH COUGH, COUGH COUGH, COUGH COUGH, COUGH COUGH"
    });
}, 100)
