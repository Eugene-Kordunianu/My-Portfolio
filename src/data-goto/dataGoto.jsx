// import { useEffect } from 'react';

// const Datagoto = () => {
//    useEffect(() => {
//       const menuLinks = document.querySelectorAll('.nav__item[data-goto]');
//       console.log(menuLinks);
//       if (menuLinks.length > 0) {
//          menuLinks.forEach(menuLink => {
//             menuLink.addEventListener('click', onMenuClick);

//             return () => {
//                arrowLink.removeEventListener('click', onMenuClick);
//             };
//          });
//       }

//       function onMenuClick(e) {
//          const menuLink = e.target;
//          console.log(menuLink.dataset.goto);
//          if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
//             const gotoBlock = document.querySelector(menuLink.dataset.goto);
//             const gotoBlockValue = gotoBlock.getBoundingClientRect().top + window.scrollY;
//             console.log(gotoBlock);
//             console.log(gotoBlockValue);

//             window.scrollTo({
//                top: gotoBlockValue,
//                behavior: 'smooth',
//             });
//          }
//       }
//    }, []);

//    return null; // React компонент повинен повертати щось, але для цього прикладу ми не потребуємо жодного відображення.
// };

// export default Datagoto;