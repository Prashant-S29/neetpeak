import { ChevronRight } from "lucide-react";
import React from "react";
import { Button } from "~/components/ui/button";
import { BooksIcon } from "~/public/icons";

export const Hero: React.FC = () => {
  return (
    <div className="py-[50px] bg-[#F3F5FB] w-full flex flex-col gap-8 justify-center items-center">
      <div className="p-1 pr-4 rounded-full   border cursor-pointer border-brand flex gap-2 items-center leading-none mx-auto w-fit">
        <p className=" font-medium  text-white px-5 py-3 rounded-full bg-brand text-xs">
          New
        </p>
        <p className="text-sm font-medium  text-brand ">
          One-on-One Mentorship
        </p>
        <ChevronRight className="text-brand w-5" />
      </div>

      <section>
        <h1 className="text-[40px] font-semibold text-center leading-tight">
          Your one stop NEET solution
        </h1>
        <h1 className="text-[40px] font-semibold text-center leading-tight">
          Join dropper batch 2026
        </h1>

        <p className="mt-2 text-center font-normal text-black/70 mx-auto max-w-[700px]">
          NeetPeak helps you effectively prepare for your NEET exams. We offer
          tons of helpful resources, latest courses and study materials to help
          you one shot NEET.
        </p>
      </section>
      <section className="flex gap-5">
        <Button variant="brand" size="lg" className="rounded-lg px-9! h-13 ">
          Explore Courses
          <BooksIcon />
        </Button>

        <Button variant="outline" size="lg" className="rounded-lg px-9! h-13 ">
          Download App
          <ChevronRight />
        </Button>
      </section>

      <div className="container mx-auto grid grid-cols-4 gap-2 mt-10 ">
        <div className="w-full h-[200px] bg-brand/20 rounded-xl" />
        <div className="w-full h-[200px] bg-brand/20 rounded-xl" />
        <div className="w-full h-[200px] bg-brand/20 rounded-xl" />
        <div className="w-full h-[200px] bg-brand/20 rounded-xl" />
      </div>
    </div>
  );
};
