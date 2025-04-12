const navbar = document.getElementById('navbar');
const navLinks = document.getElementById('navLinks');
const menuToggle = document.querySelector('.menu-toggle'); // Selecciona el botón del menú

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

function toggleMenu() {
    navLinks.classList.toggle('show');
}

// Agrega un listener de eventos al botón del menú
if (menuToggle) { // Asegúrate de que menuToggle no sea null
    menuToggle.addEventListener('click', toggleMenu);
}