
// Comunicación con el servidor, recibir la respeusta y generar un JSON

const listaClientes = () => fetch("http://localhost:3000/perfin").then( (respuesta) => respuesta.json() );

const crearCliente = (img,nombre,valor) => {
    fetch('http://localhost:3000/perfin' , {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({img,nombre,valor})
    })
}


export const clientServices = {
    listaClientes,
    crearCliente
}