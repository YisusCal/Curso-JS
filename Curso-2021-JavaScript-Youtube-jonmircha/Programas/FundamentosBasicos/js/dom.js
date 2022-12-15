
//60. WEB APIs
/*  console.log(
 "******************************* WEB APIs ********************************"
 );console.log(window);
 console.log(document);

 //Funcion para hablar desde el navegador
 let texto = "Hola Soy el ingeniero Jesus Calderon";
     const hablar = (texto) =>
 speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
 hablar(texto);
*/

// 61. DOM Introduccion
/* console.log(
  "******************************* Elementos del DOM ********************************"
);
//Elementos del DOM(Documento)
console.log(window.document);
console.log(document);
console.log(document.head);
console.log(document.body);
console.log(document.documentElement);
console.log(document.doctype);
console.log(document.charset);
console.log(document.title);
console.log(document.links);
console.log(document.images);
console.log(document.forms);
console.log(document.styleSheets); //ver cuantos css
console.log(document.scripts);
console.log(document.URL);
setTimeout(() => {
console.log(document.getSelection().toString()); //Imprimer todo lo seccionado
}, 2000);
document.write("<h2>Hola Mundo desde el DOM</h2>");  */



//62. DOM: Nodos, Elemetos y Selectores
/* console.log(
  "******************************* 62. DOM: Nodos, Elemetos y Selectores ********************************"
);

// # para id
// . para clases 

//Como se consultaba anteriormente, los primeros 3 ya no se utilizan mucho
console.log(document.getElementsByTagName("li"));
console.log(document.getElementsByClassName("card"));
console.log(document.getElementsByName("nombre"));

console.log(document.getElementById("menu")); //aun es muy utilizado por su rapidez

//La nueva forma de consultar
//Para consultar id document.getElementById()
//Para traerte el primer selecctor valido document.querySelector()
//Para traerte todos los selecctores validos document.querySelectorAA()
console.log(document.querySelector("#menu"));
console.log(document.querySelector("a"));
console.log(document.querySelectorAll("a"));
console.log(document.querySelectorAll("a").length);
document.querySelectorAll("a").forEach((el) => console.log(el));
console.log(document.querySelector(".card"));
console.log(document.querySelectorAll(".card"));
console.log(document.querySelectorAll(".card")[2]);
console.log(document.querySelector("#menu li"));
console.log(document.querySelectorAll("#menu li"));
console.log(document.querySelectorAll("h1")); */





//63. DOM: Atributos y Data-Attributes
/* console.log(
  "******************************* 63. DOM: Atributos y Data-Attributes ********************************"
);
console.log(document.documentElement.lang); //directamente se obtiene el atributo lang
console.log(document.documentElement.getAttribute("lang"));//una mejor practica es obtener el atributo lang, con el metodo getAttribute
console.log(document.querySelector(".link-dom").href); //Al obtenerlo directamente no es recomedable
console.log(document.querySelector(".link-dom").getAttribute("href")); //Esta es la mejor forma con el metodo getAttribute
console.log(document.querySelector("meta").getAttribute("charset"));

// Para editar los atributos es con el metodo setAttribute
document.documentElement.lang = "es";
console.log(document.documentElement.lang);
document.documentElement.setAttribute("lang", "es-MX");
console.log(document.documentElement.lang);

//Se utiliza const, porque con el puedes hacer cambios en los atributos, mientras simpre sera ese mismo elemento, no importa todo lo que cambie, el elemto siempre sera el mismo.
//Se utiliza el $ para declarar alguna variable de elemetos del DOOM, es basicamente para poder diferenciar de las variables declaradas en el codigo normal de JS.
const $linkDOM = document.querySelector(".link-dom");

$linkDOM.setAttribute("target", "_blank"); //target para abrir el enlace en otra ventana
$linkDOM.setAttribute("rel", "noopener"); //Buenas practicas de HTMl - evitar hackeos
$linkDOM.setAttribute("href", "https://youtube.com/jonmircha");
console.log($linkDOM.hasAttribute("rel"));
$linkDOM.removeAttribute("rel");
console.log($linkDOM.hasAttribute("rel"));

//Data-Attributes
console.log($linkDOM.getAttribute("data-description"));
console.log($linkDOM.dataset);
console.log($linkDOM.dataset.description);
$linkDOM.setAttribute("data-description", "Modelo de Objeto del Documento");
console.log($linkDOM.dataset.description);
$linkDOM.dataset.description = "Suscríbete a mi canal y comparte";
console.log($linkDOM.dataset.description);
console.log($linkDOM.hasAttribute("data-id"));
$linkDOM.removeAttribute("data-id");
console.log($linkDOM.hasAttribute("data-id")); */




