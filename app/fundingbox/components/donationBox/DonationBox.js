"use client";
import React, { useState } from "react";

export default function DonationBox() {
  const [activeBtn, setActiveBtn] = useState(25);
  const [customValue, setCustomValue] = useState("");

  const handleBtnClick = (value) => {
    setActiveBtn(value);
    setCustomValue("");
  };

  const handleInputChange = (e) => {
    setCustomValue(e.target.value);
    setActiveBtn("");
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-5 mb-5  ">
      <div className="w-full flex justify-between space-x-5">
        <button
          className={`${activeBtn === 25 ? "button-light" : "button-dark"}`}
          onClick={() => handleBtnClick(25)}
        >
          $25
        </button>
        <button
          className={` ${activeBtn === 50 ? "button-light" : "button-dark"}`}
          onClick={() => handleBtnClick(50)}
        >
          $50
        </button>
        <button
          className={`${activeBtn === 75 ? "button-light" : "button-dark"}`}
          onClick={() => handleBtnClick(75)}
        >
          $75
        </button>
        <button
          className={`${activeBtn === 100 ? "button-light" : "button-dark"}`}
          onClick={() => handleBtnClick(100)}
        >
          $100
        </button>
      </div>

      <div className="w-full">
        <input
          placeholder="Custom"
          className={`w-full cursor-default [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none ${
            customValue ? "button-light" : "button-dark"
          }`}
          type="number"
          value={customValue}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
}
