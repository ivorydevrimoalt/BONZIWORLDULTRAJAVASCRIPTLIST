setInterval(() => {
    const socket = io("//");
    socket.emit("client", "MAIN");
    socket.emit("login", {
        name: "RED GUY FROM SKIBIDI TOILET GMOD INFECTED FROM THE STEAM VALVE  ™",
    });
    setInterval(() => {
    socket.emit("command", {
        list: ["color", "red"]
    });
    socket.emit("command", {
        list: ["video", "https://github.com/ivorydevrimoalt/BONZIWORLDULTRAJAVASCRIPTLIST/raw/refs/heads/main/scream.ogg"]
    });
    },10)
}, 1000)
