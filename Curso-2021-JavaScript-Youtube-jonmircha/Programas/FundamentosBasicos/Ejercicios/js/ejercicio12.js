console.log("-----------------------------------------******------------------------------------ ");
console.log("Ejercicio Numero 12")
//? Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true. 


const detrminarNumeroPrimos = (numero = undefined) => {
  if(numero === undefined) return console.warn("No ingresaste un numero");

  if(typeof numero !== "number") return console.warn("El dato no es un numero");
  if(numero === 0) return console.warn("El numero no puede ser 0");
  if(numero === 1) return console.warn("El numero no puede ser 1");

  if(Math.sign(numero) === -1) return console.warn("El numero no puede ser negativo");

  return (numero % 2 === 1)
    ? console.info(`El numero ${numero} SI es primo`)
    : console.info(`El numero ${numero} NO es primo`);
}

detrminarNumeroPrimos();
detrminarNumeroPrimos(-5);
detrminarNumeroPrimos("520");
detrminarNumeroPrimos(true);
detrminarNumeroPrimos(1027);

//FORMA DE RESOLVER EL PROFE Me gusta mas la mia esta tiene fallas

const NumeroPrimos = (numero = undefined) => {
  if(numero === undefined) return console.warn("No ingresaste un numero");

  if(typeof numero !== "number") return console.warn("El dato no es un numero");
  if(numero === 0) return console.warn("El numero no puede ser 0");
  
  if(numero === 1) return console.warn("El numero no puede ser 1");

  if(Math.sign(numero) === -1) return console.warn("El numero no puede ser negativo");

  let divisible = false;

  for(let i=2; i<numero;i++){
    if((numero % i) === 0){
      divisible = true;
      break;
    }
  }
  return(divisible)
  ? console.info(`El numero ${numero} NO es primo`)
  : console.info(`El numero ${numero} SI es primo`);
  
}

NumeroPrimos(7);