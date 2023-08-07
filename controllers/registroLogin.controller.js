import { clientServices } from "../service/client_service.js";


const formulario = document.querySelector("[data-form-login");

formulario.addEventListener("submit", (evento)=>{

    evento.preventDefault();

    const correo = document.querySelector("[data-form-correo]").value;
    const password = document.querySelector("[data-form-password]").value;    

    clientServices
    .crearClienteLogin(correo,password)
    .then( (respuesta) => {


        console.log();(respuesta.id=="1");

        //window.location.href = "../productos.html"
        //window.location.href = "../registroCompletado.html"
        window.location.href = "../index.html"
        
    })
    .catch( (err) => console.log(err));

});
