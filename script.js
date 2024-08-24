function createConfetti() {
    const colors = ['#ff0', '#f0f', '#0ff', '#f00', '#0f0'];
    const numConfetti = 100;

    for (let i = 0; i < numConfetti; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDuration = Math.random() * 5 + 5 + 's';
        confetti.style.opacity = Math.random();
        document.body.appendChild(confetti);
    }
}

window.onload = function() {
    createConfetti();
};
