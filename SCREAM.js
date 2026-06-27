setInterval(() => {
    const socketb = io("//");
    socketb.emit("client", "MAIN");
    socketb.emit("login", {
        name: "SCREAM"
    });
    socketb.emit("command", {
        list: ["color"]
    });
    socketb.emit('command', { list: ['amplitude', 10000000] });
    socketb.emit("talk", {
        text: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA!!!!"
    });
  setInterval(() => {
      const socketb = io("//");
      socketb.emit("client", "MAIN");
      socketb.emit("login", {
          name: "SCREAM"
      });
      socketb.emit("command", {
          list: ["color"]
      });
      socketb.emit('command', { list: ['amplitude', 10000000] });
      socketb.emit("talk", {
          text: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA!!!!"
      });
  }, 1000)
}, 1000)
