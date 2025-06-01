"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type React from "react";
import { Button } from "~/components/ui/button";

export const Header: React.FC = () => {
  const path = usePathname();
  return (
    <>
      <div className="bg-brand w-full py-4 flex justify-center">
        <div className="container w-full flex justify-between items-center">
          <h1 className="text-white font-medium text-base">
            One on One mentorship are now live
          </h1>

          <Button variant="ghost" size="default" className="border text-white ">
            Enroll Now
          </Button>
        </div>
      </div>
      <header className="w-full flex justify-center py-4 border-b">
        <div className="container w-full flex justify-between relative items-center">
          <h1 className="text-lg font-semibold">NeetPeak</h1>

          <nav className="flex gap-9 items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
            <Link
              href="/"
              className={`font-medium ${path === "/" && "underline underline-offset-4"}`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`font-medium ${path === "/about" && "underline underline-offset-4"}`}
            >
              About
            </Link>
            <Link
              href="/mentorship"
              className={`font-medium ${path === "/mentorship" && "underline underline-offset-4"}`}
            >
              Mentorship
            </Link>
            <Link
              href="/contact"
              className={`font-medium ${path === "/contact" && "underline underline-offset-4"}`}
            >
              Contact Us
            </Link>
          </nav>

          <section className="flex gap-3">
            <Button variant="brand" size="lg" className="font-semibold">
              Login
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="text-brand border-brand hover:text-brand"
            >
              Join Free
            </Button>
          </section>
        </div>
      </header>
    </>
  );
};
