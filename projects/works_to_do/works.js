const contenedorInput = document.querySelector('.add-works');
const enviarTarea = document.querySelector('.button-enviar');
const leerTarea = document.querySelector('.enviar-work');
const boton = document.querySelector('.new-boton');
var i = 0;


const leerPantalla = () => {
    const guadarMensaje = leerTarea.value;
    return guadarMensaje;
}

const agregarTarea = () => {
    const mensaje = leerPantalla();
    leerTarea.value = '';
    const nuevaTarea = document.createElement('div');
    const eliminar = document.createElement('p');
    eliminar.textContent = '✔';
    nuevaTarea.className = `new-work-${i}`
    nuevaTarea.textContent = mensaje;
    contenedorInput.appendChild(nuevaTarea)
    nuevaTarea.appendChild(eliminar)
    i++;
    console.log(i)
}

const trabajandoTareas = (event) => {
    const nodo = event.path[1];
    for (let x = 0; x < i; x++){
        if(nodo === document.querySelector(`.new-work-${x}`)){
            nodo.remove();
        }
    }
}

enviarTarea.addEventListener('click', agregarTarea)
contenedorInput.addEventListener('click', trabajandoTareas)