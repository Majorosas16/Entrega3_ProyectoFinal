import {personajePorId} from "./utilsMainMenu.js"

const renderizarPersonaje = async () =>{

        //Sincronizar el id
        const params = new URLSearchParams(window.location.search);
        const id =params.get("id");
        const personaje = await personajePorId(id);

    //Para que en el header se ajuste con el personaje tocado
    const headTitle= document.querySelector("#headTitle");
    headTitle.textContent=personaje.nombre;

    const section = document.querySelector(".contenedor");

    const contenido= document.createElement("div");

    const imgFlecha = document.createElement("img");
    imgFlecha.src="Imagenes1/flecha.png";
    imgFlecha.alt="Flecha";

    const p = document.createElement("p");
    p.textContent=personaje.nombre;

    contenido.appendChild(imgFlecha);
    contenido.appendChild(p);
    section.appendChild(contenido);

    const imgFav = document.createElement("img");
    imgFav.src="Imagenes2/Recurso 26 1.png";
    imgFav.alt="Favorito";

    const fotosDiv = document.createElement("div");

    const img1 = document.createElement("img");
    imgFav.src="#";
    imgFav.alt="img1";

    const img2 = document.createElement("img");
    imgFav.src="#";
    imgFav.alt="img2";

    const img3 = document.createElement("img");
    imgFav.src="#";
    imgFav.alt="img3";

    //aqui los AP

    const bioDiv = document.createElement("div")
}

const render =async () => {

    await renderizarPersonaje();

    //Para que en el header se ajuste con el personaje tocado
    const headTitle= document.querySelector("#headTitle");
    headTitle.textContent=`${personaje.displayName} Character`;

    //Traigo el section del index
    const secPersonaje = document.querySelector(".Personaje");
    secPersonaje.classList.add("personaje");

    //Btn de regresar a las cards
    const btn = document.createElement("button");
    btn.src="#";
    btn.textContent="Back to the Cards";
    btn.classList.add("btn");
    secPersonaje.appendChild(btn);

    btn.addEventListener("click", () => {
        window.location.href = `./index.html`;  
      });

//Card es el que contiene la img y los textos
    const card= document.createElement("div");
    card.classList.add("card");

    //Div de la imagen del personaje
    const divPersoIma= document.createElement("div");

    const imgPersonaje = document.createElement("div");
    const img = document.createElement("img");
    img.src=personaje.bustPortrait;
    img.alt=personaje.displayName;
    imgPersonaje.appendChild(img);
    imgPersonaje.classList.add("divImg");
    img.classList.add("img")

    divPersoIma.appendChild(imgPersonaje);
    card.appendChild(divPersoIma)
    secPersonaje.appendChild(card);

    //Div para los textos
    const divPersoTxt = document.createElement("div");
    divPersoTxt.classList.add("texto")

        const title = document.createElement("H1");
        title.textContent=personaje.displayName;


        const subTitle= document.createElement("p");
        subTitle.textContent=personaje.description;
        subTitle.classList.add("p");

        const rolTitle = document.createElement("H1");
        rolTitle.textContent="Role:";
        rolTitle.classList.add("H1");

        const rolSubtitle= document.createElement("p");
        rolSubtitle.classList.add("p");
        rolSubtitle.textContent=personaje.role.description;

        divPersoTxt.appendChild(title);
        divPersoTxt.appendChild(subTitle);
        divPersoTxt.appendChild(rolTitle);
        divPersoTxt.appendChild(rolSubtitle);
        card.appendChild(divPersoTxt);
        secPersonaje.appendChild(card);

}
document.addEventListener("DOMContentLoaded", render);