import React from "react";

const Button = ({ icon, text }) => {
  return (
    <div className="flex items-center gap-3 cursor-pointer">
      {icon} <span className="text-sm">{text}</span>
    </div>
  );
};

export default Button;
