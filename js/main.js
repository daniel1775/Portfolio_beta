let prevScrollPos = window.pageYOffset;
let containerMenu = document.getElementById("nav");

let animatedLeft = document.querySelectorAll(".animation__left");
let animatedRight = document.querySelectorAll(".animation__right");

function showScroll(){
   let scrollTop =  document.documentElement.scrollTop;
   for(let i=0 ; i<animatedLeft.length ; i++){
      let highAnimated = animatedLeft[i].offsetTop;
      if(highAnimated-500 < scrollTop){
         animatedLeft[i].style.opacity = 1;
         animatedLeft[i].classList.add("showLeft");
      }
   }
   for(let i=0 ; i<animatedRight.length ; i++){
      let highAnimated = animatedRight[i].offsetTop;
      if(highAnimated-500 < scrollTop){
         animatedRight[i].style.opacity = 1;
         animatedRight[i].classList.add("showRight");
      }
   }
}

window.addEventListener('scroll', showScroll);

/* // Esconder barra de menu
window.onscroll = () => {
   let currentScrollPos = window.pageYOffset;

   // Mostrar y ocultar menu
   if (prevScrollPos > currentScrollPos) {
       containerMenu.style.top = "0";
       containerMenu.style.transition = "0.5s";
   } else {
       containerMenu.style.top = "-150px";
       containerMenu.style.transition = "0.5s";
   }

   prevScrollPos = currentScrollPos;

   // Mostrar y ocultar scroll Estilos
   let arriba = window.pageYOffset;
   if (arriba <= 600) {
       containerMenu.style.borderBottom = "none";

   } else {
       containerMenu.style.borderBottom = "solid 2px #000000";
   }
} */