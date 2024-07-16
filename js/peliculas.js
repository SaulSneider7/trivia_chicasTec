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
