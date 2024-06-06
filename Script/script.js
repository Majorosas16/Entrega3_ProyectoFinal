import { obtenerFavoritosUsuario, añadirFavorito, eliminarFavorito } from './session.js';

document.addEventListener('DOMContentLoaded', (event) => {
    // Encuentra todos los checkboxes
    let favoritosCheckboxes = document.querySelectorAll('.favorite-checkbox');

    // Obtener los favoritos del usuario en sesión
    const favoritos = obtenerFavoritosUsuario();

    // Añade un event listener a cada checkbox
    favoritosCheckboxes.forEach((checkbox) => {
        // Asigna el estado inicial basado en los favoritos del usuario
        const isChecked = favoritos.includes(checkbox.id);
        checkbox.checked = isChecked; // Establece el estado inicial del checkbox

        checkbox.addEventListener('change', (e) => {
            if (e.target.checked) {
                // Añadir a favoritos
                añadirFavorito(checkbox.id);
            } else {
                // Eliminar de favoritos
                eliminarFavorito(checkbox.id);
            }
        });
    });

    console.log(favoritos); // Puedes eliminar esta línea, solo es para demostración
});