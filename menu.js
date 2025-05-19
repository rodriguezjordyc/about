// Robust Mobile Menu Functionality

document.addEventListener('DOMContentLoaded', function() {
    // Navigation links data
    const navLinksData = [
        { href: "index.html", text: "about me" },
        { href: "brain-dump.html", text: "brain dump" },
        { href: "pics.html", text: "pics" }
    ];

    // Ensure menu toggle exists
    let menuToggle = document.querySelector('.menu-toggle');
    if (!menuToggle) {
        menuToggle = document.createElement('div');
        menuToggle.className = 'menu-toggle';
        menuToggle.textContent = '☰';
        document.body.prepend(menuToggle);
    }

    // Ensure overlay exists
    let overlay = document.querySelector('.menu-overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.className = 'menu-overlay';
        document.body.appendChild(overlay);
    }

    // Ensure nav exists and build it
    let nav = document.querySelector('nav');
    if (!nav) {
        nav = document.createElement('nav');
        document.body.prepend(nav);
    }
    nav.innerHTML = `
        <ul>
            ${navLinksData.map(link => `<li><a href="${link.href}">${link.text}</a></li>`).join('')}
        </ul>
    `;

    // Toggle menu when hamburger is clicked
    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
        overlay.classList.toggle('active', nav.classList.contains('active'));
    });

    // Close menu when overlay is clicked
    overlay.addEventListener('click', function() {
        nav.classList.remove('active');
        overlay.classList.remove('active');
    });

    // Close menu when a link is clicked, but let navigation happen
    nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function() {
            nav.classList.remove('active');
            overlay.classList.remove('active');
            // No preventDefault, no setTimeout
        });
    });
});