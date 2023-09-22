import "./about.css";

import Me from "../../../img/me.png";

export default function About() {
   return (
      <section className="section__about  flex__center">
         <div className="about__container about">
            <div className="about__content content__about ">
               <div className="content__about-foto-box flex__center"><img src={Me} alt="me" /></div>
               <div className="content__about-info-box info glass__effect pad-auto">
                  <div className="info__title">about me</div>
                  <div className="info__description">I am Kordunianu Eugene Front-End developer with 2 years of experience. My passion for web development began in 2021 and from then on, I did everything I could to break into this path, while having fun on the various projects developed. My experience acquired over the course of the projects allows me to better understand the expectations of a client and to respond precisely to the need requested according to the field of activity.</div>
                  <button type="button" className="btn small check">RESUME</button>
               </div>
            </div>
         </div>
      </section>
   )
}