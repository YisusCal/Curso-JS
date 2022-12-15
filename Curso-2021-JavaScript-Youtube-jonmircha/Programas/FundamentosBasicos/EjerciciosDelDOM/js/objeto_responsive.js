const d = document,
  w = window;

  export default function responsiveMedia(id, mq, mobileContent, desktopContent){

    let breakpoint = w.matchMedia(mq);

    const responsive = (e) => {
      if(e.matches){
        d.getElementById(id).innerHTML = desktopContent;
      }else{
        d.getElementById(id).innerHTML = mobileContent;
      }

      //console.log(breakpoint, e.matches);
    };
    
    breakpoint.addListener(responsive);
    responsive(breakpoint);
  }


  /* ejercicio 7
-- Responcive con JavaScript
-- Hacer la pgina responcive(Que se adapte adispositivos moviles)
-- Insertan un video de youtube y un mapa con la ubicacion googleMaps
-- Em modo computadora que s epuedan visualizar normal, pero en modo 
	celular arroge dos enlaces uno para ver el video y otro para ve rla ubicacion.
--Eventos del BOM (rizace, load)
--Windows match media
-- responsive web desing */