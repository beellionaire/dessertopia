// components/HeroSection.tsx
"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

export default function HeroSection() {
  return (
    <div className="p-6 w-full mt-24">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        className="rounded-lg overflow-hidden"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="relative w-full h-[300px] bg-gray-100">
            <Image
              src="/image/banner/2.png"
              alt="Promo Banner 1"
              objectFit="cover"
              layout="fill"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-[300px] bg-gray-100">
            <Image
              src="/image/banner/1.png"
              alt="Promo Banner 1"
              objectFit="cover"
              layout="fill"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
