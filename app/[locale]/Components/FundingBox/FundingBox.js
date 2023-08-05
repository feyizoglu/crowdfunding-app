"use client";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
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
import { doc, updateDoc } from "firebase/firestore";
import FundingBoxDescription from "../FundingBoxDescription/FundingBoxDescription";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { db } from "@/app/firebase/firebase-confing";
import { useTranslations } from "next-intl";

const schema = yup
  .object({
    cardHolder: yup.string().required(),
    cardNumber: yup
      .string()
      .required()
      .matches(/^\d{4}-\d{4}-\d{4}-\d{4}$/),
    cardDate: yup.string().required().length(5),
    cardCvv: yup.string().required().length(3),
    description: yup.string().required(),
  })
  .required();

const FundingBox = ({ project }) => {
  const dispatch = useDispatch();
  const { push } = useRouter();
  const [cardHolder, setcardHolder] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(25);
  const [isDisabled, setIsDisabled] = useState(false);

  const t = useTranslations("FundingBox");

  const containerRef = useRef();

  useEffect(() => {
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);

  const handleClick = (e) => {
    if (!containerRef.current.contains(e.target)) {
      dispatch(setShowFundingBox());
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleBtnClick = (value) => {
    setAmount(value);
  };
  const handleInputChange = (e) => {
    setAmount("");
  };
  const onSubmit = async (data) => {
    setIsDisabled(true);
    try {
      const cardholder = data.cardHolder;
      const formData = {
        cardholder,
        description,
        amount,
      };
      // const ref = doc(db, "projects", project.id);
      // await updateDoc(ref, formData);

      toast.success("You have successfully donated. Please wait...", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      push("/successpage");
      dispatch(setShowFundingBox());
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsDisabled(false);
    }
  };

  return (
    <div className="bg-opacity-70 w-screen h-screen fixed top-0 left-0 grid place-content-center z-50 bg-blackColor text-center">
      <div
        ref={containerRef}
        className="bg-whiteColor p-6 sm:p-8 md:p-10 rounded-xl shadow relative max-w-xs sm:max-w-lg"
      >
        <div
          onClick={() => dispatch(setShowFundingBox())}
          className="absolute top-3 left-5 p-3 text-blackColor hover:opacity-60"
        >
          <FaLessThan />
        </div>
        <h2 className="text-2xl font-bold mb-5 mt-6 sm:text-4xl  ">
          {t("Make Difference")}!
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FundingBoxDonationBox
            amount={amount}
            handleBtnClick={handleBtnClick}
          />
          <div className="flex flex-col justify-center w-full  m-auto">
            <FundingBoxDescription
              desc={description}
              setDesc={setDescription}
              errors={errors}
              register={register}
            />
            <FundingBoxCardNumber errors={errors} register={register} />
          </div>
          <FundingBoxCardHolder
            register={register}
            errors={errors}
            donorName={cardHolder}
            setDonorName={setcardHolder}
          />
          <div className="flex justify-between">
            <FundingBoxCardDate register={register} errors={errors} />
            <FundingBoxCardCvv register={register} errors={errors} />
          </div>
          <button
            type="submit"
            disabled={isDisabled}
            className={`button-dark mt-5 w-full ${isDisabled && `opacity-50`}`}
          >
            {t("Donate")}!
          </button>
        </form>
      </div>
    </div>
  );
};

export default FundingBox;
