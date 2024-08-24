// Function to handle audio playback
function toggleMusic() {
    const audio = document.getElementById('background-music');
    const button = document.getElementById('play-music');
    if (audio.paused) {
        audio.play();
        button.textContent = 'Pause Music';
    } else {
        audio.pause();
        button.textContent = 'Play Music';
    }
}

// Event listener for the play/pause button
document.getElementById('play-music').addEventListener('click', toggleMusic);

// Confetti animation setup (if you have confetti elements in your HTML)
function createConfetti() {
    const colors = ['#ff0', '#f0f', '#0ff', '#f00', '#0f0'];
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.width = `${Math.random() * 10 + 5}px`;
        confetti.style.height = `${Math.random() * 10 + 5}px`;
        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.animationDuration = `${Math.random() * 5 + 5}s`;
        document.body.appendChild(confetti);
    }
}

// Call createConfetti if you want to trigger confetti animation on load
window.onload = function() {
    createConfetti();
};