//64. DOM: Estilos y Variables CSS.
/* console.log(
  "******************************* 64. DOM: Estilos y Variables CSS ********************************"
);
const $linkDOM = document.querySelector(".link-dom");

console.log($linkDOM.style);
console.log($linkDOM.getAttribute("style"));
console.log($linkDOM.style.backgroundColor);
console.log($linkDOM.style.color);
console.log(window.getComputedStyle($linkDOM));
console.log(getComputedStyle($linkDOM).getPropertyValue("color"));

$linkDOM.style.setProperty("text-decoration", "none");
$linkDOM.style.setProperty("display", "block");
$linkDOM.style.width = "50%";
$linkDOM.style.textAlign = "center";
$linkDOM.style.marginLeft = "auto";
$linkDOM.style.marginRight = "auto";
$linkDOM.style.padding = "1rem";
$linkDOM.style.borderRadius = ".5rem";

console.log($linkDOM.style);
console.log($linkDOM.getAttribute("style"));
console.log(getComputedStyle($linkDOM));

//Variables CSS - Custom Properties CSS
const $html = document.documentElement,
  $body = document.body;

//console.log($html);
//console.log($body);

let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color"),
  varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");

console.log(varDarkColor, varYellowColor);

$body.style.backgroundColor = varDarkColor;
$body.style.color = varYellowColor;

$html.style.setProperty("--dark-color", "#000");
varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");

$body.style.setProperty("background-color", varDarkColor);
 */




//65. DOM: Clases CSS.
/* console.log(
  "******************************* 65. DOM: Clases CSS ********************************"
);
const $card = document.querySelector(".card"); //seleccionar elemento

console.log($card);
console.log($card.className); //nombre de la clase
console.log($card.classList); //lista con las clases que contenga
console.log($card.classList.contains("rotate-45"));//Evaluar si contiene la clase dada
$card.classList.add("rotate-45");//agregar una clase
console.log($card.classList.contains("rotate-45"));
console.log($card.className);
console.log($card.classList);
$card.classList.remove("rotate-45"); //Remover clase
console.log($card.classList.contains("rotate-45"));
$card.classList.toggle("rotate-45"); //Es un interruptor, evalua si tiene la clase la elimina, si no la tiene la agrega
console.log($card.classList.contains("rotate-45"));
$card.classList.toggle("rotate-45");
console.log($card.classList.contains("rotate-45"));
$card.classList.toggle("rotate-45");
$card.classList.replace("rotate-45", "rotate-135"); //Primer parametro clase a ser removida, segundo la calse a ser remplazada
$card.classList.add("opacity-80", "sepia");
$card.classList.remove("opacity-80", "sepia");
$card.classList.toggle("opacity-80", "sepia"); */







//66. DOM: Texto y HTML.
/* console.log(
  "******************************* 66. DOM: Texto y HTML ********************************"
);
const $whatIsDOM = document.getElementById("que-es");
let text = `
    <p>
      El Modelo de Objetos del Documento (<b><i>DOM - Document Object Model</i></b>) es un API para documentos HTML y XML.
    </p>
    <p>
      Éste proveé una representación estructural del documento, permitiendo modificar su contenido y presentación visual mediante código JS.
    </p>
    <p>
      <mark>El DOM no es parte de la especificación de JavaScript, es una API para los navegadores.</mark>
    </p>
  `;

//$whatIsDOM.innerText = text; //Forma de insertar texto no estandar
//$whatIsDOM.textContent = text; //Forma correcta de agregar texto, es el estandar
//$whatIsDOM.innerHTML = text; //Forma de agregar texto de tipo HTML, lo que indica que las etiquetas la interpretara
$whatIsDOM.outerHTML = text; //Forma de remplazar un elemento del html por otro. */






