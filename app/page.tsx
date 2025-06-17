import React from "react";
import {
  AppBanner,
  Community,
  Hero,
  KeyFeature,
  Testimonials,
  TestTypes,
  TopCourses,
} from "~/components/feature";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col ">
      <Hero />
      <Community />
      <KeyFeature />
      <Testimonials />
      {/* <TopCourses /> */}
      <TestTypes />
      <AppBanner />
    </div>
  );
};
export default Home;
