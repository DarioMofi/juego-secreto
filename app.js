let numeroSecreto = 0;
let intentos = 0;
let listaDeNumeros = [];
let intentosMaximos = 10;

function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
return;
}

function generarnumeroSecreto(){
  let numeroGenerado = Math.floor(Math.random() * intentosMaximos) + 1;
  if (listaDeNumeros.length == intentosMaximos) {
    asignarTextoElemento("p", "No te quedan más intentos");
  } else {
    if (listaDeNumeros.includes(numeroGenerado)) {
    return generarnumeroSecreto();
    } else {
      listaDeNumeros.push(numeroGenerado);
      return numeroGenerado;
    }
  }
  
}

function verificarIntento() {
  let numeroUsuario = parseInt(document.getElementById("valorDeUsuario").value);

  if (numeroUsuario === numeroSecreto) {
    asignarTextoElemento("p", `¡Felicidades! Has adivinado el número secreto en ${intentos} ${(intentos === 1) ? "vez" : "veces"}`); 
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
      if (numeroUsuario > numeroSecreto) {
        asignarTextoElemento("p", "El número secreto es menor");
      } else { 
        (asignarTextoElemento("P", "El número secreto es mayor"));
      }
  } 
  intentos++;
  limpiarCaja();
  return;
}

function limpiarCaja () {
  document.querySelector("#valorDeUsuario").value = "";
}

function condicionesIniciales (){
  asignarTextoElemento("h1", "Juego del número secreto");
  asignarTextoElemento("p", `Elige un número del 1 al ${intentosMaximos}.`);
  numeroSecreto = generarnumeroSecreto();
  intentos = 1;
}

function reiniciarJuego(){
  limpiarCaja();
  condicionesIniciales();
  document.querySelector("#reiniciar").setAttribute("disabled", "true");
}

condicionesIniciales();