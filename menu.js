const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');
const overlay = document.querySelector('.menu-overlay');
const navLinks = document.querySelectorAll('nav a');

if (menuToggle && nav && overlay && navLinks.length) {
    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
        overlay.classList.toggle('active', nav.classList.contains('active'));
    });

    overlay.addEventListener('click', function() {
        nav.classList.remove('active');
        overlay.classList.remove('active');
    });

    // Close menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            setTimeout(() => {
                nav.classList.remove('active');
                overlay.classList.remove('active');
            }, 100); // 100ms delay lets the navigation happen
        });
    });
}