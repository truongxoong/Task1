import React from "react";

const Info = (props) => {
  return (
    <div>
      <div className="flex items-center flex-col border-b border-[#DFE0EB]">
        <div className="font-semibold text-[16px] text-[#9FA2B4] tracking-[0.3px] pt-[24px]">
          {props.name}
        </div>
        <h3 className="font-bold text-[24px] tracking-[0.3px] pb-[24px]">
          {props.number}
        </h3>
      </div>
    </div>
  );
};

export default Info;
