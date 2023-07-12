
const crearNuevaLinea = (img,nombre,valor) =>{
    const lineadiv = document.createElement("div")
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

const http = new XMLHttpRequest();

//Abrir http(metodo url)

//CRUD
//CREATE
//READ
//UPDATE
//DELETE

//subir a git


http.open("GET", "http://localhost:3000/perfin")

http.send();

http.onload = () => {
    const data = JSON.parse(http.response);
    console.log(data);
    data.forEach((element) => {

    }); 
}





