const color = Math.floor(Math.random()*2) === 1 ? 'black' : 'red';
socket.emit('command', { list: ['color', color] });
