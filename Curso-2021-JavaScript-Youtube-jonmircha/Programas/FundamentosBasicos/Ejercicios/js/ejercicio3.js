console.log("-----------------------------------------******------------------------------------ ");
console.log("Ejercicio Numero 3")
/* 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].  */
let cadenaTres = "Hola yo soy la cadena del ejercicio tres"

function ejmpNumero3() {
  console.log(cadenaTres);
  let textSeparados = cadenaTres.split(' ');
  console.log(textSeparados);
}
ejmpNumero3();

//! Ejemplo resuelto por el profesor
console.log("Resultado por el profesor");

const cadenaAArreglo = (cadena = "", separador = undefined) =>
  (!cadena)
    ? console.warn("No ingresaste una cadena de texto")
    : (separador === undefined)
      ? console.warn("No ingresaste el caracter separador")
      : console.info(cadena.split(separador));

cadenaAArreglo("Lorem Ipsum Dolor", " ")