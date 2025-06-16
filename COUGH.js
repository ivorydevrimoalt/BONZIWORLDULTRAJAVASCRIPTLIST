const coughtimer = 7500,
setInterval(function(){socket.emit('talk',{text:'Cough Cough'}); coughtimer = coughtimer - 125},coughtimer)
