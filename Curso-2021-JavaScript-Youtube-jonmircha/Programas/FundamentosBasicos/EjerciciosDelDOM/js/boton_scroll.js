const d = document,
  w = window;
export default function scrollTopBoton(btn) {
  const $scrollBtn = document.querySelector(btn);

  w.addEventListener("scroll", (e) =>{
    let scrollTop = w.pageYOffset || d.documentElement.scrollTop;

    if(scrollTop > 700){
      $scrollBtn.classList.remove("hidden");
    }else{
      $scrollBtn.classList.add("hidden");
    }
    //console.log(w.pageYOffset, d.documentElement.scrollTop);
  })

  d.addEventListener("click", (e) =>{
    if(e.target.matches(btn)){
      w.scrollTo({
        behavior: "smooth",
        top: 0,
        //left: 0,
      });
    }
  })

}

/* 
ejercicio DOM 4
-- Cuando la barra scroll vertical llegue a (x)numero de px, 
	aparezca un boton redondo con una flecha dentro,
	cuando subamos y rebazemos los (x)numero de px desaparezca 
	y cuando pulsemos el boton nos lleve al inicio del documento.  */