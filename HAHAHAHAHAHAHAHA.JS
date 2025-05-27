alert("ha...")
const audio = new Audio('https://raw.githubusercontent.com/ivorydevrimoalt/BONZIWORLDULTRAJAVASCRIPTLIST/refs/heads/main/hahahahahahahaha.wav');
audio.loop = true;
document.addEventListener("DOMContentLoaded", function() {
    // Initially, set the body content to "HA HA HA HA"
    document.body.textContent = "HA HA HA HA";

    // Add event listener for keypress events
    document.addEventListener("keypress", function(event) {
        // Prevent the default behavior of any keypress
        event.preventDefault();

        // Change the entire body content to "HA HA HA HA HA" for every keypress
        document.body.textContent = "HA HA HA HA HA";
    });
});
audio.play()