//67. DOM Traversing: Recorriendo el DOM.
/* console.log(
  "******************************* 67. DOM Traversing: Recorriendo el DOM ********************************"
);
const $cards = document.querySelector(".cards");

console.log($cards);
console.log($cards.children); //Los hijos de del elemento cards 
console.log($cards.children[2]); //El hijo numero 2 del elemento cards
console.log($cards.parentElement); //El padre del elemento cards
console.log($cards.firstElementChild);// El primer hijo del elemento cards
console.log($cards.lastElementChild); //El ultimo hijo del elemento cards
console.log($cards.previousElementSibling);//El hermano anterior del elemento cards
console.log($cards.nextElementSibling);//El siguiente hermano del elemento cards

//closest, basicamente busca el padre mas cercano, del tipo de selector que nosotros busquemos. 
console.log($cards.closest("html"));
console.log($cards.closest("div"));
console.log($cards.closest("body"));
console.log($cards.children[3].closest("section")); */




//68. DOM: Creando Elementos y Fragmentos.
/* console.log(
  "******************************* 68. DOM: Creando Elementos y Fragmentos ********************************"
);

//?Esta es la manera de crear nodos de UNO por UNO

//Creamos los elemetos con el metodo .createElement().
const $figure = document.createElement("figure"),
  $img = document.createElement("img"),
  $figcaption = document.createElement("figcaption"),
  $figcaptionText = document.createTextNode("Animals"),
  $cards = document.querySelector(".cards"),
  $figure2 = document.createElement("figure");

//Se agregan los atributos necesarios a los elementos creados
$img.setAttribute("src", "https://placeimg.com/200/200/animals");
$img.setAttribute("alt", "Animals");
$figure.classList.add("card");

//Se agrega los hijos a los elemntos 
//En este caso a nuestro elemnto principal cards se le agrega una figure, a la figure se le agrega un figcaption y una img, y a la figcaption se le agrega un texto.
$figcaption.appendChild($figcaptionText);
$figure.appendChild($img);
$figure.appendChild($figcaption);
$cards.appendChild($figure);

//Otra forma de crear elementos no tan correcta pero valida.
//Utilizando la propiedad .innerHTML
//Desventaja que al hacerlo como texto JS no lo considera como un nodo, pero se esta generadno contenido dinamico.
$figure2.innerHTML = `
<img src="https://placeimg.com/200/200/people" alt="People">
<figcaption>People</figcaption>
`;
$figure2.classList.add("card");
$cards.appendChild($figure2);


//? Forma de agregar varios nodos, agregar muchos datos (colecciones de datos, estas son las opciones)


//Esta forma es utilizando el metodo createElement dentro de un forEach.
const estaciones = ["Primavera", "Verano", "Otoño", "Invierno"],
  $ul = document.createElement("ul");

document.write("<h3>Estaciones del Año</h3>");
document.body.appendChild($ul);

estaciones.forEach((el) => {
  const $li = document.createElement("li");
  $li.textContent = el;
  $ul.appendChild($li);
});

//La siguiente forma es utilizando la propiedad innerHTML
//Es varida esta opcion, la desventaja es que JS no lo interpreta con creacion de un nodo.
const continentes = ["África", "América", "Asia", "Europa", "Oceanía"],
  $ul2 = document.createElement("ul");

document.write("<h3>Continentes del Mundo</h3>");
document.body.appendChild($ul2);
$ul2.innerHTML = "";
continentes.forEach((el) => ($ul2.innerHTML += `<li>${el}</li>`));

//Las dos formas anteriores son correctas.
// Las inserciones al DOM es de las cosas mas demandates en el desarrollo FrotEnd por lo tanto si nos vemos en la necesidad de insertar una coleccion de cientos o miles de datos, la utilizacion de recursos de la computadora para cargar la informacion de la pagina sera mayor, ademas que depndiendo de la conexion de internet, puede hacer qu el aplicaion sea lenta.

//Renderizado. bUSCAR QUE ES?

//Po tal motivo es remendable utilizar los Fragmentos:
//En el Dom se pueden crear frangmentos dinamicos, son una varibale que se crea dinamicamente, y a esa variables la podemos iterar, de esta forma podemos pegarle al fragmento del dom que esta en memoria no directamente en el DOM.
//Despues de ya tener los elementos cargados en ese fragmento ya nadamas hacemos UNA SOLA insercion al DOM con los (x) elementos a agregar.
//No se puede utilizar la propiedad innerHTML, solo con el metodo .createElement() pero es la mejor forma para crear los elementos.
//Los fragmentos son otro tipo de nodos.


//!ESTA ES LA FORMA CORRECTA EN QUE SE DEBEN DE CREAR LOS ELEMENTOS, CON AYUDA DE LOS FRAGMENTOS.

const meses = [
  "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
  "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre",
],
  $ul3 = document.createElement("ul"),
  $fragment = document.createDocumentFragment();

meses.forEach((el) => {
  const $li = document.createElement("li");
  $li.textContent = el;
  $fragment.appendChild($li);
});

document.write("<h3>Meses del Año</h3>");
$ul3.appendChild($fragment);
document.body.appendChild($ul3); */





