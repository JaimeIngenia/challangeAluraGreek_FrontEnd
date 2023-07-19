import { clientServices } from "../service/client_service";

const formulario = document.querySelector("[data-form");

formulario.addEventListener("submit", (evento)=>{
    evento.preventDefault();

    const img = document.querySelector("[data-imagen]").value;
    const categoria = document.querySelector("[data-categoria]").value;
    const nombre = document.querySelector("[data-nombre]").value;
    const valor = document.querySelector("[data-valor]").value;
    //console.log("formulario");
    console.log(nombre," - ",categoria);
    
    clientServices
        .crearCliente(img,nombre,valor)
        .then( respuesta => {

            console.log(respuesta);

        })
        .catch(err => console.log(err));
});