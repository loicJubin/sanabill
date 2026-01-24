function toggleMenu() {
    const menu = document.getElementById('navMenu');
    const toggle = document.querySelector('.menu-toggle');
    menu.classList.toggle('header__menu--active');
    toggle.classList.toggle('menu-toggle--active');
}

function closeMenu() {
    const menu = document.getElementById('navMenu');
    const toggle = document.querySelector('.menu-toggle');
    menu.classList.remove('header__menu--active');
    toggle.classList.remove('menu-toogle--active');

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
