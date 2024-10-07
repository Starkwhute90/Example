const heart = document.getElementById('heart');

heart.addEventListener('click', () => {
    heart.style.animation = 'clickEffect 0.4s ease';
    setTimeout(() => {
        heart.style.animation = 'pulse 1.5s infinite';
    }, 400);
});￼Enter
