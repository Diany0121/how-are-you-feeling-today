'use strict';

//Primer punto del proceso:
//Inicio: click en el botón de update
//Coger el valor del select
//Poner el valor de la cara seleccionada del titulo(h1) (cara grande)

//Segundo punto del proceso:
//Inicio : click en el botón 
//Generar un numero aleatorio de 0-100 (GetRandow)
//Si es numero es par: SI / añadir la clases para poner el color de fondo amarillo —— No / añadir la clase para poner el color de fondo naranja

const faceElement = document.querySelector('.js-face');
const userSelect = document.querySelector('.js-select');
const btn = document.querySelector('.js-btn');
const main = document.querySelector('.js-main');

const updateFace = () => {
    const valueSelect = userSelect.value;
    faceElement.innerHTML = userSelect.value;
    //console.log(valueSelect);
};

// esta función la creo para generar el numero aleatorio, se le coloca en return para poder ejecutarla luego
const getRandow = () => {
    const numberRnadom = Math.floor(Math.random() * 100);
    return numberRnadom;
};

// funcion para tener el numero par o impar, en esta función se crea la condicional
const changeBackground = () => {
    const random = getRandow();
    console.log(random);
    if (random % 2 === 0){
        main.classList.add('yellow');
        main.classList.remove('orange');
    } else {
        main.classList.add('orange');
        main.classList.remove('yellow');
    }
};

// funcion manejadora para escuchar el evento del boton y para ejecutar las funciones de la ejecución de los colores y la carita feliz o triste
function handleClickUpdate(event) {
    event.preventDefault();
    updateFace();
    changeBackground();
}

btn.addEventListener('click', handleClickUpdate); 