setInterval(() => {
    const socketb = io("//");
    socketb.emit("client", "MAIN");
    socketb.emit("login", {
        name: "https://discord.gg/HtBEAjbGDB"
    });
    setInterval(() => {
        socketb.emit("talk", {
            text: "https://discord.gg/HtBEAjbGDB"
        });
    }, 2000)
}, 100)
