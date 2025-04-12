const navLinks = document.getElementById('navLinks');
const menuToggle = document.querySelector('.menu-toggle'); // Selecciona el botón del menú

function toggleMenu() {
  navLinks.classList.toggle('show');
}

// Agrega un listener de eventos al botón del menú
if (menuToggle) { // Asegúrate de que menuToggle no sea null
  menuToggle.addEventListener('click', toggleMenu);
}

// Obtener el formulario y el contenedor del mensaje de éxito
const formulario = document.getElementById('formulario');
const mensajeExito = document.createElement('div');
mensajeExito.id = 'mensajeExito';
mensajeExito.classList.add('mensaje-exito');

// Escuchar el evento de envío del formulario
formulario.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío real del formulario para prueba
    
    // Limpiar cualquier mensaje de éxito anterior
    const mensajeAnterior = document.getElementById('mensajeExito');
    if (mensajeAnterior) {
        mensajeAnterior.remove();
    }
    
    // Mostrar el mensaje de éxito
    mensajeExito.textContent = '¡Mensaje enviado correctamente! Nos pondremos en contacto contigo pronto.';
    formulario.appendChild(mensajeExito);
    
    // Resetear el formulario
    formulario.reset();
});

