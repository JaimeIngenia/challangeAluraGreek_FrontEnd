
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

//Abrir http(metodo url)

//CRUD
//CREATE
//READ
//UPDATE
//DELETE

//subir a git

const listaClientes = () => {

    const promise = new Promise( (resolve,reject) => {

    const http = new XMLHttpRequest();
    http.open("GET", "http://localhost:3000/perfin")
    http.send();
    http.onload = () => {
        const response = JSON.parse(http.response);
        if(http.status > 400)
        {
            reject(response);
        }
        else
        {
            resolve(response);
        }
    }
    } )

    return promise;
}

listaClientes().then((data)=>{

    data.forEach((perfil) => {
        const nuevaLinea = crearNuevaLinea(perfil.img, perfil.nombre,perfil.valor);
        card.appendChild(nuevaLinea);
    
    })
    .catch((error)=> alert("Ocurrió un error"))

})

 



