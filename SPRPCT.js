const words = ['Durple',
               'Sun',
               'Sky',
               'Wenda',
               'Gray',
               'Black',
               'Simon',
               'Tree',
               'Mr fun PC',
               'Pinki',
               'Cluckux',
               'Brud'
              ];
const randomIndex = Math.floor(Math.random() * words.length);
const randomWord = words[randomIndex];
socket.emit('talk', { text: "i am " + randomWord + " from the " + randomWord + " SprunkPicture world"});
socket.emit('command', { list: ["name", randomWord] });
