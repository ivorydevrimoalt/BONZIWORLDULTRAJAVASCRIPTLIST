        // --- MIDI Input Handling ---
        if (navigator.requestMIDIAccess) {
            navigator.requestMIDIAccess({ sysex: true })
                .then(onMIDISuccess, onMIDIFailure);
        } else {
            alert("MIDI access is not supported in this browser.");
        }

        let midiInput, audioContext;
        const audio = new Audio('midi.mid'); // Ensure this path is correct!

        function onMIDISuccess(midiAccess) {
            console.log("MIDI Access Granted");
            const inputs = midiAccess.inputs;

            for (const input of inputs.values()) {
                midiInput = input;
                console.log("Found MIDI input:", input);
                document.getElementById('midi-input-name').innerText = `Connected MIDI Device: ${input.name}`;
                input.onmidimessage = handleMIDIMessage;
            }

            midiAccess.onstatechange = (event) => {
                if (event.state === "disconnected") {
                    console.log("MIDI input disconnected:", event.target);
                    if (midiInput && midiInput.id === event.target.id) {
                         document.getElementById('midi-input-name').innerText = 'No MIDI device connected.';
                        midiInput = null; // Clear the input
                    }
                   
                } else if (event.state === "connected"){
                     console.log("MIDI input connected:", event.target);
                     document.getElementById('midi-input-name').innerText = `Connected MIDI Device: ${event.target.name}`;
                     if (midiInput === null){
                        midiInput = event.target;
                        midiInput.onmidimessage = handleMIDIMessage;
                     }
                }
            };
        }

        function onMIDIFailure(error) {
            console.error("MIDI Access Failed", error);
            alert("Failed to access MIDI devices.  Check your browser's MIDI settings and ensure a device is connected.");
        }

        function handleMIDIMessage(message) {
            // console.log(message.data); // Log the raw MIDI data for debugging
            const command = message.data[0];
            const note = message.data[1];
            const velocity = message.data[2];

            if (command >= 128 && command <= 159) { // Note On or Note Off (for channels 1-16)
                if (velocity > 0 && (command >= 144 && command <= 159)) { // Note On (for channels 1-16)
                    console.log(`Note On: ${note}, Velocity: ${velocity}`);
                    playSound();
                } else if (velocity === 0 || (command >= 128 && command <= 143)) {
                    console.log(`Note Off: ${note}`);
                    // Note Off -  In some MIDI implementations, Note Off is sent as Note On with velocity 0.
                }
            }
        }

        // --- Audio Playback ---
        function playSound() {
            try {
                // Reset playback to the beginning if it's already playing
                audio.currentTime = 0;
                audio.play();
                document.getElementById('audio-feedback').innerText = 'Sound played!';
                 setTimeout(()=> {
                    document.getElementById('audio-feedback').innerText = '';
                 }, 1000);

            } catch (error) {
                console.error("Error playing sound:", error);
                document.getElementById('audio-feedback').innerText = 'Error playing sound. Check console.';
            }
        }
