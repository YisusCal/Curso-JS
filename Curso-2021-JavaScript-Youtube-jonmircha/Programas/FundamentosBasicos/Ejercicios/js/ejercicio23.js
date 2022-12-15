console.log("-----------------------------------------******------------------------------------ ");
console.log("Ejercicio Numero 23")
//? Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.

// Mi forma de resolver
const arregloParesImpares = (arreglo = undefined) => {
  if (arreglo === undefined) return console.warn("No has ingresado ningun valor");
  if (!(arreglo instanceof Array)) return console.warn("El dato ingresado es invalido");
  let numPares = [];
  let numImpares = [];
  for (let i = 0; i < arreglo.length; i++) {
    if ((arreglo[i] % 2) === 0) {
      numPares[i] = Math.abs(arreglo[i]);
    } else if (arreglo[i] % 2 === 1) {
      numImpares[i] = Math.abs(arreglo[i]);
    }
  }
  const objParImpar = {
    Pares: numPares,
    Impares: numImpares
  }
  console.info(objParImpar);
}

//arregloParesImpares([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);


//FROMA DE RESOLVER DEL PROFESOR
const separarParesImpares = (arreglo = undefined) => {
  if (arreglo === undefined) return console.warn("No has ingresado ningun dato");
  if (!(arreglo instanceof Array)) return console.warn("El dato ingresado no es un arreglo");
  if (arreglo.length === 0) return console.warn("El arreglo esta vacio");
  for (let numero of arreglo) {
    if (typeof numero !== "number") return console.warn(`El dato ingresado ${numero} NO es un numero perro`);
  }

  return console.info({
    pares: arreglo.filter(numero => numero % 2 === 0),
    Impares: arreglo.filter(numero => numero % 2 === 1)
  })
}
separarParesImpares([1, 2, 3, 4, 5, 6, 7, 8, true, 0]);
separarParesImpares([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
