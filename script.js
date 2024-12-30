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
