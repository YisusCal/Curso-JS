const d = document;
export default function cuentaRegresiva(id, fechaLimite, mensaje) {
  const $cuentaregresiva = d.getElementById(id),
    cuentaregresivaFecha = new Date(fechaLimite).getTime();

  let cuentaregresivaTiempo = setInterval(() => {
    let ahora = new Date().getTime(),
      limiteTiempo = cuentaregresivaFecha - ahora,
      dias = Math.floor(limiteTiempo / (1000*60*60*24)),
      horas = ("0" + Math.floor((limiteTiempo % (1000*60*60*24)) / (1000*60*60))).slice(-2),
      minutos = ("0" + Math.floor((limiteTiempo % (1000*60*60)) / (1000*60))).slice(-2),
      segundos = ("0" +Math.floor((limiteTiempo % (1000*60)) / (1000))).slice(-2);

    $cuentaregresiva.innerHTML = `<h3> Faltan: ${dias} dias, ${horas} horas, ${minutos} minutos, ${segundos} segundos</h3>`;

    //console.log(cuentaregresivaFecha, ahora, limiteTiempo);
    if(limiteTiempo < 0){
      clearInterval(cuentaregresivaTiempo);
      $cuentaregresiva.innerHTML = `<h3>${mensaje}</h3>`;
    }
  }, 1000)

}


/* ejercicio DOM 3
-- Countdown
-- Cuenta Regresiva 
-- Sumas y restas de fechas
-- Temporizadores de javascript
-- Calculo para dias, horas, minutos, segundos
-- cuando llegue a 0 arroje un mensaje.
-- Se necesitan 3 parametros, (Selector donde se mostrara la cuenta, La fecha limite para la fecha regresiva, El msj final 
---- EJEMPLO: Hoy estamos a 17/09/2022 hora 11:24, fecha a ingresar 24/12/2022 hora 24:00 --> Contar cuantos dias, horas, minutos y segundos faltan */