alert("VODKA");
function russianize() {
  function translateTextNodes(node) {
    if (node.nodeType === Node.TEXT_NODE) {
      if (node.textContent.trim() !== "") {
        // Simple (and inaccurate) character replacement for demonstration.
        // A real translation would require an actual translation service.
        node.textContent = node.textContent.replace(/[a-zA-Z]/g, function(char) {
          const charCode = char.charCodeAt(0);
          if (charCode >= 65 && charCode <= 90) { // A-Z
            return String.fromCharCode(charCode + 1024); // Approximation, not accurate Russian
          } else if (charCode >= 97 && charCode <= 122) { // a-z
            return String.fromCharCode(charCode + 1024); // Approximation, not accurate Russian
          } else {
            return char;
          }
        });
      }
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      for (let i = 0; i < node.childNodes.length; i++) {
        translateTextNodes(node.childNodes[i]);
      }
    }
  }

  translateTextNodes(document.body);
}

// Run the translation every millisecond
setInterval(russianize, 1);