//69. DOM: Templates HTML
//La etiqueta Template: son un modelo a seguir, en el cual tu estructuras el contenido HTML que quieras que mediante JS se convierta en dinamico. Es otra forma de poder interactuar con el DOM
//La etiqueta Template es una equiqueta que no se visualiza, auqne la podemos ver en la pestana elements no se visualiza.
/* console.log(
  "******************************* 69. DOM: Templates HTML ********************************"
);
const $cards = document.querySelector(".cards"),
  $template = document.getElementById("template-card").content,
  $fragment = document.createDocumentFragment(),
  cardsContent = [
    {
      title: "Tecnología",
      img: "https://placeimg.com/200/200/tech",
    },
    {
      title: "Animales",
      img: "https://placeimg.com/200/200/animals",
    },
    {
      title: "Arquitectura",
      img: "https://placeimg.com/200/200/arch",
    },
    {
      title: "Gente",
      img: "https://placeimg.com/200/200/people",
    },
    {
      title: "Naturaleza",
      img: "https://placeimg.com/200/200/nature",
    },
  ];

cardsContent.forEach((el) => {
  $template.querySelector("img").setAttribute("src", el.img);
  $template.querySelector("img").setAttribute("alt", el.title);
  $template.querySelector("figcaption").textContent = el.title;

  //Para clonar es con el metodo importNode(), dentro va de que me voy a basar para hacer el clon(en este caso de la variable template) y el boolean que diga true, significa si va a copiar toda la estructura interna, si es false, solo estuviera copiando la equiqueta template de apertura y de cierre.
  let $clone = document.importNode($template, true);
  $fragment.appendChild($clone);
});

$cards.appendChild($fragment); */




//70. DOM: Modificando Elementos (Old Style)
/* console.log(
  "******************************* 70. DOM: Modificando Elementos (Old Style) ********************************"
);

//Modificar elementos de forma antigua(vieja), pero sigue funcionando bien
const $cards = document.querySelector(".cards"),
  $newCard = document.createElement("figure"),
  $cloneCards = $cards.cloneNode(true); //clona todo elelmento(nodo), true para clonar todo el contenido. false no lo hara.

$newCard.innerHTML = `
  <img src="https://placeimg.com/200/200/any" alt="Any">
  <figcaption>Any</figcaption>
`;
$newCard.classList.add("card");

$cards.replaceChild($newCard, $cards.children[2]); //Remplazar el nuevo elemento hijo por el seleccionado
$cards.removeChild($cards.firstElementChild); //Remover algun elemento hijo seleccioando
$cards.insertBefore($newCard, $cards.lastElementChild); //insertar un nuevo elemento hijo antes de (en este caso de la primera targeta)
document.body.appendChild($cloneCards); //adjuntar o agregar hijo, en este caso el elemento clonado.  */





//71. DOM: Modificando Elementos (Cool Style)
/*
.insertAdjacent... //inserta de manera adyacente
  (1).insertAdjacentElement(position, el) //agregar un elemento -- Reciven dos parametros: la posicion y el elemento
  (2).insertAdjacentHTML(position, html) //agregar contenido HTML -- Reciven dos parametros: la posicion y el codigo HTML
  (3).insertAdjacentText(position, text) //agrega un conetenedor tipo texto -- Reciven dos parametros: la posicion y el contenido textual

Posiciones:
  beforebegin(hermano anterior)
  afterbegin(primer hijo)
  beforeend(ultimo hijo)
  afterend(hermano siguiente)
*/
/* console.log(
  "******************************* 71. DOM: Modificando Elementos (Cool Style) ********************************"
);

const $cards = document.querySelector(".cards"),
  $newCard = document.createElement("figure");

let $contenCard = `
  <img src="https://placeimg.com/200/200/any" alt="Any">
  <figcaption></figcaption>
`;
$newCard.classList.add("card");

$newCard.insertAdjacentHTML("afterbegin", $contenCard);
$newCard.querySelector("figcaption").insertAdjacentText("afterbegin", "Any"); 
$cards.insertAdjacentElement("afterbegin", $newCard);

//Nuevos metodos para gregar elementos, son formas mas rapidas ()
//$cards.prepend($newCard); // Hijo primero
//$cards.append($newCard); // Ultimo Hijo
//$cards.before($newCard); // Hermano anterior
//$cards.after($newCard); // Hermano posterior */





