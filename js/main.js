let prevScrollPos = window.pageYOffset;
let containerMenu = document.getElementById('nav');

let animatedLeft = document.querySelectorAll('.animation__left');
let animatedRight = document.querySelectorAll('.animation__right');

let btn_menu = document.getElementById('btn-menu');
let menu = document.querySelector('.nav__list');
let mediaqueryList = window.matchMedia("(max-width: 450px)");
let items = document.querySelectorAll('.nav__list li a');
let body = document.body;

// make right and left displacement when scroll is reach
window.addEventListener('scroll', () => {
   let scrollTop = document.documentElement.scrollTop;
   for (let i = 0; i < animatedLeft.length; i++) {
      let highAnimated = animatedLeft[i].offsetTop;
      if (highAnimated - 550 < scrollTop) {
         animatedLeft[i].style.opacity = 1;
         animatedLeft[i].classList.add('showLeft');
      }
   }
   for (let i = 0; i < animatedRight.length; i++) {
      let highAnimated = animatedRight[i].offsetTop;
      if (highAnimated - 500 < scrollTop) {
         animatedRight[i].style.opacity = 1;
         animatedRight[i].classList.add('showRight');
      }
   }
});

// Movile menu hidden/show
btn_menu.addEventListener('change', () => {
   if (btn_menu.checked) {
      menu.style.transform = 'translateX(0%)';
      body.style.overflowY = 'hidden';
   } else {
      menu.style.transform = 'translateX(-100%)';
      body.style.overflowY = 'scroll';
   }
});

// keep item actived and show
items.forEach((element) => {
   element.addEventListener('click', (event) => {
      if (mediaqueryList.matches) {
         menu.style.transform = 'translateX(-100%)';
         btn_menu.click();
      }
      items.forEach((link) => {
         link.classList.remove('nav__active');
      });
      event.target.classList.add('nav__active');
   });
});

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
