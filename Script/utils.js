export const cargaInformacion = async () => {
    const response = await fetch("data.json");
    const data = await response.json();
    return data.HunterGamesCharacters;
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

    #nodoImagen;

    constructor(id, nombre, distrito, biografia1, biografia2, biografia3, edad, genero, alias, ocupacion, estadoCivil, familia) {
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

    }

    render() {
        const card = document.createElement("div");
        card.id = this.id;

        const img=document.createElement("img");
        img.src = "#";
        img.alt = this.nombre;
        this.#nodoImagen= img;

        const cuadroTxt=document.createElement("div");

        const h2=document.createElement("h2");
        h2.textContent=this.nombre;

        const p=document.createElement("p");
        p.textContent=this.distrito;

        cuadroTxt.appendChild(h2);
        cuadroTxt.appendChild(p);
        card.appendChild(img);
        card.appendChild(cuadroTxt);

        return card;
    }

    addEventListeners() {

        this.#nodoImagen.addEventListener("click", () =>{
            //aqui el redireccionamiento
        });
    }
}

