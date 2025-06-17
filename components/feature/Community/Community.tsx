import type React from "react";
import { Button } from "~/components/ui/button";
import { CommunityIcon, WhatsAppIcon } from "~/public/icons";

export const Community: React.FC = () => {
  return (
    <div className="flex bg-[#F3F5FB] w-full justify-center items-center flex-col py-[50px]">
      <div className="flex items-center gap-4 justify-center ">
        <div className="size-[40px] rounded-full -ml-9 bg-white border border-brand" />
        <div className="size-[40px] rounded-full -ml-9  bg-white border border-brand" />
        <div className="size-[40px] rounded-full -ml-9  bg-white border border-brand" />
        <div className="size-[40px] rounded-full -ml-9  bg-white border border-brand" />
        <div className="size-[40px] rounded-full -ml-9  bg-white border border-brand" />
        <p>250+ Active Members</p>
      </div>
      <h1 className="text-[40px] font-semibold  mt-2 text-center leading-tight">
        Join NeetPeak Community
      </h1>

      <Button variant="brand" size="lg" className="rounded-lg px-9! h-13 mt-5">
        Join WhatsApp Channel
        <WhatsAppIcon />
      </Button>
    </div>
  );
};
