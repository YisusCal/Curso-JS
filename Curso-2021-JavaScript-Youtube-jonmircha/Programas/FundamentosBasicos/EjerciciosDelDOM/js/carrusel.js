const d = document;

export default function slider(){
  const $nextBtn = d.querySelector(".slider-btn .next"),
    $prevBtn = d.querySelector(".slider-btn .prev"),
    $slides = d.querySelectorAll(".slider-slide");

    let i=0;

  d.addEventListener("click", e =>{
    //Btn para ver diapositiva siguiente
    if(e.target === $prevBtn){
      e.preventDefault();
      $slides[i].classList.remove("active");
      i--;

      if(i < 0){
        i= $slides.length - 1;
      }

      $slides[i].classList.add("active");
    }

    //Btn para ver diapositiva siguiente
    if(e.target === $nextBtn){
      e.preventDefault();
      $slides[i].classList.remove("active");
      i++;

      if(i >= $slides.length){
        i=0;
      }

      $slides[i].classList.add("active");
    }
  });

  
}


/* ejercicio 15
-Responsive Slider
-- Un slider Resposncivo 
-- carrucel con varias imagenes
 */