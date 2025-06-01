import type React from "react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";

const Contact: React.FC = () => {
  return (
    <div className="flex flex-col gap-[80px] container mx-auto w-full py-[50px]">
      <div className=" bg-gray-300 rounded-2xl h-[500px] w-full flex flex-col justify-center items-center">
        Contact
      </div>
      <div className="">
        <h1 className="text-xl font-semibold">Support Options</h1>

        <div className="grid grid-cols-3 gap-5 mt-5">
          <div className="px-5 py-4 border rounded-lg">
            <div className="size-12 bg-gray-200 rounded-sm" />
            <h1 className="mt-5 font-semibold">WhatsApp</h1>
            <p className=" leading-snug  mt-1 text-black/70">
              +91-1236547890, +91-9876543210
            </p>
          </div>

          <div className="px-5 py-4 border rounded-lg">
            <div className="size-12 bg-gray-200 rounded-sm" />
            <h1 className="mt-5 font-semibold">Mail Us</h1>
            <p className=" leading-snug  mt-1 text-black/70">
              support@neetpeak.com
            </p>
          </div>
          <div className="px-5 py-4 border rounded-lg">
            <div className="size-12 bg-gray-200 rounded-sm" />
            <h1 className="mt-5 font-semibold">Visit us</h1>
            <p className=" leading-snug  mt-1 text-black/70">
              B113, Rama Nagar, Sector 11, Noida, Uttar Pradesh 201301
            </p>
          </div>
        </div>
      </div>

      <div className="flex  gap-[50px]">
        <div className="w-full   bg-gray-200 rounded-xl flex justify-center items-center">
          Map Location
        </div>
        <div className="w-full">
          <h1 className="text-xl font-semibold">Send your queries to us</h1>
          <p className="max-w-[700px] text-black/70">
            We believe in conceptual clarity, focusing on problem-solving skills
            and effective time management.
          </p>

          <div className="mt-5 flex flex-col gap-5">
            <section>
              <label htmlFor="name" className="">
                Name
              </label>
              <Input
                id="name"
                placeholder="Enter your name"
                className="mt-1 py-3 h-auto px-5"
              />
            </section>
            <section>
              <label htmlFor="email" className="">
                Email
              </label>
              <Input
                id="email"
                placeholder="Enter your email"
                className="mt-1 py-3 h-auto px-5"
              />
            </section>

            <section>
              <label htmlFor="subject" className="">
                Subject
              </label>
              <Input
                id="subject"
                placeholder="Enter your subject"
                className="mt-1 py-3 h-auto px-5"
              />
            </section>

            <section>
              <label htmlFor="Message" className="">
                Message
              </label>
              <Textarea
                id="Message"
                placeholder="Enter your Message"
                className="mt-1 min-h-[100px] py-3 h-auto px-5"
              />
            </section>

            <section>
              <Button variant="brand" size="lg" className="font-semibold">
                Send
              </Button>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
