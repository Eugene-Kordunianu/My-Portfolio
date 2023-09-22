import "./home.css";

import HomeImg from "../../../svg/hoome.svg";
import Back from "../../../img/back.jpg";
export default function Home() {
   return (
      <section className="section__home home ">
         <img className="back" src={Back} alt="back" />
         <div className="home__container">
            <div className="home__box-info flex__center">
               <div className="home__info glass__effect pad-auto">
                  <div className="name">Kordunianu Eugene</div>
                  <p className="sub__name"><span>I'm </span>Front-End developer</p>
                  <div className="box__btn">
                     <button type="button" className="btn__contact btn small check">Contact</button>
                     <button type="button" className="btn__resume btn small">Resume</button>
                  </div>
               </div>
               <div className="home__foto flex__center"><img src={HomeImg} alt="bear" /></div>
            </div>
         </div>
      </section>
   )
};