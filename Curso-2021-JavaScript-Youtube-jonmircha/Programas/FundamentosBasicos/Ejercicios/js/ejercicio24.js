console.log("-----------------------------------------******------------------------------------ ");
console.log("Ejercicio Numero 24")
//? Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7,5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }. 

// Mi forma de resolver, no me quedo muy bien el programa
const arregloAscendenteDescendente = (arreglo = undefined) =>{
  if(arreglo === undefined) return console.warn("No has ingresado ningun valor");
  if(!(arreglo instanceof Array)) return console.warn("El dato ingresado es invalido");
  let Ascendentes = [];
  let Descendentes = [];
  if(arreglo.sort((a,b) => a-b)){
    Ascendentes = arreglo;
  }
  if(arreglo.sort((a,b) => b-a)){
    Descendentes = arreglo;
  }
  /* const Ascendentes = arreglo.sort((a,b) => a-b);
  const Descendentes = Ascendentes.sort((a,b) => b-a); */
  
  const objAscDes = {
    Ascendentes
    ,Descendentes
  }
  console.info(objAscDes);
}

//arregloAscendenteDescendente([10,25,3,6,0,0,-5,-98,8,4,7]);

//Froma de resolver del PROFESOR

const ordenarArreglo = (arreglo=undefined) => {
  if (arreglo === undefined) return console.warn("No has ingresado ningun dato");
  if (!(arreglo instanceof Array)) return console.warn("El dato ingresado no es un arreglo");
  if (arreglo.length === 0) return console.warn("El arreglo esta vacio");
  for (let numero of arreglo) {
    if (typeof numero !== "number") return console.warn(`El dato ingresado ${numero} NO es un numero perro`);
  }

  return console.info({
    arreglo,
    //Forma de un subscriptor
    asc: [...arreglo].sort(( a, b) => a - b),
    des: [...arreglo].sort(( a, b) => b - a)
    //Forma del profe
    //asc: arreglo.map(el=>el).sort((a,b) => a-b),
    //des: arreglo.map(el=>el).sort((a,b) => b-a)
  });
}

ordenarArreglo();
ordenarArreglo([10,true,6,0,0,-5,-98,8,4,7]);
ordenarArreglo("");
ordenarArreglo([10,25,3,6,0,0,-5,-98,8,4,7]);