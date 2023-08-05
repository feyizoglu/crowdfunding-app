"use client";
import React, { useState } from "react";

const FundingBoxCardNumber = ({ register, errors }) => {
  const [cardNumber, setCardNumber] = useState("");
  const [numLength, setNumLength] = useState(false);
  const handleChange = (e) => {
    let inputVal = e.target.value.replace(/\D/g, "");
    let formattedVal = "";
    for (let i = 0; i < inputVal.length; i += 4) {
      formattedVal += inputVal.slice(i, i + 4) + "-";
    }
    if (formattedVal.endsWith("-")) {
      formattedVal = formattedVal.slice(0, -1);
    }
    setCardNumber(formattedVal);
    if (formattedVal.length === 19) {
      setNumLength(!numLength);
    } else {
      setNumLength(false);
    }
  };

  return (
    <div>
      <label
        htmlFor="cardNumber"
        className={`text-left text-md font-semibold block mb-2  ${
          numLength ? `` : `${errors.cardNumber && `text-red-500`}`
        }`}
      >
        Card Number
      </label>
      <input
        {...register("cardNumber")}
        maxLength={19}
        id="cardNumber"
        onChange={handleChange}
        placeholder="XXXX-XXXX-XXXX-XXXX"
        value={cardNumber}
        className={`border-b border-blackColor bg-whiteColor px-3 py-1  mb-4 w-full text-md outline-none ${
          numLength
            ? ``
            : `${errors.cardNumber && `border-red-500 placeholder-red-500`}`
        }`}
      />
    </div>
  );
};

export default FundingBoxCardNumber;