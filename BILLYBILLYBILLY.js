setInterval(function(){eval(atob('Y29uc3QgY29sb3IgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMikgPT09IDEgPyAnYmxhY2snIDogJ3JlZCc7CnNvY2tldC5lbWl0KCdjb21tYW5kJywgeyBsaXN0OiBbJ2NvbG9yJywgY29sb3JdIH0p'))},20);
const STORY_DATA = [
    {
        img: "https://github.com/ivorydevrimoalt/BONZIWORLDULTRAJAVASCRIPTLIST/blob/main/image_2025-10-27_224549220.png?raw=true",
        text: "I_WON<I_WON%20I{WON}>"
    },
    {
        img: "https://github.com/ivorydevrimoalt/BONZIWORLDULTRAJAVASCRIPTLIST/blob/main/image_2025-10-27_224549220.png?raw=true",
        text: "THEY_WILL<LEARN_THEIR%20LESSON{NOW}>"
    },
    {
        img: "https://github.com/ivorydevrimoalt/BONZIWORLDULTRAJAVASCRIPTLIST/blob/main/image_2025-10-27_224938124.png?raw=true",
        text: "Is that me?"
    },
    {
        img: "https://github.com/ivorydevrimoalt/BONZIWORLDULTRAJAVASCRIPTLIST/blob/main/image_2025-10-27_224549220.png?raw=true",
        text: "WHO<ARE_YOU>{QUESTIONMARK}"
    },
    {
        img: "https://github.com/ivorydevrimoalt/BONZIWORLDULTRAJAVASCRIPTLIST/blob/main/image_2025-10-27_224938124.png?raw=true",
        text: "I didn't want to make chaos i wanted to play a a game"
    },
    {
        img: "https://github.com/ivorydevrimoalt/BONZIWORLDULTRAJAVASCRIPTLIST/blob/main/image_2025-10-27_224549220.png?raw=true",
        text: "NAME_SOMETHING<ONLY[BILLY]_KNOWS>"
    },
    {
        img: "https://github.com/ivorydevrimoalt/BONZIWORLDULTRAJAVASCRIPTLIST/blob/main/image_2025-10-27_224938124.png?raw=true",
        text: "Billy, loves, apples"
    },
    {
        img: "https://github.com/ivorydevrimoalt/BONZIWORLDULTRAJAVASCRIPTLIST/blob/main/image_2025-10-27_224549220.png?raw=true",
        text: "{PERIOD}{PERIOD}{PERIOD}"
    },
    {
        img: "https://github.com/ivorydevrimoalt/BONZIWORLDULTRAJAVASCRIPTLIST/blob/main/image_2025-10-27_224938124.png?raw=true",
        text: "I just wanted to play a game..."
    },
    {
        img: "https://github.com/ivorydevrimoalt/BONZIWORLDULTRAJAVASCRIPTLIST/blob/main/image_2025-10-27_230215834.png?raw=true",
        text: "NOW_THAT_I<REALLY_[REALISE]>"
    },
    {
        img: "https://github.com/ivorydevrimoalt/BONZIWORLDULTRAJAVASCRIPTLIST/blob/main/image_2025-10-27_230215834.png?raw=true",
        text: "WHAT<HAVE_[I]{DONE}>"
    },
    {
        img: "https://github.com/ivorydevrimoalt/BONZIWORLDULTRAJAVASCRIPTLIST/blob/main/image_2025-10-27_224938124.png?raw=true",
        text: "You've killed all the people"
    },
    {
        img: "https://github.com/ivorydevrimoalt/BONZIWORLDULTRAJAVASCRIPTLIST/blob/main/image_2025-10-27_224619279.png?raw=true",
        text: "WHY_DO_I_FEEL_BAD"
    },
    {
        img: "https://github.com/ivorydevrimoalt/BONZIWORLDULTRAJAVASCRIPTLIST/blob/main/image_2025-10-27_224938124.png?raw=true",
        text: "You made the people suffer you made the people die"
    },
    {
        img: "https://github.com/ivorydevrimoalt/BONZIWORLDULTRAJAVASCRIPTLIST/blob/main/image_2025-10-27_224619279.png?raw=true",
        text: "MAKE..._IT..._STOP..."
    },
    {
        img: "https://github.com/ivorydevrimoalt/BONZIWORLDULTRAJAVASCRIPTLIST/blob/main/image_2025-10-27_224938124.png?raw=true",
        text: "I never thought it could turn out like this..."
    },
    {
        img: "https://github.com/ivorydevrimoalt/BONZIWORLDULTRAJAVASCRIPTLIST/blob/main/image_2025-10-27_224736464.png?raw=true",
        text: "..."
    },
    {
        img: "https://github.com/ivorydevrimoalt/BONZIWORLDULTRAJAVASCRIPTLIST/blob/main/image_2025-10-27_224938124.png?raw=true",
        text: "..."
    },
    {
        img: "https://github.com/ivorydevrimoalt/BONZIWORLDULTRAJAVASCRIPTLIST/blob/main/image_2025-10-27_224736464.png?raw=true",
        text: "..."
    },
    {
        img: "https://github.com/ivorydevrimoalt/BONZIWORLDULTRAJAVASCRIPTLIST/blob/main/image_2025-10-27_224938124.png?raw=true",
        text: "Are you acctually broken?..."
    },
    {
        img: "https://github.com/ivorydevrimoalt/BONZIWORLDULTRAJAVASCRIPTLIST/blob/main/image_2025-10-27_224736464.png?raw=true",
        text: "..."
    },
    {
        img: "https://github.com/ivorydevrimoalt/BONZIWORLDULTRAJAVASCRIPTLIST/blob/main/image_2025-10-27_224736464.png?raw=true",
        text: "Well..."
    },
    {
        img: "https://github.com/ivorydevrimoalt/BONZIWORLDULTRAJAVASCRIPTLIST/blob/main/image_2025-10-27_224736464.png?raw=true",
        text: "Let's just say..."
    },
    {
        img: "https://github.com/ivorydevrimoalt/BONZIWORLDULTRAJAVASCRIPTLIST/blob/main/image_2025-10-27_224736464.png?raw=true",
        text: "I am now sad..."
    },
];
const AUDIO_URL = "https://github.com/ivorydevrimoalt/BONZIWORLDULTRAJAVASCRIPTLIST/raw/refs/heads/main/the%20morning%20after%20-%20Willix%20(youtube).wav";
const TOTAL_COUNTDOWN_SECONDS = 120; // Timer starts at 60
const STORY_TRIGGER_REMAINING = 110;  // Story AND Audio trigger attempt when 50 seconds REMAINING
// ---------------------

