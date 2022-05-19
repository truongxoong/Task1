import React from "react";
import Ticket1 from "./Ticket1";
import Ticket2 from "./Ticket2";

const Ticket = () => {
  return (
    <div className=" mt-[30px] w-[1122px] h-[336px] absolute top-[868px] left-[285px] flex justify-between pb-3">
      <Ticket1 />
      <Ticket2 />
    </div>
  );
};

export default Ticket;
