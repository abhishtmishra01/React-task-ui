import React from "react";
import Sidebar from "./Components/Sidebar";
import LandingPage from "./Components/LandingPage";

const App = () => {
  return (
    <div className="h-screen w-screen p-3 grid grid-cols-[18%_1fr] bg-linear-to-l from-gray-900 to-gray-950 gap-2">
      <Sidebar />
      <LandingPage />
    </div>
  );
};

export default App;
