import "./skills.css";

import SkillBack from "../../../svg/Innovation-amico.svg"

import GulpIcon from "../../../svg/gulp_icon.svg";
import Bootstrap from "../../../svg/bootstrap_icon.svg";
import Html5 from "../../../svg/html5_icon.svg";
import Css3 from "../../../svg/css3_icon.svg";
import Js from "../../../svg/js_icon.svg";
import ReactIcon from "../../../svg/react_icon.svg";
import Webpack from "../../../svg/webpack_icon.svg";
import Photoshop from "../../../svg/photoshop_icon.svg";
import Jquery from "../../../svg/jquery_icon.svg";
import Figma from "../../../svg/figma_icon.svg";
import GitLab from "../../../svg/gitlab2_icon.svg";
import GitHub from "../../../svg/github_icon.svg";
import Sass from "../../../svg/sass_icon.svg";
import VcCode from "../../../svg/VcCode.svg";
import Swiper from "../../../svg/swiper.svg";

import { useScrollAnimation } from "../../useScrollAnimation/useScrollAnimation";
export default function Skills() {
   //? Використовуємо функцію яка чекає позицію анімованих елементів
   useScrollAnimation();
   return (
      <section className="section__skills skills">
         <div className="skills__container">
            <div className="skills__content-box" >
               <div className="skills__content content  glass__effect pad-auto">
                  <h2 className="skills__title">Skills</h2>

                  <div className="content__box">
                     <div className="content__details">
                        <span>HTML</span>
                        <span className="procent">90%</span>
                     </div>
                     <div className="content__bar ">
                        <span className="bar _anim-items"></span>
                     </div>
                  </div>
                  <div className="content__box">
                     <div className="content__details">
                        <span>css</span>
                        <span className="procent">80%</span>
                     </div>
                     <div className="content__bar ">
                        <span className="bar  _anim-items"></span>
                     </div>
                  </div>
                  <div className="content__box">
                     <div className="content__details">
                        <span>js</span>
                        <span className="procent">70%</span>
                     </div>
                     <div className="content__bar ">
                        <span className="bar  _anim-items"></span>
                     </div>
                  </div>
                  <div className="content__box">
                     <div className="content__details">
                        <span>react</span>
                        <span className="procent">60%</span>
                     </div>
                     <div className="content__bar ">
                        <span className="bar  _anim-items"></span>
                     </div>
                  </div>
                  <div className="content__box">
                     <div className="content__details">
                        <span>photoshop</span>
                        <span className="procent">80%</span>
                     </div>
                     <div className="content__bar ">
                        <span className="bar  _anim-items"></span>
                     </div>
                  </div>
               </div>
               <img src={SkillBack} alt="" />
            </div>
            <div className="skill__icons glass__effect pad-auto">
               <img src={Html5} alt="" />
               <img src={Css3} alt="" />
               <img src={Sass} alt="" />
               <img src={Js} alt="" />
               <img src={ReactIcon} alt="" />
               <img src={Webpack} alt="" />
               <img src={GulpIcon} alt="" />
               <img src={Jquery} alt="" />
               <img src={Bootstrap} alt="" />
               <img src={Photoshop} alt="" />
               <img src={Figma} alt="" />
               <img src={GitLab} alt="" />
               <img src={GitHub} alt="" />
               <img src={VcCode} alt="" />
               <img src={Swiper} alt="" />
            </div>
         </div>
      </section>
   )
}