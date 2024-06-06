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
    section.classList.add("contenedor");

    const divGrande=document.createElement("div")
    divGrande.classList.add("contenedor__contenido");

    const imgFlecha = document.createElement("img");
    imgFlecha.src="Imagenes1/flecha.png";
    imgFlecha.alt="Flecha";
    imgFlecha.classList.add("imgUno");

        imgFlecha.addEventListener("click", () =>{
             window.location.href = `./MainMenu.html`;  
 
        });

    const p = document.createElement("p");
    p.textContent=personaje.nombre;
    p.classList.add("tituloUno");

    const fav = document.createElement("img");
    fav.src="Imagenes2/Favo.png";
    fav.alt="Favoritos";
    fav.classList.add("imgDos");

    fav.addEventListener("click", () =>{
        window.location.href = `./Favoritos.html`;  

});

    divGrande.appendChild(imgFlecha);
    divGrande.appendChild(p);
    divGrande.appendChild(fav);
    section.appendChild(divGrande);

    const fotosCont = document.createElement("div");
    fotosCont.classList.add("contenedor__fotos");

    const img1 = document.createElement("img");
    img1.src=personaje.square1;
    img1.alt="img1";

    const img2 = document.createElement("img");
    img2.src=personaje.square2;
    img2.alt="a";

    const img3 = document.createElement("img");
    img3.src=personaje.square3;
    img3.alt="img3";

    const div = document.querySelector("#divAdd");

    fotosCont.appendChild(img1);
    fotosCont.appendChild(img2);
    fotosCont.appendChild(img3);
    section.appendChild(fotosCont);
    section.appendChild(div);


    const divBio = document.createElement("div");
    divBio.classList.add("contenedor__Biografia");

    const divBioText = document.createElement("div");
    divBioText.classList.add("contenedor__Biografia-texto");

    const pTxt1 = document.createElement("p");
    pTxt1.textContent=personaje.biografia1;
    pTxt1.classList.add("contenedor__Biografia-texto1");

    const pTxt2 = document.createElement("p");
    pTxt2.textContent=personaje.biografia2;
    pTxt2.classList.add("contenedor__Biografia-texto2");

    const pTxt3 = document.createElement("p");
    pTxt3.textContent=personaje.biografia3;
    pTxt3.classList.add("contenedor__Biografia-texto3");

    divBioText.appendChild(pTxt1);
    divBioText.appendChild(pTxt2);
    divBioText.appendChild(pTxt3);
    divBio.appendChild(divBioText);
    section.appendChild(divBio);

    const divBioImg = document.createElement("div");
    divBioImg.classList.add("contenedor__Biografia-imagen");

    const imgBio= document.createElement("img");
    imgBio.src=personaje.bodyImage;
    imgBio.alt="imgBio";

    divBioImg.appendChild(imgBio);
    section.appendChild(divBioImg);

    //Bio

    const divContInfo = document.createElement("div");
    divContInfo.classList.add("contenedor__cajita");

    const divContInfoTxt = document.createElement("div");
    divContInfoTxt.classList.add("contenedor__cajita--texto");

    const pTitleEdad= document.createElement("p");
    pTitleEdad.textContent="Edad:";
    pTitleEdad.classList.add("bolder");

    const pEdad= document.createElement("p");
    pEdad.textContent= personaje.edad;

    const divLinea = document.createElement("div");
    divLinea.classList.add("contenedor__linea");
    const lineaH1= document.createElement("hr");
    lineaH1.classList.add("linea-horizontal");

    divLinea.appendChild(lineaH1);

    const pTitleAlias= document.createElement("p");
    pTitleAlias.textContent="Alias:";
    pTitleAlias.classList.add("bolder");

    const pAlias= document.createElement("p");
    pAlias.textContent= personaje.alias;

    const divLinea2 = document.createElement("div");
    divLinea2.classList.add("contenedor__linea");
    const lineaH2= document.createElement("hr");
    lineaH2.classList.add("linea-horizontal");

    divLinea2.appendChild(lineaH2);

    const pTitleOcupacion= document.createElement("p");
    pTitleOcupacion.textContent="Ocupación:";
    pTitleOcupacion.classList.add("bolder");

    const pOcupacion= document.createElement("p");
    pOcupacion.textContent= personaje.ocupacion;

    const divLinea3 = document.createElement("div");
    divLinea3.classList.add("contenedor__linea");
    const lineaH3= document.createElement("hr");
    lineaH3.classList.add("linea-horizontal");

    divLinea3.appendChild(lineaH3);

    const pTitleEstado= document.createElement("p");
    pTitleEstado.textContent="Estado Civil:";
    pTitleEstado.classList.add("bolder");

    const pEstado= document.createElement("p");
    pEstado.textContent= personaje.estadoCivil;

    const divLinea4 = document.createElement("div");
    divLinea4.classList.add("contenedor__linea");
    const lineaH4= document.createElement("hr");
    lineaH4.classList.add("linea-horizontal");

    divLinea4.appendChild(lineaH4);

    const pTitleFamilia= document.createElement("p");
    pTitleFamilia.textContent="Familia:";
    pTitleFamilia.classList.add("bolder");

    const pFamilia= document.createElement("p");
    pFamilia.textContent= personaje.familia;


    divContInfoTxt.appendChild(pTitleEdad);
    divContInfoTxt.appendChild(pEdad);
    divContInfoTxt.appendChild(divLinea);
    divContInfoTxt.appendChild(pTitleAlias);
    divContInfoTxt.appendChild(pAlias);
    divContInfoTxt.appendChild(divLinea2);
    divContInfoTxt.appendChild(pTitleOcupacion);
    divContInfoTxt.appendChild(pOcupacion);
    divContInfoTxt.appendChild(divLinea3);
    divContInfoTxt.appendChild(pTitleEstado);
    divContInfoTxt.appendChild(pEstado);
    divContInfoTxt.appendChild(divLinea4);
    divContInfoTxt.appendChild(pTitleFamilia);
    divContInfoTxt.appendChild(pFamilia);
    divContInfo.appendChild(divContInfoTxt);

    section.appendChild(divContInfo);






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



document.addEventListener("DOMContentLoaded", render);