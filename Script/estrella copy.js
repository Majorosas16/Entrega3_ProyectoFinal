document.addEventListener('DOMContentLoaded', (event) => {
    
    let favoritosCheckboxes = document.querySelectorAll('.favorite-checkbox');
    
    
    let favoritos = {};

    
    favoritosCheckboxes.forEach((checkbox, index) => {
       
        let isChecked = JSON.parse(localStorage.getItem(checkbox.id)) || false;
        checkbox.checked = isChecked; 
        favoritos[checkbox.id] = isChecked; 

        checkbox.addEventListener('change', (e) => {
            
            favoritos[checkbox.id] = e.target.checked;
            
            
            localStorage.setItem(checkbox.id, e.target.checked);
        });
    });

    console.log(favoritos); 
});


