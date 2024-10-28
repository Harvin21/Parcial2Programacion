// Seleccionar elementos del DOM
const titulo = document.getElementById('titulo');
const btnCambiarTexto = document.getElementById('btnCambiarTexto');
const btnCambiarColor = document.getElementById('btnCambiarColor');
const btnCambiarAlineacion = document.getElementById('btnCambiarAlineacion');
const btnCrearTexto = document.getElementById('btnCrearTexto');
const btnBorrarTexto = document.getElementById('btnBorrarTexto');

// Variable para almacenar el nuevo texto creado
let nuevoTextoElement;
let alineacionActual = 'left';

// Cambia el texto del título de "Hola mundo" a "Hola Mundo con JavaScript".
function cambiarTexto() {
    titulo.textContent = 'Hola Mundo con JavaScript';
}

// Función para cambiar el color a uno aleatorio
function cambiarColor() {
    titulo.style.color = 'red';
}

// Función para cambiar la alineación
function cambiarAlineacion() {
    alineacionActual = (alineacionActual === 'left') ? 'center' : 'left';
    titulo.style.textAlign = alineacionActual;
}

// Función para crear texto
function crearTexto() {
    if (!nuevoTextoElement) { //
        nuevoTextoElement = document.createElement('p');
        nuevoTextoElement.textContent = 'JavaScript permite crear páginas dinámicas';
        document.body.appendChild(nuevoTextoElement);
    }
}

// Función para borrar texto
function borrarTexto() {
    if (nuevoTextoElement) {
        document.body.removeChild(nuevoTextoElement);
        nuevoTextoElement = null;
    }
}

// Agregar eventos a los botones
btnCambiarTexto.addEventListener('click', cambiarTexto);
btnCambiarColor.addEventListener('click', cambiarColor);
btnCambiarAlineacion.addEventListener('click', cambiarAlineacion);
btnCrearTexto.addEventListener('click', crearTexto);
btnBorrarTexto.addEventListener('click', borrarTexto);
