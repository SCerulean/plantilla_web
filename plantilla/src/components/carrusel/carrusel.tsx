"use client";
// Carrusel.tsx
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import React from "react";
import styles from "./carrusel.module.css"

export interface CardDataList {
    children: React.ReactNode;
}


const Carrusel = ({children}: CardDataList) => {

    const slides = React.Children.map(children,(child,index) => (
        <SwiperSlide key={index}>{child}</SwiperSlide>
        ))


  return (
    <div className="">
    <Swiper
      modules={[Autoplay]}
      loop={true}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      spaceBetween={20}
      slidesPerView={2}
      className={styles["swiper"]}>
        {slides}
    </Swiper>
    </div>
  );
};

export default Carrusel;
