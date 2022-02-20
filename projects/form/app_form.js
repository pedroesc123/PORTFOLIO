const enviar = document.getElementById('submit-button');


const finishForm = () => {
    const age = document.querySelector('#age').value;
    if (age >= 18) {
        alert('Formulario llenado correctamente');
    } else  if (age > 0){
        alert('Tienes que ser mayor de edad, por favor vuelve a llenar el formulario.');
    } else {
        alert('Por favor introduzca una edad correcta');
    }
}

enviar.addEventListener('click', finishForm);