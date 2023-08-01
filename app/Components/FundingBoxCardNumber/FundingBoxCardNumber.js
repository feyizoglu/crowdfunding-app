"use client";
import React, { useState } from "react";

const FundingBoxCardNumber = () => {
  const [cardNumber, setCardNumber] = useState("");
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
  };

  return (
    <div>
      <h2 className="text-left font-semibold">Card Number</h2>
      <input
        maxLength={19}
        onChange={handleChange}
        placeholder="XXXX-XXXX-XXXX-XXXX"
        value={cardNumber}
        className="border-b border-blackColor bg-whiteColor px-3 py-1  mb-4 w-full text-md outline-none "
      />
    </div>
  );
};

export default FundingBoxCardNumber;
