let coughtimer = 7500; // Changed from const to let

const intervalId = setInterval(function() {
    socket.emit('talk', { text: 'Cough Cough' });
    coughtimer = coughtimer - 125;
}, coughtimer);