//72. DOM: Manejadores de Eventos
/*console.log(
  "******************************* 72. DOM: Manejadores de Eventos********************************"
); 

//Los eventos es aquel mecanismo que tenemos en JS para poder controlar las acciones del usuario y definir ciertos comportamientos del documento que suceden cierto momento o cuando se cumplan ciertas condiciones.
//Las funciones que se ejecutan en un Evento es lo q se conoce como el Event Handler o traducido Manejadores de Eventos, o también Observadores o Escuchadores.

//1️⃣ COMO ATRIBUTO DEL HTML
//👉 Esta función se va a convertir en el Manejador de Eventos (Event Handler)
//👉 Cuando una función se convierte en un Event Handler, es decir una función que se ejecuta en un Evento, nosotros podemos acceder a un Objeto especial q es el Evento en sí, y eso lo podemos acceder con la palabra reservada 'event'

function holaMundo() {
  alert('Holaaa Mundo')
  console.log(event)  //👈 con esto en la consola, se desencadena un tipo de Objeto MouseEvent (evento del Mouse), y dentro de él se encuentran dos propiedades muy importantes: type y target.

  //👉 type.- es el tipo de evento q se desencadeno
  //👉 target.- es el elemento que origino el evento

  //👉 Dentro de target están todos los eventos y propiedades q se pueden usar por dicho elemento y los q están en null son eventos q no tienen definida dicha función en dichos eventos. En cambio, vemos el evento onclick q si tiene definida la función holaMundo
}

//2️⃣ COMO MANEJADOR SEMÁNTICO

//👉 Se le dice manejador semántico porque va teniendo una coherencia en la manera como la vamos definiendo
//👉 cuando definamos un evento como semántico igualamos el evento semántico al nombre de la función pero sin (), porque los () hacen q cuando se cargue el Navegador se va a ejecutar.

const $eventoSemantico = document.getElementById("evento-semantico");

$eventoSemantico.onclick = holaMundo; //👈 no le ponemos () a la función porque sino al momento q se recarga el Navegador, se estará ejecutando el evento, y luego la consola nos dará undefined, porque el objeto event q mandamos a la consola no estará definido, porque la función se ejecutó así como va, ósea a la hora de cargar como tiene los paréntesis se ejecuta.

//👇 esta es otra manera de definir un Evento de tipo semántico, puede ser una función anónima o una arrow function

$eventoSemantico.onclick = function (e) {//👈 Toda función q se convierte en un Manejador de Eventos, es decir una función q se ejecuta en algún momento en un evento no puede recibir parámetros, el único parámetro q recibe es el evento en sí, que lo podemos obtener con la palabra 'event' o en algunos casos abreviar con la letra 'e'
  alert("Hola mundo desde el Manejador de Eventos Semantico");
  console.log(e);
  console.log(event);
};


//3️⃣ COMO MANEJADOR MÚLTIPLE
const $eventoMultiple = document.getElementById("evento-multiple");
//👉 Si deseamos asignar varias funciones a un mismo elemento, tenemos el método .addEventListener() que nos perimite levantar un Escuchador de Eventos.

//👇 este método .addEventListener() recibe varios parámetros, pero sólo nos enfocaremos en 2:
// 1° Nombre de evento
// 2° Función que se va a ejecutar, pero sin parentesis
$eventoMultiple.addEventListener("click", holaMundo);

//👇 tambien podemos trabajar con una arrow function
//este addEventListener nos dará 2 alerts y 4 console.log, nos da 2 alerts porque en vez no remplaza la funcion anterior como pasa más arriba con el evento de tipo semántico, esta es la ventaja de manejadores eventos múltiples, que se pueden ejecutar más funciones en un mismo evento.
$eventoMultiple.addEventListener("click", (e) => {
  alert("Hola Mundo desde el Manejador de Eventos Multiples");
  console.log(e);
  console.log(e.type);
  console.log(e.target);
  console.log(event);
}); */







