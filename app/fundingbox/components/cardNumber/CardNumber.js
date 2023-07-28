import React, { useState, useEffect } from "react";
import Alert from "@/app/Components/SignUpAlert/Alert";

export const CardNumber = ({ handleSubmit, register, errors }) => {
  const [cardNumber, setCardNumber] = useState("");
  const [isValid, setIsValid] = useState(true);
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
    setIsValid(true);
  };

  useEffect(() => {
    setIsValid(!errors.cardNum);
  }, [errors.cardNum]);

  return (
    <div>
      <h2 className="text-left font-semibold">Card Number</h2>
      <input
        {...register("cardNum", { required: "Card number is required." })}
        maxLength={19}
        onChange={handleChange}
        placeholder="xxxx-xxxx-xxxx-xxxx"
        value={cardNumber}
        className="border-b border-blackColor bg-whiteColor px-3 py-1  mb-4 w-full text-md outline-none "
      />
      <div className="">
        {!isValid && <Alert message={errors.cardNum?.message} />}
      </div>
    </div>
  );
};
