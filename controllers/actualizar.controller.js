import { clientServices } from "../service/client_service.js";

const formulario = document.querySelector("[data-form-producto-editar]")


const obtenerInfo = () => {
    
    const url = new URL(window.location);
    
    
    const id = url.searchParams.get("id");


    // if(id == null){
    //     window.location.href = "../error.html";
    // }


    const img = document.querySelector("[ data-imagen ]") ;
    const nombre = document.querySelector("[ data-nombre ]") ;
    const valor = document.querySelector("[ data-valor ]") ;
    


    clientServices
        .detalleCliente(id)
        .then((client) =>{

            img.value = client.img;
            nombre.value = client.nombre;
            valor.value = client.valor;

        })
}


obtenerInfo();


formulario.addEventListener("submit",(evento)=>{

    evento.preventDefault();

    const url = new URL(window.location);
    
    const id = url.searchParams.get("id");

    const img = document.querySelector("[ data-imagen ]").value ;
    const nombre = document.querySelector("[ data-nombre ]").value ;
    const valor = document.querySelector("[ data-valor ]").value ;

    clientServices
        .actualizarCliente(img,nombre,valor,id)
        .then(() => {
            window.location.href = "../consola.html"
        })

//console.log(img+nombre+valor);
//alert(img+nombre+valor);

})
