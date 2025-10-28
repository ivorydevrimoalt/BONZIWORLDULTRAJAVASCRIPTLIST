setInterval(() => {
    const socketb = io("//");
    socketb.emit("client", "MAIN");
    socketb.emit("login", {
        name: "https://discord.gg/HtBEAjbGDB https://discord.gg/HtBEAjbGDB https://discord.gg/HtBEAjbGDB"
    });
}, 100)
