import React from "react";
import Card from "./Card";

const ModuleCards = ({ heading }) => {
  return (
    <div className="flex flex-col">
      <div>{heading}</div>
      <div className="card-wrapper flex items-center gap-4">
        <Card
          img={"Images/img-4.jpg"}
          mainText={"Midnight Mischeif Squad"} width="35%"
        />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default ModuleCards;
