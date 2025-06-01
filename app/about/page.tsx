import type React from "react";

const About: React.FC = () => {
  return (
    <div className="flex flex-col gap-[80px] container mx-auto w-full py-[50px]">
      <div className=" bg-gray-300 rounded-2xl h-[500px] w-full flex flex-col justify-center items-center">
        About Us
      </div>
      <div className="">
        <h1 className="text-xl font-semibold">Why Choose NeetPeak?</h1>
        <p className="max-w-[700px] text-black/70">
          NEET Peak offers a unique blend of features designed to maximize your
          learning potential and ensure success in the NEET exam
        </p>

        <div className="grid grid-cols-3 gap-5 mt-5">
          <div className="px-5 py-4 border rounded-lg">
            <div className="size-12 bg-gray-200 rounded-sm" />
            <h1 className="mt-5 font-semibold">lorem lorem</h1>
            <p className=" leading-snug text-black/70">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. At omnis
              officiis autem, consectetur facere delectus provident enim
              aspernatur maxime dolores?
            </p>
          </div>

          <div className="px-5 py-4 border rounded-lg">
            <div className="size-12 bg-gray-200 rounded-sm" />
            <h1 className="mt-5 font-semibold">lorem lorem</h1>
            <p className=" leading-snug text-black/70">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. At omnis
              officiis autem, consectetur facere delectus provident enim
              aspernatur maxime dolores?
            </p>
          </div>

          <div className="px-5 py-4 border rounded-lg">
            <div className="size-12 bg-gray-200 rounded-sm" />
            <h1 className="mt-5 font-semibold">lorem lorem</h1>
            <p className=" leading-snug text-black/70">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. At omnis
              officiis autem, consectetur facere delectus provident enim
              aspernatur maxime dolores?
            </p>
          </div>
        </div>
      </div>

      <div className="">
        <h1 className="text-xl font-semibold">Our Approach</h1>
        <p className="max-w-[700px] text-black/70">
          We believe in conceptual clarity, focusing on problem-solving skills
          and effective time management.
        </p>

        <div className="grid grid-cols-3 gap-5 mt-5">
          <div>
            <div className="w-full h-[200px] bg-gray-200 rounded-lg" />
            <section className="mt-3 px-2">
              <h1 className="mt-5 font-semibold">lorem lorem</h1>
              <p className=" leading-snug text-black/70">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. At
                omnis officiis autem, consectetur facere delectus provident enim
                aspernatur maxime dolores?
              </p>
            </section>
          </div>
          <div>
            <div className="w-full h-[200px] bg-gray-200 rounded-lg" />
            <section className="mt-3 px-2">
              <h1 className="mt-5 font-semibold">lorem lorem</h1>
              <p className=" leading-snug text-black/70">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. At
                omnis officiis autem, consectetur facere delectus provident enim
                aspernatur maxime dolores?
              </p>
            </section>
          </div>
          <div>
            <div className="w-full h-[200px] bg-gray-200 rounded-lg" />
            <section className="mt-3 px-2">
              <h1 className="mt-5 font-semibold">lorem lorem</h1>
              <p className=" leading-snug text-black/70">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. At
                omnis officiis autem, consectetur facere delectus provident enim
                aspernatur maxime dolores?
              </p>
            </section>
          </div>
        </div>
      </div>

      <div className="">
        <h1 className="text-xl font-semibold">Meet our Founder</h1>

        <div>
          <div className="w-full h-[100px] mt-5 bg-gray-200 rounded-xl" />
        </div>

        <div className="flex mt-5 items-center gap-4">
          <div className="size-[100px] bg-gray-200 rounded-full" />

          <div className="leading-tight">
            <h1 className="text-xl font-semibold">Sanjay Meena</h1>
            <p className="text-black/70 max-w-[700px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
              aliquid quos eius et sunt pariatur ratione magni. Ut, facilis eos?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
