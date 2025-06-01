import React from "react";
import {
  AppBanner,
  Hero,
  KeyFeature,
  Testimonials,
  TestTypes,
  TopCourses,
} from "~/components/feature";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col gap-[80px] container mx-auto w-full py-[50px]">
      <Hero />
      <TopCourses />
      <KeyFeature />
      <TestTypes />
      <AppBanner />
      <Testimonials />
    </div>
  );
};
export default Home;
