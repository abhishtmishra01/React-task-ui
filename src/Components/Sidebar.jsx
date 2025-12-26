import React from "react";
import Button from "./Sidebar Components/Button";

const Sidebar = () => {
  return (
    <aside
      id="aside"
      className="text-white relative h-full w-full bg-[#ffffff18] backdrop-blur-md p-5 rounded-xl border border-gray-700"
    >
      <div className="header flex justify-between items-center">
        <div className="flex justify-center items-center gap-2">
          <i className="ri-tv-2-fill text-2xl text-violet-300"></i>{" "}
          <span className="font-bold text-xl">Drameeo</span>
        </div>
        <i className="ri-menu-fold-2-line text-gray-400"></i>
      </div>
      <div className="btns-wrapper flex flex-col py-6 gap-4 text-gray-400 border-b border-gray-600">
        <Button icon={<i className="text-xl ri-home-4-fill"></i>} text="Home" />
        <Button
          icon={<i className="text-xl ri-compass-discover-fill"></i>}
          text="Explore"
        />
        <Button
          icon={<i className="text-xl ri-terminal-box-fill"></i>}
          text="Genres"
        />
        <Button
          icon={<i className="text-xl ri-heart-add-fill"></i>}
          text="Faviourate"
        />
      </div>
      <div className="btns-wrapper flex flex-col py-6 gap-4 text-gray-400 border-b border-gray-600">
        <Button
          icon={<i className="text-xl ri-play-large-line"></i>}
          text="Continue Watching"
        />
        <Button
          icon={<i className="text-xl ri-time-line"></i>}
          text="Recent Added"
        />
        <Button
          icon={<i className="text-xl ri-folders-fill"></i>}
          text="My Collections"
        />
        <Button
          icon={<i className="text-xl ri-arrow-down-line"></i>}
          text="Download"
        />
      </div>
      <div className="btns-wrapper flex flex-col py-6 gap-4 text-gray-400 not-last:border-b border-gray-600">
        <Button icon={<i className="ri-tools-fill text-xl"></i>} text="Settings" />
      </div>
      <div className="absolute bottom-5 text-gray-400">
        <Button
          icon={<i className="text-lg  ri-logout-box-r-line"></i>}
          text="Logout"
        />
      </div>
    </aside>
  );
};

export default Sidebar;
