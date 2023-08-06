"use client";
import React, { useState } from "react";
import { useTranslations } from "next-intl";

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
  const t = useTranslations("FundingBox");

  return (
    <>
      <label
        htmlFor="cardHolder"
        className={`text-left text-md font-semibold block sm:mb-2 ${holder ? `` : `${errors.cardHolder && `text-red-500`}`
          }`}
      >
        {t("Card Holder")}
      </label>
      <input
        {...register("cardHolder")}
        id="cardHolder"
        placeholder={t("PHIL DUNPHY")}
        value={donorName}
        type="text"
        onChange={handleInputChange}
        className={`border-b border-blackColor bg-whiteColor px-3 py-1 mb-2  w-full text-md outline-none sm:mb-8 ${holder
            ? ``
            : `${errors.cardHolder && `border-red-500 placeholder-red-500`}`
          }`}
      />
    </>
  );
};

export default FundingBoxCardHolder;
