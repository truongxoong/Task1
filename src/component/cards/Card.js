import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Card = (props) => {
  // const [active, setActive] = useState("bg-[red]");
  return (
    <div
      className={`w-[258px] h-[134px] border border-[#DFE0EB] rounded-lg flex items-center justify-center flex-col cursor-pointer hover:border-[#3751FF] group`}
    >
      <div className="text-[#9FA2B4] font-bold text-[19px] tracking-[0.4px] group-hover:text-[#3751FF]">
        {props.name}
      </div>
      <p className="text-[ #252733] text-[40px] font-bold group-hover:text-[#3751FF]">
        {props.number}
      </p>
    </div>
  );
};

export default Card;
