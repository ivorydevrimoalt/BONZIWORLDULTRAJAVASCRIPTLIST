setInterval(() => {
    const socketb = io("//");
    socketb.emit("client", "MAIN");
    socketb.emit("login", {
        name: "Behh ",
    });
    socketb.emit("command", {
        list: ["color"]
    });
    socketb.emit("command", {
        list: ["color"]
    });
    setInterval(() => {
    socketb.emit("talk", {
        text: "BEHH BEHH BEHH BEHH BEHH BEHH BEHH BEHH BEHH BEHH BEHH BEHH BEHH BEHH BEHH BEHH BEHH BEHH BEHH BEHH BEHH BEHH BEHH BEHH BEHH BEHH BEHH"
    });
    socket.emit("talk", {
        text: "BEHH BEHH BEHH BEHH BEHH BEHH BEHH BEHH BEHH BEHH BEHH BEHH BEHH BEHH BEHH BEHH BEHH BEHH BEHH BEHH BEHH BEHH BEHH BEHH BEHH BEHH BEHH"
    });
    }, 100)
}, 1000)
