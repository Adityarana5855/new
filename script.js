// Header scroll effect
const header = document.querySelector('.header');
const navLinks = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    // Add Scrolled Class to Header
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        if(window.scrollY <= 50) {
            header.classList.remove('scrolled');
        }
    }

    // Active Navigation Link Update
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

// Intersection Observer for Scroll Animations
const revealElements = document.querySelectorAll('.reveal');

const revealOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
};

const revealOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
}, revealOptions);

revealElements.forEach(el => {
    revealOnScroll.observe(el);
});

// Mobile Menu Toggle (Basic implementation)
const menuToggle = document.querySelector('.menu-toggle');
menuToggle.addEventListener('click', () => {
    // A simple alert for mobile menu in this demo. 
    // In a full app, this would toggle a mobile menu overlay.
    alert('Mobile menu clicked! In a full implementation, this opens a mobile drawer.');
});
