import React from "react";
import Card from "./Card";

const Cards = (props) => {
  return (
    <div className="w-[1122px] h-[134px]  absolute top-[128px] left-[285px] grid grid-cols-4 gap-[30px]">
      <Card name="Unresolved" number="60" />
      <Card className="border-[#3751FF]" name="Overdue" number="16" />
      <Card name="Open" number="43" />
      <Card name="On hold" number="64" />
    </div>
  );
};

export default Cards;
