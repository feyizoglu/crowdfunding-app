import React from "react";
import { BiErrorCircle } from "react-icons/bi";

const Alert = (props) => {
  return (
    <div className="flex items-center justify-center  py-2 p-1 pl-2  mt-2 bg-[#FED7D7] rounded-sm ">
      <BiErrorCircle className="text-[#E53E3E]" />
      <p className="text-sm pl-1 text-[#E53E3E]">{props.message}</p>
    </div>
  );
};

export default Alert;
