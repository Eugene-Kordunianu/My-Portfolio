import {  useContext } from 'react';
import Context  from '../../components/context/context';
import SkillBack from "../../svg/Innovation-amico.svg"

import GulpIcon from "../../svg/gulp_icon.svg";
import Bootstrap from "../../svg/bootstrap_icon.svg";
import Html5 from "../../svg/html5_icon.svg";
import Css3 from "../../svg/css3_icon.svg";
import Js from "../../svg/js_icon.svg";
import ReactIcon from "../../svg/react_icon.svg";
import Webpack from "../../svg/webpack_icon.svg";
import Photoshop from "../../svg/photoshop_icon.svg";
import Jquery from "../../svg/jquery_icon.svg";
import Figma from "../../svg/figma_icon.svg";
import GitLab from "../../svg/gitlab2_icon.svg";
import GitHub from "../../svg/github_icon.svg";
import Sass from "../../svg/sass_icon.svg";
import VcCode from "../../svg/VcCode.svg";
import Swiper from "../../svg/swiper.svg";
import Netlify from "../../svg/netlify.svg";
import Firebase from "../../svg/firebase.svg";

import "./skills.css";

import { useScrollAnimation } from "../../components/useScrollAnimation/useScrollAnimation";

export default function Skills() {
   const context = useContext(Context);

   //? Використовуємо функцію яка чекає позицію анімованих елементів
   useScrollAnimation();

   return (
      <section ref={context.sectionRefs.skillsRef} className="section__skills skills">
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
            <div className="skill__icons glass__effect pad-auto _anim-items">
               <img src={Html5} alt="Html5"/>
               <img src={Css3} alt="Css3"/>
               <img src={Sass} alt="Sass"/>
               <img src={Js} alt="Js"/>
               <img src={ReactIcon} alt="ReactIcon"/>
               <img src={Webpack} alt="Webpack"/>
               <img src={GulpIcon} alt="GulpIcon"/>
               <img src={Jquery} alt="Jquery"/>
               <img src={Bootstrap} alt="Bootstrap"/>
               <img src={Photoshop} alt="Photoshop"/>
               <img src={Figma} alt="Figma"/>
               <img src={GitLab} alt="GitLab"/>
               <img src={GitHub} alt="GitHub"/>
               <img src={VcCode} alt="VcCode"/>
               <img src={Swiper} alt="Swiper"/>
               <img src={Netlify} alt="Netlify"/>
               <img src={Firebase} alt="Firebase"/>
            </div>
         </div>
      </section>
   )
}

