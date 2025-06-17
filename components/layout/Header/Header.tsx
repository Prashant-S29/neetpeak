"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type React from "react";
import { Button } from "~/components/ui/button";

export const Header: React.FC = () => {
  const path = usePathname();
  return (
    <>
      {/* <div className="bg-brand w-full py-4 flex justify-center">
        <div className="container w-full flex justify-between items-center">
          <h1 className="text-white font-medium text-base">
            One on One mentorship are now live
          </h1>

          <Button variant="ghost" size="default" className="border text-white ">
            Enroll Now
          </Button>
        </div>
      </div> */}
      <header className="w-full bg-[#F3F5FB]   top-0 border-b border-brand/20 z-50 flex justify-center py-4 ">
        <div className="container w-full flex justify-between relative items-center">
          <h1 className="text-lg font-semibold">NeetPeak</h1>

          <nav className="flex gap-9 items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
            <Link
              href="/"
              className={`text-sm hover:underline underline-offset-4 ${path === "/" && "underline"}`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`text-sm hover:underline underline-offset-4 ${path === "/about" && "underline"}`}
            >
              About
            </Link>
            <Link
              href="/mentorship"
              className={`text-sm hover:underline underline-offset-4 ${path === "/mentorship" && "underline"}`}
            >
              Mentorship
            </Link>
            <Link
              href="/contact"
              className={`text-sm hover:underline underline-offset-4 ${path === "/contact" && "underline"}`}
            >
              Contact Us
            </Link>
          </nav>

          <Button variant="brand" size="lg" className="font-semibold">
            Login | Signup
          </Button>
        </div>
      </header>
    </>
  );
};
