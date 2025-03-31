//HACER UN ARRAY QUE SE DIVIDA EN 4, LAS RESPUESTAS POR UN LADO Y LA PREGUNTA POR OTRO
//SPLIT POR ALGUN ELEMENTO PARA DIVIDIRLOS

var pregunta1 = ["¿Quien es el autor de la saga 'El Archivo de las Tormentas'?", "J.K Rowling", "Brandon Sanderson", "Elijah Wood", "J.R.R Tolkien", 2];
var pregunta2 = ["¿Cuál es el actor con más óscares de la historia?", "Adrien Brody", "Katharine Hepburn", "Jack Nicholson", "Ingrid Bergman", 2];
var pregunta3 = ["¿Cuál de estos POKEMON NO es de tipo dragón?", "Charizard", "Rayquaza", "Hydreigon", "Dragonite", 1];
var pregunta4 = ["¿Qué país es el primer campeón del mundo de fútbol?", "Brasil", "Alemania", "Argentina", "Uruguay", 4];
var pregunta5 = ["¿Qué jugador aparece en el logo de la NBA?", "Michael Jordan", "Larry Bird", "Jerry West", "Dennis Rodman", 3];
var pregunta6 = ["¿Cuál es el elemento más pesado de la tabla periódica?", "O2(Oxígeno)", "Og(Oganesón)", "Fe(Hierro)", "U(Uranio)", 2];
var pregunta7 = ["¿En qué año sucedió 'La Toma de la Bastilla'?", "1789", "1978", "1879", "1798", 1];
var pregunta8 = ["¿Cuál ha sido el último campeón añadido al League of Legends?", "Elise", "Rell", "Mel", "Ambessa", 3];

var preguntasAleatorias = [];
var preguntaActual = 0; // Para usarlo de índice
var preguntas = [pregunta1, pregunta2, pregunta3, pregunta4, pregunta5, pregunta6, pregunta7, pregunta8];
var puntos=0;
var botones = [
    document.getElementById("respuesta1"),
    document.getElementById("respuesta2"),
    document.getElementById("respuesta3"),
    document.getElementById("respuesta4")
];

var preguntaElemento = document.getElementById("pregunta");

// Cuando cargue el DOM, el botón Next pasa a tener un listener, llamamos por primera vez a MostrarPregunta.
document.addEventListener("DOMContentLoaded", function () {
    iniciarJuego();
    actualizarPuntaje();
    MostrarPregunta();
});

function iniciarJuego() {
    preguntasAleatorias = preguntas.sort(() => Math.random() - 0.5); // Barajamos las preguntas
    preguntaActual = 0; // Reiniciamos el índice
    puntos = 0; // Reiniciamos los puntos
}

function MostrarPregunta() {
    // Si ya hemos mostrado todas las preguntas
    if (preguntaActual >= preguntasAleatorias.length) {
        alert("¡Has terminado el cuestionario! Tu puntaje final es: " + puntos);
        iniciarJuego(); // Reiniciamos el juego
        return;
    }

    // Obtenemos la pregunta actual y las respuestas
    var pregunta = preguntasAleatorias[preguntaActual];
    preguntaElemento.textContent = pregunta[0]; // Mostramos la pregunta

    // Asignamos las respuestas a los botones
    for (var i = 0; i < 4; i++) {
        botones[i].textContent = pregunta[i + 1]; // Respuestas de la pregunta
        botones[i].onclick = function () {
            ComprobarRespuesta(this, pregunta[5]); // Comprobamos la respuesta
        };
    }

    preguntaActual++; // Pasamos a la siguiente pregunta
}

function ComprobarRespuesta(boton, respuestaCorrecta) {
    var indiceBoton = botones.indexOf(boton) + 1; // Obtenemos el índice del botón seleccionado

    if (indiceBoton === respuestaCorrecta) {
        puntos++; // Si la respuesta es correcta, sumamos un punto
        alert("¡Correcto!");
    } else {
        alert("Incorrecto. La respuesta correcta era: " + preguntasAleatorias[preguntaActual - 1][respuestaCorrecta]);
    }
    actualizarPuntaje();
    MostrarPregunta(); // Mostramos la siguiente pregunta
}
function actualizarPuntaje() {
    var puntajeElemento = document.getElementById("puntaje");
    puntajeElemento.textContent = "Puntuación: " + puntos; // Mostrar los puntos en el HTML
}