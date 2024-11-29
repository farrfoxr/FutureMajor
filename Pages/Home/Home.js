function initParallax() {
    const background = document.querySelector('.background');
    
    window.addEventListener('scroll', function() {
        // Negative multiplier makes it scroll opposite to content
        const scrollPosition = window.pageYOffset;
        background.style.transform = `translateY(${scrollPosition * -0.3}px)`;
    });
}

document.addEventListener('DOMContentLoaded', initParallax);