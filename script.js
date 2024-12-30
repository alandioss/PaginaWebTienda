// script.js

// Mensaje para verificar que el archivo está vinculado correctamente
console.log("El archivo script.js está correctamente enlazado y ejecutándose.");

// Ejemplo: Agregar funcionalidad a un botón
document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".btn");
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            alert("Has hecho clic en un botón.");
        });
    });
});

// Función para verificar si todos los campos del formulario están completos
document.addEventListener("DOMContentLoaded", () => {
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

    // Ciclo para generar dinámicamente la lista de productos
    const productos = [
        { nombre: "Smartphone XYZ", precio: "$599" },
        { nombre: "Auriculares Bluetooth", precio: "$99" },
        { nombre: "Reloj Inteligente", precio: "$199" },
    ];

    console.log("Lista de productos disponibles:");
    productos.forEach((producto, index) => {
        console.log(`${index + 1}. ${producto.nombre} - Precio: ${producto.precio}`);
    });
});

// script.js

document.addEventListener("DOMContentLoaded", () => {
    // Productos para generar dinámicamente
    const productos = [
        {
            nombre: "Smartphone XYZ",
            precio: "$599",
            descripcion: "Potente, compacto y con una cámara de última generación.",
        },
        {
            nombre: "Auriculares Bluetooth",
            precio: "$99",
            descripcion: "Sonido envolvente y batería de larga duración.",
        },
        {
            nombre: "Reloj Inteligente",
            precio: "$199",
            descripcion: "Monitorea tu actividad física y mantente conectado.",
        },
    ];

    // Generar listado de productos en el HTML
    const productosContainer = document.querySelector(".productos");
    productosContainer.innerHTML = ""; // Limpiar contenido inicial

    productos.forEach((producto) => {
        const productoCard = document.createElement("article");
        productoCard.classList.add("producto-card");
        productoCard.innerHTML = `
            <h2>${producto.nombre}</h2>
            <p class="precio">${producto.precio}</p>
            <button class="btn btn-descripcion">Ver Descripción</button>
            <p class="descripcion ocultar">${producto.descripcion}</p>
        `;
        productosContainer.appendChild(productoCard);
    });

    // Evento click para mostrar la descripción del producto seleccionado
    const botonesDescripcion = document.querySelectorAll(".btn-descripcion");
    botonesDescripcion.forEach((boton) => {
        boton.addEventListener("click", (event) => {
            const descripcion = event.target.nextElementSibling;
            if (descripcion.classList.contains("ocultar")) {
                descripcion.classList.remove("ocultar");
                boton.textContent = "Ocultar Descripción";
            } else {
                descripcion.classList.add("ocultar");
                boton.textContent = "Ver Descripción";
            }
        });
    });
});
