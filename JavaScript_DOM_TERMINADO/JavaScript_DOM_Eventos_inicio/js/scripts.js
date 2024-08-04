//querySelector, este retorna el maximo de un elemento

const heading = document.querySelector('.header__texto h2');
heading.textContent = 'Nuevo Heading';
console.log(heading);

// querySelectorAll
const enlaces = document.querySelectorAll('.navegacion a');
console.log(enlaces);
enlaces[0].textContent = 'Beibe'

//Tambien equiste getElementById, escencialmente es lo mismo de arriba alch
/* //Generar un nuevo enlace
const nuevoEnlace = document.createElement('A');

//Agregar el href
nuevoEnlace.href = 'nuevo_enlace.html';
//Agregar el texto
nuevoEnlace.textContent = 'Un nuevo enlace'
//Agregar la clase
nuevoEnlace.classList.add('navegacion__enlace');
//Agregarlo al doc
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);


console.log(nuevoEnlace);


//Eventos

console.log(1);

window.addEventListener('load', () => { // Espera a JS y HTML
    console.log(2);
})
console.log(5);

window.onload = () => {
    console.log(3);
}

document.addEventListener('DOMContentLoaded', () => { //Solo espera al HTML
    console.log(4);
}) */

//Seleccionar elementos y asociales un evento

/* const botonPrimario = document.querySelector('.boton--primario');
botonPrimario.addEventListener('click', function (evento) {
    console.log(evento);
    evento.preventDefault();

})  */




//Eventos de input

const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');

nombre.addEventListener('input',leerTexto);
email.addEventListener('input',leerTexto);
mensaje.addEventListener('input',leerTexto);

function leerTexto (e) {

    datos[e.target.id] = e.target.value

    console.log(datos);
}


//El evento de submit
const formulario = document.querySelector('.formulario');
formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();

    //Validar formularios
    const { nombre, email, mensaje } = datos;

    if(nombre === '' || email === '' || mensaje === '') {
        mostrarAlerta('Todos los campos son obligatorios','error')

        return;// Corta la ejecucion del codigo
    }



    //Enviar Formularios
    mostrarAlerta('Mensaje enviado correctamente');
})

//Muestra un error en pantalla

function mostrarAlerta(mensaje,error = null) {
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;
    if(error){
        alerta.classList.add('error');
    } else {
        alerta.classList.add('correcto');
    }
    formulario.appendChild(alerta);

    setTimeout(() => {
        alerta.remove();
    },5000)
}