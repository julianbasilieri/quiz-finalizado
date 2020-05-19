let preguntaActual = 0;
let cantidadRespuestasCorrectas = 0;
let preguntaActualContestada = false;
let utilizoAyuda = false;
let utilizoDobleOportunidad = false;
let utilizoSkip = false;//Agregue un let para cada ayuda que voy a dar
const preguntas = [
  {
    pregunta: "¿Qué significa CSS?",
    respuestas: [
      {
        textoRespuesta: "Hojas de estilo de computadora",
        esCorrecta: false,
      },
      {
        textoRespuesta: "Hojas de estilo en cascada",
        esCorrecta: true,
      },
      {
        textoRespuesta: "Hojas de estilo creativo",
        esCorrecta: false,
      },
      {
        textoRespuesta: "Hojas de estilo colorido",
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
  {
    pregunta: "¿Qué etiqueta HTML se usa para definir una hoja de JS interna?",
    respuestas: [
      {
        textoRespuesta: "<style>",
        esCorrecta: false,
      },
      {
        textoRespuesta: "<script>",
        esCorrecta: true,
      },
      {
        textoRespuesta: "<JS>",
        esCorrecta: false,
      },
      {
        textoRespuesta: "<JavaScript>",
        esCorrecta: false,
      }
    ],
  },
  {
    pregunta: "¿Qué atributo HTML se usa para definir estilos en línea?",
    respuestas: [
      {
        textoRespuesta: "style",
        esCorrecta: true,
      },
      {
        textoRespuesta: "styles",
        esCorrecta: false,
      },
      {
        textoRespuesta: "class",
        esCorrecta: false,
      },
      {
        textoRespuesta: "font",
        esCorrecta: false,
      }
    ],
  },
  {
    pregunta: "¿Cuál es la sintaxis correcta de CSS?",
    respuestas: [
      {
        textoRespuesta: "body: {color= black}",
        esCorrecta: false,
      },
      {
        textoRespuesta: "{body: color= black}",
        esCorrecta: false,
      },
      {
        textoRespuesta: "body= {color= black}",
        esCorrecta: false,
      },
      {
        textoRespuesta: "body {color= black}",
        esCorrecta: true,
      }
    ],
  },
  {
    pregunta: "¿Con que simbolo se llama a un id en CSS?",
    respuestas: [
      {
        textoRespuesta: "Con un punto .",
        esCorrecta: false,
      },
      {
        textoRespuesta: "Con un guión -",
        esCorrecta: false,
      },
      {
        textoRespuesta: "Con un asterisco #",
        esCorrecta: true,
      },
      {
        textoRespuesta: "Con un mas +",
        esCorrecta: false,
      }
    ],
  },
  {
    pregunta: "¿Como se hace un comentario?",
    respuestas: [
      {
        textoRespuesta: "/*comentario*/",
        esCorrecta: true,
      },
      {
        textoRespuesta: "'comentario'",
        esCorrecta: false,
      },
      {
        textoRespuesta: "//comentario//",
        esCorrecta: false,
      },
      {
        textoRespuesta: "//comentario",
        esCorrecta: false,
      }
    ],
  },
  {
    pregunta: "¿Que propiedad cambia el color de la letra?",
    respuestas: [
      {
        textoRespuesta: "backgroun-color",
        esCorrecta: false,
      },
      {
        textoRespuesta: "text-color",
        esCorrecta: false,
      },
      {
        textoRespuesta: "font-color",
        esCorrecta: false,
      },
      {
        textoRespuesta: "color",
        esCorrecta: true,
      }
    ],
  },
  {
    pregunta: "¿Como se llama a una funcion?",
    respuestas: [
      {
        textoRespuesta: "myfunction()",
        esCorrecta: true,
      },
      {
        textoRespuesta: "myfunction//",
        esCorrecta: false,
      },
      {
        textoRespuesta: "(myfunction)",
        esCorrecta: false,
      },
      {
        textoRespuesta: "myfunction",
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
  if (!utilizoDobleOportunidad) {
    document.getElementById("doble-oportunidad").className = "waves-effect waves-light btn"
  }
  if (!utilizoSkip) {
    document.getElementById("skip").className = "waves-effect waves-light btn";//Un let para cada ayuda
  }
}
function mostrarBotonSiguiente() {
  document.getElementById("siguiente").className = "waves-effect waves-orange indigo btn-large show";
}
function mostrarBotonesFinalizar() {
  document.getElementById("finalizar").className = "waves-effect waves-orange indigo btn-large show";
}//Borre ese boton porque no esta mas ahi

function finalizar() {
  document.getElementById("modalFinal").className = "modal"
  document.getElementById("respuestasCorrectas").innerText = "Respondiste correctamente " + cantidadRespuestasCorrectas + " de " + preguntas.length + " preguntas"
}
function reload() {
  location.reload();
}

function marcarRespuestaIncorrectaRandom(){
  let respuestaIncorrectaAyuda;
  let encontreRespuesta;
  do{
    respuestaIncorrectaAyuda = Math.floor(Math.random() * (3 + 1)); //Te da un número random entre 0 y 3 (las 4 respuestas posibles)
    encontreRespuesta = !preguntas[preguntaActual - 1].respuestas[respuestaIncorrectaAyuda].esCorrecta; // Me fijo si la respuesta no es la correcta..
    if(encontreRespuesta){ //Si la respuesta no es correcta marco la ayuda
      document.getElementById("respuesta" + (respuestaIncorrectaAyuda + 1)).className = "red btn-large"
    }
  }while(!encontreRespuesta) //Sigo intentando hasta encontrar una respuesta de ayuda
}

function darAyuda() {
  utilizoAyuda = true;
  marcarRespuestaIncorrectaRandom();
  document.getElementById("ayuda").className = "btn disabled"
}
function dobleOportunidad(){//aca tengo problemas porque el boton no sirva para nada en estos momentos...
  utilizoDobleOportunidad = true
  preguntaActualContestada = false
  document.getElementById("doble-oportunidad").className = "btn disabled"
}
function skip() {//saltear la pregunta
  document.getElementById("ayuda").className = "btn disabled"
  document.getElementById("doble-oportunidad").className = "btn disabled"
  document.getElementById("skip").className = "btn disabled"
  utilizoSkip = true
    if (preguntaActual == 10){//si estoy en la utima pregunta le puse esto para que no siga sumando numeros y se rompa
    mostrarBotonesFinalizar()
    document.getElementById("resuesta1").onclick = validarRespuesta()//para que no ejecute ninguna funcion despues de apretar el boton skip
    document.getElementById("resuesta2").onclick = validarRespuesta()
    document.getElementById("resuesta3").onclick = validarRespuesta()
    document.getElementById("resuesta4").onclick = validarRespuesta()
    document.getElementById("skip").className = "btn disabled"
  } else {
  cargarPregunta()}
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
    document.getElementById("doble-oportunidad").className = "btn disabled"
    document.getElementById("skip").className = "btn disabled"
    if (preguntas.length > preguntaActual) {
      mostrarBotonSiguiente();
    } else {
      mostrarBotonesFinalizar();
    }
  }
}
