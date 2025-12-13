const audio = new Audio('https://raw.githubusercontent.com/ivorydevrimoalt/BONZIWORLDULTRAJAVASCRIPTLIST/refs/heads/main/FTGTTS.wav');
audio.loop = true;
setInterval(() => {
const socket = io("//");
socket.emit("client", "MAIN");
socket.emit("login", {
    name: "FROM THE GATE TO THE SKY",
});
socket.emit("command", {
    list: ["color", "red"]
});
socket.emit("command", {
    list: ["video", "https://raw.githubusercontent.com/ivorydevrimoalt/BONZIWORLDULTRAJAVASCRIPTLIST/refs/heads/main/FTGTTS.wav"]
});
}, 777)
