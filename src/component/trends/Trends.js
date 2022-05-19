import React from "react";
import logo13 from "../../assets/logo13.svg";
import logo14 from "../../assets/logo14.svg";
import ChartTrent from "./Chart";
// import Info from "./Info";

const Trends = (props) => {
  return (
    <div className="border absolute w-[1122px] h-[546px] top-[292px] left-[285px] rounded-lg flex">
      <div className="w-[780px] h-full p-[32px]">
        <p className="font-bold text-[19px] text-[#252733] ">Today’s trends</p>
        <div className="flex">
          <div className="w-[400px] text-[#9FA2B4]">
            as of 25 May 2019, 09:41 PM
          </div>
          <div className="w-[172px] ml-[144px] flex">
            <div className="flex items-center">
              <div>
                <img src={logo13} alt="logo13" />
              </div>
              <span className="text-[#9FA2B4] pl-2 pr-8">Today</span>
            </div>
            <div className="flex items-center">
              <div>
                <img src={logo14} alt="logo14" />
              </div>
              <span className="text-[#9FA2B4] pl-2">Yesterday</span>
            </div>
          </div>
        </div>
        <div className=" w-[686px] h-[380px] mt-[54px]">
          <ChartTrent />
        </div>
      </div>
      <div className="w-[342px] h-full border-l border-[#DFE0EB] pt-2">
        <div className="flex items-center flex-col border-b border-[#DFE0EB]">
          <div className="font-semibold text-[16px] text-[#9FA2B4] tracking-[0.3px] pt-[24px]">
            Resolved
          </div>
          <div className="font-bold text-[24px] tracking-[0.3px] pb-[24px]">
            449
          </div>
        </div>
        <div className="flex items-center flex-col border-b border-[#DFE0EB]">
          <div className="font-semibold text-[16px] text-[#9FA2B4] tracking-[0.3px] pt-[24px]">
            Received
          </div>
          <h3 className="font-bold text-[24px] tracking-[0.3px] pb-[24px]">
            426
          </h3>
        </div>
        <div className="flex items-center flex-col border-b border-[#DFE0EB]">
          <div className="font-semibold text-[16px] text-[#9FA2B4] tracking-[0.3px] pt-[24px]">
            Average first response time
          </div>
          <h3 className="font-bold text-[24px] tracking-[0.3px] pb-[24px]">
            33m
          </h3>
        </div>
        <div className="flex items-center flex-col border-b border-[#DFE0EB]">
          <div className="font-semibold text-[16px] text-[#9FA2B4] tracking-[0.3px] pt-[24px]">
            Average response time
          </div>
          <h3 className="font-bold text-[24px] tracking-[0.3px] pb-[24px]">
            3h58m
          </h3>
        </div>
        <div className="flex items-center flex-col">
          <div className="font-semibold text-[16px] text-[#9FA2B4] tracking-[0.3px] pt-[24px]">
            Resolution within SLA
          </div>
          <h3 className="font-bold text-[24px] tracking-[0.3px] pb-[24px]">
            94%
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Trends;
