const preguntas = [
    {
        pregunta: "¿En que pelicula aparece Jack Nicholson?",
        respuestas: ["50 sombras de Gray", "El resplandor","Intensamente", "Silen Hill"],
        correcta: 1
    },

    {
        pregunta: "¿En que genero de cie se encuentra la pelicula V de vendetta?",
        respuestas: ["Thriller psicologico", "Drama","Ciencia Ficcion", "Romance"],
        correcta: 2
    },

    {
        pregunta: "¿Cual eran los personajes principales del Titanic?",
        respuestas: ["Pablito y Juanita", "El brayan y la Gringasha", "Jack Dawson y Rose Dewitt Bukater", "Platanazo y Charito"],
        correcta: 2
    }
];

var indice_aleatorio = 0;
var pregunta_text = "";
var interval;

window.onload = iniciar;

function iniciar() {
    loadQuestion();
}

function iniciar_cronometro() {
    const contador = 15;
    const cronometroDisplay = document.getElementById("cronometro");
    iniciarTiempo(contador, cronometroDisplay);
}

function iniciarTiempo(duracion, componente) {
    interval = setInterval(()=>{
        if (duracion === 0) {
            componente.innerHTML = "Se acabo el tiempo";
            clearInterval(interval);
            loadQuestion();
        } else {
            if (duracion < 10) {
                duracion = `0${duracion}`; // Agrega un 0 delante si el tiempo es menor a 10
            }
            componente.textContent = `00:${duracion}`;
            duracion--;

        }
    }, 1000);
}

function loadQuestion() {
    iniciar_cronometro();
    if (preguntas.length > 0) {
        indice_aleatorio = Math.floor(Math.random() * preguntas.length);
        pregunta_text="";

        //Contruimos el HTML para las preguntas y sus opciones
        pregunta_text += `<p>${preguntas[indice_aleatorio].pregunta}</p>`;

        pregunta_text += `<button id="opcion0" onclick="verificarRespuestaCorrecta(0, ${preguntas[indice_aleatorio].correcta})">${preguntas[indice_aleatorio].respuestas[0]}</button>`;
        pregunta_text += `<button id="opcion1" onclick="verificarRespuestaCorrecta(1, ${preguntas[indice_aleatorio].correcta})">${preguntas[indice_aleatorio].respuestas[1]}</button>`;
        pregunta_text += `<button id="opcion2" onclick="verificarRespuestaCorrecta(2, ${preguntas[indice_aleatorio].correcta})">${preguntas[indice_aleatorio].respuestas[2]}</button>`;
        pregunta_text += `<button id="opcion3" onclick="verificarRespuestaCorrecta(3, ${preguntas[indice_aleatorio].correcta})">${preguntas[indice_aleatorio].respuestas[3]}</button>`;
        
        //Muestra la pregunta y sus opciones en la pagina
        document.getElementById("pregunta").innerHTML = pregunta_text;
        preguntas.splice(indice_aleatorio, 1); //Carga una nueva pregunta
    } else {
        window.location.href = "../resultados.html";
    }
    
}

var puntos = 0;

function verificarRespuestaCorrecta(indice, correcta) {
    if (indice == correcta) {
        puntos += 5;

    }

    localStorage.setItem("SCORE", puntos);

    document.getElementById("opcion0").disabled = true;
    document.getElementById("opcion1").disabled = true;
    document.getElementById("opcion2").disabled = true;
    document.getElementById("opcion3").disabled = true;

}

function siguientePregunta() {
    clearInterval(interval); //Detener el cronometro
    loadQuestion(); // Cargar nueva preguntas
}