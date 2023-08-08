import React, { useState } from "react";
import { useTranslations } from "next-intl";

const FundingBoxCardDate = ({ register, errors }) => {
  const [date, setDate] = useState(false);
  const handleChange = (e) => {
    let code = e.keyCode;
    let allowedKeys = [8];
    const inputVal = e.target.value;
    if (allowedKeys.indexOf(code) !== -1) {
      return;
    }
    e.target.value = e.target.value
      .replace(/^([1-9]\/|[2-9])$/g, "0$1/")
      .replace(/^(0[1-9]|1[0-2])$/g, "$1/")
      .replace(/^1([3-9])$/g, "01/$1")
      .replace(/^0\/|0+$/g, "0")
      .replace(/[^\d|^\/]*/g, "")
      .replace(/\/\//g, "/")
      .replace(/\/(0[0-9]|1[0-9]|2[0-2])$/, "/23");

    if (inputVal.length === 5) {
      setDate(!date);
    } else {
      setDate(false);
    }
  };

  const t = useTranslations("FundingBox");
  return (
    <div className="flex flex-col w-5/12">
      <label
        htmlFor="cardDate"
        className={`text-left text-md font-semibold block mb-2 ${date ? `` : `${errors.cardDate && `text-red-500`}`
          }`}
      >
        {t("Card Date")}
      </label>
      <input
        {...register("cardDate")}
        id="cardDate"
        maxLength={5}
        onChange={handleChange}
        placeholder={t("MM/YY")}
        className={`border-b border-blackColor bg-whiteColor px-3 py-1 sm:mb-8 text-md outline-none ${date
            ? ``
            : `${errors.cardDate && `border-red-500 placeholder-red-500`}`
          }`}
      />
    </div>
  );
};

export default FundingBoxCardDate;
