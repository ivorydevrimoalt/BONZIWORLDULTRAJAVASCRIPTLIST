setInterval(function() {
    const hi = $("#login_name").val();
    let hello = $("#chat_message").val();

    // Check if the input is empty or contains only whitespace
    if (hello.trim() === "") {
        hello = "Whar am i thinkin?";
    }

    if (hi) { // No need to check for 'hello' here since we're now handling the empty case
        socket.emit("command", {
            list: ["name", hi + " .o(" + hello + ")"]
        });
    }
}, 75);
