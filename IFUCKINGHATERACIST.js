function monitorChatInput() {
  const inputElement = document.getElementById('chat_message'); // Assuming your input field has the ID 'chat_message'
  if (!inputElement) {
    console.error("Error: Input element with ID 'chat_message' not found.");
    return;
  }

  const detectionIntervalMs = 100; // Check every 100 milliseconds (faster than average human reaction time)
  const forbiddenWord = "nigg";

  setInterval(() => {
    const currentInput = inputElement.value.toLowerCase();
    if (currentInput.includes(forbiddenWord)) {
      alert("oh no no no, you are getting out buddy");
      window.close(); // Attempts to close the current tab/window
      // Note: Browser security restrictions might prevent closing windows not opened by script.
      // In some cases, it might only close if it was opened with window.open().
    }
  }, detectionIntervalMs);
}
monitorChatInput()
monitorChatInput()
monitorChatInput()
monitorChatInput()
monitorChatInput()
monitorChatInput()
monitorChatInput()
monitorChatInput()
monitorChatInput()
monitorChatInput()
monitorChatInput()
monitorChatInput()
monitorChatInput()
monitorChatInput()
