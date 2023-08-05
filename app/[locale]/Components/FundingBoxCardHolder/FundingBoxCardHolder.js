"use client";
import React, { useState } from "react";

const FundingBoxCardHolder = ({
  donorName,
  setDonorName,
  register,
  errors,
}) => {
  const [holder, setHolder] = useState(false);
  const handleInputChange = (e) => {
    const inputText = e.target.value;
    const upperCaseText = inputText.toUpperCase();
    const regex = /^[A-Z\s]*$/;
    if (regex.test(upperCaseText)) {
      setDonorName(upperCaseText);
    }
    if (upperCaseText) {
      setHolder(true);
    } else {
      setHolder(false);
    }
  };

  return (
    <>
      <label
        htmlFor="cardHolder"
        className={`text-left text-md font-semibold block mb-2 ${
          holder ? `` : `${errors.cardHolder && `text-red-500`}`
        }`}
      >
        Card Holder
      </label>
      <input
        {...register("cardHolder")}
        id="cardHolder"
        placeholder="PHIL DUNPHY"
        value={donorName}
        type="text"
        onChange={handleInputChange}
        className={`border-b border-blackColor bg-whiteColor px-3 py-1 mb-8 w-full text-md outline-none ${
          holder
            ? ``
            : `${errors.cardHolder && `border-red-500 placeholder-red-500`}`
        }`}
      />
    </>
  );
};

export default FundingBoxCardHolder;