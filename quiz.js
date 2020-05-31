let preguntaActual = 0;
let cantidadRespuestasCorrectas = 0;
let preguntaActualContestada = false;
let utilizoBomba = false;
let utilizoDobleOportunidad = false;
let utilizoSkip = false;

fetch('http://localhost:3000/preguntas',
 { mode: 'cors',})
.then(response => response.json() )
.then(data => {  
  console.log(data)
})

function cargarPregunta() {
  resetear();
  preguntaActual++
  document.getElementById("numerodepregunta").innerText = "Pregunta " + preguntaActual;
  fetch('http://localhost:3000/preguntas',
 { mode: 'cors',})
.then(response => response.json() )
.then(data => {  
  console.log(data)
})
/*.then(response => response.json() )
.then(data => {
  document.getElementById("pregunta").innerHTML = `<p> ${data.results[preguntaActual+1].pregunta} </p>`
  
  document.getElementById("respuesta1").innerHTML = `<p> ${data.results[preguntaActual+1].correct_answer} </p>`
  
  document.getElementById("respuesta2").innerHTML = `<p> ${data.results[preguntaActual+1].incorrect_answers[0]} </p>`

  document.getElementById("respuesta3").innerHTML = `<p> ${data.results[preguntaActual+1].incorrect_answers[1]} </p>`

  document.getElementById("respuesta4").innerHTML = `<p> ${data.results[preguntaActual+1].incorrect_answers[2]} </p>`
})*/
}


function resetear() {
  document.getElementById("respuesta1").className = "waves-effect waves-light light-blue accent-4 btn-large"
  document.getElementById("respuesta2").className = "waves-effect waves-light light-blue accent-4 btn-large";
  document.getElementById("respuesta3").className = "waves-effect waves-light light-blue accent-4 btn-large";
  document.getElementById("respuesta4").className = "waves-effect waves-light light-blue accent-4 btn-large";
  document.getElementById("siguiente").className = "waves-effect waves-orange indigo btn-large show";
  preguntaActualContestada = false;
  if (!utilizoBomba) {
    document.getElementById("ayuda").className = "waves-effect waves-light btn";
  }
  if (!utilizoDobleOportunidad) {
    document.getElementById("doble-oportunidad").className = "btn disabled"
  }
  if (!utilizoSkip) {
    document.getElementById("skip").className = "waves-effect waves-light btn";
  }
}
function mostrarBotonSiguiente() {
  document.getElementById("siguiente").className = "waves-effect waves-orange indigo btn-large show";
}
function mostrarBotonesFinalizar() {
  document.getElementById("finalizar").className = "waves-effect waves-orange indigo btn-large show";
}

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
    respuestaIncorrectaAyuda = Math.floor(Math.random() * (3 + 1)); 
    encontreRespuesta = !preguntas[preguntaActual - 1].respuestas[respuestaIncorrectaAyuda].esCorrecta; 
    if(encontreRespuesta){
      document.getElementById("respuesta" + (respuestaIncorrectaAyuda + 1)).className = "red btn-large"
    }
  }while(!encontreRespuesta) 
}

function tirarBomba() {
  utilizoBomba = true;
  marcarRespuestaIncorrectaRandom();
  document.getElementById("ayuda").className = "btn disabled"
  document.getElementById("ayuda").innerHTML = "Bomba <i class='fas fa-bomb'> +0</i>"
}
function dobleOportunidad(){
  utilizoDobleOportunidad = true
  preguntaActualContestada = false
  document.getElementById("doble-oportunidad").className = "btn disabled"
  document.getElementById("siguiente").className = "btn large disabled";
  document.getElementById("doble-oportunidad").innerHTML = "Doble Oportunidad <i class='fas fa-redo-alt'> +0</i>"
  if (preguntaActual == 10)
  document.getElementById("finalizar").className = "btn disabled"
  document.getElementById("siguiente").className = "hide";
}
function skip() {
  utilizoSkip = true
  document.getElementById("ayuda").className = "btn disabled"
  document.getElementById("doble-oportunidad").className = "btn disabled"
  document.getElementById("skip").className = "btn disabled"
  document.getElementById("skip").innerHTML = "Skip <i class='fas fa-forward'> +0</i>"
    if (preguntaActual == 10){
    mostrarBotonesFinalizar()
    document.getElementById("resuesta1").onclick = validarRespuesta()
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
      document.getElementById("doble-oportunidad").className = "btn disabled"
    } else {
      document.getElementById("respuesta" + respuesta).className = "red btn-large";
    }
    document.getElementById("ayuda").className = "btn disabled"
    document.getElementById("skip").className = "btn disabled"
    if (esCorrecta){
    document.getElementById("doble-oportunidad").className = "btn disabled"
    } else {
    if (utilizoDobleOportunidad) {
    document.getElementById("doble-oportunidad").className = "btn disabled"
    }
    else {
    document.getElementById("doble-oportunidad").className = "waves-effect waves-light btn"
    }}
    if (preguntas.length > preguntaActual) {
      mostrarBotonSiguiente();
    } else {
      mostrarBotonesFinalizar();
    }
  }
}