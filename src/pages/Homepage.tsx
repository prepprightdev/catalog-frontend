// src/pages/HomePage.tsx
import React from "react";
import Footer from "../components/Footer";
import HeroSection from "../components/Home/HeroSection";
import FeaturedCourses from "../components/Home/FeaturedCourses";
import Instructors from "../components/Home/Instructor";
import Testimonials from "../components/Home/Testimonials";
import Newsletter from "../components/Home/NewsLetter";

const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <FeaturedCourses/>
      <Instructors/>
      <Testimonials/>
      <Newsletter/>
      <Footer />
    </>
  );
};

export default HomePage;
