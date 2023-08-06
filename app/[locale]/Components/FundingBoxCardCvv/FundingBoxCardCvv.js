"use client";
import React, { useState } from "react";
import { BsEyeSlash, BsEye } from "react-icons/bs";

const FundingBoxCardCvv = ({ register, errors }) => {
  const [type, setType] = useState("password");
  const handleCvv = (e) => {
    e.stopPropagation()
    type == "password" ? setType("") : setType("password");
  };

  const handleInputChange = (e) => {
    const inputVal = e.target.value.replace(/\D/g, "");
    e.target.value = inputVal;
  };
  return (
    <div className="flex flex-col w-5/12">
      <label
        htmlFor="cardCvv"
        className={`text-left text-md font-semibold block mb-2 ${errors.cardCvv && `text-red-500`
          }`}
      >
        CVV
      </label>
      <div
        className={`flex items-center justify-between border-b border-blackColor bg-whiteColor px-3 py-1 mb-4 sm:mb-8 text-md ${errors.cardCvv && `border-red-500`
          }`}
      >
        <input
          {...register("cardCvv")}
          id="cardCvv"
          type={type}
          placeholder="***"
          maxLength={3}
          className={`bg-whiteColor w-1/2 outline-none ${errors.cardCvv && `placeholder-red-500`
            }`}
          onInput={handleInputChange}
        />
        {type == 'password' ? <BsEyeSlash onClick={handleCvv} size={18} className="cursor-pointer" /> : <BsEye onClick={handleCvv} size={18} className="cursor-pointer" />}
      </div>
    </div>
  );
};

export default FundingBoxCardCvv;
