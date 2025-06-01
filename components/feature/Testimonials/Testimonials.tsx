"use client";

import type React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

export const Testimonials: React.FC = () => {
  return (
    <div className="">
      <div className="flex justify-between ">
        <section>
          <h1 className="text-xl font-semibold">What our customers say</h1>
          <p className="text-black/70 leading-tight max-w-[700px] ">
            Find the best courses available on the platform. Stay updated with
            the latest topics and never miss out on any opportunity.
          </p>
        </section>
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
              <div className="w-full h-[250px] bg-gray-200 rounded-xl" />
              <div className="flex gap-2 px-2 items-center">
                <div className="size-[50px] bg-gray-200 rounded-full" />
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
  );
};
