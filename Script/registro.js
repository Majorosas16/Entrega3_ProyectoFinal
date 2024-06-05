import { registrar } from "./session.js";

const render = () => {
    const registro = document.querySelector("#registro");

    registro.addEventListener("submit", (e) =>{
        e.preventDefault();

        const email = e.target.email.value;
        const fecha= e.target.fecha.value;
        const contrasena = e.target.contrasena.value;
        const confirmar = e.target.confirmar.value;

        try {
           registrar(email, fecha, contrasena, confirmar);
           alert("Usuario registrado exitosamente");
            window.location.href = "./MainMenu.html";

        } catch (error) {
            alert(error.message);
        }
    });
};

document.addEventListener("DOMContentLoaded", render);