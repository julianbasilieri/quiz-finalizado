let preguntaActual = 0;
let cantidadRespuestasCorrectas = 0;
let preguntaActualContestada = false;
let utilizoAyuda = false;

const preguntas = [
  {
    pregunta: "¿Cúanto es 10 + 10?",
    respuestas: [
      {
        textoRespuesta: "20",
        esCorrecta: true,
      },
      {
        textoRespuesta: "35",
        esCorrecta: false,
      },
      {
        textoRespuesta: "10",
        esCorrecta: false,
      },
      {
        textoRespuesta: "5",
        esCorrecta: false,
      }
    ],
  },
  {
    pregunta: "¿Dónde se recomienda escribir los estilos?",
    respuestas: [
      {
        textoRespuesta: "Al fondo del documento",
        esCorrecta: false,
      },
      {
        textoRespuesta: "En cada elemento",
        esCorrecta: false,
      },
      {
        textoRespuesta: "En la etiqueta <head>",
        esCorrecta: true,
      },
      {
        textoRespuesta: "No se pueden escribir estilos",
        esCorrecta: false,
      }
    ],
  },
  {
    pregunta: "¿Que representa un String?",
    respuestas: [
      {
        textoRespuesta: "No representa nada en programación",
        esCorrecta: false,
      },
      {
        textoRespuesta: "Un texto",
        esCorrecta: true,
      },
      {
        textoRespuesta: "Un número",
        esCorrecta: false,
      },
      {
        textoRespuesta: "Booleano",
        esCorrecta: false,
      }
    ],
  },
];

function cargarPregunta() {
  resetear();
  preguntaActual++
  document.getElementById("numerodepregunta").innerText = "Pregunta " + preguntaActual;
  document.getElementById("pregunta").innerText = preguntas[preguntaActual - 1].pregunta;
  document.getElementById("respuesta1").innerText = preguntas[preguntaActual - 1].respuestas[0].textoRespuesta;
  document.getElementById("respuesta2").innerText = preguntas[preguntaActual - 1].respuestas[1].textoRespuesta;
  document.getElementById("respuesta3").innerText = preguntas[preguntaActual - 1].respuestas[2].textoRespuesta;
  document.getElementById("respuesta4").innerText = preguntas[preguntaActual - 1].respuestas[3].textoRespuesta;
}

function resetear() {
  document.getElementById("respuesta1").className = "waves-effect waves-light light-blue accent-4 btn-large"
  document.getElementById("respuesta2").className = "waves-effect waves-light light-blue accent-4 btn-large";
  document.getElementById("respuesta3").className = "waves-effect waves-light light-blue accent-4 btn-large";
  document.getElementById("respuesta4").className = "waves-effect waves-light light-blue accent-4 btn-large";
  document.getElementById("siguiente").className = "hide";
  preguntaActualContestada = false;
  if (!utilizoAyuda) {
    document.getElementById("ayuda").className = "waves-effect waves-light btn";
  }
}
function mostrarBotonSiguiente() {
  document.getElementById("siguiente").className = "waves-effect waves-orange indigo btn-large show";
}
function mostrarBotonesFinalizar() {
  document.getElementById("finalizar").className = "waves-effect waves-orange indigo btn-large show";
  document.getElementById("reload").className = "indigo btn show";
}

function finalizar() {
  document.getElementById("modalFinal").className = "modal"
  document.getElementById("respuestasCorrectas").innerText = "Respondiste correctamente " + cantidadRespuestasCorrectas + " de " + preguntas.length + " preguntas"
}
function reload() {
  location.reload();
}
function darAyuda() {
  utilizoAyuda = true;
  document.getElementById("respuesta4").className = "red btn-large"
  document.getElementById("ayuda").className = "btn disabled"
}

function cerrarModal() {
  document.getElementById("modal1").className = "hide"
}

function validarRespuesta(respuesta) {
  if (!preguntaActualContestada) {
    preguntaActualContestada = true;
    const esCorrecta = preguntas[preguntaActual - 1].respuestas[respuesta - 1].esCorrecta;

    if (esCorrecta) {
      cantidadRespuestasCorrectas++;
      document.getElementById("respuesta" + respuesta).className = "green btn-large";
    } else {
      document.getElementById("respuesta" + respuesta).className = "red btn-large";
    }

    document.getElementById("ayuda").className = "btn disabled"

    if (preguntas.length > preguntaActual) {
      mostrarBotonSiguiente();
    } else {
      mostrarBotonesFinalizar();
    }
  }
}
