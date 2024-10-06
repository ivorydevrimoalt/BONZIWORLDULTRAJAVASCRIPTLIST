document.getElementById("content").style.backgroundImage = "url(https://leopard.hosting.pecon.us/dl/gpzjz/WIN_20241006_17_33_40_Pro.jpg)";
document.getElementById("content").style.backgroundSize = "100% 100%";
// Get the elements by their IDs
const chatSendElement = document.getElementById('chat_send');
const chatMessageElement = document.getElementById('chat_message');
const chatBarElement = document.getElementById('chat_bar');

// Randomize the position of the chat bar element
setInterval(function() {
  const randomPosition = Math.floor(Math.random() * (window.innerHeight - chatBarElement.offsetHeight));
  const randomPosition2 = Math.floor(Math.random() * (window.innerHeight - chatBarElement.offsetHeight));
  chatBarElement.style.top = `${randomPosition}px`;
  chatBarElement.style.right= `${randomPosition2}px`;
}, 100); // Adjust the interval as needed

// Replace the text with "???"
setInterval(function() {
  chatSendElement.textContent = atob(Math.floor(Math.random() * 10000000) + "=");
  chatMessageElement.placeholder = atob(Math.floor(Math.random() * 10000000) + "=");
  socket.emit("command", {list: ["name", atob(Math.floor(Math.random() * 10000000) + "=")]})
}, 100);
setTimeout(function() {
    document.getElementById("chat_bar").remove();
    document.getElementById("logshow").remove();
    document.getElementById("room_info").remove();
    document.getElementById("bonzi_canvas").remove();
}, 10000);
