const d = document;

export function digitalClock(clock, btnPlay, btnStop) {
  let clockTempo;
  d.addEventListener("click", (e) => {
    if (e.target.matches(btnPlay)) {
      clockTempo = setInterval(() => {
        let clockHour = new Date().toLocaleTimeString();
        d.querySelector(clock).innerHTML = `<h3>${clockHour}</h3>`;
      }, 1000);

      e.target.disabled = true;
    }

    if (e.target.matches(btnStop)) {
      clearInterval(clockTempo);
      d.querySelector(clock).innerHTML = null;
      d.querySelector(btnPlay).disabled = false;
    }
  })
}

export function alarm(sound, btnPlay, btnStop) {
   let alarmaTempo;
   const $alarm = d.createElement("audio");
   $alarm.src = sound;
  d.addEventListener("click", (e) =>{
    if(e.target.matches(btnPlay)){
      alarmaTempo = setTimeout(() =>{
        $alarm.play();
      },2000);

      e.target.disabled = true;
    }
    if(e.target.matches(btnStop)){
      clearTimeout(alarmaTempo);
      $alarm.pause();
      $alarm.currentTime = 0;
      d.querySelector(btnPlay).disabled = false;
    }
  })
}


/* 
ejercicio DOM 2
-- Hacer un relog digital, que al pulsar el boton muestre la hora, minutos y
	los segundos se tiene qu ir actializando el relog.
-- El boton de iniciar relog se desabilita.
-- Se crea un segundo boton para deter el relog y se habilita denuevo el boton
	de inicio. 
-- Crear un boton para iniciar una alrma, toca un sonido de alarma.
-- Al iniciar la alarma se desabilita el boton.
--Se cre un cuarto boton para deter la alrma y habiliar denuevo el inicio de alarma

-- Utilizar temporizadores, manejo de contenido HTML de los elementos del DOM, 
	utilizar la etiqueta audio y manipularla a travez de js */