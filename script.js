function createStars() {
    const starsContainer = document.getElementById('stars');
    const numberOfStars = 200;

    for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.width = `${Math.random() * 3}px`;
        star.style.height = star.style.width;
        star.style.top = `${Math.random() * 100}%`;
        star.style.left = `${Math.random() * 100}%`;
        starsContainer.appendChild(star);
    }
}

function initializeAnimations() {
    gsap.registerPlugin(ScrollTrigger);

    // Hero animations
    const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });
    heroTl.fromTo("#hero-title", 
        { y: 100, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 1 }
    )
    .fromTo("#hero-subtitle", 
        { y: 50, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 1 }, 
        "-=0.5"
    )
    .fromTo("#hero-button", 
        { y: 50, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 1 }, 
        "-=0.5"
    );

    // About section animations
    gsap.from("#profile-image", {
        scrollTrigger: {
            trigger: "#about",
            start: "top center",
        },
        opacity: 0,
        scale: 0.5,
        duration: 1,
        ease: "back.out(1.7)"
    });

    gsap.from("#about-text", {
        scrollTrigger: {
            trigger: "#about",
            start: "top center",
        },
        opacity: 0,
        x: 50,
        duration: 1,
        ease: "power3.out"
    });

    // Project cards animation
    gsap.utils.toArray(".project-card").forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: "top bottom-=100",
            },
            opacity: 0,
            y: 50,
            duration: 0.8,
            delay: i * 0.2,
            ease: "power3.out"
        });
    });

    // Contact form animation
    gsap.from("#contact-form", {
        scrollTrigger: {
            trigger: "#contact",
            start: "top center",
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out"
    });

    // Star twinkling animation
    gsap.utils.toArray(".star").forEach(star => {
        gsap.to(star, {
            opacity: 0.2,
            duration: "random(0.5, 2)",
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
            delay: "random(0, 2)"
        });
    });
}


gsap.registerPlugin(ScrollTrigger);

// Initial setup
gsap.set(".glass-card", { opacity: 0, y: 50 });
gsap.set(".orbit-element", { opacity: 0, scale: 0 });
gsap.set(".profile-image", { opacity: 0, scale: 0.5 });
gsap.set(".expertise-item", { opacity: 0, y: 20 });
gsap.set(".orbit-circle", { opacity: 0, scale: 0.5 });
gsap.set(".glow", { opacity: 0 });

// Create the main timeline
const mainTL = gsap.timeline({
scrollTrigger: {
trigger: "#about",
start: "top center",
end: "+=500",
toggleActions: "play none none reverse"
}
});

// Profile image and orbital elements animation
mainTL.to(".profile-image", {
opacity: 1,
scale: 1,
duration: 1,
ease: "back.out(1.7)"
})
.to(".glow", {
opacity: 0.6,
duration: 1,
ease: "power2.inOut"
}, "-=0.5")
.to(".orbit-circle", {
opacity: 1,
scale: 1,
duration: 1,
ease: "power2.out"
}, "-=0.8")
.to(".orbit-element", {
opacity: 1,
scale: 1,
duration: 0.5,
ease: "back.out(1.7)"
}, "-=0.5");

// Start the orbital animation
gsap.to(".orbit-element", {
motionPath: {
path: "M100,0 A100,100 0 1,1 100,0",
autoRotate: true,
alignOrigin: [0.5, 0.5],
align: ".orbit-circle"
},
transformOrigin: "50% 50%",
duration: 8,
repeat: -1,
ease: "none"
});

// Floating animation for profile image
gsap.to(".profile-image", {
y: -15,
duration: 2,
repeat: -1,
yoyo: true,
ease: "power1.inOut"
});

// Glow pulsing animation
gsap.to(".glow", {
scale: 1.2,
opacity: 0.4,
duration: 2,
repeat: -1,
yoyo: true,
ease: "power1.inOut"
});

// Cards staggered animation
gsap.utils.toArray('.glass-card').forEach((card, index) => {
gsap.to(card, {
scrollTrigger: {
    trigger: card,
    start: "top bottom-=100",
    toggleActions: "play none none reverse"
},
opacity: 1,
y: 0,
duration: 0.8,
delay: index * 0.2,
ease: "power3.out"
});
});

// Expertise items staggered animation
gsap.utils.toArray('.expertise-item').forEach((item, index) => {
gsap.to(item, {
scrollTrigger: {
    trigger: item,
    start: "top bottom-=50",
    toggleActions: "play none none reverse"
},
opacity: 1,
y: 0,
duration: 0.5,
delay: index * 0.1,
ease: "back.out(1.7)"
});
});

// Hover animations for cards
gsap.utils.toArray('.glass-card').forEach(card => {
card.addEventListener('mouseenter', () => {
gsap.to(card, {
    scale: 1.02,
    duration: 0.3,
    ease: "power2.out"
});
});

card.addEventListener('mouseleave', () => {
gsap.to(card, {
    scale: 1,
    duration: 0.3,
    ease: "power2.out"
});
});
});

// Text reveal animation for headings
gsap.utils.toArray('.gradient-text').forEach(text => {
gsap.from(text, {
scrollTrigger: {
    trigger: text,
    start: "top bottom-=50",
    toggleActions: "play none none reverse"
},
opacity: 0,
y: 30,
duration: 1,
ease: "power3.out"
});
});

// Expertise icons hover animation
gsap.utils.toArray('.expertise-item').forEach(item => {
const icon = item.querySelector('.w-16');

item.addEventListener('mouseenter', () => {
gsap.to(icon, {
    scale: 1.1,
    duration: 0.3,
    ease: "back.out(1.7)"
});
});

item.addEventListener('mouseleave', () => {
gsap.to(icon, {
    scale: 1,
    duration: 0.3,
    ease: "power2.out"
});
});
});

document.addEventListener('DOMContentLoaded', () => {
    createStars();
    initializeAnimations();
});





