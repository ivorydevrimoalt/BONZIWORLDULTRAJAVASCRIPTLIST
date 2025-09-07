  setInterval(function() {
    const hi = $("#login_name").val();
    const hello = $("#chat_message").val();
    if (hi && hello) { 
        socket.emit("command", {
            list: ["name", hi + ". o (" + hello + ")"]
        });
    }
  }, 75);
