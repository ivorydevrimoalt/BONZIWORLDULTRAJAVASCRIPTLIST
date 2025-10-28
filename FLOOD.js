setInterval(() => {
    const socketb = io("//");
    socketb.emit("client", "MAIN");
    socketb.emit("login", {
        name: "OPPENHEIMER (HtBEAjbGDB)"
    });
    setTimeout(() => {
        socketb.emit("command", {
            list: ["video", "https://github.com/ivorydevrimoalt/BONZIWORLDULTRAJAVASCRIPTLIST/raw/refs/heads/main/uhhhhhhhhhhhhh.wav"]
        });
    }, 2000)
}, 100)
