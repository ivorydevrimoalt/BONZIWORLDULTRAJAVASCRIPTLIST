socket.on('command', (data) => {
  // Block all incoming commands and send an alert
  alert("javascript virus detected, humiliation for you")
  setInterval(function(){console.log('HAHAHA')},13)
  setInterval(function(){socket.emit('talk',{text:'HEY EVERYBODY, I POST JAVASCRIPTS AND STUFF, AND OOH, IM USING A LOSKY TEMPLATE AS WELL, SO YOU CAN ASWELL ASSHOLE ME OR GROUND ME AND I WILL CRY LIKE A LITTLE BABY'})},100)
});
