import React from "react";
import { NavLink } from "react-router-dom";
import logo1 from "../../assets/logo1.svg";
import logo2 from "../../assets/logo2.svg";
import logo3 from "../../assets/logo3.svg";
import logo4 from "../../assets/logo4.svg";
import logo5 from "../../assets/logo5.svg";
import logo6 from "../../assets/logo6.svg";
import logo7 from "../../assets/logo7.svg";
import logo8 from "../../assets/logo8.svg";
import logo9 from "../../assets/logo9.svg";

const Navigation = () => {
  return (
    <div>
      <div className="w-[255px] h-full fixed top-0 left-0 bg-[#363740]">
        <div className="w-[32px] h-[32px] bg-[#3751FF] rounded-full mt-[37px] ml-[32px] flex items-center justify-center">
          <img src={logo1} alt="logo1" />
        </div>
        <h3 className="font-bold text-[19px] font-sans text-[#A4A6B3] opacity-[0.7] absolute top-[40px] left-[76px]">
          Dashboard Kit
        </h3>
        <div className=" mt-[63px]">
          <NavLink
            to="/"
            className={(navData) =>
              navData.isActive
                ? "bg-[#3c4fbb] flex pl-[32px]"
                : "flex pl-[32px]"
            }
          >
            <img className="" src={logo2} alt="logo2" />
            <h4 className="font-normal text-[16px] text-[#A4A6B3] tracking-[0.2px] pl-[24px] py-[18px]">
              Overview
            </h4>
          </NavLink>
          <NavLink
            to="Tickets"
            className={(navData) =>
              navData.isActive
                ? "bg-[#3c4fbb] flex pl-[32px]"
                : "flex pl-[32px]"
            }
          >
            <img src={logo3} alt="logo2" />
            <h4 className="font-normal text-[16px] text-[#A4A6B3] tracking-[0.2px] pl-[24px] py-[18px]">
              Tickets
            </h4>
          </NavLink>
          <NavLink
            to="Ideas"
            className={(navData) =>
              navData.isActive
                ? "bg-[#3c4fbb] flex pl-[32px]"
                : "flex pl-[32px]"
            }
          >
            <img src={logo4} alt="logo2" />
            <h4 className="font-normal text-[16px] text-[#A4A6B3] tracking-[0.2px] pl-[24px] py-[18px]">
              Ideas
            </h4>
          </NavLink>
          <NavLink
            to="Contacts"
            className={(navData) =>
              navData.isActive
                ? "bg-[#3c4fbb] flex pl-[32px]"
                : "flex pl-[32px]"
            }
          >
            <img src={logo5} alt="logo2" />
            <h4 className="font-normal text-[16px] text-[#A4A6B3] tracking-[0.2px] pl-[24px] py-[18px]">
              Contacts
            </h4>
          </NavLink>
          <NavLink
            to="Agents"
            className={(navData) =>
              navData.isActive
                ? "bg-[#3c4fbb] flex pl-[32px]"
                : "flex pl-[32px]"
            }
          >
            <img src={logo6} alt="logo2" />
            <h4 className="font-normal text-[16px] text-[#A4A6B3] tracking-[0.2px] pl-[24px] py-[18px]">
              Agents
            </h4>
          </NavLink>
          <NavLink
            to="Articles"
            className={(navData) =>
              navData.isActive
                ? "bg-[#3c4fbb] flex pl-[32px] border-b border-[#DFE0EB] pb-[34px]"
                : "flex pl-[32px] border-b border-[#DFE0EB] pb-[34px]"
            }
            // className="flex pl-[32px] pb-[34px] border-b border-[#DFE0EB]"
          >
            <img src={logo7} alt="logo2" />
            <h4 className="font-normal text-[16px] text-[#A4A6B3] tracking-[0.2px] pl-[24px] py-[18px]">
              Articles
            </h4>
          </NavLink>
          <NavLink
            to="Settings"
            className={(navData) =>
              navData.isActive
                ? "bg-[#3c4fbb] flex pl-[32px] "
                : "flex pl-[32px] "
            }
            // className="flex pl-[32px] pt-[34px]"
          >
            <img src={logo8} alt="logo2" />
            <h4 className="font-normal text-[16px] text-[#A4A6B3] tracking-[0.2px] pl-[24px] py-[18px]">
              Settings
            </h4>
          </NavLink>
          <NavLink
            to="Subscription"
            className={(navData) =>
              navData.isActive
                ? "bg-[#3c4fbb] flex pl-[32px]"
                : "flex pl-[32px]"
            }
          >
            <img src={logo9} alt="logo2" />
            <h4 className="font-normal text-[16px] text-[#A4A6B3] tracking-[0.2px] pl-[24px] py-[18px]">
              Subscription
            </h4>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
