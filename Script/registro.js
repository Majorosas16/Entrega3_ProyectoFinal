import { registrar, login } from "./session.js";

const render = () => {
    const registro = document.querySelector("#registro");

    registro.addEventListener("submit", async (e) =>{
        e.preventDefault();
        const nombre = e.target.nombre.value;
        const email = e.target.email.value;
        const fecha = e.target.fecha.value;
        const contrasena = e.target.contrasena.value;
        const confirmar = e.target.confirmar.value;

        try {
            await registrar(nombre, email, fecha, contrasena, confirmar);
            const usuario = login(email, contrasena);
            localStorage.setItem("usuario", JSON.stringify(usuario));
            alert("Usuario registrado exitosamente");
            window.location.href = "./MainMenu.html";
        } catch (error) {
            alert(error.message);
        }
    });
};

document.addEventListener("DOMContentLoaded", render);