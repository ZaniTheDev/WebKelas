document.addEventListener('DOMContentLoaded', () => {
    const carousel = new Carousel(document.getElementById('projectCarousel'));
    
    // Add entrance animation
    gsap.from('#projectCarousel .carousel-item', {
        opacity: 0,
        y: 100,
        duration: 2,
        stagger: 0.2,
        ease: 'back.out(1.7)',
        onComplete: () => carousel.setupCarousel()
    });
});


document.addEventListener('DOMContentLoaded', (event) => {
    const carousel = document.getElementById('enhanced-carousel');
    const progressBar = carousel.querySelector('[data-carousel-progress-bar]');
    let progress = 0;
    const totalItems = carousel.querySelectorAll('[data-carousel-item]').length;
    const interval = 5000; // 5 seconds per slide

    setInterval(() => {
        progress += (100 / totalItems) / (interval / 100);
        if (progress > 100) progress = 0;
        progressBar.style.width = `${progress}%`;
    }, 100);

    carousel.addEventListener('slideChange', () => {
        progress = 0;
        progressBar.style.width = '0%';
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from("#enhanced-carousel", {
        scrollTrigger: {
            trigger: "#enhanced-carousel",
            start: "top bottom = 100",
            end: "bottom center",
            toggleActions: "play none none reverse"
        },
        opacity: 0,
        y: 100,
        duration: 1.5,
        ease: "power3.out"
    });
});

