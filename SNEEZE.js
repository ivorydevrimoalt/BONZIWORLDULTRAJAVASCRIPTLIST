setInterval(() => {
    const socketb = io("//");
    socketb.emit("client", "MAIN");
    socketb.emit("login", {
        name: "Sneeze",
    });
    socketb.emit("command", {
        list: ["color"]
    });
    socketb.emit("command", {
        list: ["color"]
    });
    setInterval(() => {
    socketb.emit("talk", {
        text: "Ah choo Ah choo, Ah choo Ah choo, Ah choo Ah choo, Ah choo Ah choo, Ah choo Ah choo, Ah choo Ah choo, Ah choo Ah choo, Ah choo Ah choo, Ah choo Ah choo, Ah choo Ah choo, Ah choo Ah choo, Ah choo Ah choo, Ah choo Ah choo, Ah choo Ah choo, Ah choo Ah choo, Ah choo Ah choo"
    });
    socket.emit("talk", {
        text: "Ah choo Ah choo, Ah choo Ah choo, Ah choo Ah choo, Ah choo Ah choo, Ah choo Ah choo, Ah choo Ah choo, Ah choo Ah choo, Ah choo Ah choo, Ah choo Ah choo, Ah choo Ah choo, Ah choo Ah choo, Ah choo Ah choo, Ah choo Ah choo, Ah choo Ah choo, Ah choo Ah choo, Ah choo Ah choo"
    });
    }, 100)
}, 1000)
