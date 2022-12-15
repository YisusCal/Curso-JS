/* **********     Curso JavaScript: 33. Módulos ( import / export ) - #jonmircha     ********** */

function sumar(a, b) {
  return a + b;
}

function restar(a, b) {
  return a - b;
}

//se van a exportar las dos funciones anteriores 
//dentro de un objeto
export const aritmetica = {
  sumar,
  restar
};

