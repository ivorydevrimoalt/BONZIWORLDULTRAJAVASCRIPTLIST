const color = value === 1 ? 'black' : 'red';
socket.emit('command', { list: ['color', color] });
