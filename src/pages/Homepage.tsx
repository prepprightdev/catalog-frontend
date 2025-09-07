// src/pages/HomePage.tsx
import React from "react";
import Footer from "../components/Footer";
import HeroSection from "../components/Home/HeroSection";
import FeaturedCourses from "../components/Home/FeaturedCourses";

const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <FeaturedCourses/>
      <Footer />
    </>
  );
};

export default HomePage;
