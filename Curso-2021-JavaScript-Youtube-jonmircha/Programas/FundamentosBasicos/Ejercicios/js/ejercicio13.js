console.log("-----------------------------------------******------------------------------------ ");
console.log("Ejercicio Numero 13")
//? Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar. 

const detrminarNumeroPrimos = (numero = undefined) => {
  if(numero === undefined) return console.warn("No ingresaste un numero");

  if(typeof numero !== "number") return console.warn("El dato no es un numero");

  if(Math.sign(numero) === -1) {
    let comNumNegativo = numero * -1;
    return (comNumNegativo % 2 === 1)
      ? console.info(`El numero ${numero} es impar`)
      : console.info(`El numero ${numero} es par`);
  }else{
    return (numero % 2 === 1)
      ? console.info(`El numero ${numero} es impar`)
      : console.info(`El numero ${numero} es par`);
  }
}

detrminarNumeroPrimos();
detrminarNumeroPrimos(-52);
detrminarNumeroPrimos("520");
detrminarNumeroPrimos(true);
detrminarNumeroPrimos(30);


