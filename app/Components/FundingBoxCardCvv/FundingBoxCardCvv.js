"use client";
import React, { useState } from "react";
import { BsEyeSlash } from "react-icons/bs";

const FundingBoxCardCvv = () => {
  const [type, setType] = useState("password");
  const handleCvv = () => {
    type == "password" ? setType("") : setType("password");
  };

  const handleInputChange = (e) => {
    const inputVal = e.target.value.replace(/\D/g, "");
    e.target.value = inputVal;
  };
  return (
    <div className="flex flex-col w-5/12">
      <h2 className="text-left font-semibold">CVV</h2>
      <div className="flex items-center justify-between border-b border-blackColor bg-whiteColor px-3 py-1 mb-8 text-md">
        <input
          type={type}
          placeholder="***"
          maxLength={3}
          className="bg-whiteColor w-1/2 outline-none "
          onInput={handleInputChange}
        />
        <BsEyeSlash onClick={handleCvv} className="cursor-pointer" />
      </div>
    </div>
  );
};

export default FundingBoxCardCvv;
