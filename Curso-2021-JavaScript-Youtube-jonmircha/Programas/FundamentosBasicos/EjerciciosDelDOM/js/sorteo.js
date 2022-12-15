const d = document;
export default function drow(btn, selector){
 
  const getWinner = (selector) =>{
  const $players = d.querySelectorAll(selector),
    random = Math.floor(Math.random()*$players.length),
    winner = $players[random];

    //console.log($players, random, winner);
  return `El ganador es ${winner.textContent}`;
 }

 d.addEventListener("click", e =>{
  if(e.target.matches(btn)){
    let result = getWinner(selector);
    alert(result);
    console.log(result);
  }
 })
}

/* ejercicio 14
- Sorteo Digital
-- Tener Varioas palabras
-- y al pulsar el boton, que aleatoria mente arroge un gandor 
	tanto en in aler, como en la consola.
metodos de la clase matematicas, objeto Math y arreglos.
 */

/* Codigo para hacer sorteos en los comentarios */

/* const getWinnerComment = (selector) =>{
  const $players = document.querySelectorAll(selector),
    random = Math.floor(Math.random()*$players.length),
    winner = $players[random];

  return `El ganador es ${winner.textContent}`;
 } */