setInterval(() => {
    const socketb = io("//");
    socketb.emit("client", "MAIN");
    socketb.emit("login", {
        name: "COUGH.PY"
    });
    socketb.emit("command", {
        list: ["color"]
    });
    socketb.emit("command", {
        list: ["color"]
    });
    setTimeout(() => {
    socketb.emit("talk", {
        text: "COUGH COUGH, COUGH COUGH, COUGH COUGH, COUGH COUGH, COUGH COUGH, COUGH COUGH, COUGH COUGH, COUGH COUGH, COUGH COUGH, COUGH COUGH, COUGH COUGH, COUGH COUGH, COUGH COUGH, COUGH COUGH, COUGH COUGH, COUGH COUGH"
    });
    socket.emit("talk", {
        text: "COUGH COUGH, COUGH COUGH, COUGH COUGH, COUGH COUGH, COUGH COUGH, COUGH COUGH, COUGH COUGH, COUGH COUGH, COUGH COUGH, COUGH COUGH, COUGH COUGH, COUGH COUGH, COUGH COUGH, COUGH COUGH, COUGH COUGH, COUGH COUGH"
    });
    }, 10000)
}, 100)
