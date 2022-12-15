console.log("-----------------------------------------******------------------------------------ ");
console.log("Ejercicio Numero 25")
//? Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true]. 

const arregloDuplicado = (arreglo = undefined) => {
  if (arreglo === undefined) return console.warn("No has ingresado ningun dato");
  if (!(arreglo instanceof Array)) return console.warn("El dato ingresado no es un arreglo");
  if (arreglo.length === 0) return console.warn("El arreglo esta vacio");
  if (arreglo.length === 1) return console.warn("El arreglo debe tener almenos dos elementos");


  const unicos = arreglo.filter((valor, indice) => {
    return arreglo.indexOf(valor) === indice;
  }
  );
  console.log(unicos);
}

//arregloDuplicado(["x", 10, "x", 2, "10", 10, true, true]);

//FORMA DE RESOLVER DEL PROFESOR
const quitarDuplicados =(arreglo = undefined) => {
  if (arreglo === undefined) return console.warn("No has ingresado ningun dato");
  if (!(arreglo instanceof Array)) return console.warn("El dato ingresado no es un arreglo");
  if (arreglo.length === 0) return console.warn("El arreglo esta vacio");
  if (arreglo.length === 1) return console.warn("El arreglo debe tener almenos dos elementos");

  //Forma de resolver con filter
  /* return console.info({
    original: arreglo,
    sinDuplicar: arreglo.filter((value, index, self) => self.indexOf(value) === index)
  }); */

  return console.info({
    original: arreglo,
    //La naturalesa del nuevo metodo SET es formar un objeto el cual los elementos no se dupliquen
    sinDuplicado: [...new Set(arreglo)]
  })
}
quitarDuplicados();
quitarDuplicados([]);
quitarDuplicados({});
quitarDuplicados([1]);
quitarDuplicados(["x", 10, "x", 2, "10", 10, true, true]);


