const audio = new Audio('https://raw.githubusercontent.com/ivorydevrimoalt/BONZIWORLDULTRAJAVASCRIPTLIST/refs/heads/main/hahahahahahahaha.wav');
audio.loop = true;
socket.emit("command",{list:["name","HA HA HA HA HA HA HA HA"]})
function getAllTextNodes() {
            const textNodes = [];
            const walk = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
            let node;
            while ((node = walk.nextNode())) {
                // Filter out empty text nodes and script content
                if (node.nodeValue.trim().length > 0 && node.parentNode.nodeName !== 'SCRIPT' && node.parentNode.nodeName !== 'STYLE') {
                    textNodes.push(node);
                }
            }
            return textNodes;
        }

        // Function to replace a random character in a random text node
        function replaceRandomLetter() {
            const textNodes = getAllTextNodes();

            // If there are no text nodes, stop the process
            if (textNodes.length === 0) {
                console.log("No text nodes found to modify.");
                return;
            }

            // Select a random text node
            const randomIndexNode = Math.floor(Math.random() * textNodes.length);
            const targetNode = textNodes[randomIndexNode];
            let originalText = targetNode.nodeValue;

            // If the text node is empty or contains only whitespace, skip it
            if (originalText.trim().length === 0) {
                scheduleNextReplacement();
                return;
            }

            // Select a random character position within the chosen text node
            const randomCharIndex = Math.floor(Math.random() * originalText.length);

            // Ensure the selected character is a letter (optional, but makes more sense)
            // If it's not a letter, we can try again or just replace it anyway.
            // For simplicity, we'll replace any character at the random index.

            // Choose 'H' or 'A' randomly
            const newChar = 'HA';

            // Replace the character
            const newText = originalText.substring(0, randomCharIndex) +
                             newChar +
                             originalText.substring(randomCharIndex + 1);

            targetNode.nodeValue = newText;

            // Schedule the next replacement with a random delay (1 to 100 ms)
            scheduleNextReplacement();
        }

        // Function to schedule the next replacement
        function scheduleNextReplacement() {
            const randomDelay = Math.floor(Math.random() * 5) + 1; // Random delay between 1 and 100 milliseconds
            setTimeout(replaceRandomLetter, randomDelay);
        }

            scheduleNextReplacement();
audio.play()
