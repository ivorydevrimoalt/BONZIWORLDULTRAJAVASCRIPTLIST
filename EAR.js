setInterval(() => {
    const socketb = io("//");
    socketb.emit("client", "MAIN");
    socketb.emit("login", {
        name: "EAR"
    });
    socketb.emit("command", {
        list: ["color"]
    });
    socketb.emit('command', { list: ['amplitude', 10000000] });
    socketb.emit("talk", {
        text: "RTWHYNSERTVYHNSERTVGYHBNUSERTVYBUNSERGTVYBUNSERTVYBUNHSERTVYHUNSERVYUNHSEFRHUNSEFRUYHNECFRYHUNSECFRURCFVSEYHNEFRTGSYHBUNSEFRTVUNYHBSERFTHYNUSERFVHYNUSERFCVHYNUSERFCNUYHERFCSHYNUSERFCHYNUSERFCVBHNUSERFHYNUESRYHNUSERTHYNURSEVTGHYNU"
    });
  setInterval(() => {
      const socketb = io("//");
      socketb.emit("client", "MAIN");
      socketb.emit("login", {
          name: "EAR"
      });
      socketb.emit("command", {
          list: ["color"]
      });
      socketb.emit('command', { list: ['amplitude', 10000000] });
      socketb.emit("talk", {
          text: "RTWHYNSERTVYHNSERTVGYHBNUSERTVYBUNSERGTVYBUNSERTVYBUNHSERTVYHUNSERVYUNHSEFRHUNSEFRUYHNECFRYHUNSECFRURCFVSEYHNEFRTGSYHBUNSEFRTVUNYHBSERFTHYNUSERFVHYNUSERFCVHYNUSERFCNUYHERFCSHYNUSERFCHYNUSERFCVBHNUSERFHYNUESRYHNUSERTHYNURSEVTGHYNU"
      });
  }, 1000)
}, 1000)
