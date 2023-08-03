"use client";
import React, { useState } from "react";

const FundingBoxDonationBox = ({ handleBtnClick, amount }) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-5 mb-5  ">
      <div className="w-full flex justify-center space-x-2 sm:space-x-5 sm:justify-between">
        <p
          className={`${amount === 25 ? "button-light" : "button-dark"}`}
          onClick={() => handleBtnClick(25)}
        >
          $25
        </p>
        <p
          className={` ${amount === 50 ? "button-light" : "button-dark"}`}
          onClick={() => handleBtnClick(50)}
        >
          $50
        </p>
        <p
          className={`${amount === 75 ? "button-light" : "button-dark"}`}
          onClick={() => handleBtnClick(75)}
        >
          $75
        </p>
        <p
          className={`${amount === 100 ? "button-light" : "button-dark"}`}
          onClick={() => handleBtnClick(100)}
        >
          $100
        </p>
      </div>

      <div className="w-full">
        <label
          htmlFor="customValue"
          className={`text-left text-md font-semibold block mb-2`}
        >
          Custom Value
        </label>
        <input
          placeholder="Custom"
          className={`button-dark w-full cursor-default [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none `}
          type="number"
          value={amount}
          onChange={(e) => handleBtnClick(e.target.value)}
        />
      </div>
    </div>
  );
};

export default FundingBoxDonationBox;
