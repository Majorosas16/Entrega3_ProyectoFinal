document.addEventListener('DOMContentLoaded', (event) => {
    // Encuentra todos los checkboxes
    let favoritosCheckboxes = document.querySelectorAll('.favorite-checkbox');
    
    // Inicializa un objeto para guardar los favoritos
    let favoritos = {};

    // Añade un event listener a cada checkbox
    favoritosCheckboxes.forEach((checkbox, index) => {
        // Asigna el estado inicial basado en localStorage o default false
        let isChecked = JSON.parse(localStorage.getItem(checkbox.id)) || false;
        checkbox.checked = isChecked; // Establece el estado inicial del checkbox
        favoritos[checkbox.id] = isChecked; // Guarda el estado inicial en el objeto

        checkbox.addEventListener('change', (e) => {
            // Actualiza el objeto de favoritos con el nuevo estado
            favoritos[checkbox.id] = e.target.checked;
            
            // Guarda el estado en localStorage para persistencia
            localStorage.setItem(checkbox.id, e.target.checked);
        });
    });

    console.log(favoritos); // Puedes eliminar esta línea, solo es para demostración
});


