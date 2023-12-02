import "./main.css";
import Home from "../../pagas/home";
import About from "../../pagas/about";
import Skills from "../../pagas/skills";
import Services from "../../pagas/services";
import Portfolio from "../../pagas/portfolio";
import { useEffect  } from "react";


export default function Main() {
   

   useEffect(() => {
      const animOnScroll = () => { 
         // console.log(window.scrollY);
         // console.log(context.sectionRefs.aboutRef.offsetTop);
      }
      window.addEventListener("scroll", animOnScroll);
      // Очистка прослуховувача події після закінчення компонента
      let startAnim = setTimeout(() => {
         animOnScroll()//викликаємо одразу щоб спрацьовувала анімація
         clearTimeout(startAnim);
      }, 400)
      return () => {
         window.removeEventListener("scroll", animOnScroll);
      };
   }, [])

   return (
      <main className="main">
         <Home />
         <About />
         <Skills />
         <Services />
         <Portfolio />
      </main>
   )
}