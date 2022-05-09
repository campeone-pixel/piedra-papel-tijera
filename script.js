const papelDer = "papelderecha.png";
const piedraDer = "piedraderecha.png";
const tijeraDer = "tijeraderecha.png";
const papelIzq = "papelizquierda.png";
const piedraIzq = "piedraizquierda.png";
const tijeraIzq = "tijeraizquierda.png";

const botones = document.querySelectorAll(".eleccion>ul>li>button");

const puntuacionHumano = document.querySelector(
  "body > section > div.partida > div.bordeDerecho > div:nth-child(2)"
);
const puntuacionPc = document.querySelector(
  "body > section > div.partida > div.bordeIzquierdo > div:nth-child(2)"
);
// funcion para generar la opcion elegida por la pc
function jugadaPc() {
  const opciones = ["piedra", "papel", "tijera"];
  const opcion = opciones[Math.floor(Math.random() * opciones.length)];
  return opcion;
}

// funcion que genera una partida unica y retorna el ganador
function aJugar(e) {
  const cuadroHumano = document.querySelector(
    "body > section > div.partida > div.bordeDerecho > div.jugada.humano >img"
  );
  const humano = e.target.textContent.toLowerCase();
  if (humano === "piedra") {
    cuadroHumano.setAttribute("src", piedraIzq);
  } else if (humano === "papel") {
    cuadroHumano.setAttribute("src", papelIzq);
  } else if (humano === "tijera") {
    cuadroHumano.setAttribute("src", tijeraIzq);
  } else if (humano === undefined) {
    cuadroHumano.setAttribute("src", piedraIzq);
  }
  const cuadroPc = document.querySelector(
    "body > section > div.partida > div.bordeIzquierdo > div.jugada.pc > img"
  );
  const pc = jugadaPc();
  if (pc === "piedra") {
    cuadroPc.setAttribute("src", piedraDer);
  } else if (pc === "papel") {
    cuadroPc.setAttribute("src", papelDer);
  } else if (pc === "tijera") {
    cuadroPc.setAttribute("src", tijeraDer);
  } else if (pc === undefined) {
    cuadroPc.setAttribute("src", piedraDer);
  }

  let partido = "";
  if (humano === pc) {
    partido = "empate";
  } else if (
    (humano === "piedra" && pc === "tijera") ||
    (humano === "papel" && pc === "piedra") ||
    (humano === "tijera" && pc === "papel")
  ) {
    partido = "humano";
  } else {
    partido = "pc";
  }
}

function sumarPuntuacion(participante) {
  const puntosActualH = puntuacionHumano.textContent;
  const puntosActualP = puntuacionPc.textContent;
  if (participante === "humano") {
    puntuacionHumano.textContent = `Puntuacion: ${
      puntosActualH[puntosActualH.length - 1] + 1
    } `;
  } else if (participante === "pc") {
    puntuacionPc.textContent = `Puntuacion: ${
      puntosActualH[puntosActualP.length - 1] + 1
    } `;
  }
}

function ganoAlguien() {}

function agragarListener() {
  this.addEventListener("click", aJugar);
}

botones.forEach(agragarListener);

// funcion que dice quien llego primero a 5 victorias
/* function game() {
  let pc = 0;
  let humano = 0;
  const x = 0;
  while (x === 0) {
    const resultado = aJugar();
    if (resultado === "empate") {
      console.log("empate");
    } else if (resultado === "pc") {
      console.log("gano pc");
      pc += 1;

      if (pc === 5) {
        console.log(`gano pc, el resultado es ${pc} contra ${humano}`);
        break;
      }
    } else if (resultado === "humano") {
      console.log("gano humano");
      humano += 1;

      if (humano === 5) {
        console.log(`gano humano, el resultado es ${humano} contra ${pc}`);
        break;
      }
    }
  }
} */

/* const cars = ["Saab", "Volvo", "BMW"];
cars[0] = "Opel";
console.log(cars)

let lenghtCars=cars.length
let text = '<ul>'
/* for (let x = 0;x<lenghtCars;x++){
    text  += '<li>' + cars[x] +'<li>'
} */

/* cars.forEach(texto)
text += '</ul>'

function texto(value){
    text += '<li>'+
value + '</li>'}

console.log(text)

cars.push('fiat')
console.log(cars)          

console.log(Array.isArray(cars))
console.log(cars instanceof Array)
console.log(cars.join(' '))
console.log(cars.toString())
console.log(cars.push('ford'))
let auto = cars.shift()
console.log(auto)
console.log(cars)
let autodeatras = cars.unshift("chevrolet")
console.log(cars)
let autosViejos = ['coroola','nose', 'otros']
let todosJuntos = cars.concat(autosViejos)
console.log(todosJuntos)
let autosDescartados = cars.splice(1,1,'chile')
console.log(cars)
let nosonAutos = cars.splice(1,1)
console.log(nosonAutos) */
