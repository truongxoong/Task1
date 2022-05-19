import React from "react";

const Ticket1 = () => {
  return (
    <div className="w-[546px] h-full rounded-lg border border-[#DFE0EB] ">
      <div className="flex mt-8 ml-8">
        <div className="w-[336px] text-[19px] text-[#252733]">
          Unresolved tickets
        </div>
        <button className="pl-[62px] font-semibold text-[14px] text-[#3751FF]">
          View details
        </button>
      </div>
      <div className="font-normal text-[12px] text-[#9FA2B4] ml-8">
        Group: <span className="text-[#57585f]">Support</span>
      </div>
      <div className="mt-[16px]">
        <div className=" flex border-b pl-8">
          <div className="w-[378px]  pt-[20px] pb-[18px] text-[#252733] text-[14px] font-semibold">
            Waiting on Feature Request
          </div>
          <div className="w-[80px] text-right ml-6 pt-[20px] pb-[18px] text-[#9FA2B4] text-[14px] font-semibold tracking-[0.2px]">
            4238
          </div>
        </div>
        <div className=" flex border-b pl-8">
          <div className="w-[378px]  pt-[20px] pb-[18px] text-[#252733] text-[14px] font-semibold">
            Awaiting Customer Response
          </div>
          <div className="w-[80px] text-right ml-6 pt-[20px] pb-[18px] text-[#9FA2B4] text-[14px] font-semibold tracking-[0.2px]">
            1005
          </div>
        </div>
        <div className=" flex border-b pl-8">
          <div className="w-[378px]  pt-[20px] pb-[18px] text-[#252733] text-[14px] font-semibold">
            Awaiting Developer Fix
          </div>
          <div className="w-[80px] text-right ml-6 pt-[20px] pb-[18px] text-[#9FA2B4] text-[14px] font-semibold tracking-[0.2px]">
            914
          </div>
        </div>
        <div className=" flex pl-8">
          <div className="w-[378px]  pt-[20px] pb-[18px] text-[#252733] text-[14px] font-semibold">
            Pending
          </div>
          <div className="w-[80px] text-right ml-6 pt-[20px] pb-[18px] text-[#9FA2B4] text-[14px] font-semibold tracking-[0.2px]">
            281
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticket1;
