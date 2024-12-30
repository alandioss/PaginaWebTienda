// script.js

// Verificar que el archivo está enlazado correctamente
console.log("El archivo script.js está correctamente enlazado.");

document.addEventListener("DOMContentLoaded", () => {
    const productosContainer = document.getElementById("productos-container");
    const carritoCount = document.getElementById("carrito-count");

    // Cargar el carrito desde localStorage
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    // Actualiza el contador del carrito
    const actualizarCarrito = () => {
        carritoCount.textContent = carrito.reduce((acc, producto) => acc + producto.cantidad, 0);
        localStorage.setItem("carrito", JSON.stringify(carrito));
    };

    // Función para añadir un producto al carrito
    const añadirAlCarrito = (producto) => {
        const productoExistente = carrito.find(p => p.id === producto.id);
        if (productoExistente) {
            productoExistente.cantidad += 1;
        } else {
            carrito.push({ ...producto, cantidad: 1 });
        }
        alert(`Producto añadido: ${producto.nombre}`);
        actualizarCarrito();
    };

    // Función para mostrar productos en cards usando Flexbox
    const mostrarProductos = (productos) => {
        productosContainer.innerHTML = ""; // Limpiar el contenedor

        productos.forEach(producto => {
            // Generación de card para cada producto
            const productoHTML = `
                <div class="producto-card">
                    <img src="${producto.imagen}" alt="${producto.nombre}" class="producto-img">
                    <h2>${producto.nombre}</h2>
                    <p>Precio: $${producto.precio}</p>
                    <button class="btn" data-id="${producto.id}">Añadir al carrito</button>
                </div>
            `;
            productosContainer.innerHTML += productoHTML;
        });

        // Agregar eventos a los botones "Añadir al carrito"
        document.querySelectorAll(".btn").forEach(button => {
            button.addEventListener("click", () => {
                const id = parseInt(button.getAttribute("data-id"));
                const producto = productos.find(p => p.id === id);
                if (producto) añadirAlCarrito(producto);
            });
        });
    };

    // Obtener productos desde una API pública usando fetch
    fetch("https://fakestoreapi.com/products") // Cambia esta URL por la de la API que necesites
        .then(response => response.json()) // Procesar la respuesta JSON
        .then(data => {
            // Aquí procesamos los datos de la API
            const productos = data.map(producto => ({
                id: producto.id,
                nombre: producto.title,
                precio: producto.price,
                imagen: producto.image,
            }));
            // Mostrar los productos en cards
            mostrarProductos(productos);
        })
        .catch(error => {
            console.error("Error al obtener los productos:", error);
        });

    // Inicializar contador del carrito
    actualizarCarrito();

    // Mostrar el carrito
    const mostrarCarrito = () => {
        const carritoContainer = document.getElementById("carrito-container");
        carritoContainer.innerHTML = "";

        carrito.forEach(producto => {
            const productoHTML = `
                <div class="producto">
                    <h3>${producto.nombre}</h3>
                    <p>Precio: $${producto.precio}</p>
                    <label>Cantidad:</label>
                    <input type="number" min="1" value="${producto.cantidad}" data-id="${producto.id}" class="cantidad-producto">
                    <p>Total: $${producto.precio * producto.cantidad}</p>
                    <button class="btn-eliminar" data-id="${producto.id}">Eliminar</button>
                </div>
            `;
            carritoContainer.innerHTML += productoHTML;
        });

        // Eventos para cambiar la cantidad
        document.querySelectorAll(".cantidad-producto").forEach(input => {
            input.addEventListener("change", (e) => {
                const id = parseInt(e.target.dataset.id);
                const nuevaCantidad = parseInt(e.target.value);
                actualizarCantidad(id, nuevaCantidad);
            });
        });

        // Eventos para eliminar productos
        document.querySelectorAll(".btn-eliminar").forEach(boton => {
            boton.addEventListener("click", (e) => {
                const id = parseInt(e.target.dataset.id);
                eliminarDelCarrito(id);
            });
        });
    };

    // Actualizar la cantidad de un producto en el carrito
    const actualizarCantidad = (id, nuevaCantidad) => {
        const producto = carrito.find(p => p.id === id);
        if (producto) {
            producto.cantidad = nuevaCantidad;
            actualizarCarrito();
            mostrarCarrito();
        }
    };

    // Eliminar un producto del carrito
    const eliminarDelCarrito = (id) => {
        carrito = carrito.filter(producto => producto.id !== id);
        actualizarCarrito();
        mostrarCarrito();
    };

    // Inicializar carrito en el DOM
    mostrarCarrito();
});
