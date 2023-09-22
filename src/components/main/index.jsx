import "./main.css";
import Home from "../section/home/index";
import About from "../section/about/index";
import Skills from "../section/skills/index";
import Services from "../section/services/index";
import Portfolio from "../section/portfolio/index";

export default function Main() {
   return (
      <main className="main">
         <Home/>
         <About/>
         <Skills/>
         <Services/>
         < Portfolio/>
      </main>
   )
}