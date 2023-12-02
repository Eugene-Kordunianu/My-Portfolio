import { useEffect } from "react";

//? sckill
function addWidthBar() {
   const [...checkWidth] = document.querySelectorAll(".procent");
   const [...bar] = document.querySelectorAll(".bar");
   let widthArr = [];
   checkWidth.forEach((e) => {
      widthArr.push(parseInt(e.innerText));
   })
   bar.forEach((e, index) => {
      // console.log(e.className);
      if (e.classList.contains("_active")) {
         e.style.width = widthArr[index] + "%";
      } else {
         e.style.width = "0%";
      }
   });
}
//? sckill

//? skrol
export function useScrollAnimation() {
   //? animate
   useEffect(() => {
      const animItems = document.querySelectorAll("._anim-items");
      const animOnScroll = () => {
         let isActiveChanged = false; // Додайте змінну для відстеження зміни статусу _active

         animItems.forEach((animItem) => {
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 10;
            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
               animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }
            if ((window.scrollY > animItemOffset - animItemPoint) && window.scrollY < (animItemOffset + animItemHeight)) {
               // animItem.classList.add("_active");
               if (!animItem.classList.contains("_active")) {
                  animItem.classList.add("_active");
                  isActiveChanged = true; // Встановіть isActiveChanged в true
               }
            } else {
               if (animItem.classList.contains("_active")) {
                  if (!animItem.classList.contains("_anim-no-hiden")) {

                     animItem.classList.remove("_active");
                     isActiveChanged = true; // Встановіть isActiveChanged в true
                  }
               }
            }
         });
         // Викликайте addWidthBar тільки тоді, коли статус _active змінився
         if (isActiveChanged) {
            addWidthBar();
         }
      };
      const offset = (el) => {
         const rect = el.getBoundingClientRect();
         const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
         const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
         return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
      };
      window.addEventListener("scroll", animOnScroll);
      // Очистка прослуховувача події після закінчення компонента
      let startAnim = setTimeout(() => {
         animOnScroll()//викликаємо одразу щоб спрацьовувала анімація
         clearTimeout(startAnim);
      }, 400)
      return () => {
         window.removeEventListener("scroll", animOnScroll);
      };
   }, []); // Порожній масив залежностей вказує, що ефект буде виконуватись тільки один раз при монтажі компонента
   //?

}
//? skrol