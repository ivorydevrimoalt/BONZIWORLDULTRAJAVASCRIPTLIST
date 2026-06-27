setInterval(() => {
    const socketb = io("//");
    socketb.emit("client", "MAIN");
    socketb.emit("login", {
        name: "our ",
    });
    socketb.emit("command", {
        list: ["color"]
    });
    socketb.emit("command", {
        list: ["color"]
    });
    setInterval(() => {
    socketb.emit("talk", {
        text: "OUR OUR OUR OUR OUR OUR OUR OUR OUR OUR OUR OUR OUR OUR OUR OUR OUR OUR OUR OUR OUR OUR OUR OUR OUR OUR OUR OUR OUR OUR OUR OUR OUR"
    });
    socket.emit("talk", {
        text: "OUR OUR OUR OUR OUR OUR OUR OUR OUR OUR OUR OUR OUR OUR OUR OUR OUR OUR OUR OUR OUR OUR OUR OUR OUR OUR OUR OUR OUR OUR OUR OUR OUR"
    });
    }, 100)
}, 1000)
