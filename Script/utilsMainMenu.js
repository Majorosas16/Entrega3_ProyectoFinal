export const cargaInformacion = async () => {
    const response = await fetch("https://raw.githubusercontent.com/Majorosas16/ProyectoFinalFinal/main/data.json");
    const data = await response.json();
    return data.HunterGamesCharacters;
}


export const personajePorId = async (id) => {
    const personaje = await cargaInformacion();
  
    for (const item of personaje){
      if(item.id === id) {
        return item;
      }
    }
  
    throw new Error ("Personaje no encontrado");
}



export class Personaje {
    #id;
    nombre;
    distrito;
    biografia1;
    biografia2;
    biografia3;
    edad;
    genero;
    alias;
    ocupacion;
    estadoCivil;
    familia;
    squareImage;

    #nodoCard;

    constructor(id, nombre, distrito, biografia1, biografia2, biografia3, edad, genero, alias, ocupacion, estadoCivil, familia, squareImage) {
        this.#id = id;
        this.nombre = nombre;
        this.distrito= distrito;
        this.biografia1=biografia1;
        this.biografia2=biografia2;
        this.biografia3=biografia3;
        this.edad=edad;
        this.genero=genero;
        this.alias=alias;
        this.ocupacion=ocupacion;
        this.estadoCivil=estadoCivil;
        this.familia=familia;
        this.squareImage=squareImage;

    }

    render() {
        const card = document.createElement("div");
        card.id = this.#id;
        card.classList.add("characters__cont--C1");
        this.#nodoCard=card;

        const img=document.createElement("img");
        img.src = this.squareImage;
        img.alt = this.nombre;
        img.classList.add("img");

        const cuadroTxt=document.createElement("div");
        cuadroTxt.classList.add("cuadrotxt");

        const h2=document.createElement("h2");
        h2.textContent=this.nombre;
        h2.classList.add("cuadrotxt__h2");

        const p=document.createElement("p");
        p.textContent=`Distrito: ${this.distrito}`;
        p.classList.add("cuadrotxt__p");

        cuadroTxt.appendChild(h2);
        cuadroTxt.appendChild(p);
        card.appendChild(img);
        card.appendChild(cuadroTxt);

        return card;
    }

    

    addEventListeners() {

        this.#nodoCard.addEventListener("click", () =>{
                window.location.href = `./Card.html?id=${this.#id}`;  
                 //aqui el redireccionamiento


        });
    }
}

