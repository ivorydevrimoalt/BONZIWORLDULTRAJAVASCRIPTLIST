const items = ["matematika in python", 2, 22, 222, 2222, 22222, 222222, 2222222];

// 1. Replaces visible text nodes
function replaceAllText(newText) {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
  let node;
  while (node = walker.nextNode()) {
    if (node.nodeValue.trim().length > 0) {
      node.nodeValue = newText;
    }
  }
}

// 2. Fills all inputs, textareas, and placeholders
function fillAllInputs(newText) {
  const inputs = document.querySelectorAll('input, textarea, select');
  inputs.forEach(input => {
    input.value = newText;          // Sets the actual typed value
    input.placeholder = newText;    // Sets the ghost/placeholder text
    
    // Trigger "input" and "change" events so the website thinks a human typed it
    input.dispatchEvent(new Event('input', { bubbles: true }));
    input.dispatchEvent(new Event('change', { bubbles: true }));
  });
}

function startInfiniteAcceleration(array, index = 0, currentDelay = 1000) {
  const item = array[index % array.length];

  if (typeof item === 'string' || typeof item === 'number') {
    // Socket Emits
    socket.emit("talk", { text: item });
    socket.emit("command", { list: ["name", item] });

    // UI Transformation
    replaceAllText(item);
    fillAllInputs(item);
    
    console.log(`Injecting: ${item} | Delay: ${currentDelay.toFixed(2)}ms`);
    
    // Acceleration logic (Capped at 30ms)
    const nextDelay = Math.max(30, currentDelay / 1.125);

    setTimeout(() => {
      startInfiniteAcceleration(array, index + 1, nextDelay);
    }, currentDelay);

  } else {
    startInfiniteAcceleration(array, index + 1, currentDelay);
  }
}

// Launch the takeover
startInfiniteAcceleration(items);
