import Link from "next/link";
import type React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand w-full py-[50px]  text-white">
      <div className="container w-full flex justify-between mx-auto">
        <section>
          <h1 className=" font-semibold text-2xl">NeetPeak</h1>
          <p className="text-base    leading-tight">
            Join Our Community: Connect with like-minded individuals and grow
            <br />
            together.
          </p>
        </section>

        <div className="flex gap-[50px]">
          <section>
            <h4 className="text-sm font-medium ">NeetPeak's</h4>
            <ul className="flex flex-col text-sm gap-3 mt-5 ">
              <li>
                <Link href="#">Privacy Policy</Link>
              </li>
              <li>
                <Link href="#">Terms of service</Link>
              </li>
              <li>
                <Link href="#">About Us</Link>
              </li>
              <li>
                <Link href="#">Contact Us</Link>
              </li>
            </ul>
          </section>

          <section>
            <h4 className="text-sm font-medium ">Follow us on</h4>
            <div className=" flex gap-3 mt-5">
              <div className="bg-gray-800 size-8 rounded-md" />
              <div className="bg-gray-800 size-8 rounded-md" />
              <div className="bg-gray-800 size-8 rounded-md" />
            </div>
          </section>
        </div>
      </div>

      <div className="w-full h-[1px] bg-white/20 my-8" />

      <p className="text-center text-sm text-white/70">
        All Rights are Reserved. &copy; 2025 NeetPeak
      </p>
    </footer>
  );
};
