import React from "react";
import Navbar from "./Landing Components/Navbar";
import HeroSection from "./Landing Components/HeroSection";

const LandingPage = () => {
  return (
    <div className="p-2 text-white">
      <Navbar />
      <HeroSection />
    </div>
  );
};

export default LandingPage;
