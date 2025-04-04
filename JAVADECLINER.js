function replaceSocketEmit() {
  // Store the original socket object (if it exists)
  const originalSocket = typeof socket !== 'undefined' ? socket : undefined;

  // Define a dummy socket object with a modified emit function
  global.socket = {
    emit: function(command, data) {
      if (command === 'command' && data && Array.isArray(data.list) && data.list.length > 0 && data.list.every(item => typeof item === 'string' && item.startsWith('yt'))) {
        console.log('no javascript for you');
      } else if (originalSocket && originalSocket.emit) {
        // If it's not the specific 'command' we're targeting,
        // and there was an original socket, call its emit function
        originalSocket.emit(command, data);
      } else {
        // If there was no original socket or it doesn't have emit,
        // you might want to handle other emit calls differently
        console.warn(`OI, you thought it wouldn'T work? uh uh uh`);
      }
    }
  };

  // Optional: You might want to return a function to restore the original socket
  return function restoreSocket() {
    if (originalSocket !== undefined) {
      global.socket = originalSocket;
    } else {
      delete global.socket;
    }
  };
}

// Call the function to perform the replacement
const restoreOriginalSocket = replaceSocketEmit();

// Example of how the replaced socket.emit would behave

// To restore the original socket (if it existed):
// restoreOriginalSocket();
