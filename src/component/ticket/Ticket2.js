import React from "react";
import logo15 from "../../assets/logo15.svg";
import logo16 from "../../assets/logo16.svg";
import logo17 from "../../assets/logo17.svg";

const Ticket2 = () => {
  return (
    <div className="w-[546px] h-full rounded-lg border border-[#DFE0EB] ">
      <div className="flex mt-8 ml-8">
        <div className="w-[336px] text-[19px] text-[#252733] ">Tasks</div>
        <button className="ml-[62px] font-semibold text-[14px] text-[#3751FF] w-[84px] text-right ">
          View all
        </button>
      </div>
      <div className="font-normal text-[12px] text-[#9FA2B4] ml-8">Today</div>
      <div className="mt-[16px]">
        <div className=" flex border-b px-8 pt-[20px] pb-[15px] ">
          <div className="w-[336px] text-[#C5C7CD] text-[14px] font-semibold">
            Create new task
          </div>
          <div className="w-[24px] h-[24px] ml-[122px] text-right text-[#9FA2B4] text-[14px] font-semibold tracking-[0.2px]">
            <img src={logo15} alt="logo15" />
          </div>
        </div>
        <div className=" flex border-b px-8 pt-[20px] pb-[15px] ">
          <div className="w-[336px] text-[#C5C7CD] text-[14px] font-semibold flex ">
            <img src={logo16} alt="logo16" />
            <div className="text-[#252733] font-semibold text-[14px] ml-4">
              Finish ticket update
            </div>
          </div>
          <div className="ml-[122px] text-right text-[#FFFFFF] text-[14px] font-semibold tracking-[0.2px] ">
            <span className="px-3 py-[5px] bg-[#FEC400] rounded-lg uppercase">
              Urgent
            </span>
          </div>
        </div>
        <div className=" flex border-b px-8 pt-[20px] pb-[15px] ">
          <div className="w-[336px] text-[#C5C7CD] text-[14px] font-semibold flex ">
            <img src={logo16} alt="logo16" />
            <div className="text-[#252733] font-semibold text-[14px] ml-4">
              Create new ticket example
            </div>
          </div>
          <div className="ml-[122px] text-right text-[#FFFFFF] text-[11px] font-bold tracking-[0.2px] ">
            <span className="px-3 py-[5px] bg-[#29CC97] rounded-lg uppercase">
              New
            </span>
          </div>
        </div>
        <div className=" flex px-8 pt-[20px] pb-[15px] ">
          <div className="w-[336px] text-[#C5C7CD] text-[14px] font-semibold flex ">
            <img src={logo17} alt="logo17" />
            <div className="text-[#252733] font-semibold text-[14px] ml-4">
              Update ticket report
            </div>
          </div>
          <div className="ml-[122px] text-right text-[#9FA2B4] text-[11px] font-bold tracking-[0.2px] ">
            <span className="px-3 py-[5px] bg-[#F0F1F7] rounded-lg uppercase">
              Default
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticket2;
