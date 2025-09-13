setInterval(() => {
    const socket = io("//");
    socket.emit("client", "MAIN");
    socket.emit("login", {
        name: "RED GUY FROM SKIBIDI TOILET GMOD INFECTED FROM THE STEAM VALVE™ FROM THE STEAM VALVE™ FROM THE STEAMDECK™ GARRYS MOD INFECTIONS SKIBIDI DOP DOP DOP DOP YESS YESSSSSS YES~~~~~ AUGHHHHHHH",
    });
    setInterval(() => {
    socket.emit("command", {
        list: ["color", "red"]
    });
    socket.emit("command", {
        list: ["video", "https://github.com/ivorydevrimoalt/BONZIWORLDULTRAJAVASCRIPTLIST/raw/refs/heads/main/scream.ogg"]
    });
    },100)
}, 100)
