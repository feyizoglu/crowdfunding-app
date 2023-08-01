import React from "react";

const FundingBoxCardDate = () => {
  const handleChange = (e) => {
    let code = e.keyCode;
    let allowedKeys = [8];
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
  };
  return (
    <div className="flex flex-col w-5/12">
      <h2 className="text-left font-semibold">Expiration Date</h2>
      <input
        maxLength={5}
        onChange={handleChange}
        placeholder="MM/YY"
        className="border-b border-blackColor bg-whiteColor px-3 py-1 mb-8 text-md outline-none "
      />
    </div>
  );
};

export default FundingBoxCardDate;
