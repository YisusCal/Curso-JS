/* Prueba Responsive */
const d = document;

export default function responsiveTester(id){
  const $form = d.getElementById(id);
  let tester;
  
  d.addEventListener("submit", (e) => {
    if(e.target === $form){
      e.preventDefault();
      tester = window.open($form.URL.value, "tester", `innerWidth=${$form.ancho.value}, innerHeight=${$form.alto.value}`);
    }
  });

  d.addEventListener("click", (e) => {
    if(e.target === $form.cerrarPagResponsive) tester.close();
  });
}

/* En los formularios con la notacion del punto se puede acceder directamente a el valor de cualquier atributo.
ejmploÑ $form.URL.value,en el formulario accedemos a el elemento (imput) con el nombre (URL) y obtenermos su valor(value) */

/* ejercicio 8
-- Responsive Tester
Crear un formulario que reciva 3 campos:
1.- El link de un sitio we
2.- Ancho del sitio web
3.- Alto del sitio web
Dos botones uno de probar y otro de cerrar
--El boton de probar: Al darle click, que abra la pagina web con las
	dimesiones dadas en los campos.
--El boton de cerrar qu cierre la pagina.
--Tips: Recordar lo usado en las clases del BOM
--Evento submit */