console.log("-----------------------------------------******------------------------------------ ");
console.log("Ejercicio Numero 4")
/* 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo. */
let cadenaCuatro = "Yo me repito por X veces | "

function ejmpNumero4(repetir) {
  let texRepetir = cadenaCuatro.repeat(repetir);
  return texRepetir;
}

let msjRep = ejmpNumero4(3);
console.log(msjRep);

//! Ejemplo resuelto por el profesor
console.log("Resultado por el profesor");

const repetirTexto = (texto = "", veces = undefined) => {
  if (!texto) return console.warn("No ingrrsaste un texto");

  if (veces === undefined) return console.warn("No ingresaste un numero");

  if (veces === 0) return console.error("El numero de veces no puede ser 0");

  if (Math.sign(veces) === -1) return console.error("El numero debe se veces no puede ser negativo");

  for (let i = 1; i <= veces; i++) console.info(`${texto}, ${i}`);
}

repetirTexto("Hola Mundo", 3)
repetirTexto("Hola Mundo", 0)
repetirTexto("", -20)
repetirTexto("Hola Mundo")
repetirTexto("Hola Mundo", -2)