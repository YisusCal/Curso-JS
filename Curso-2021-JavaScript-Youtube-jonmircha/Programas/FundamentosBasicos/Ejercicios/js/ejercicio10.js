console.log("-----------------------------------------******------------------------------------ ");
console.log("Ejercicio Numero 10")
//? Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true. 

//Mi forma de reolver, esta vez le profe lo resolvio igual
const evaluarNumeroCapicua = (numero) => {
  if(typeof numero !== "number") return console.warn("El dato ingresado no es numero");

  let newNumero = numero.toString();
  let alRevez = newNumero.split("").reverse().join("");
  return(newNumero === alRevez)
  ? console.log("Si es un numero capicua")
  : console.log("No es un numero capicua");

 
}

evaluarNumeroCapicua(50.05);

