import type React from "react";

export const TestTypes: React.FC = () => {
  return (
    <div className="flex flex-col gap-5 bg-[#F3F5FB] py-[50px]">
      <section className="flex justify-center flex-col items-center text-center">
        <div className="size-[80px] rounded-lg bg-brand/20" />

        <h1 className="text-xl font-semibold mt-5">
          Discover your path for medical success
        </h1>
        <p className="text-black/70 leading-tight max-w-[700px] ">
          Unlock a world of possibilities, from online test series to self paced
          courses. Build your logics and enhance your concepts with
          NeetPeak&apos;s diverse resources.
        </p>
      </section>
      <div className="grid grid-cols-4 gap-5 container mx-auto">
        <div className="w-full h-[200px] bg-brand/20 rounded-xl " />
        <div className="w-full h-[200px] bg-brand/20 rounded-xl " />
        <div className="w-full h-[200px] bg-brand/20 rounded-xl " />
        <div className="w-full h-[200px] bg-brand/20 rounded-xl " />
      </div>
    </div>
  );
};
