import { obtenerUsuarioEnSesion, actualizarUsuario } from './session.js';

document.addEventListener("DOMContentLoaded", function() {
    const usuario = obtenerUsuarioEnSesion();

    if (usuario) {
        // Actualiza la información del usuario en la página
        document.getElementById("userInfoName").textContent = "Nombre: " + usuario.nombre;
        document.getElementById("userInfoEmail").textContent = "Email: " + usuario.email;
        document.getElementById("userInfoBirthdate").textContent = "Fecha de nacimiento: " + usuario.fecha;
        document.getElementById("nombreUsuario").value = usuario.nombre;
        document.getElementById("email").value = usuario.email;
        document.getElementById("fecha").value = usuario.fecha;
        document.getElementById("contrasena").value = usuario.contrasena;
        if (usuario.fotoPerfil) {
            document.querySelector("#FotoPerfil").src = usuario.fotoPerfil;
            document.querySelector("#userIcon").src = usuario.fotoPerfil; // Actualiza el ícono del usuario
        }
    }
});

// Cambio de imagen de perfil
const fotoPerfilInput = document.querySelector("#fotoPerfil");
fotoPerfilInput.addEventListener("change", (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            const imagenPerfil = document.querySelector("#FotoPerfil");
            imagenPerfil.src = e.target.result;
            document.querySelector("#userIcon").src = e.target.result; // Actualiza el ícono del usuario

            // Actualiza la imagen de perfil en el localStorage
            const usuario = obtenerUsuarioEnSesion();
            if (usuario) {
                usuario.fotoPerfil = e.target.result;
                actualizarUsuario(usuario);  // Llama a la función para actualizar el usuario en localStorage
                actualizarIconoEnMainMenu(e.target.result); // Actualiza icono en otras páginas
            }
        };
        reader.readAsDataURL(file);
    }
});

// Guarda cambios de información del usuario
document.querySelector("#guardarCambiosBtn").addEventListener("click", () => {
    const usuario = obtenerUsuarioEnSesion();
    if (usuario) {
        usuario.nombre = document.querySelector("#nombreUsuario").value;
        usuario.email = document.querySelector("#email").value;
        usuario.fecha = document.querySelector("#fecha").value;
        usuario.contrasena = document.querySelector("#contrasena").value;
        usuario.fotoPerfil = document.querySelector("#FotoPerfil").src;
        actualizarUsuario(usuario);  // Llama a la función para actualizar el usuario en localStorage
        alert("Datos guardados exitosamente");
        actualizarIconoEnMainMenu(usuario.fotoPerfil); // Actualiza icono en otras páginas
    }
});

// Función para actualizar el ícono del usuario en las otras páginas
const actualizarIconoEnMainMenu = (fotoPerfil) => {
    const iconosUsuario = document.querySelectorAll(".header__icono img");
    iconosUsuario.forEach(icono => {
        icono.src = fotoPerfil;
    });
}