//73. DOM: Eventos con Parámetros y Remover Eventos
/* console.log(
  "******************************* 73. DOM: Eventos con Parámetros y Remover Eventos********************************"
);
function holaMundo() {
  alert('Holaaa Mundo')
  console.log(event)
}
function saludar(nombre = "desconocid@"){
  alert(`Hola ${nombre}`);
  console.log(event);

}

const $eventoMultiple = document.getElementById("evento-multiple");

$eventoMultiple.addEventListener("click", () =>{ 
  saludar();
  saludar("Jesus");
  alert("Hola desde dentro del eventListener");
  holaMundo();
});

//Eliminar eventos de un elemento
const $eventoRemover = document.getElementById("evento-remover");

const removerDobleClick = (e) =>{
  alert(`Removiendo el evento de tipo ${e.type} `);
  console.log(e);
  $eventoRemover.removeEventListener("dblclick", removerDobleClick);
  $eventoRemover.disabled = true;
}
$eventoRemover.addEventListener("dblclick", removerDobleClick);
 */






//74. DOM: Flujo de Eventos (Burbuja y Captura)
/* console.log(
  "******************************* 74. DOM: Flujo de Eventos (Burbuja y Captura)********************************"
);

// Hay dos maneras en como se va a propagar el evento
// Una vez que el evento se origina tiene un apropagacion a lo largo del arbol del Dom, por defecto se va dando del elemento mas interno hacie al evento mas externo, en este caso el document, y esa face se llama fase de burbuja.

const $divsEventos = document.querySelectorAll(".eventos-flujo div");

function flujoEventos(e){
  console.log(`Hola te saluda ${this.className}, el click lo origino ${e.target.className}`);
};

console.log($divsEventos);

$divsEventos.forEach(div => {
  //El metodo addEventListener tiene un 3 parametro opcional
  //Es una serie de opciones, por defecto es false
  //esto significa que estamos en face de burbuja, el flujo de los eventos se propaga del mas interno al mas externo dentro del arbol del Dom.
  //Para obtener la face de burbuja es sin activar el 3 paametro o especificandolo con el valor de FALSE.
  
  //div.addEventListener("click", flujoEventos, false);

  //Para optener el contrario que es la face de captura, porque se capura la burbuja de los eventos, entonces va del elemento mas externo al mas interno. 
  //Para activar esta face de captura es activar el 3 parametro con el valor TRUE.
  
  //div.addEventListener("click", flujoEventos, true);

  //Tambien se puede pasar un objeto en el tercer parametro
  div.addEventListener("click", flujoEventos, {
    capture: true,
    once: true, //Es un paramentro llamado (una vez)
  });
});  */




/* //75. DOM: stopPropagation & preventDefault 
console.log(
  "******************************* 75. DOM: stopPropagation & preventDefault ********************************"
);

//Como detener esa propagacion de la secion anterior burbuja y captura. Y que solo se ejecute una vez.
const $divsEventos = document.querySelectorAll(".eventos-flujo div"),
$linkEventos = document.querySelector(".eventos-flujo a");

function flujoEventos(e){
  console.log(`Hola te saluda ${this.className}, el click lo origino ${e.target.className}`);
  e.stopPropagation(); //Este metodo detiene el flujo
};

console.log($divsEventos);

$divsEventos.forEach(div => {
  div.addEventListener("click", flujoEventos);
});

$linkEventos.addEventListener("click",(e) =>{
  alert("Hola soy tu amigo aprendiz de tu curso, Jesus Calderon");
  e.preventDefault(); //Cancela la accion que tenga por default el evento
  e.stopPropagation(); //Este metodo detiene el flujo
}); */



//76. DOM: Delegación de Eventos
/* console.log(
  "******************************* 76. DOM: Delegación de Eventos ********************************"
);

//Delegacion de los eventos: 
//En resumen de esta forma se dejan de estar agregando addEventListener a cada nuevo evento, y solo se asigna uno en el document. De ahi solo se evaluan con el condicional if y listo.
function flujoEventos(e) {
  console.log(`Hola te saluda ${e.target.className}, el click lo origino ${e.target.className}`);

};

document.addEventListener("click", (e) => {
  console.log("Click en", e.target);
  //El metodo matches busca un selector valido target.matches(conincidencias en el objetivo)
  if (e.target.matches(".eventos-flujo div")) {
    flujoEventos(e);
  }

  if (e.target.matches(".eventos-flujo a")) {
    alert("Hola soy tu amigo aprendiz de tu curso, Jesus Calderon");
    e.preventDefault(); //Cancela la accion que tenga por default el evento
  }
}); */
//Ya no hace falta stopPropagation, porque ya no hay un elementro padre, el evento ya esta en el elemnto raiz el document.  


