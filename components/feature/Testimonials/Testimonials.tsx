"use client";

import type React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

export const Testimonials: React.FC = () => {
  return (
    <div className="bg-[#F3F5FB] py-[100px]">
      <div className="container mx-auto">
        <div className="flex justify-between ">
          <section>
            <h1 className="text-[40px] leading-none font-semibold  text-black">
              What our customers say
            </h1>
          </section>
          <p className="text-black/80 mt-2 leading-tight max-w-[700px] ">
            Don&apos;t just take our word for it. We believe in our services and
            we have proven them time and time again.
          </p>
        </div>

        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          className=" mt-5"
          loop
          modules={[Autoplay]}
          autoplay={{
            delay: 5500,
            disableOnInteraction: false,
          }}
        >
          {Array.from({ length: 10 }).map((_, i) => (
            <SwiperSlide key={i}>
              <div className="flex flex-col gap-5">
                <div className="w-full h-[250px] bg-brand/20 rounded-xl" />
                <div className="flex gap-2 px-2 items-center">
                  <div className="size-[50px] bg-brand/20 rounded-full" />
                  <div>
                    <p className="text-base leading-tight font-medium">Name</p>
                    <p className="text-black/70 leading-tight">
                      Designation, Institute
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
