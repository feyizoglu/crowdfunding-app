import React, { useState } from "react";
import { useTranslations } from "next-intl";

const FundingBoxDescription = ({ desc, setDesc, errors, register }) => {
  const [userDesc, setUserDesc] = useState(false);
  const handleInputChange = (e) => {
    const inputText = e.target.value;
    setDesc(inputText);
    if (inputText) {
      setUserDesc(true);
    } else {
      setUserDesc(false);
    }
  };
  const t = useTranslations("FundingBox");
  return (
    <>
      <label
        htmlFor="description"
        className={`text-left font-semibold sm:mb-2 ${userDesc ? `` : `${errors.description && `text-red-500`}`
          }`}
      >
        {t("Add Your Comment")}
      </label>
      <input
        {...register("description")}
        id="description"
        placeholder={t("comment")}
        value={desc}
        type="text"
        onChange={handleInputChange}
        className={`border-b border-blackColor bg-whiteColor px-3 py-1 mb-3.5 w-full text-md outline-none sm:mb-4 ${userDesc
          ? ``
          : `${errors.description && `border-red-500 placeholder-red-500`}`
          }`}
      />
    </>
  );
};

export default FundingBoxDescription;
