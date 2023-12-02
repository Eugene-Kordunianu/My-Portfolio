import {  useContext } from 'react';
import Context  from '../../components/context/context';

import Web from "../../img/worldweb.png";
import Mobail from "../../img/mobile.png";
import Design from "../../img/design.png";

import { useScrollAnimation } from "../../components/useScrollAnimation/useScrollAnimation";

import styles  from "./services.module.css";

export default function Services() {
   const context = useContext(Context);
   
   //? Використовуємо функцію яка чекає позицію анімованих елементів
   useScrollAnimation();
   return (
      <section ref={context.sectionRefs.servicesRef} className={`${styles.section__services} services`}>
         <div className="services__container">
            <div className={`${styles.services__contentBox} ${styles.content__services} `}>
               <h2 className={styles.content__title}>Services</h2>
               <div className={styles.content__cards}>
                  <div id={styles.card__style} className={`${styles.content__card} ${styles.card} _anim-items`}>
                     <img src={Web} alt="" />
                     <div className={styles.card__title}>Application Web</div>
                     <div className={styles.card__subtitle}>I develop interactive, robust, dynamic and responsive websites</div>
                  </div>
                  <div className={`${styles.content__card} ${styles.card} `}>
                     <img src={Mobail} alt="" />
                     <div className={styles.card__title}>Application Mobile</div>
                     <div className={styles.card__subtitle}>I develop cross-platform mobile applications.</div>
                  </div>
                  <div className={`${styles.content__card} ${styles.card} `}>
                     <img src={Design} alt="" />
                     <div className={styles.card__title}>Material Editing</div>
                     <div className={styles.card__subtitle}>I will edit your content as needed and optimize it.</div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}