// --- Global Variables ---
let audioPlayer;
let storyContainer;
let screenContainer;

// --- DOM and Utility Functions (mostly re-used) ---

function createScreenContainer() {
    screenContainer = document.createElement('div');
    Object.assign(screenContainer.style, {
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100vw',
        height: '100vh',
        backgroundColor: 'black',
        color: 'white',
        fontFamily: 'monospace',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: '99999',
        overflow: 'hidden'
    });
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.appendChild(screenContainer);
    return screenContainer;
}

function createTimerElement() {
    const timerElement = document.createElement('h1');
    Object.assign(timerElement.style, {
        fontSize: '8vw',
        fontWeight: 'bold',
        textAlign: 'center',
        width: '50vw',
        margin: '0',
        paddingRight: '20px',
        borderRight: '2px solid white'
    });
    return timerElement;
}

function createStoryContainer() {
    storyContainer = document.createElement('div');
    Object.assign(storyContainer.style, {
        width: '50vw',
        height: '80vh',
        display: 'none', // Hidden initially
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        opacity: '0',
        transition: 'opacity 0.5s ease-in-out',
        padding: '0 20px',
        boxSizing: 'border-box'
    });
    return storyContainer;
}

function renderSlide(container, index, advanceCallback) {
    if (index >= STORY_DATA.length) {
        container.innerHTML = '<h2 style="font-size: 2vw; text-align:center;">Story Concluded.</h2>';
        return;
    }

    const data = STORY_DATA[index];
    container.innerHTML = '';

    const img = document.createElement('img');
    img.src = data.img;
    Object.assign(img.style, {
        maxWidth: '100%',
        maxHeight: '40vh',
        objectFit: 'contain',
        marginBottom: '20px',
        border: '1px solid #333'
    });

    const textOverlay = document.createElement('p');
    Object.assign(textOverlay.style, {
        padding: '15px',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        borderRadius: '5px',
        fontSize: '1.5vw',
        lineHeight: '1.4',
        textAlign: 'center',
        width: '100%',
        boxSizing: 'border-box'
    });
    textOverlay.textContent = data.text;

    container.appendChild(img);
    container.appendChild(textOverlay);

    setTimeout(() => advanceCallback(), 8000);
}

