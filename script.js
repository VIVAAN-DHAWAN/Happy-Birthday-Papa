// Play/Pause Music
document.getElementById('play-music').addEventListener('click', function() {
    const audio = document.getElementById('background-music');
    if (audio.paused) {
        audio.play();
        this.textContent = 'Pause Music';
    } else {
        audio.pause();
        this.textContent = 'Play Music';
    }
});
