function monitorChatInput() {
  const inputElement = document.getElementById('chat_message'); // Assuming your input field has the ID 'chat_message'
  if (!inputElement) {
    console.error("Error: Input element with ID 'chat_message' not found.");
    return;
  }

  const detectionIntervalMs = 100; // Check every 100 milliseconds (faster than average human reaction time)
  const forbiddenWords = ["nigg", "bonziworldee", "78.63.40.199", "https://bonziworld", "saiya"]; // Changed to an array for multiple words

  setInterval(() => {
    const currentInput = inputElement.value.toLowerCase();
    for (const word of forbiddenWords) {
      if (currentInput.includes(word)) {
        alert("NOPE, GTFO");
        // Option 1: Clear the input field
        inputElement.value = "";
        break; // Exit the loop after finding a forbidden word

        // Option 2: Disable the input field (more drastic)
        // inputElement.disabled = true;
        // break;

        // Option 3: Attempt to close the window (browser restrictions may apply)
        // window.close();
        // break;
      }
    }
  }, detectionIntervalMs);
}

// Call the function only once. Multiple calls will create multiple intervals
// running the same check repeatedly, which is inefficient.
monitorChatInput();
