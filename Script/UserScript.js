import { obtenerUsuarioEnSesion } from './session.js';

document.addEventListener("DOMContentLoaded", function() {
    // Obtener el usuario en sesión
    const usuario = obtenerUsuarioEnSesion();

    if (usuario) {
        // Actualizar la información del usuario en la página
        document.getElementById("userInfoName").textContent = "Nombre: " + usuario.nombre;
        document.getElementById("userInfoEmail").textContent = "Email: " + usuario.email;
        document.getElementById("userInfoBirthdate").textContent = "Fecha de nacimiento: " + usuario.fecha;
    }
});


