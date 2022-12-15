console.log("-----------------------------------------******------------------------------------ ");
console.log("Ejercicio Numero 22")
//? Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60]. 
 
const arregloNumAltoYBAjo = (arreglo = undefined) =>{
  if (arreglo === undefined) return console.warn("No has ingresado ningun dato");
  if (!(arreglo instanceof Array)) return console.warn("El dato ingresado no es un arreglo");
  if (arreglo.length === 0) return console.warn("El arreglo esta vacio");
  for (let numero of arreglo) {
    if (typeof numero !== "number") return console.warn(`El dato ingresado ${numero} NO es un numero perro`);
  }
  let max = arreglo[0];
  let min = arreglo[0];
  let concatenarA = [];
for (let i = 0; i < arreglo.length; i++){
  if(max < arreglo[i] ) max = arreglo[i];
  if(min > arreglo[i] ) min = arreglo[i];
}

let concatenarArrays = concatenarA.concat(max,min);
console.log(concatenarArrays)
}
//arregloNumAltoYBAjo();
//arregloNumAltoYBAjo([1, 4, false, 99, -60]);
//arregloNumAltoYBAjo([1, 4, 5, 99, -60]);

//Forma de resolver por parte del PROFESOR
const arrayMinMax = (arreglo = undefined) => {
  if (arreglo === undefined) return console.warn("No has ingresado ningun dato");
  if (!(arreglo instanceof Array)) return console.warn("El dato ingresado no es un arreglo");
  if (arreglo.length === 0) return console.warn("El arreglo esta vacio");
  for (let numero of arreglo) {
    if (typeof numero !== "number") return console.warn(`El dato ingresado ${numero} NO es un numero perro`);
  }
  console.info(`Arreglo original ${arreglo}\nValor Mayor:${Math.max(...arreglo)}\nValor Menor:${Math.min(...arreglo)}}`)
}

arrayMinMax();
arrayMinMax([1, 4, 5, 99, -60]);