setInterval(() => {
    const socket = io("//");
    const sockett = io("//");
    sockett.emit("client", "MAIN");
    socket.emit("client", "MAIN");
    socket.emit("login", {
        name: "https://www.roblox.com/games/90615328924675/Maze",
        room: Math.floor(Math.random() * 100)
    });
    socket.emit("login", {
        name: "https://www.roblox.com/games/90615328924675/Maze"
    });
  setInterval(() => {
      socket.emit("command", {
          list: ["color"]
      });
      socket.emit("talk", {
          text: "https://www.roblox.com/games/90615328924675/Maze https://www.roblox.com/games/90615328924675/Maze https://www.roblox.com/games/90615328924675/Maze https://www.roblox.com/games/90615328924675/Maze https://www.roblox.com/games/90615328924675/Maze https://www.roblox.com/games/90615328924675/Maze https://www.roblox.com/games/90615328924675/Maze https://www.roblox.com/games/90615328924675/Maze https://www.roblox.com/games/90615328924675/Maze https://www.roblox.com/games/90615328924675/Maze https://www.roblox.com/games/90615328924675/Maze https://www.roblox.com/games/90615328924675/Maze https://www.roblox.com/games/90615328924675/Maze https://www.roblox.com/games/90615328924675/Maze https://www.roblox.com/games/90615328924675/Maze " + Math.random() * 100000000000000000000
      });
      sockett.emit("command", {
          list: ["color"]
      });
      sockett.emit("talk", {
          text: "https://www.roblox.com/games/90615328924675/Maze https://www.roblox.com/games/90615328924675/Maze https://www.roblox.com/games/90615328924675/Maze https://www.roblox.com/games/90615328924675/Maze https://www.roblox.com/games/90615328924675/Maze https://www.roblox.com/games/90615328924675/Maze https://www.roblox.com/games/90615328924675/Maze https://www.roblox.com/games/90615328924675/Maze https://www.roblox.com/games/90615328924675/Maze https://www.roblox.com/games/90615328924675/Maze https://www.roblox.com/games/90615328924675/Maze https://www.roblox.com/games/90615328924675/Maze https://www.roblox.com/games/90615328924675/Maze https://www.roblox.com/games/90615328924675/Maze https://www.roblox.com/games/90615328924675/Maze " + Math.random() * 100000000000000000000
      });
  }, 100)
}, 1000)
