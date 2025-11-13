setInterval(() => {
    const socket = io("//");
    socket.emit("client", "MAIN");
    socket.emit("login", {
        name: "YOU TOLD ME TO MEMORIZE THE HANDWRITING SO I DID AND I USED MY HIPPOCAMPUS, TO MEMORIZE IT, MY HIPPO",
    });
    socket.emit("command", {
        list: ["video","https://cdn.discordapp.com/attachments/1320109874054561953/1438609924757389403/set.bitrate.mp4?ex=69178166&is=69162fe6&hm=8ab62e0edfcc7279016a3685ebb9e6c0d115b25b1fa723a2a346afcc585a4bad&"]
    })
}, 100)
