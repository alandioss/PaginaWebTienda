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

document.addEventListener("DOMContentLoaded", () => {
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
        botonesDescripcion.forEach((boton, index) => {
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

// script.js

document.addEventListener("DOMContentLoaded", () => {
    // Función para obtener datos de la API pública
    const obtenerDatosAPI = async () => {
        const url = "https://fakestoreapi.com/products"; // URL de la API pública
        try {
            const respuesta = await fetch(url);
            if (!respuesta.ok) {
                throw new Error(`Error: ${respuesta.status} - ${respuesta.statusText}`);
            }
            const productos = await respuesta.json();
            mostrarProductosAPI(productos);
        } catch (error) {
            console.error("Hubo un problema al obtener los datos de la API:", error);
            document.querySelector(".productos").innerHTML = `
                <p class="error">No se pudieron cargar los productos. Intenta nuevamente más tarde.</p>
            `;
        }
    };

    // Función para mostrar los productos obtenidos de la API
    const mostrarProductosAPI = (productos) => {
        const productosContainer = document.querySelector(".productos");
        productosContainer.innerHTML = ""; // Limpiar contenido inicial

        productos.forEach((producto) => {
            const productoHTML = `
                <article class="producto-card">
                    <img src="${producto.image}" alt="${producto.title}" class="producto-img" />
                    <h2 class="producto-nombre">${producto.title}</h2>
                    <p class="producto-precio">Precio: $${producto.price}</p>
                    <p class="producto-descripcion">${producto.description.substring(0, 100)}...</p>
                    <button class="btn btn-comprar">Comprar</button>
                </article>
            `;
            productosContainer.innerHTML += productoHTML;
        });
    };

    // Llamar a la función para obtener los datos de la API
    obtenerDatosAPI();
});

document.addEventListener("DOMContentLoaded", async () => {
    const url = "https://fakestoreapi.com/products";
    const productosContainer = document.getElementById("productos-container");

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }

        const productos = await response.json();

        productos.forEach(producto => {
            // Crear la estructura de la tarjeta
            const productoHTML = `
                <div class="producto">
                    <img src="${producto.image}" alt="${producto.title}">
                    <h2>${producto.title}</h2>
                    <p>Precio: $${producto.price}</p>
                    <a href="#" class="btn">Añadir al carrito</a>
                </div>
            `;

            // Añadir la tarjeta al contenedor
            productosContainer.innerHTML += productoHTML;
        });
    } catch (error) {
        console.error("Error al obtener los datos:", error);
    }
});

document.addEventListener("DOMContentLoaded", async () => {
    const url = "https://fakestoreapi.com/products";
    const productosContainer = document.getElementById("productos-container");
    const carritoCount = document.getElementById("carrito-count");

    // Cargar el carrito desde localStorage
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    // Actualiza el contador del carrito
    const actualizarCarrito = () => {
        carritoCount.textContent = carrito.length;
        localStorage.setItem("carrito", JSON.stringify(carrito));
    };

    // Función para añadir un producto al carrito
    const añadirAlCarrito = (producto) => {
        carrito.push(producto);
        alert(`Producto añadido: ${producto.title}`);
        actualizarCarrito();
    };

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }

        const productos = await response.json();

        productos.forEach(producto => {
            // Crear la estructura de la tarjeta
            const productoHTML = `
                <div class="producto">
                    <img src="${producto.image}" alt="${producto.title}">
                    <h2>${producto.title}</h2>
                    <p>Precio: $${producto.price}</p>
                    <button class="btn" data-id="${producto.id}">Añadir al carrito</button>
                </div>
            `;

            // Añadir la tarjeta al contenedor
            productosContainer.innerHTML += productoHTML;
        });

        // Añadir eventos a los botones "Añadir al carrito"
        document.querySelectorAll(".btn").forEach(button => {
            button.addEventListener("click", () => {
                const id = button.getAttribute("data-id");
                const producto = productos.find(p => p.id == id);
                añadirAlCarrito(producto);
            });
        });

        // Actualiza el contador del carrito al cargar
        actualizarCarrito();
    } catch (error) {
        console.error("Error al obtener los datos:", error);
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    const productosContainer = document.getElementById("productos-container");

    // Actualizar el contador del carrito
    const actualizarContadorCarrito = () => {
        const contador = document.getElementById("carrito-count");
        if (contador) {
            contador.textContent = carrito.length;
        }
    };

    // Añadir producto al carrito
    const añadirAlCarrito = (producto) => {
        carrito.push(producto);
        localStorage.setItem("carrito", JSON.stringify(carrito));
        alert(`Producto "${producto.nombre}" añadido al carrito`);
        actualizarContadorCarrito();
    };

    // Lista de productos
    const productos = [
        { id: 1, nombre: "Producto 1", precio: 100, imagen: "url_imagen1.jpg" },
        { id: 2, nombre: "Producto 2", precio: 200, imagen: "url_imagen2.jpg" },
        { id: 3, nombre: "Producto 3", precio: 300, imagen: "url_imagen3.jpg" },
    ];

    // Renderizar productos
    productos.forEach((producto) => {
        const productoHTML = `
            <div class="producto">
                <img src="${producto.imagen}" alt="${producto.nombre}">
                <h2>${producto.nombre}</h2>
                <p>Precio: $${producto.precio}</p>
                <button class="btn-add-carrito" data-id="${producto.id}">Comprar</button>
            </div>
        `;
        productosContainer.innerHTML += productoHTML;
    });

    // Asignar eventos a los botones
    productosContainer.addEventListener("click", (e) => {
        if (e.target.classList.contains("btn-add-carrito")) {
            const id = e.target.getAttribute("data-id");
            const producto = productos.find((prod) => prod.id == id);
            if (producto) {
                añadirAlCarrito(producto);
            }
        }
    });

    // Inicializar contador del carrito
    actualizarContadorCarrito();
});
