const container = document.querySelector('.container');
const nuevaLista = [];
const resultado = [];

const getNode = (event) => {
    const nodo = event.path[0];
    return nodo;
}

const getOperation = (evento) => {
    const nodoEvaluado = getNode(evento);
    if (nodoEvaluado.getAttribute('data-math')) {
        const value = nodoEvaluado.getAttribute('data-math');
        return parseInt(value, 10);
    } else if (nodoEvaluado.getAttribute('data-operation') === 'point'){
        return '.';
    } else if(nodoEvaluado.getAttribute('data-operation')) {
        return nodoEvaluado.getAttribute('data-operation');
    } else if(nodoEvaluado.getAttribute('data-result')) {
        return nodoEvaluado.getAttribute('data-result')
    } else {
        alert ('Introduzca valores dentro de la calculadora');
    }
}

const writeScreen = (event) => {
    const valor = getOperation(event);
    const screen = document.querySelector('#screen');

    if (typeof(valor) === 'number' || valor === '.') {
        const lastValue = screen.textContent
        screen.textContent = lastValue + valor;
        if (valor === 'equal') {
            return screen.textContent;
        }
    } else if (typeof(valor) === 'string'){
        if (valor === 'div') {
            nuevaLista.push(parseFloat(screen.textContent));
            nuevaLista.push('/');
            screen.textContent = '';
        } else if (valor  === 'mult') {
            nuevaLista.push(parseFloat(screen.textContent));
            nuevaLista.push('*');
            screen.textContent = '';
        } else if (valor === 'sum') {
            nuevaLista.push(parseFloat(screen.textContent));
            nuevaLista.push('+');
            screen.textContent = '';
        } else if (valor === 'rest') {
            nuevaLista.push(parseFloat(screen.textContent));
            nuevaLista.push('-');
            screen.textContent = '';
        }
        if (valor === 'equal') {
            if (nuevaLista[1] === '/') {
                nuevaLista.push(parseFloat(screen.textContent));
                for(let i = 0; i < nuevaLista.length; i++){
                    if (typeof(nuevaLista[i]) === 'number') {
                        resultado.push(nuevaLista[i]);
                    }
                }
                screen.textContent = resultado.reduce((a,b) => a / b)
            } else if (nuevaLista[1] === '*') {
                nuevaLista.push(parseFloat(screen.textContent));
                for(let i = 0; i < nuevaLista.length; i++){
                    if (typeof(nuevaLista[i]) === 'number') {
                        resultado.push(nuevaLista[i]);
                    }
                }
                screen.textContent = resultado.reduce((a,b) => a * b);
            } else if (nuevaLista[1] === '+') {
                nuevaLista.push(parseFloat(screen.textContent));
                for(let i = 0; i < nuevaLista.length; i++){
                    if (typeof(nuevaLista[i]) === 'number') {
                        resultado.push(nuevaLista[i]);
                    }
                }
                screen.textContent = resultado.reduce( (a,b) => a+b)
            } else if (nuevaLista[1] === '-') {
                nuevaLista.push(parseFloat(screen.textContent));
                for(let i = 0; i < nuevaLista.length; i++){
                    if (typeof(nuevaLista[i]) === 'number') {
                        resultado.push(nuevaLista[i]);
                    }
                }
                screen.textContent = resultado.reduce((a,b) => a - b)
            }
        }
        if (valor === 'refresh') {
            screen.textContent = '';
            const listaLength = nuevaLista.length;
            const resultadoLength = resultado.length;
            for (let i = 0; i < listaLength; i++) {
                nuevaLista.pop();
            }
            for (let i = 0; i < resultadoLength; i++) {
                resultado.pop();
            }
        }
    }
}

const addEqual = (event) => {
    writeScreen(event);
}

container.addEventListener('click', addEqual)

