import React from "react";

const HeroSection = () => {
  return (
    <div className="w-full flex flex-col justify-between gap-3 h-fit bg-[url('./Images/3d1.jpg')] bg-cover bg-no-repeat bg-right mt-3 rounded-2xl p-8 ">
      <div className="text-sm w-fit rounded-full font-medium px-3 py-2 flex items-center gap-2 bg-[#ffffff18]">
        <i className="ri-firefox-fill text-xl text-yellow-300"></i>Now Trending
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-2">
          <div className="text-sm w-fit rounded-full font-medium px-3 py-2 flex items-center gap-2 bg-[#ffffff18]">
            <i className="ri-firefox-fill text-xl text-yellow-300"></i>Now
            Trending
          </div>
          <div className="text-sm w-fit rounded-full font-medium px-3 py-2 flex items-center gap-2 bg-[#ffffff18]">
            <i className="ri-firefox-fill text-xl text-yellow-300"></i>Now
            Trending
          </div>
        </div>
        <div className="w-1/2 flex flex-col gap-4">
          <p id="main-text" className="text-6xl font-medium text-white">
            Dimensional Kids on an Adventure
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            magni nesciunt nemo officia ullam adipisci officiis quos laudantium
            facere....
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 bg-pink-500 p-2 px-4 rounded-xl">
            <i className="ri-google-play-fill"></i> <span>Watch Now</span>
          </button>
          <i className="ri-arrow-down-line px-3 py-2 text-lg bg-[#ffffff18] rounded-2xl"></i>
          <i className="ri-arrow-right-double-line px-3 py-2 text-lg bg-[#ffffff18] rounded-2xl"></i>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
