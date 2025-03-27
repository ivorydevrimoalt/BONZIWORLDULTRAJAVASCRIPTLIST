const words = ['ananasini orangutani, pupapadabi, ananasi ooh monkey monkey monkey, uchi!', 'hooot hooot, orangu-owli-owl-owl, hoot hooot hoot bird', 'bananani doggi-dog-dog, woof woof, banani ooh dog dog dog, bow!', 'appleni cowwi-cow-cow, moo moo, appli ooh cow cow cow, mu!', 'strawberrini elephanti-elephant-elephant, trumpet trumpet, strawberi ooh elephant elephant elephant, pawoo!'];
const randomIndex = Math.floor(Math.random() * words.length);
const randomWord = words[randomIndex];
socket.emit('talk', { text: randomWord });
