import {cargaInformacion , Personaje} from "./utilsMainMenu.js"

const renderizarPersonaje = async () =>{

    const data = await cargaInformacion();

    const personajeDiv = document.querySelector("#personajeDiv");
    personajeDiv.classList.add("characters");

    for (const perso of data){

        const instanciaPersonaje= new Personaje(
            perso.id,
            perso.nombre,
            perso.distrito,
            perso.biografia1,
            perso.biografia2,
            perso.biografia3,
            perso.edad,
            perso.genero,
            perso.alias,
            perso.ocupacion,
            perso.estadoCivil,
            perso.familia,
            perso.squareImage,  
        );

        const personajeRender = instanciaPersonaje.render();

        personajeDiv.appendChild(personajeRender);
        instanciaPersonaje.addEventListeners();

    }
}

const render =async () => {

    await renderizarPersonaje();

}
document.addEventListener("DOMContentLoaded", render);