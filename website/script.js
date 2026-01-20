document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Simple interaction for the logo
    const logoIcon = document.querySelector('.logo-icon');
    if (logoIcon) {
        logoIcon.addEventListener('mouseenter', () => {
            logoIcon.style.transform = 'rotate(45deg)';
            logoIcon.style.transition = 'transform 0.5s ease';
        });
        logoIcon.addEventListener('mouseleave', () => {
            logoIcon.style.transform = 'rotate(0deg)';
        });
    }

    // Mobile Menu Toggle
    const menuBtn = document.querySelector('.menu-btn');
    const nav = document.querySelector('nav');
    if (menuBtn && nav) {
        menuBtn.addEventListener('click', () => {
            nav.classList.toggle('active');
            menuBtn.textContent = nav.classList.contains('active') ? 'Close' : 'Menu';
        });

        // Close menu when clicking a link
        nav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('active');
                menuBtn.textContent = 'Menu';
            });
        });
    }
});
