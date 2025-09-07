const audio = new Audio('https://github.com/ivorydevrimoalt/BONZIWORLDULTRAJAVASCRIPTLIST/blob/main/wa.wav?raw=true');
audio.volume = 1.0;
audio.play();
let fk = 0;
let step = 1; // how much fk increases each tick
const div = document.getElementById("content");

function spin() {
    fk += step; // increase rotation
    div.style.transform = `rotate(${fk}deg)`; // apply rotation
    
    step++; // increase step size each tick → faster spin
    setTimeout(spin, 16); // constant delay (~60 FPS)
}

spin();
