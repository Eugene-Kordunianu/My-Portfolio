import "./header.css";

// import Logo from "../../svg/logo.svg";
import Logo from "../../svg/plum.svg";
import Logo2 from "../../svg/bear.svg";

export default function Header() {
//? додаваня класу ектів бургеру і header__nav
   function togleBurgerActive() {
      const burger =document.querySelector(".menu__icon");
      const nav =document.querySelector(".header__nav");
      const body =document.querySelector("body");
      
      burger.classList.toggle("_active");
      nav.classList.toggle("_active");
      body.classList.toggle("_lock");
      
      console.log(body);
   }

   
   return (
      <header className="header ">
         <div className="header__container">
            <div className="box__logo">
               <span className="plum">Pl  <img src={Logo} alt="logo" /> m</span>
               <img className="bear" src={Logo2} alt="logo2" />
            </div>
            <nav className="header__nav nav">
               <ul className="nav__items">
                  <li className="nav__item"><a href="" className="nav__link">Home</a></li>
                  <li className="nav__item"><a href="" className="nav__link">About</a></li>
                  <li className="nav__item"><a href="" className="nav__link">Skills</a></li>
                  <li className="nav__item"><a href="" className="nav__link">Services</a></li>
                  <li className="nav__item"><a href="" className="nav__link">Portfolio</a></li>
                  <li className="nav__item"><a href="" className="nav__link">Blog</a></li>
                  <li className="nav__item"><a href="" className="nav__link">Contacts</a></li>
               </ul>
            </nav>
            <div className="menu__icon"
            onClick={togleBurgerActive}
            >
               <span></span>
            </div>
         </div>
      </header>
   )
}