import "./services.modules.css";

import Web from "../../../img/worldweb.png";
import Mobail from "../../../img/mobile.png";
import Design from "../../../img/design.png";
export default function Services() {

   return (
      <section className="section__services services">
         <div className="services__container">
            <div className="services__content-box content-services">
               <h2 className="content__title">Services</h2>
               <div className="content__cards">
                  <div className="content__card card glass__effect">
                     <img src={Web} alt="" />
                     <div className="card__title">Application Web</div>
                     <div className="card__subtitle">I develop interactive, robust, dynamic and responsive websites</div>
                  </div>
                  <div className="content__card card glass__effect">
                     <img src={Mobail} alt="" />
                     <div className="card__title">Application Mobile</div>
                     <div className="card__subtitle">I develop cross-platform mobile applications.</div>
                  </div>
                  <div className="content__card card glass__effect">
                     <img src={Design} alt="" />
                     <div className="card__title">Material Editing</div>
                     <div className="card__subtitle">I will edit your content as needed and optimize it.</div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}