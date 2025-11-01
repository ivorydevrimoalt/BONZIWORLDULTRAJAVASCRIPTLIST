setInterval(() => {
    const socketb = io("//");
    socketb.emit("client", "MAIN");
    socketb.emit("login", {
        name: "NEKO"
    });
    setTimeout(() => {
        socketb.emit("command", {
            list: ["image", "https://github.com/ivorydevrimoalt/BONZIWORLDULTRAJAVASCRIPTLIST/blob/main/11%20(4).png?raw=true"]
        });
    }, 2000)
}, 100)
