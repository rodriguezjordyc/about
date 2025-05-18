// Mobile navigation menu builder and handler

// Navigation links data
const navLinksData = [
    { href: "index.html", text: "about me" },
    { href: "brain-dump.html", text: "brain dump" },
    { href: "pics.html", text: "pics" }
];

// Create nav if it doesn't exist
let nav = document.querySelector('nav');
if (!nav) {
    nav = document.createElement('nav');
    document.body.prepend(nav);
}

// Build mobile nav menu
nav.innerHTML = `
    <ul>
        ${navLinksData.map(link => `<li><a href="${link.href}">${link.text}</a></li>`).join('')}
    </ul>
`;

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

// Select nav links
const navLinks = nav.querySelectorAll('a');

// Menu toggle handler
menuToggle.addEventListener('click', function() {
    nav.classList.toggle('active');
    overlay.classList.toggle('active', nav.classList.contains('active'));
});

// Overlay click closes menu
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