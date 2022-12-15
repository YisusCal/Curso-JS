console.log("-----------------------------------------******------------------------------------ ");
console.log("Ejercicio Numero 2")

/* 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, Ejp. miFuncion("Hola Mundo", 4) devolverá "Hola".  */

/* Se asigna una variable a evaluar y enseguida la funcion */
let cadenaDos = "Hola soy la cadena del ejercicio numero 2"
function ejmpNumero2() {
  console.log(cadenaDos);
  let resultCadena = cadenaDos.substring(0, 15);
  console.log(resultCadena);
}

ejmpNumero2();

//Se resolvera ahora cuando el usuario ingrese el tama;o deseado
let cadenaDosIngreDato = "Soy otra froma de resolver el segundo ejercicio"
function ejmpNumero2ingresaDato(numCaracteres) {
  console.log(cadenaDosIngreDato)
  let resultCadena = cadenaDosIngreDato.substring(0, numCaracteres);
  return resultCadena;
}
let msjCon = ejmpNumero2ingresaDato(20);
console.log(msjCon);

//! Ejemplo resuelto por el profesor
console.log("Resultado por el profesor");
const recortarTexto = (cadena = "", longitud = undefined) =>
  (!cadena)
    ? console.warn("No ingresaste una cadena de texto")
    : (longitud === undefined)
      ? console.warn("No ingresaste una longitud para recortar el texto")
      :console.info(cadena.slice(0, longitud));

recortarTexto();
recortarTexto("Hola Mundo", 4);
recortarTexto("",8)
recortarTexto("comer caca")
