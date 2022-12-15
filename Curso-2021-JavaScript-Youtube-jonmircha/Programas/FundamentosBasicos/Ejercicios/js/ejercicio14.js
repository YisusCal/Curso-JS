console.log("-----------------------------------------******------------------------------------ ");
console.log("Ejercicio Numero 14")
//? Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.

// Mi respuesta al problema
//Grados Celsius a Fahrenheit
const convertirGrados = (grados = undefined, unidad = undefined) => {

  if (typeof grados !== "number") return console.warn("El dato ingresado no es un numero");
  if (typeof unidad !== "string") return console.warn("El dato ingresado no es un Caracter");

  //if (unidad.length !== 1 || !/(C|F)/.test(unidad)) return console.error("VSLOR INTRODUCIDO NO RECONOCIDO");

  if (unidad === 'C') {
    let aFahrenheit = (grados * 1.8) + 32
    return console.info(` ${grados}°C = a ${aFahrenheit}°F`)
  } else if (unidad === 'F') {
    let aCelsius = (grados - 32) / 1.8;
    return console.info(`${grados}°F = a ${aCelsius}°C`);
  } else {
    return console.error("El tipo de grados a convertir no es valido")
  }

}

convertirGrados(50, 'F');
