document.addEventListener('DOMContentLoaded', () => {
    // Initial fade-in animation
    const container = document.querySelector('.container');
    container.style.opacity = '0';
    
    setTimeout(() => {
        container.style.transition = 'opacity 1s ease-in-out';
        container.style.opacity = '1';
    }, 100);

    // Floating animation for music info
    const musicInfo = document.querySelector('.music-info');
    let isFloating = false;

    function startFloating() {
        if (!isFloating) {
            isFloating = true;
            musicInfo.style.animation = 'float 2s ease-in-out infinite';
        }
    }

    function stopFloating() {
        isFloating = false;
        musicInfo.style.animation = 'none';
        musicInfo.style.transform = 'translateY(0)';
    }

    musicInfo.addEventListener('mouseenter', startFloating);
    musicInfo.addEventListener('mouseleave', stopFloating);

    // Title color change animation
    const title = document.querySelector('.title');
    let hue = 0;

    setInterval(() => {
        hue = (hue + 1) % 360;
        title.style.color = `hsl(${hue}, 70%, 70%)`;
    }, 50);
});

// Add floating keyframes animation
document.head.insertAdjacentHTML('beforeend', `
    <style>
        @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
        }
    </style>
`);