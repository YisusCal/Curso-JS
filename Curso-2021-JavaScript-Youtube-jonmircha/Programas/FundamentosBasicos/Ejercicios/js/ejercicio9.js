console.log("-----------------------------------------******------------------------------------ ");
console.log("Ejercicio Numero 9")
//? Programa una función que obtenga un numero aleatorio entre 501 y 600. 

//Forma en que yo lo resolvi
const obtenerNumAleatorio = () =>{
  let num = 501;
console.log("El numero aleatorio es: " + Math.floor(Math.random() * (600 - 501 + 1 ) + 501));
}

obtenerNumAleatorio();


//FORMA DE RESOLVERLO DEL PROFE

const aleatorio = () => console.log("El numero aleatorio es: " + Math.round((Math.random() * 100) + 500));

aleatorio();