"use client";
import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FaLessThan } from "react-icons/fa";
import { setShowSignInBox } from "@/app/redux/features/authSlice";
import DonationBox from "./components/donationBox/DonationBox";
import { CardNumber } from "./components/cardNumber/CardNumber";
import CardHolder from "./components/cardHolder/CardHolder";
import CardPrivate from "./components/cardPrivate/CardPrivate";
import Link from "next/link";

const schema = yup
  .object({
    cardNum: yup
      .string()
      .required("Card number is required.")
      .matches(/^\d{4}-\d{4}-\d{4}-\d{4}$/, "Invalid card number format."),
    cardHolder: yup.string().required("Card holder name is required."),
    secret: yup.string().required("Secret value is required."),
  })
  .required();

const Funding = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const containerRef = useRef();

  return (
    <div className="bg-opacity-70 w-screen h-screen fixed top-0 left-0 grid place-content-center z-50 bg-blackColor text-center ">
      <div
        ref={containerRef}
        className="bg-whiteColor p-6 sm:p-8 md:p-10 rounded-xl shadow relative max-w-xs sm:max-w-md"
      >
        <div
          onClick={() => dispatch(setShowSignInBox())}
          className="absolute top-3 left-5 p-3 text-blackColor hover:opacity-60"
        >
          <FaLessThan />
        </div>
        <h2 className="text-2xl font-bold mb-5 mt-6  sm:text-3xl md:text-4xl ">
          Make Difference!
        </h2>
        <DonationBox />
        <form onSubmit={handleSubmit(onsubmit)}>
          <div className="flex flex-col justify-center max-w-xs sm:max-w-sm md:max-w-md m-auto ">
            <CardNumber
              handleSubmit={handleSubmit}
              register={register}
              errors={errors}
            />
          </div>
          <CardHolder register={register} errors={errors} />
          <CardPrivate register={register} errors={errors} />
          <Link href="/successpage" className="button-dark mt-5 w-full">
            Donate!
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Funding;
