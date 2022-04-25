//funcion para guardar la opcion elegida por el usuario
function jugada_humano() {
	let jugada = prompt("Ingrese la opcion elegida:").toLowerCase();
	return jugada;
}
//funcion para generar la opcion elegida por la pc
function jugada_pc() {
	let opciones = ["piedra", "papel", "tijera"];
	let opcion = opciones[Math.floor(Math.random() * opciones.length)];
	return opcion;
}
//funcion que genera una partida unica y retorna el ganador
function aJugar() {
	const humano = jugada_humano();
	const pc = jugada_pc();
	if (humano === pc) {
		return "empate";
	} else if (
		(humano === "piedra" && pc === "tijera") ||
		(humano === "papel" && pc === "piedra") ||
		(humano === "tijera" && pc === "papel")
	) {
		return "humano";
	} else {
		return "pc";
	}
}
//funcion que dice quien llego primero a 5 victorias
function game() {
	let pc = 0;
	let humano = 0;
	while (true) {
		let resultado = aJugar();
		if (resultado === "empate") {
			console.log("empate");
		} else if (resultado === "pc") {
			console.log("gano pc");
			pc = pc + 1;
			/*  si pc llego al limite de 5 victorias  rompe el loop */
			if (pc === 5) {
				console.log(`gano pc, el resultado es ${pc} contra ${humano}`);
				break;
			}
		} else if (resultado === "humano") {
			console.log("gano humano");
			humano = humano + 1;
			/* si el humano llego al limite de 5 victorias rompe el loop */
			if (humano === 5) {
				console.log(`gano humano, el resultado es ${humano} contra ${pc}`);
				break;
			}
		}
	}
}
game();

let botones = document.querySelectorAll(".eleccion>ul>li>button");

let eleccion = "";
for (let boton of botones) {
	boton.addEventListener("click", function () {
		eleccion = boton.textContent.toLowerCase();
		console.log(eleccion);
	});
}

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
