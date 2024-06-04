import { login } from "./session.js";

const render = () => {
    const loginForm = document.querySelector("#login");

    loginForm.addEventListener("submit", (e) =>{
        e.preventDefault();

        const email = e.target.email.value;
        const contrasena = e.target.contrasena.value;

        try {
           login(email, contrasena);
           window.location.href = "./MainMenu.html";
        } catch (error) {
            alert(error.message);
        }
    });
};

document.addEventListener("DOMContentLoaded", render);