console.log("-----------------------------------------******------------------------------------ ");
console.log("Ejercicio Numero 7")

//? 6) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true. 

const palbraAInvertirYBuscar = (palabra = "") => {
  let tipoDato = typeof palabra;
  let nuevaCadena = "";
  if (!palabra) {
    console.warn("No ingresaste una cadena de texto")
  } else if (tipoDato === "string") {

    for (let i = palabra.length - 1; i >= 0; i--) {
      nuevaCadena += palabra[i];
    }
    console.info(`Palabra al raverso: ${nuevaCadena}`)
    let comprobarPaalbraReverso = (palabra == nuevaCadena) ? `Si son iguales, Original: ${palabra}. Reverso: ${nuevaCadena}` : `No no son iguales, Original: ${palabra}. Reverso: ${nuevaCadena}`;
    console.info(comprobarPaalbraReverso);
  }
  else {
    console.error("No andimite otro tipo de dato que no sea cadena");
  }

}

//palbraAInvertirYBuscar("salas");


// FORMA DE RESOLVER DEL PROFE
const palindromo = (palabra = "") => {
  if (!palabra) return console.warn("No ingresaste una palabra o frase");

  palabra = palabra.toLowerCase();
  let alRevez = palabra.split("").reverse().join("");

  return(palabra === alRevez)
    ?console.info(`Si el palindromo, palabra original ${palabra}, Palabra alrevez ${alRevez}`) 
    : console.info(`No es palindromo, palabra original ${palabra}, palabra alrevez ${alRevez}`);

}

//palindromo("anita lava la tina");