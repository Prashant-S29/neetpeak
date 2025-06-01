import type React from "react";

export const KeyFeature: React.FC = () => {
  return (
    <div className="">
      <div className="flex justify-between ">
        <section>
          <h1 className="text-xl font-semibold">Key Features</h1>
          <p className="text-black/70 leading-tight max-w-[700px] ">
            Find the best courses available on the platform. Stay updated with
            the latest topics and never miss out on any opportunity.
          </p>
        </section>
      </div>

      <div className=" grid grid-cols-2 gap-5 mt-5">
        <div className="w-full h-[400px] bg-gray-200 rounded-xl" />

        <div className="grid grid-cols-2 gap-5">
          <div className="w-full h-full bg-gray-200 rounded-xl" />
          <div className="w-full h-full bg-gray-200 rounded-xl" />
          <div className="w-full h-full bg-gray-200 rounded-xl" />
          <div className="w-full h-full bg-gray-200 rounded-xl" />
        </div>
      </div>
    </div>
  );
};
