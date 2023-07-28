"use client";
import React, { useState } from "react";

const CardDate = () => {
  const [cardDate, setCardDate] = useState("");
  const handleChange = (e) => {
    let inputVal = e.target.value.replace(/\D/g, "");
    let formattedVal = "";
    for (let i = 0; i < inputVal.length; i += 2) {
      formattedVal += inputVal.slice(i, i + 2) + "/";
    }
    if (formattedVal.endsWith("/")) {
      formattedVal = formattedVal.slice(0, -1);
    }
    setCardDate(formattedVal);
  };
  return (
    <div className="flex flex-col w-5/12">
      <h2 className="text-left font-semibold">Expiration Date</h2>
      <input
        maxLength={5}
        onChange={handleChange}
        placeholder="mm/yy"
        value={cardDate}
        className="border-b border-blackColor bg-whiteColor px-3 py-1 mb-8 text-md outline-none "
      />
    </div>
  );
};

export default CardDate;
