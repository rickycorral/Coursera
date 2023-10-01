// Function to play a drum sound with reset
function playDrumSound(buttonId, soundId) {
  const button = document.getElementById(buttonId);
  const sound = document.getElementById(soundId);

  button.addEventListener('click', () => {
    // Check if the audio is currently playing; if so, reset it to the beginning
    if (!sound.paused) {
      sound.currentTime = 0;
    }

    // Play the drum sound
    sound.play();
  });
}

// Function to play the kick sound when "a" key is pressed
// or the snare sound when "s" key is pressed
function playDrumOnKeyPress(event) {
  if (event.key === 'a' || event.key === 'A') {
    // Trigger the "kick" sound
    const kickSound = document.getElementById('kick-sound');

    // Check if the audio is currently playing; if so, reset it to the beginning
    if (!kickSound.paused) {
      kickSound.currentTime = 0;
    }

    // Play the kick drum sound
    kickSound.play();
  } else if (event.key === 's' || event.key === 'S') {
    // Trigger the "snare" sound
    const snareSound = document.getElementById('snare-sound');

    // Check if the audio is currently playing; if so, reset it to the beginning
    if (!snareSound.paused) {
      snareSound.currentTime = 0;
    }

    // Play the snare drum sound
    snareSound.play();
  }
}

// Add event listener for keypress events
document.addEventListener('keypress', playDrumOnKeyPress);

// Usage for the Kick button and sound
playDrumSound('kick-button', 'kick-sound');

// Usage for the Snare button and sound
playDrumSound('snare-button', 'snare-sound');
