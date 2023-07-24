
// Comunicación con el servidor, recibir la respeusta y generar un JSON

const listaClientes = () => fetch("http://localhost:3000/perfin").then( (respuesta) => respuesta.json() );

const listaClientesConsola = () => fetch("http://localhost:3000/perfin2").then( (respuesta) => respuesta.json() );

const crearCliente = (img,nombre,valor) => {
    return fetch("http://localhost:3000/perfin2" , {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({img,nombre,valor, id: uuid.v4() }),
    })
}


const eliminarCliente = (id) => {
    console.log("Eliminar ---->" + id);
    return fetch(`http://localhost:3000/perfin2/${id}` , {
        method: 'DELETE'
    })
}


const detalleCliente = (id) => {
    return fetch(`http://localhost:3000/perfin2/${id}`)
        .then((response) => response.json())
}

const actualizarCliente = (img,nombre, valor,id) => {
    return fetch(`http://localhost:3000/perfin2/${id}`,{
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        }, body: JSON.stringify(  { img, nombre, valor } )
    })
    .then((response) => response )
    .catch((err) => console.log(err))
}

export const clientServices = {
    listaClientes,
    listaClientesConsola,
    crearCliente,
    eliminarCliente,
    detalleCliente,
    actualizarCliente
}