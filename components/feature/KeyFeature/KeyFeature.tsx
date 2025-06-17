import type React from "react";

export const KeyFeature: React.FC = () => {
  return (
    <div className="bg-brand py-[100px]">
      <div className="container mx-auto">
        <div className="flex justify-between ">
          <section>
            <h1 className="text-[40px] leading-none font-semibold  text-white">
              Our methodology provides
            </h1>
            <h1 className="text-[40px] leading-none mt-1 font-semibold  text-white">
              proven results
            </h1>
          </section>
          <p className="text-white/80 mt-2 leading-tight max-w-[700px] ">
            Find the best courses available on the platform. Stay updated with
            the latest topics and never miss out on any opportunity.
          </p>
        </div>

        <div className=" grid grid-cols-2 gap-5 mt-5">
          <div className="w-full h-[400px] bg-white/20 rounded-xl" />

          <div className="grid grid-cols-2 gap-5">
            <div className="w-full h-full bg-white/20 rounded-xl" />
            <div className="w-full h-full bg-white/20 rounded-xl" />
            <div className="w-full h-full bg-white/20 rounded-xl" />
            <div className="w-full h-full bg-white/20 rounded-xl" />
          </div>
        </div>
      </div>
    </div>
  );
};
