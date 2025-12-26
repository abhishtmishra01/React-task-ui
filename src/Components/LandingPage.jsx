import React from "react";
import Navbar from "./Landing Components/Navbar";
import HeroSection from "./Landing Components/HeroSection";
import ModuleCards from "./Sidebar Components/ModuleCards";

const LandingPage = () => {
  return (
    <div className="p-2 text-white">
      <Navbar />
      <HeroSection />
      <ModuleCards/>
    </div>
  );
};

export default LandingPage;
