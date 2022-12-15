const d = document;
let x = 0,
  y = 0;

export function moveBall(e, ball, stage) {
  const $ball = d.querySelector(ball),
    $stage = d.querySelector(stage),
    limitsBall = $ball.getBoundingClientRect(),
    limitsStage = $stage.getBoundingClientRect();
  ;
  //console.log(e.keyCode);
  //console.log(e.key);
  //console.log(limitsBall, limitsStage);

  //coliciones -- detectar cuando dos objetos se tocan
  switch (e.keyCode) {
    case 37:
      //izquierda = left
      if (limitsBall.left > limitsStage.left) {
        e.preventDefault();
        x--;
      };

      break;
    case 38:
      //arriba = up
      if (limitsBall.top > limitsStage.top) {
        e.preventDefault();
        y--;
      };
      break;
    case 39:
      //derecha = right
      if (limitsBall.right < limitsStage.right) {
        e.preventDefault();
        x++;
      };
      break;
    case 40:
      //abajo = down
      if (limitsBall.bottom < limitsStage.bottom) {
        e.preventDefault();
        y++;
      };

      break;
    default:
      break;
  }
  $ball.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
}

export function shortcuts(e) {
  /* console.log(e.type);
  console.log(e.key);
  console.log(e.keyCode);
  console.log(`ctrl: ${e.ctrlKey}`);
  console.log(`alt: ${e.altKey}`);
  console.log(`shift: ${e.shiftKey}`);
  console.log(e); */

  if (e.key === "a" && e.altKey) {
    alert("Haz lanzado una alerta con el teclado");
  }
  if (e.key === "c" && e.altKey) {
    confirm("Haz lanzado una confirmacion con el teclado");
  }
  if (e.key === "p" && e.altKey) {
    prompt("Haz lanzado un aviso con el teclado");
  }
}


/* ejercicio DOM 2
-- Tener un Rectandulo negro con un pequeno circulo amarillo en medio, el cual se pueda 
	dezplazar con los botones cursores del teclado arriba/abajo/izquierda/derecha
-- Crear atajo al estar manejando el circulo, alt+a = alert, alt+c = confirm y alt+p = prompt */
  