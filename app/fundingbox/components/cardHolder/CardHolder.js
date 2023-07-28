import React, { useState } from "react";
import Alert from "@/app/Components/SignUpAlert/Alert";

const CardHolder = ({ register, errors }) => {
  const [text, setText] = useState("");

  const handleInputChange = (e) => {
    const inputText = e.target.value;
    const upperCaseText = inputText.toUpperCase();
    const regex = /^[A-Z\s]*$/;
    if (regex.test(upperCaseText)) {
      setText(upperCaseText);
    }
  };

  return (
    <>
      <h2 className="text-left font-semibold">Card Holder</h2>
      <input
        {...register("cardHolder", {
          required: "Card holder name is required.",
        })}
        placeholder="Phil Dunphy"
        value={text}
        type="text"
        onChange={handleInputChange}
        className="border-b border-blackColor bg-whiteColor px-3 py-1 mb-8 w-full text-md outline-none "
      />
      <div className="">
        {errors.cardHolder && <Alert message={errors.cardHolder?.message} />}
      </div>
    </>
  );
};

export default CardHolder;
