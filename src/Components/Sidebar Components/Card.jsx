import React from "react";

const Card = ({ img, mainText, width = "10%" }) => {
  return (
    <div
      className="bg-cover bg-bottom h-1/2 w-1/2"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="flex flex-col">
        <p>{mainText}</p>

        <div className="flex justify-between text-gray-300  text-xs items-center">
          <span className="px-3 py-1 border border-gray-600 rounded-xl bg-[#ffffff18]">
            S1, EP-3
          </span>
          <span>30min 55sec</span>
        </div>

        <div className="w-full rounded-4xl bg-white h-1 relative">
          <div
            className="absolute top-0 left-0 rounded-4xl h-1 bg-red-700"
            style={{ width }}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
