import { clientServices } from "../service/client_service.js";



const formulario = document.querySelector("[data-form-producto");

formulario.addEventListener("submit", (evento)=>{

    evento.preventDefault();

    const img = document.querySelector("[data-imagen]").value;
    //const categoria = document.querySelector("[data-categoria]").value;
    const nombre = document.querySelector("[data-nombre]").value;
    const valor = document.querySelector("[data-valor]").value;
    //console.log("formulario");
    //console.log(nombre," - ",valor);
    
    clientServices
        .crearCliente(img,nombre,valor)
        .then( (respuesta) => {

            //console.log(respuesta);

            //window.location.href = "../productos.html"
            //window.location.href = "../registroCompletado.html"
            window.location.href = "../consola.html"
            
        })
        .catch( (err) => console.log(err));
});