function toggleMenu() {
    const menuElement = document.getElementById('menu-list');
    if (menuElement) {
        const { display, position } = window.getComputedStyle(menuElement);
        if (position === "absolute") {
            menuElement.style.display = (display === 'block') ? 'none' : 'block';
        }
    }
};