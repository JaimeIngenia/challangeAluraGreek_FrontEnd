
//Interacción Js y HTML

// import {clientServices  } from '../service/client-service'
import { clientServices } from '../service/client_service.js'

const crearNuevaLinea = (img,nombre,valor) =>{
    const lineadiv = document.createElement("div")
    // lineadiv.classList.add("carrousel__card__principal")
    const contenido = 
    `
    <div class="carrousel__card__principal">
        <div class="card__principal__img">
            <img src="${img}" alt="">
        </div>
        <p class="card__principal__p1">${nombre}</p>
        <p class="card__principal__p2" >$${valor}</p>
        <a class="card__principal__p3" href="">
            <p >Ver producto</p>
        </a>
    </div>
     ` 
    lineadiv.innerHTML = contenido;
    return lineadiv;
}

const card = document.querySelector("[data-card]");

// const listaClientes = () => fetch("http://localhost:3000/perfin").then( (respuesta) => respuesta.json() );

clientServices
    .listaClientes()
    .then((data)=>{

        data.forEach((perfil) => {
            const nuevaLinea = crearNuevaLinea(perfil.img, perfil.nombre,perfil.valor);
            card.appendChild(nuevaLinea);
        });        
    })
    .catch((error)=> alert("Ocurrió un error"));

 



