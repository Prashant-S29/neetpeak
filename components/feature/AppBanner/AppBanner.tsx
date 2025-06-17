import type React from "react";

export const AppBanner: React.FC = () => {
  return (
    <div className="py-[100px]  bg-[#F3F5FB]">
      <div className="w-full h-[400px] bg-brand container mx-auto rounded-xl flex justify-center items-center">
        <p className="text-white">App Banner Here</p>
      </div>
    </div>
  );
};
