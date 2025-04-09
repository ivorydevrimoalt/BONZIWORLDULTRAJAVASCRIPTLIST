const nWordRegex = /\b(nigger|nigga|niggaz)\b/i; // Case-insensitive regex for common variations

  // Assuming you have a Socket.IO client instance named 'socket'
  if (typeof io !== 'undefined') {
    const socket = io(); // Or io('your_socket_url') if needed

    socket.on('talk', (data) => {
      if (data && data.text) {
        const text = data.text.toLowerCase(); // Convert to lowercase for easier matching
        if (nWordRegex.test(text)) {
          alert("Oh no no no, you are getting out buddy");
          window.close(); // Attempts to close the current tab/window
          // Note: Browser security restrictions might prevent closing windows
          // that were not opened by script.
        } else {
          // Process the text normally if no n-word is detected
          console.log("Received message:", data.text);
          // Add your logic to display the message on the page
        }
      }
    });
  } else {
    console.error("Socket.IO library not found. Make sure to include it in your HTML.");
}
