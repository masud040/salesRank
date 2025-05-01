"use client";
import { useState } from "react";
import "swiper/css/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import TestimonialCard from "./TestimonialCard";
export default function TestimonialCotainer() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="container py-10">
      <Swiper
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        slidesPerView={1}
        loop={false}
      >
        <SwiperSlide>
          <TestimonialCard clientName="Masud Rana" activeIndex={activeIndex} />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialCard clientName="Sagor Islam" activeIndex={activeIndex} />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialCard clientName="Fariha" activeIndex={activeIndex} />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialCard clientName="John Doe" activeIndex={activeIndex} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
