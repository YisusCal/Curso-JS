console.log("-----------------------------------------******------------------------------------ ");
console.log("Ejercicio Numero 26")
//? Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.

//Respuesta mia al resolverlo
const obtenerPromedio = (arreglo = undefined) => {
  if (arreglo === undefined) return console.warn("No has ingresado ningun dato");
  if (!(arreglo instanceof Array)) return console.warn("El dato ingresado no es un arreglo");
  if (arreglo.length === 0) return console.warn("El arreglo esta vacio");
  if (arreglo.length === 1) return console.warn("El arreglo debe tener almenos dos elementos");

  let suma = 0;
  let resultado = 0;
  for (let i = 0; i < arreglo.length; i++) {
    if (typeof arreglo[i] !== "number") return console.warn("El arreglo contiende un dato invalido");
    suma += arreglo[i];
    resultado = suma / (arreglo.length)
  }
  console.log(suma);
  console.log("El promedio general es de: " + resultado);
}

//obtenerPromedio();
//obtenerPromedio(568);
//obtenerPromedio("");
//obtenerPromedio([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);

//FORMA DE RESOLVER DEL PROFESOR
const promedio = (arreglo = undefined) => {
  if (arreglo === undefined) return console.warn("No has ingresado ningun dato");
  if (!(arreglo instanceof Array)) return console.warn("El dato ingresado no es un arreglo");
  if (arreglo.length === 0) return console.warn("El arreglo esta vacio");
  for (let numero of arreglo) {
    if (typeof numero !== "number") return console.warn(`El dato ingresado ${numero} NO es un numero perro`);
  }

  return console.info(
    arreglo.reduce((total, numero, index, arreglo) => {
      total += numero;
      if (index === arreglo.length - 1) {
        return console.info(`El prmedio de ${arreglo.join(" + ")} es ${total / arreglo.length}`)
      }else{
        return total;
      }
    })
  )
}

promedio();
promedio(568);
promedio("");
promedio([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);