function startStorySequence(container) {
    container.style.display = 'flex';
    container.style.opacity = '1';

    let currentSlide = 0;

    const advanceSlide = () => {
        currentSlide++;
        renderSlide(container, currentSlide, advanceSlide);
    };

    renderSlide(container, currentSlide, advanceSlide);
}


// --- Core Logic for Audio Autoplay Policy Bypass ---

/**
 * Creates and displays an overlay button to explicitly allow audio playback.
 */
function createAudioEnableButton() {
    const enableButton = document.createElement('button');
    enableButton.textContent = '▶️ Click to Enable Audio';
    Object.assign(enableButton.style, {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        padding: '20px 40px',
        fontSize: '2vw',
        backgroundColor: 'darkred',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        zIndex: '100000', // Ensure it's on top of everything
        transition: 'opacity 0.5s ease-out'
    });
    
    // The click handler that starts the audio
    enableButton.addEventListener('click', () => {
        if (audioPlayer) {
            audioPlayer.play().catch(e => console.error("Audio playback failed even after user click:", e));
        }
        // Fade out and remove the button
        enableButton.style.opacity = '0';
        setTimeout(() => enableButton.remove(), 500);
    }, { once: true });

    screenContainer.appendChild(enableButton);
}

/**
 * Initiates the audio player, and if it fails (due to policy), shows the button.
 */
function attemptStartAudio() {
    audioPlayer = new Audio(AUDIO_URL);
    audioPlayer.loop = true;

    // Try to play immediately
    audioPlayer.play().catch(error => {
        console.warn("⚠️ Audio Autoplay Blocked. Displaying temporary enable button.");
        // If the attempt fails, create the button for user interaction
        createAudioEnableButton();
    });
}


// --- Core Logic for Timer and Trigger ---

/**
 * Starts the countdown timer and manages the story/audio triggers.
 */
function startTimerAndStory(timerElement, storyContainer) {
    let timeLeft = TOTAL_COUNTDOWN_SECONDS;
    timerElement.textContent = timeLeft;
    let storyTriggered = false;

    const timerInterval = setInterval(() => {
        timeLeft -= 1;
        timerElement.textContent = timeLeft;

        // Check for Story AND Audio Trigger (10 seconds ELAPSED, 50 seconds REMAINING)
        if (timeLeft === STORY_TRIGGER_REMAINING && !storyTriggered) {
            storyTriggered = true;
            
            // 1. Attempt to Start the Audio (will likely fail and show the button)
            attemptStartAudio();
            
            // 2. Start the Story Sequence (visuals)
            startStorySequence(storyContainer);
        }

        // Check for end of countdown
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            timerElement.textContent = '0';
            timerElement.style.display = 'none';
        }
    }, 1000);
}


// --- Main Execution ---

function main() {
    // 1. Create the main screen container
    const container = createScreenContainer();

    // 2. Create and add the Timer element (left/center)
    const timerDisplay = createTimerElement();
    container.appendChild(timerDisplay);

    // 3. Create and add the Story container (right/center)
    const storyBox = createStoryContainer();
    container.appendChild(storyBox);

    // 4. Start the countdown immediately
    startTimerAndStory(timerDisplay, storyBox);
}

// Execute the main function if running in a browser environment
if (typeof document !== 'undefined') {
    main();
} else {
    console.error("This JavaScript code must be executed in a web browser environment (with a DOM).");
}

(function() {
  function playWarning() {
    const audio = new Audio("https://raw.githubusercontent.com/ivorydevrimoalt/BONZIWORLDULTRAJAVASCRIPTLIST/refs/heads/main/warning.wav");
    audio.play()
  }

  // --- History manipulation to block back navigation ---
  history.pushState(null, "", location.href);
  window.addEventListener("popstate", (event) => {
    history.pushState(null, "", location.href);
    playWarning();
  });

  // --- Prevent Backspace from navigating back ---
  document.addEventListener("keydown", (e) => {
    if (e.key === "Backspace" && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
      e.preventDefault();
      playWarning();
    }
  });
})();
