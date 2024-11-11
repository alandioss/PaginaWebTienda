// Seleccionamos el botón de la hamburguesa y el menú de navegación
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

// Añadimos un evento de clic al botón de la hamburguesa
hamburger.addEventListener('click', () => {
    // Alternamos la clase 'show' en el menú de navegación
    navLinks.classList.toggle('show');
});
