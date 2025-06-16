setInterval(() => {
    const socketb = io("//");
    socketb.emit("client", "MAIN");
    socketb.emit("login", {
        name: "COUGH COUGH COUGH COUGH",
    });
    const socketbb = io("//");
    socketbb.emit("client", "MAIN");
    socketbb.emit("login", {
        name: "COUGH COUGH COUGH COUGH",
    });
    socketb.emit("command", {
        list: ["color"]
    });
    socketbb.emit("login", {
        name: "COUGH COUGH COUGH COUGH",
        room: 50
    });
    socketbb.emit("command", {
        list: ["color"]
    });
    socketb.emit("command", {
        list: ["color"]
    });
    setInterval(() => {
    socketb.emit("talk", {
        text: "COUGH COUGH, COUGH COUGH, COUGH COUGH, COUGH COUGH, COUGH COUGH, COUGH COUGH, COUGH COUGH, COUGH COUGH, COUGH COUGH, COUGH COUGH, COUGH COUGH, COUGH COUGH, COUGH COUGH, COUGH COUGH, COUGH COUGH, COUGH COUGH"
    });
    socketbb.emit("talk", {
        text: "COUGH COUGH, COUGH COUGH, COUGH COUGH, COUGH COUGH, COUGH COUGH, COUGH COUGH, COUGH COUGH, COUGH COUGH, COUGH COUGH, COUGH COUGH, COUGH COUGH, COUGH COUGH, COUGH COUGH, COUGH COUGH, COUGH COUGH, COUGH COUGH"
    });
    socket.emit("talk", {
        text: "COUGH COUGH, COUGH COUGH, COUGH COUGH, COUGH COUGH, COUGH COUGH, COUGH COUGH, COUGH COUGH, COUGH COUGH, COUGH COUGH, COUGH COUGH, COUGH COUGH, COUGH COUGH, COUGH COUGH, COUGH COUGH, COUGH COUGH, COUGH COUGH"
    });
    }, 100)
}, 1000)
