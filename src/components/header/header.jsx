import "./header.css";

// import Logo from "../../svg/logo.svg";
import Logo from "../../svg/plum.svg";
import Logo2 from "../../svg/bear.svg";
// import Datagoto from ".. taGoto";
import { Link } from "react-router-dom";
import { useContext, useState, useRef } from "react"
import Context from "../context/context";



export default function Header() {
   //? додаваня класу ектів бургеру і header__nav
   const [menuActive, setMenuActive] = useState(false);
   const context = useContext(Context);
   // console.log(context.sectionRefs.skillsRef);
   const headerRef = useRef(null);
   // console.log(headerRef);
   function togleBurgerActive() {
      if (menuActive) {
         setMenuActive(false)
         context.setBodyLoc(false)
         // console.log("if true  " + menuActive);
      } else {
         setMenuActive(true);
         context.setBodyLoc(true)
         // console.log("if false  " + menuActive);
      }
   }
   const scrollToSection = (elemRef, headerRef) => {
      //Перевіряємо якщо меню бургер відкрите закриваємо його 
      if (menuActive) {
         setMenuActive(false)
         context.setBodyLoc(false)
      }
      //Прокручуємо  до елементта віднімаючи висоту шапки
      window.scrollTo({
         top: (elemRef.current.offsetTop - headerRef.current.offsetHeight),
         behavior: "smooth"
      })
   };
   //скорочення написання в навігації
   const contSecRef = context.sectionRefs;
   return (
      <header className="header " ref={headerRef}>
         <div className="header__container">
            <div className="box__logo" onClick={() => { scrollToSection(contSecRef.homeRef, headerRef) }}>
               <span className="plum">Pl  <img src={Logo} alt="logo" /> m</span>
               <img className="bear" src={Logo2} alt="logo2" />
            </div>
            <nav className={menuActive ? 'header__nav nav _active' : 'header__nav nav'}>
               <ul className="nav__items">
                  <li className="nav__item"><Link to="#" className="nav__link" onClick={() => { scrollToSection(contSecRef.homeRef, headerRef) }}>Home</Link></li>
                  <li className="nav__item"><Link to="#" className="nav__link" onClick={() => { scrollToSection(contSecRef.aboutRef, headerRef) }}>About</Link></li>
                  <li className="nav__item"><Link to="#" className="nav__link" onClick={() => { scrollToSection(contSecRef.skillsRef, headerRef) }}>Skills</Link></li>
                  <li className="nav__item"><Link to="#" className="nav__link" onClick={() => { scrollToSection(contSecRef.servicesRef, headerRef) }}>Services</Link></li>
                  <li className="nav__item"><Link to="#" className="nav__link" onClick={() => { scrollToSection(contSecRef.portfolioRef, headerRef) }}>Portfolio</Link></li>
                  <li className="nav__item"><Link to="#" className="nav__link" onClick={() => { scrollToSection(contSecRef.contactsRef, headerRef) }}>Contacts</Link></li>
               </ul>
            </nav>
            <div className={menuActive ? "menu__icon _active" : "menu__icon"}
               onClick={togleBurgerActive}
            >
               <span></span>
            </div>
         </div>

      </header>
   )
}