function toggleMenu() {
    const menu = document.getElementById('navMenu');
    const toggle = document.querySelector('.menu-toggle');
    menu.classList.toggle('active');
    toggle.classList.toggle('active');
}

function closeMenu() {
    const menu = document.getElementById('navMenu');
    const toggle = document.querySelector('.menu-toggle');
    menu.classList.remove('active');
    toggle.classList.remove('active');

    // Close any open dropdowns
    document.querySelectorAll('.dropdown').forEach(dropdown => {
        dropdown.classList.remove('active');
    });
}

function toggleDropdown(event) {
    if (window.innerWidth <= 768) {
        event.stopPropagation();
        const dropdown = event.currentTarget;
        dropdown.classList.toggle('active');
    }
}
