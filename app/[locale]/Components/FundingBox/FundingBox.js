import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { setShowFundingBox } from "@/app/redux/features/authSlice";
import { doc, updateDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { db } from "@/app/firebase/firebase-confing";
import { useTranslations } from "next-intl";

import FundingBoxDonationBox from "../FundingBoxDonationBox/FundingBoxDonationBox";
import FundingBoxCardNumber from "../FundingBoxCardNumber/FundingBoxCardNumber";
import FundingBoxCardHolder from "../FundingBoxCardHolder/FundingBoxCardHolder";
import FundingBoxCardCvv from "../FundingBoxCardCvv/FundingBoxCardCvv";
import FundingBoxCardDate from "../FundingBoxCardDate/FundingBoxCardDate";
import FundingBoxDescription from "../FundingBoxDescription/FundingBoxDescription";
import Spinner from "../Spinner/Spinner";


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

const FundingBox = ({ docId, project }) => {
  const [isLoading, setIsLoading] = useState(false)
  const dispatch = useDispatch();
  const { push } = useRouter();
  const [cardHolder, setcardHolder] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(25);
  const t = useTranslations("FundingBox");
  const containerRef = useRef();

  useEffect(() => {
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);

  const handleClick = (e) => {
    if (containerRef.current && !containerRef.current.contains(e.target)) {
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

  const onSubmit = async (data) => {
    setIsLoading(true)
    try {
      push("/successpage");
      const cardholder = data.cardHolder;
      const newDonation = {
        cardholder,
        description,
        amount,
      };
      const existDonations = project.donations;
      const withNewDonation = [...existDonations, newDonation];
      const ref = doc(db, "projects", docId);
      await updateDoc(ref, {
        donations: withNewDonation
      });

      dispatch(setShowFundingBox());
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false)
    }
  };

  return (
    <div className="bg-opacity-70 w-screen h-screen fixed top-0 left-0 grid place-content-center z-50  bg-blackColor text-center ">
      <div
        ref={containerRef}
        className="bg-whiteColor p-7 sm:p-8 md:p-10 -mt-5 rounded-xl shadow relative max-w-xs sm:max-w-lg sm:-mt-0"
      >
        <button
          onClick={() => dispatch(setShowFundingBox())}
          className="absolute top-2 left-5 p-3 text-blackColor rounded-full hover:bg-grayishColor sm:top-3"
        >
          <MdOutlineArrowBackIos size={20} />
        </button>
        <h2 className="text-2xl font-bold my-3 sm:text-4xl md:mb-5 md:mt-6 ">
          {t("Make Difference")}!
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FundingBoxDonationBox
            amount={amount}
            handleBtnClick={handleBtnClick}
          />
          <div className="flex flex-col justify-center w-full m-auto">
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
            disabled={isLoading}
            className={`button-dark w-full mt-2`}
          >
            {isLoading && <Spinner />} {t("Donate")}!
          </button>
        </form>
      </div>
    </div>
  );
};

export default FundingBox;
