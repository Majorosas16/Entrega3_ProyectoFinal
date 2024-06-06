import { cargaInformacion } from "./utils.js";

const renderizarCards = async (textoBusqueda) =>{
    const respuesta = await cargaInformacion();
   
    const textoLimpio= textoBusqueda.toLowerCase();
    console.log(textoLimpio)

     //Traigo el section del index
     const Personaje = document.querySelector(".Personaje");
     Personaje.innerHTML="";
     Personaje.classList.add("characters")

     let seEncontraronPersonajes = false
   
     for (const item of respuesta) {
       //Card es el que contiene la img, los textos y el boton
       const card = document.createElement("div");
       card.classList.add("characters__cont--C1")
   
       const img = document.createElement("img");
       img.src = item.squareImage;
       img.alt = item.nombre;
       img.classList.add("img");

       const cuadroTxt=document.createElement("div");
       cuadroTxt.classList.add("cuadrotxt");

       const h2=document.createElement("h2");
       h2.textContent=item.nombre;
       h2.classList.add("cuadrotxt__h2");

       const p=document.createElement("p");
       p.textContent=`Distrito: ${item.distrito}`;
       p.classList.add("cuadrotxt__p");

       cuadroTxt.appendChild(h2);
       cuadroTxt.appendChild(p);
       card.appendChild(img);
       card.appendChild(cuadroTxt);
   
    card.addEventListener("click", () => {
     window.location.href = `./card.html?id=${item.id}`;
    });


        if( textoLimpio === "" || item.nombre.toLowerCase().includes(textoLimpio)){
          Personaje.appendChild(card);
          seEncontraronPersonajes=true 
       }

     }

     if(!seEncontraronPersonajes){
    
    const mensaje2 = document.createElement("p");
    mensaje2.textContent = "¡OOPS! No se encontró ningún personaje";
    mensaje2.classList.add("p2Mensaje");

    Personaje.appendChild(mensaje2);
       }
}

const render = async () => {
 await renderizarCards("");

 const barraBusqueda = document.querySelector(".barraBusqueda");
 barraBusqueda.addEventListener ("input" , async (event) =>{
     const textoBusqueda = event.target.value;
     await renderizarCards(textoBusqueda);

 });
 

};


document.addEventListener("DOMContentLoaded", render);