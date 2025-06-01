"use client";

import type React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

import { Button } from "~/components/ui/button";

export const TopCourses: React.FC = () => {
  return (
    <div>
      <div className="flex justify-between ">
        <section>
          <h1 className="text-xl font-semibold">Explore Top Courses</h1>
          <p className="text-black/70 leading-tight max-w-[700px] ">
            We provide wide range of courses to suit your needs. From beginner
            to advanced, we have something for everyone.
          </p>
        </section>
        <Button variant="brand" size="lg" className="font-semibold">
          View More
        </Button>
      </div>

      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        className="h-[300px] mt-5"
        loop
        modules={[Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {Array.from({ length: 10 }).map((_, i) => (
          <SwiperSlide key={i}>
            <div className="w-full h-[300px] bg-gray-200 rounded-xl flex flex-col justify-center items-center">
              <p>{i + 1}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
