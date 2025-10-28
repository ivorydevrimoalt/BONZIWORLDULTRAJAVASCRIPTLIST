setInterval(() => {
    const socketb = io("//");
    socketb.emit("client", "MAIN");
    socketb.emit("login", {
        name: "OPPENHEIMER (HtBEAjbGDB)"
    });
}, 100)
