console.log("-----------------------------------------******------------------------------------ ");
console.log("Ejercicio Numero 11")
//? Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.

// Mi respuesta
const calcularFactorialNumero = (numero)=>{
  if(typeof numero !== "number") return console.warn("El dato ingresado no es un numero")
  let acumulador = 1;
  for(let i=1; i<=numero; i++) acumulador = acumulador * i;
  
  console.info(`El factorial del numero ${numero} es ${acumulador}` )
}

//calcularFactorialNumero(5);

// FORMA DE RESOLVER PO RPARTE DEL PROFE
const factorial= (numero = undefined)=>{
  if(numero === undefined) return console.warn("No ingresaste un numero");

  if(typeof numero !== "number") return console.warn("El dato no es un numero");

  if(Math.sign(numero) === -1) return console.warn("El numero no puede ser negativo");

  let factorial = 1;
  
  for(let i=numero; i > 1; i--) {
    factorial *= i;
  } 
  console.log(`El factoria del numero ${numero} es igaul a ${factorial}`)
}

factorial();
factorial(-1);
factorial(0);
factorial("5");
factorial([1,2,3]);
factorial(5);