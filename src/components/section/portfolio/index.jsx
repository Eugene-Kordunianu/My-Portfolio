
import React, { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

//import foto slide
import Space from "../../../img/space.png";
import ShopHome from "../../../img/shop-home.png";
import ShopCatalog from "../../../img/shop-catalog.png";
import ShopProduct from "../../../img/shop-product.png";
import ShopCart from "../../../img/shop-cart.png";
import CinemaHall from "../../../img/cinema-holl.png";
import CinemaTicket from "../../../img/cinema-ticket.png";
import ShopingList from "../../../img/shoping-list.png";
//import foto stats
import Code from "../../../svg/code_icon.svg";
import Briefcase from "../../../svg/briefcase_icon.svg";
import Calendar from "../../../svg/calendar_icon.svg";
import Clients from "../../../svg/client_icon.svg";

import "./portfolio.css";

// import required modules
import { Autoplay, Pagination, Navigation, EffectCoverflow, } from 'swiper/modules';

export default function Portfolio() {
   const progressCircle = useRef(null);
   const progressContent = useRef(null);
   const onAutoplayTimeLeft = (s, time, progress) => {
      progressCircle.current.style.setProperty('--progress', 1 - progress);
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
   };
   return (
      <section className="swipe__container swiper-mine">
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
            <SwiperSlide className='foto'><img src={Space} alt="" /></SwiperSlide>
            <SwiperSlide className='foto'><img src={ShopHome} alt="" /></SwiperSlide>
            <SwiperSlide className='foto'><img src={ShopCatalog} alt="" /></SwiperSlide>
            <SwiperSlide className='foto'><img src={ShopProduct} alt="" /></SwiperSlide>
            <SwiperSlide className='foto'><img src={ShopCart} alt="" /></SwiperSlide>
            <SwiperSlide className='foto'><img src={CinemaHall} alt="" /></SwiperSlide>
            <SwiperSlide className='foto'><img src={CinemaTicket} alt="" /></SwiperSlide>
            <SwiperSlide className='foto'><img src={ShopingList} alt="" /></SwiperSlide>

            <div className="autoplay-progress" slot="container-end">
               <svg viewBox="0 0 48 48" ref={progressCircle}>
                  <circle cx="24" cy="24" r="20"></circle>
               </svg>
               <span ref={progressContent}></span>
            </div>
         </Swiper>
         <div className="stats__container stats">
            <div className="stats__box ">
               <div className="stats__item item__stats glass__effect">
                  <div className="item__stats-value">2</div>
                  <div className="item__stats-title">years</div>
                  <img src={Calendar} alt="" />
               </div>
               <div className="stats__item item__stats glass__effect">
                  <div className="item__stats-value">14</div>
                  <div className="item__stats-title">projects</div>
                  <img src={Briefcase} alt="" />
               </div>
               <div className="stats__item item__stats glass__effect">
                  <div className="item__stats-value">8</div>
                  <div className="item__stats-title">clients</div>
                  <img src={Clients} alt="" />
               </div>
               <div className="stats__item item__stats glass__effect">
                  <div className="item__stats-value">2<span>GB</span></div>
                  <div className="item__stats-title">code</div>
                  <img src={Code} alt="" />
               </div>
            </div>
         </div>
      </section>
   )
}