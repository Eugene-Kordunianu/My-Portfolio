import "./home.css";
import { useScrollAnimation } from "../../components/useScrollAnimation/useScrollAnimation";
import HomeImg from "../../svg/hoome.svg";
import Back from "../../img/back.jpg";
import Context from "../../components/context/context";
import { useContext, useState } from "react";
import ReactTyped from "react-typed-component";


export default function Home() {
   const context = useContext(Context);

   useScrollAnimation();
   const scrollToSection = (elemRef, headerRef) => {

      //Прокручуємо  до елементта віднімаючи висоту шапки
      window.scrollTo({
         top: (elemRef.current.offsetTop - headerRef),
         behavior: "smooth"
      })
   };
   const [cursor, setCursor] = useState("cursor")
   console.log(cursor);
   const cursorClass = setTimeout(() => {
      setCursor("cursor-hiden");
      clearTimeout(cursorClass);
   }, 10000)
   return (
      <section ref={context.sectionRefs.homeRef} className="section__home home ">
         <img className="back" src={Back} alt="back" />
         <div className="home__container">
            <div className="home__box-info flex__center">
               <div className="home__info glass__effect pad-auto ">
                  <div className="name _anim-items">


                     <ReactTyped 
                        backDelay={1}
                        backSpeed={50}
                        cursorChar={"|"}
                        fadeOutDelay={100}

                        loopCount={1}//кількість виконань
                        showCursor={true}
                        smartBackspace
                        startDelay={400}
                        strings={[
                           `Kordunianu Eugene`,
                        ]}
                        typeSpeed={50}
                        loop
                     />

                  </div>
                  <p className="sub__name _anim-items">
                        {/* <div className="box__sub">
                           <span>I'm</span>Front-End developer
                        </div> */}
                        <ReactTyped 
                        backDelay={1}
                        backSpeed={0}
                        cursorChar={"|"}
                        fadeOutDelay={10}

                        loopCount={1}//кількість виконань
                        showCursor={true}
                        smartBackspace
                        startDelay={2000}
                        strings={[
                           `I'm Front-End developer`,
                        ]}
                        typeSpeed={50}
                        loop
                     />
                  </p>
                  <div className="box__btn ">
                     <button type="button" className="btn__contact btn small check _anim-items _anim-no-hiden"
                        onClick={() => { scrollToSection(context.sectionRefs.contactsRef, 62) }}
                     >Contact</button>
                     <button type="button" className="btn__resume btn small _anim-items _anim-no-hiden">Resume</button>
                  </div>
               </div>
               <div className="home__foto flex__center"><img src={HomeImg} className="_anim-items _anim-no-hiden" alt="bear" /></div>
            </div>
         </div>

      </section>
   )
};