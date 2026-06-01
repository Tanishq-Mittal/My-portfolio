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

    // PARTICLES BACKGROUND
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: '#00eeff'
                },
                shape: {
                    type: 'circle'
                },
                opacity: {
                    value: 0.5,
                    random: false
                },
                size: {
                    value: 3,
                    random: true
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#00eeff',
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 3,
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
                        enable: true,
                        mode: 'repulse'
                    },
                    onclick: {
                        enable: true,
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
            retina_detect: true
        });
    }

    const header = document.querySelector('header');
    if (header) {
        window.addEventListener('scroll', () => {
            header.classList.toggle('sticky', window.scrollY > 100);
        });
    }
});