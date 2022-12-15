/* **********     Curso JavaScript: 33. Módulos ( import / export ) - #jonmircha     ********** */
import sa, { Saludar, PI, usuario } from "./constantes.js";
import { aritmetica as calculos } from "./aritmetica.js";
// as signofica como

console.log("Archivo modulos.js");
console.log(PI, usuario);
//console.log(aritmetica.sumar(3, 4));
console.log(calculos.sumar(3, 4));
console.log(calculos.restar(3, 4));
sa();
let saludo = new Saludar();
saludo;

