const d = document;

export default function scrollSpy(){
  const $sections = d.querySelectorAll("section[data-scroll-spy]");

  const cb = (entries) =>{
    //console.log("entries:", entries);

    entries.forEach(entry => {
      //console.log("entry", entry);
      const id=entry.target.getAttribute("id");
      if(entry.isIntersecting){
        d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.add("active");
      }else{
        d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.remove("active");
      }
    })
    
  }

  const observer = new IntersectionObserver(cb, {
    //root
    //rootMargin: "-250px"
    threshold: [0.5, 0.75] //Limite: Significa que cambien cuando el elemnto tenga una visibilidad de entre 50% y el 75%
  })
  //console.log("observador", observer);
  $sections.forEach(el => observer.observe(el));
}



/* ejercicio 16
- Scroll spy
-- componente que se puede encontrar en boostrap
-- interseccion observer api del navegador
-- hacer que el menu se quede en el lado derecho de la 
	pantalla fija y conforme se valla scrolleando
	y quede en el foco cada tema este valla cambiando.

 */