//77. BOM: Propiedades y Eventos 
/* console.log(
  "******************************* 77. BOM: Propiedades y Eventos ********************************"
);

// Control del tamano de la pantalla
//resize = cambiar el tamano
window.addEventListener("resize", (e) => {
  console.clear();
  console.log("********** Evento Resize **********");
  console.log(window.innerWidth); //Ancho interior
  console.log(window.innerHeight); //Altura interior
  console.log(window.outerWidth); //Ancho exterior
  console.log(window.outerHeight); //Altura exterior
  console.log(e);
});

//Control de dezplazamiento del scroll
window.addEventListener("scroll", (e) => {
  console.clear();
  console.log("********** Evento Scroll **********");
  console.log(window.scrollX);
  console.log(window.scrollY);
  console.log(e);
});

//Dentro de tu pantalla podemos identificar en que coordenada de tu pantalla comienza a dibujarse la ventana de tu navegador
// load (cargar)este evento se va ejecutar justamente cuando la vertana de tu navegador termine de cargar.
window.addEventListener("load", (e) => {
  console.log("********** Evento Load **********");
  console.log(window.screenX);
  console.log(window.screenY);
  console.log(e);
});

// Es un mejor practica para cuando tengamos que hacer que algo carge en cuanto el DOM este listo es mucho mas eficiente trabajar con el evento DOMContentLoaded que con el evento load, sobre todo cuando se estes realizando peticiones asincronas. Porque el evento DOMContentLoaded es disparado cuando el documento HTML a sido cargado y paraceado, es decir cuando el navegador tenga todas las etiquetas del arbol del DOM desde el <!DOCTYPE html> hasta </html>.
//Pero la diferencia es que el evento DOMContentLoaded se dispara cuando carga desde el <!DOCTYPE html> hasta </html>, no espera que cargen las hojas de estilo, los scripts, las imagenes, nada, mientras el metodo load si lo hace, se dispara hasta que termina de cagarga todo.

//cargando contenido
document.addEventListener("DOMContentLoaded", (e) => {
  console.log("********** Evento DOMContentLoaded **********");
  console.log(window.screenX);
  console.log(window.screenY);
  console.log(e);
}); */





//78. BOM: Métodos
/* console.log(
  "******************************* 78. BOM: Métodos ********************************"
);
window.alert("Alerta");
window.confirm("Confirmación");
window.prompt("Aviso");

const $btnAbrir = document.getElementById("abrir-ventana"),
  $btnCerrar = document.getElementById("cerrar-ventana"),
  $btnImprimir = document.getElementById("imprimir-ventana");

let ventana;

//Abrir ventana
$btnAbrir.addEventListener("click",(e) => {ventana = window.open("https://jonmircha.com")}
);

//Cerrar Ventana
$btnCerrar.addEventListener("click", (e) => {
  //window.close();
  ventana.close();
});

//Imprimir el documento(document)
$btnImprimir.addEventListener("click", (e) => window.print()); */






//79. BOM: Objetos: URL, Historial y Navegador 
/* console.log(
  "******************************* 79. BOM: Objetos: URL, Historial y Navegador  ********************************"
);

console.log("********** Objeto URL (location) **********");
console.log(location);
console.log(location.origin);
console.log(location.protocol);
console.log(location.host);
console.log(location.hostname);
console.log(location.port);
console.log(location.href);
console.log(location.hash);
console.log(location.search);
console.log(location.pathname);
//location.reload();

console.log("********** Objeto Historial (history) **********");
console.log(history);
console.log(history.length);
//history.forward(1); //Pagina adelante
//history.go(-3); //A que pagina ir
//history.back(2); //Pagina atras

console.log("********** Objeto Navegador (navigator) **********");
console.log(navigator);
console.log(navigator.connection);
console.log(navigator.geolocation);
console.log(navigator.mediaDevices);
console.log(navigator.mimeTypes);
console.log(navigator.onLine);
console.log(navigator.serviceWorker);
console.log(navigator.storage);
console.log(navigator.usb);
console.log(navigator.userAgent); */