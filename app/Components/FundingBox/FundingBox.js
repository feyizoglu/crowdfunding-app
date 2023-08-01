"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FaLessThan } from "react-icons/fa";
import { setShowFundingBox } from "@/app/redux/features/authSlice";
import FundingBoxDonationBox from "../FundingBoxDonationBox/FundingBoxDonationBox";
import FundingBoxCardNumber from "../FundingBoxCardNumber/FundingBoxCardNumber";
import FundingBoxCardHolder from "../FundingBoxCardHolder/FundingBoxCardHolder";
import FundingBoxCardCvv from "../FundingBoxCardCvv/FundingBoxCardCvv";
import FundingBoxCardDate from "../FundingBoxCardDate/FundingBoxCardDate";

const schema = yup
  .object({
    cardNum: yup
      .string()
      .required("Card number is required.")
      .matches(/^\d{4}-\d{4}-\d{4}-\d{4}$/, "Invalid card number format."),
    cardHolder: yup.string().required("Card holder name is required."),
  })
  .required();

const FundingBox = () => {
  const dispatch = useDispatch();
  const {
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const projects = useSelector((state) => state.auth.projects);

  console.log(projects);
  return (
    <div className="bg-opacity-70 w-screen h-screen fixed top-0 left-0 grid place-content-center z-50 bg-blackColor text-center">
      <div className="bg-whiteColor p-6 sm:p-8 md:p-10 rounded-xl shadow relative max-w-xs sm:max-w-md">
        <div
          onClick={() => dispatch(setShowFundingBox())}
          className="absolute top-3 left-5 p-3 text-blackColor hover:opacity-60"
        >
          <FaLessThan />
        </div>
        <h2 className="text-2xl font-bold mb-5 mt-6  sm:text-3xl md:text-4xl ">
          Make Difference!
        </h2>
        <FundingBoxDonationBox />
        <form>
          <div className="flex flex-col justify-center max-w-xs sm:max-w-sm md:max-w-md m-auto">
            <FundingBoxCardNumber />
          </div>
          <FundingBoxCardHolder />
          <div>
            <FundingBoxCardCvv />
            <FundingBoxCardDate />
          </div>
          <button className="button-dark mt-5 w-full">Donate!</button>
        </form>
      </div>
    </div>
  );
};

export default FundingBox;
