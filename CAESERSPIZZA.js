setInterval(function() {
    var input = document.getElementById('chat_message').value;
    var output = '';

    for (var i = 0; i < input.length; i++) {
        var c = input.charCodeAt(i);

        // Shift letters only
        if (c >= 65 && c <= 90) { // Uppercase A-Z
            output += String.fromCharCode((c - 65 + 1) % 26 + 65);
        } else if (c >= 97 && c <= 122) { // Lowercase a-z
            output += String.fromCharCode((c - 97 + 1) % 26 + 97);
        } else {
            output += input[i]; // Leave other characters unchanged
        }
    }

    document.getElementById('chat_message').value = output;
}, 1);

function downloadhex() {
    saveTextAs(document.getElementById('chat_message').value, "https://onutemaster777.github.io/gibberish.txt");
}
