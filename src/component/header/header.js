import React from "react";
import logo10 from "../../assets/logo10.svg";
import logo11 from "../../assets/logo11.svg";
import logo12 from "../../assets/logo12.svg";

const Header = () => {
  return (
    <div className="absolute top-[30px] left-[285px] w-[1122px] h-[44px]  flex items-center">
      <div className="font-bold text-[24px] w-[771px] h-[34px] ">Overview</div>
      <img className="pl-[64px] pr-[25px]" src={logo10} alt="" />
      <img src={logo11} alt="" />
      <p className="pl-[64px] pr-[14px] text-[14px] text-[#252733] font-semibold">
        Jones Ferdinand
      </p>
      <div className="w-[44px] h-[44px] ">
        <img className="w-full h-full object-cover" src={logo12} alt="" />
      </div>
    </div>
  );
};

export default Header;
