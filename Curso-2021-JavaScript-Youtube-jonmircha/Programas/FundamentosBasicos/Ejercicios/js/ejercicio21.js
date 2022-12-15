console.log("-----------------------------------------******------------------------------------ ");
console.log("Ejercicio Numero 21")
//? Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25]. 

const arrayAlCuadrado = (arreglo = undefined) => {
  if (arreglo === undefined) return console.warn("No has ingresado ningun dato");
  if (!(arreglo instanceof Array)) return console.warn("El dato ingresado no es un arreglo");
  if (arreglo.length === 0) return console.warn("El arreglo esta vacio");
  for (let numero of arreglo) {
    if (typeof numero !== "number") return console.warn(`El dato ingresado ${numero} NO es un numero perro`);
  }

  const newArr = arreglo.map(el => el*el);
  console.info(newArr);
   //Esta fue mi forma de resolverlo
  /* 
  let arregloNuevo = [];
  for (let i = 0; i < arreglo.length; i++) {

    console.info(Math.pow(arreglo[i], 2));
    arregloNuevo[i] = Math.pow(arreglo[i], 2);
  }
  console.info(arregloNuevo); */
}
arrayAlCuadrado();
arrayAlCuadrado("");
arrayAlCuadrado([1, 4, []]);
arrayAlCuadrado([1, true, 5]);
arrayAlCuadrado([1, 4, 5]);


