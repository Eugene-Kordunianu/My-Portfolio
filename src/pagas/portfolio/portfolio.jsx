import { useContext, useRef } from 'react';
import Context from '../../components/context/context';
import { Link } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

//import foto slide
import Space from "../../img/space.png";
import ShopHome from "../../img/shop-home.png";
import ShopCatalog from "../../img/shop-catalog.png";
import ShopProduct from "../../img/shop-product.png";
import ShopCart from "../../img/shop-cart.png";
import CinemaHall from "../../img/cinema-holl.png";
import CinemaTicket from "../../img/cinema-ticket.png";
import ShopingList from "../../img/shoping-list.png";
//import foto stats
import Code from "../../svg/code_icon.svg";
import Briefcase from "../../svg/briefcase_icon.svg";
import Calendar from "../../svg/calendar_icon.svg";
import Clients from "../../svg/client_icon.svg";

import { useScrollAnimation } from "../../components/useScrollAnimation/useScrollAnimation";

import "./portfolio.css";

// import required modules
import { Autoplay, Pagination, Navigation, EffectCoverflow, } from 'swiper/modules';

export default function Portfolio() {
   const context = useContext(Context);
   //? Використовуємо функцію яка чекає позицію анімованих елементів
   useScrollAnimation();
   const progressCircle = useRef(null);
   const progressContent = useRef(null);
   const onAutoplayTimeLeft = (s, time, progress) => {
      progressCircle.current.style.setProperty('--progress', 1 - progress);
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
   };
   return (
      <section ref={context.sectionRefs.portfolioRef} className="swipe swiper-mine" >
         <h2 className="swiper-mine__title">Portfolio</h2>
         <Swiper
            // spaceBetween={30}
            // centeredSlides={true}
            autoplay={{
               delay: 2500,
               disableOnInteraction: false,
            }}
            pagination={{
               clickable: true,
            }}
            onAutoplayTimeLeft={onAutoplayTimeLeft}
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
               rotate: 0,
               stretch: 1,
               depth: 300,
               modifier: 1,
               slideShadows: true,
            }}
            modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
            navigation={true}
            speed={800}
            className="mySwiper"
         >
            <SwiperSlide className='foto'>
               <Link to="https://space-app-191817.web.app/" target="_blank" rel="noopener noreferrer">
                  <img src={Space} alt="" />
               </Link>
            </SwiperSlide>
            <SwiperSlide className='foto'>
               <Link to="https://store-clothing-191817.web.app/" target="_blank" rel="noopener noreferrer">
                  <img src={ShopHome} alt="" />
               </Link>
            </SwiperSlide>
            <SwiperSlide className='foto'>
               <Link to="https://store-clothing-191817.web.app/catalog/index.html" target="_blank" rel="noopener noreferrer">
                  <img src={ShopCatalog} alt="" />
               </Link>
            </SwiperSlide>
            <SwiperSlide className='foto'>
               <Link to="https://store-clothing-191817.web.app/product/index.html" target="_blank" rel="noopener noreferrer">
                  <img src={ShopProduct} alt="" />
               </Link>
            </SwiperSlide>
            <SwiperSlide className='foto'>
               <Link to="https://store-clothing-191817.web.app/cart/index.html" target="_blank" rel="noopener noreferrer">
                  <img src={ShopCart} alt="" />
               </Link>
            </SwiperSlide>
            <SwiperSlide className='foto'>
               <Link to="https://cinema-app-a22b1.web.app/" target="_blank" rel="noopener noreferrer">
                  <img src={CinemaHall} alt="" />
               </Link>
            </SwiperSlide>
            <SwiperSlide className='foto'>
               <Link to="https://cinema-app-a22b1.web.app/" target="_blank" rel="noopener noreferrer">
                  <img src={CinemaTicket} alt="" />
               </Link>
            </SwiperSlide>
            <SwiperSlide className='foto'>
               <Link to="https://shoping-list-ke.netlify.app/" target="_blank" rel="noopener noreferrer">
                  <img src={ShopingList} alt="" />
               </Link>
            </SwiperSlide>

            <div className="autoplay-progress" slot="container-end">
               <svg viewBox="0 0 48 48" ref={progressCircle}>
                  <circle cx="24" cy="24" r="20"></circle>
               </svg>
               <span ref={progressContent}></span>
            </div>
         </Swiper>
         <div className="stats__container stats">
            <div className="stats__box _anim-items _anim-no-hiden">
               <div className="stats__item item__stats glass__effect">
                  <div className="item__stats-value">2</div>
                  <div className="item__stats-title">years</div>
                  <img src={Calendar} alt="Calendar" />
               </div>
               <div className="stats__item item__stats glass__effect">
                  <div className="item__stats-value">14</div>
                  <div className="item__stats-title">projects</div>
                  <img src={Briefcase} alt="Briefcase" />
               </div>
               <div className="stats__item item__stats glass__effect">
                  <div className="item__stats-value">8</div>
                  <div className="item__stats-title">clients</div>
                  <img src={Clients} alt="Clients" />
               </div>
               <div className="stats__item item__stats glass__effect">
                  <div className="item__stats-value">2<span>GB</span></div>
                  <div className="item__stats-title">code</div>
                  <img src={Code} alt="Code" />
               </div>
            </div>
         </div>
      </section>
   )
}