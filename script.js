document.addEventListener('DOMContentLoaded', () => {
    // MOBILE MENU
    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (menuBtn && navLinks) {
        menuBtn.onclick = () => {
            navLinks.classList.toggle('active');
        };
    }

    // TYPING ANIMATION
    if (typeof Typed !== 'undefined') {
        new Typed('.typing', {
            strings: [
                'Certified SOC Analyst',
                'Python Programmer',
                'Frontend Developer'
            ],
            typeSpeed: 100,
            backSpeed: 60,
            loop: true
        });
    }

    // IMAGE LIGHTBOX
    const profileImage = document.getElementById('profileImage');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.close');

    if (profileImage && lightbox && lightboxImg && closeBtn) {
        profileImage.onclick = () => {
            lightbox.style.display = 'block';
            lightboxImg.src = profileImage.src;
        };

        closeBtn.onclick = () => {
            lightbox.style.display = 'none';
        };

        lightbox.onclick = (e) => {
            if (e.target !== lightboxImg) {
                lightbox.style.display = 'none';
            }
        };
    }

    // PARTICLES BACKGROUND - Optimized for mobile
    if (typeof particlesJS !== 'undefined') {
        // Detect if device is mobile/tablet
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        const particleCount = isMobile ? 25 : 80; // Significantly reduce particles on mobile
        const particleSize = isMobile ? 2 : 3;
        const particleSpeed = isMobile ? 1.5 : 3; // Slower particles on mobile
        
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: particleCount,
                    density: {
                        enable: true,
                        value_area: 1200 // Increased area to reduce density on mobile
                    }
                },
                color: {
                    value: '#00eeff'
                },
                shape: {
                    type: 'circle'
                },
                opacity: {
                    value: isMobile ? 0.3 : 0.5, // Reduce opacity on mobile
                    random: false
                },
                size: {
                    value: particleSize,
                    random: true
                },
                line_linked: {
                    enable: !isMobile, // Disable lines on mobile for performance
                    distance: 150,
                    color: '#00eeff',
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: particleSpeed,
                    direction: 'none',
                    random: false,
                    straight: false,
                    out_mode: 'out',
                    bounce: false
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: {
                        enable: !isMobile, // Disable on mobile for better performance
                        mode: 'repulse'
                    },
                    onclick: {
                        enable: !isMobile, // Disable on mobile for better performance
                        mode: 'push'
                    },
                    resize: true
                },
                modes: {
                    repulse: {
                        distance: 100
                    },
                    push: {
                        particles_nb: 4
                    }
                }
            },
            retina_detect: !isMobile // Disable retina detection on mobile to save performance
        });
    }

    // HEADER SCROLL EFFECT - Optimized with requestAnimationFrame
    const header = document.querySelector('header');
    if (header) {
        let ticking = false;
        window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    header.classList.toggle('sticky', window.scrollY > 100);
                    ticking = false;
                });
                ticking = true;
            }
        }, { passive: true });
    }
});
