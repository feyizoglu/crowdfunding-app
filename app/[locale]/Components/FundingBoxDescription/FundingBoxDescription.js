import React, { useState } from "react";

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
  return (
    <>
      <label
        htmlFor="description"
        className={`text-left font-semibold ${
          userDesc ? `` : `${errors.description && `text-red-500`}`
        }`}
      >
        Add Your Comment
      </label>
      <input
        {...register("description")}
        id="description"
        placeholder="I'm happy to fund this project."
        value={desc}
        type="text"
        onChange={handleInputChange}
        className={`border-b border-blackColor bg-whiteColor px-3 py-1 mb-4 w-full text-md outline-none ${
          userDesc
            ? ``
            : `${errors.description && `border-red-500 placeholder-red-500`}`
        }`}
      />
    </>
  );
};

export default FundingBoxDescription;