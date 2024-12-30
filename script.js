// Mensaje para verificar que el archivo está vinculado correctamente
console.log("El archivo script.js está correctamente enlazado y ejecutándose.");

// Función para verificar si todos los campos del formulario están completos
document.addEventListener("DOMContentLoaded", () => {
    // Manejo de formulario de contacto
    const form = document.querySelector(".contact-form form");
    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Evitar que el formulario se envíe para probar la funcionalidad
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (email === "" || message === "") {
            console.log("Por favor, completa todos los campos del formulario.");
        } else {
            console.log("Formulario completado correctamente.");
            console.log(`Email: ${email}`);
            console.log(`Mensaje: ${message}`);
        }
    });

    // Crear un array de productos
    const productos = [
        {
            nombre: "Smartphone XYZ",
            precio: "$599",
            descripcion: "Potente, compacto y con una cámara de última generación.",
            imagen: "imagenes/shopping.jpg",
        },
        {
            nombre: "Auriculares Bluetooth",
            precio: "$99",
            descripcion: "Sonido envolvente y batería de larga duración.",
            imagen: "imagenes/auris.jpg",
        },
        {
            nombre: "Reloj Inteligente",
            precio: "$199",
            descripcion: "Monitorea tu actividad física y mantente conectado.",
            imagen: "imagenes/reloj.jpg",
        },
    ];

    // Función para mostrar productos en la página
    const mostrarProductos = () => {
        const productosContainer = document.querySelector(".productos");
        productosContainer.innerHTML = ""; // Limpiar contenido inicial

        productos.forEach((producto) => {
            const productoHTML = `
                <article class="producto-card">
                    <img src="${producto.imagen}" alt="${producto.nombre}" class="producto-img" />
                    <h2 class="producto-nombre">${producto.nombre}</h2>
                    <p class="producto-precio">${producto.precio}</p>
                    <button class="btn btn-descripcion">Ver Descripción</button>
                    <p class="producto-descripcion ocultar">${producto.descripcion}</p>
                </article>
            `;
            productosContainer.innerHTML += productoHTML;
        });

        // Agregar evento click para cada botón de descripción
        const botonesDescripcion = document.querySelectorAll(".btn-descripcion");
        botonesDescripcion.forEach((boton) => {
            boton.addEventListener("click", () => {
                const descripcion = boton.nextElementSibling;
                if (descripcion.classList.contains("ocultar")) {
                    descripcion.classList.remove("ocultar");
                    boton.textContent = "Ocultar Descripción";
                } else {
                    descripcion.classList.add("ocultar");
                    boton.textContent = "Ver Descripción";
                }
            });
        });
    };

    // Llamar a la función para mostrar productos
    mostrarProductos();
});
