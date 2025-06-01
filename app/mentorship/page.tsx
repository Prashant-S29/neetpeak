import type React from "react";

const Mentorship: React.FC = () => {
  return (
    <div className="flex flex-col gap-[80px] container mx-auto w-full py-[50px]">
      <div className=" bg-gray-300 rounded-2xl h-[500px] w-full flex flex-col justify-center items-center">
        Mentorship
      </div>
      <div className="">
        <h1 className="text-xl font-semibold">
          how NEET Peak Mentorship Works?
        </h1>
        <p className="max-w-[700px] text-black/70">
          NEET Peak offers a unique blend of features designed to maximize your
          learning potential and ensure success in the NEET exam
        </p>

        <div className="grid grid-cols-3 gap-5 mt-5">
          <div className="px-5 py-4 border rounded-lg">
            <div className="size-12 bg-gray-200 rounded-sm" />
            <h1 className="mt-5 font-semibold">Connect with a mentor</h1>
            <p className=" leading-snug text-black/70">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. At omnis
              officiis autem, consectetur facere delectus provident enim
              aspernatur maxime dolores?
            </p>
          </div>

          <div className="px-5 py-4 border rounded-lg">
            <div className="size-12 bg-gray-200 rounded-sm" />
            <h1 className="mt-5 font-semibold">Personalized Goal Settings</h1>
            <p className=" leading-snug text-black/70">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. At omnis
              officiis autem, consectetur facere delectus provident enim
              aspernatur maxime dolores?
            </p>
          </div>

          <div className="px-5 py-4 border rounded-lg">
            <div className="size-12 bg-gray-200 rounded-sm" />
            <h1 className="mt-5 font-semibold">Progress Tracking</h1>
            <p className=" leading-snug text-black/70">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. At omnis
              officiis autem, consectetur facere delectus provident enim
              aspernatur maxime dolores?
            </p>
          </div>
        </div>
      </div>

      <div className="">
        <h1 className="text-xl font-semibold">Meet our Top Mentors</h1>
        <p className="max-w-[700px] text-black/70">
          We believe in conceptual clarity, focusing on problem-solving skills
          and effective time management.
        </p>

        <div className="grid grid-cols-4 gap-5 mt-5">
          <div>
            <div className="w-full h-[300px] bg-gray-200 rounded-lg" />
            <section className="mt-3 px-2">
              <h1 className="mt-5 font-semibold">lorem lorem</h1>
              <p className=" leading-snug text-black/70">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit
              </p>
            </section>
          </div>
          <div>
            <div className="w-full h-[300px] bg-gray-200 rounded-lg" />
            <section className="mt-3 px-2">
              <h1 className="mt-5 font-semibold">lorem lorem</h1>
              <p className=" leading-snug text-black/70">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit
              </p>
            </section>
          </div>
          <div>
            <div className="w-full h-[300px] bg-gray-200 rounded-lg" />
            <section className="mt-3 px-2">
              <h1 className="mt-5 font-semibold">lorem lorem</h1>
              <p className=" leading-snug text-black/70">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit
              </p>
            </section>
          </div>
          <div>
            <div className="w-full h-[300px] bg-gray-200 rounded-lg" />
            <section className="mt-3 px-2">
              <h1 className="mt-5 font-semibold">lorem lorem</h1>
              <p className=" leading-snug text-black/70">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit
              </p>
            </section>
          </div>
        </div>
      </div>

      <div className="">
        <div className=" bg-gray-300 rounded-2xl h-[300px] w-full flex flex-col justify-center items-center" />
      </div>
    </div>
  );
};

export default Mentorship;
