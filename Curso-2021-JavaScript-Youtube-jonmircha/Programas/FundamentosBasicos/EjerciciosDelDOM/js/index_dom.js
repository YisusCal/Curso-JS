import hamburgerMenu from "./menu_hamburguesa.js";
import { digitalClock, alarm } from "./relog.js";
import {moveBall, shortcuts} from "./teclado.js";
import cuentaRegresiva from "./countdown.js";
import scrollTopBoton from "./boton_scroll.js";
import darkTheme from "./tema_obscuro.js";
import responsiveMedia from "./objeto_responsive.js";
import responsiveTester from "./responsive_tester.js";
import userDeviceInfo from "./deteccion_dispositivos.js";
import networkStatus from "./deteccion_red.js";
import webCam from "./deteccion_webcam.js";
import getGeolocation from "./geolocalizacion.js";
import searchFilter from "./filtro_busquedas.js";
import drow from "./sorteo.js";
import slider from "./carrusel.js";
import scrollSpy from "./scroll_espia.js";
import smartVideo from "./video_inteligente.js";
import contactFormValidations from "./validaciones_formulario.js";
import speechReader from "./narrador.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) =>{
  hamburgerMenu(".panel-btn", ".panel", ".menu a");
  digitalClock("#relog", "#activar-relog", "#desactivar-relog"); 
  alarm("assets/despertador.mp3", "#activar-alarma", "#desactivar-alarma");
  cuentaRegresiva("contador", 
  "Mar 03, 2023 03:23:19", 
  "Feliz Cumpleanos Jesus 🤡");
  scrollTopBoton(".scroll-top-btn");
  responsiveMedia(
    "youtube", 
    "(min-width: 1024px)", 
    `<a href="https://www.youtube.com/watch?v=6IwUl-4pAzc&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&index=91" target="_blank" rel="noopener">Ver Video</a>`, 
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/6IwUl-4pAzc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);
    responsiveMedia(
      "gmaps", 
      "(min-width: 1024px)", 
      `<a href="https://goo.gl/maps/DvY1kH2uMgexTerA9" target="_blank" rel="noopener">Ver Mapa</a>`, 
      `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1835.3460772653402!2d-99.67364457632014!3d18.74229461780004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cdb083e2d214a9%3A0x491b22470b82a5ff!2sCancha%20deportiva%20pilcaya%20guerrero!5e0!3m2!1ses!2smx!4v1663542812656!5m2!1ses!2smx" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`);
      responsiveTester("form-test-pag-responsive");
      userDeviceInfo("user_device");
      webCam("webcam");
      getGeolocation("geolocation");
      searchFilter(".card-filter", ".card");
      drow("#winner-btn", ".player");
      slider();
      scrollSpy();
      smartVideo();
      contactFormValidations();
      
});

/* evetos:
1.- keydawn (pulsacion de tecla) = Se ejecuta inmediatamente al pulsar la techa.
2.- keyup (tecla arriba)= se ejecuta hasta que dejas de presionar la tecla.
3.- keypress (pulsacion de tecla) = mientras se precione la tecla se ejecuta.
*/
d.addEventListener("keydown", (e) =>{
  shortcuts(e);
  moveBall(e, ".ball", ".stage");
})

darkTheme(".dark-theme-btn", "dark-mode");
networkStatus("conexion");
speechReader();

