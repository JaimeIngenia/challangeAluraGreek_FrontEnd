

import { clientServices } from '../service/client_service.js'

const crearNuevaLinea = (img,nombre,valor,id) =>{
    // console.log(id);
    const lineadiv = document.createElement("div")
    // lineadiv.classList.add("carrousel__card__principal")
    const contenido = 
    
    `
    <div class="carrousel__card__principal">
        <div class="card__principal__img">
            <img src="${img}" alt="">
            <div class="card__principal__iconos">
            <button id=${id} ><img src="./src/images/borrar.svg" alt=""></button>
            <button><img src="./src/images/lapiz_editar.svg" alt=""></button>
            </div>
        </div>
        <p class="card__principal__p1">${nombre}</p>
        <p class="card__principal__p2" >$${valor}</p>
        <a class="card__principal__p3" href="">
            <p >Ver producto</p>
        </a>
    </div>
     ` 

    lineadiv.innerHTML = contenido;

    const btn = lineadiv.querySelector("button")
    btn.addEventListener("click", () => {
        const id = btn.id;

        clientServices
            .eliminarCliente(id)
            .then((respuesta) => {
                console.log(respuesta);
            })
            .catch((err) => alert("Ocurrio un error"));


        // console.log("El click", id);
    })
    // console.log(btn);

    return lineadiv;
}

const card = document.querySelector("[data-card]");


clientServices
    .listaClientesConsola()
    .then((data)=>{

        data.forEach((perfil) => {
            const {img,nombre,valor,id} = perfil; //desestructurando
            const nuevaLinea = crearNuevaLinea(img, nombre, valor,id);
            card.appendChild(nuevaLinea);
        });        
    })
    .catch((error)=> alert("Ocurrió un error"));


