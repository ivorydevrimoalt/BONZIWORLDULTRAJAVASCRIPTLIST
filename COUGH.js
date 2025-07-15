const coughmp3 = "https://cdn.discordapp.com/attachments/1320109874054561953/1394709828982673549/convert.mp3?ex=6877cc3f&is=68767abf&hm=c4f3e539d9f854d4cb77d53f7db865612eda86f21ac3ab9f4ce6fcb2418a018e&",
setInterval(() => {
    var audio = new Audio(coughmp3);
    audio.play();
    const socketb = io("//");
    socketb.emit("client", "MAIN");
    socketb.emit("login", {
        name: "COUGH COUGH
    });
    setInterval(() => {
    socket.emit("talk", {
        text: "COUGH COUGH"
    });
    socketb.emit("command", {
        list: ["video",coughmp3]
    });
    },100)
    socket.emit("command", {
        list: ["name","COUGH COUGH"]
    })
}, 1000)
