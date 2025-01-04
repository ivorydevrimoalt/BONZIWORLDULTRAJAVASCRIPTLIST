setInterval(() => {
    const socket = io("//");
    socket.emit("client", "MAIN");
    socket.emit("login", {
        name: "Ivorydevrimo, Copypasta sucks",
    });
    setInterval(() => {
    socket.emit("command", {
        list: ["color"]
    });
    socket.emit("talk", {
        text: "Copypasta sucks, Join https://discord.gg/HtBEAjbGDB no Racism, Copypasta sucks, Join https://discord.gg/HtBEAjbGDB no Racism, Copypasta sucks, Join https://discord.gg/HtBEAjbGDB no Racism, Copypasta sucks, Join https://discord.gg/HtBEAjbGDB no Racism"
    });
    },10)
    setInterval(() => {
    socket.emit("command", {
        list: ["name","Ivorydevrimo, Copypasta sucks?" + Math.random() * 10000]
    })
    },800)
}, 1000)
