console.log("-----------------------------------------******------------------------------------ ");
console.log("Ejercicio Numero 5")

//? 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".  

//? Forma numero 1 de resolver el problema

const palabraAInverir = (palabra = "") => {
  let tipoDato = typeof palabra;

  if (!palabra) {
    console.warn("No ingresaste una cadena de texto")
  } else if (tipoDato === "string") {
    let cadenaInversa = palabra.split("").reverse().join("");
    console.info(`Resultado: ${cadenaInversa}`);
  } else {
    console.error("No andimite otro tipo de dato que no sea cadena");
  }
}

palabraAInverir("")
palabraAInverir("Hola Mundo estoy aprendiendo logica en JS");
palabraAInverir("Hola Mundo");
palabraAInverir(8.09);
palabraAInverir(true)



//? Forma numero 2 de resolver el problema

/* const palabraAInverir = (palabra = "") => {
  let tipoDato = typeof palabra;
  let nuevaCadena = "";
  if (!palabra) {
    console.warn("No ingresaste una cadena de texto")
  } else if (tipoDato === "string") {
    //* Aqui es donde se resuelve el ejercicio
    for (let i = palabra.length - 1; i >= 0; i--) {
      nuevaCadena += palabra[i];
    }
    console.info(`Resultado: ${nuevaCadena}`);
  } else {
    console.error("No andimite otro tipo de dato que no sea cadena");
  }
}
palabraAInverir("")
palabraAInverir("Hola Mundo estoy aprendiendo logica en JS");
palabraAInverir("Hola Mundo");
palabraAInverir(8.09);
palabraAInverir(true) */

/* Explicacion del FOR con una la palabra 'hola'

for (let i = palabra.length - 1; i >= 0; i--) {
      nuevaCadena += palabra[i];
    }

  Aquí la longitud de hola es igual a 4
  Por cada iteración: i = cad.length - 1 y nuevaCadena = nuevaCadena + cad[i]
    Primera iteración:   i = 4 - 1 = 3, nuevaCadena = "" + "a" = "a"
    Segunda iteración:   i = 3 - 1 = 2, nuevaCadena = "a" + "l" = "al"
    Tercera iteración:   i = 2 - 1 = 1, nuevaCadena = "al" + "o" = "alo"
    Cuarta iteración:   i = 1 - 1 = 0,  nuevaCadena = "alo" + "h" = "aloh"
  Fin del bucle FOR*/