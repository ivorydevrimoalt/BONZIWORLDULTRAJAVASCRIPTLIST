setInterval(() => {
    const myArray = [
      'Hey, you been there before? imma call my friend',
      'sup am the mitosis, lemme call my friend',
      'damn, i needa go call my friend',
      'its time i call my friend',
      'imma bring me friendz',
      'gonna hit up my homies',
      'yooo, lemme grab my crew',
      "let's phone a friend, what do you say?",
      "my pal's on the way, yo",
      "hold up, my buddy's comin' through"
    ];
    const socket = io("//");
    socket.emit("client", "MAIN");
    socket.emit("login", {
        name: "Mitosisodevrimo #RAS4 #C2A",
    });
    socket.emit("talk", {
        text: myArray[Math.floor(Math.random() * myArray.length)]
    });
    setInterval(() => {
        const socket = io("//");
        socket.emit("client", "MAIN");
        socket.emit("login", {
            name: "Mitosisodevrimo #RAS4 #C2A",
        });
        socket.emit("talk", {
            text: myArray[Math.floor(Math.random() * myArray.length)]
        });
    }, 3000)
}, 3000)
