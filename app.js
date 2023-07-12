// manejo del boton agregar productos


const boton_agregar_productos = document.querySelector("[data-form-btn-agregar-productos]");

const createTask = (evento) =>{

    evento.preventDefault();
    
    const input_agregar_categoria = document.querySelector("[data-form-input-agregar-categorias]");
    

    // const task = document.querySelector("[data-task]");


    const value = input_agregar_categoria.value;

    const content = `
    
    <p>${value}</p>
    <input 
        data-form-input-agregar-categorias
        type="text" 
        id=""
        value="Consolas"
    >

    `;

    // task.innerHTML = content;

    input_agregar_categoria.value = "";

    console.log(content);
};

boton_agregar_productos.addEventListener("click", createTask);

