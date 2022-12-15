console.log("-----------------------------------------******------------------------------------ ");
console.log("Ejercicio Numero 15")
//? Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10. 
//Mi forma de resolver, esta vez mucho mejor la del profe
const converBinario = (numero = undefined) => {
  let num = numero;
  let binario = (num % 2).toString();
  for (; num > 1;) {
    num = parseInt(num / 2);
    binario = (num % 2) + binario;
  }
  console.info(binario);
}

converBinario(51);

const converDecimal = (numero = undefined) => {
  let binario = numero.toString();
  let binarioInvertido = binario.split("").reverse().join("");

  let resultado = 0;
  for (let i = 0; i < binarioInvertido.length; i++) {
    if (binarioInvertido[i] == 1) {
      resultado += (Math.pow(2, i));
    }
  }
  console.log(resultado);

}
converDecimal(110011);

// Respuesta del PROFESOR esta brutal
const convertirBinarioDecimal = (numero = undefined, base = undefined) =>{
  if(numero === undefined) return console.warn("Error no ingresaste el numero a convertir");
  if(typeof numero !== "number") return console.warn("Error dato no valido");
  if(base === undefined) return console.warn("Error no ingresaste la base a convertir");
  if(typeof base !== "number") return console.warn("Error dato no valido");

  if(base === 2){
    return console.info(`${numero} base ${base} = ${parseInt(numero, base)} base 10`)
  } else if(base === 10){
    return console.info(`${numero} base ${base} = ${numero.toString(2)} base 2`)
  } else{
    return console.warn("El tipo de base a convertir no es vlido");
  }
}

convertirBinarioDecimal(100, 2);
convertirBinarioDecimal(4, 10);