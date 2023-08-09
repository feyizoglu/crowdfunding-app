import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { auth } from "@/app/firebase/firebase-confing";
import { signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import { setShowSignInBox } from "@/app/redux/features/authSlice";
import Alert from "../SignUpAlert/Alert";
import { useTranslations } from "next-intl";

import Spinner from "../Spinner/Spinner";

const SignUp = () => {
  const [isLoading, setIsLoading] = useState(false)
  const t = useTranslations("SignIn");
  const schema = yup
    .object({
      email: yup
        .string()
        .email(`${t("please enter a valid email address")}`)
        .required(`${t("email is a required field")}`),
      password: yup
        .string()
        .required(`${t("password is a required field")}`)
        .min(6, `${t("password must be at least 6 characters long")}`),
    })
    .required();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const containerRef = useRef();

  useEffect(() => {
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);

  const onsubmit = async (data) => {
    setIsLoading(true)
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      dispatch(setShowSignInBox());
      let userName = data.email.split("@")[0];
      toast.success(
        `${t("Congratulations")} ${userName[0].toUpperCase() + userName.slice(1).replace(/[0-9]/g, '')
        }! ${t("You have successfully logged in")}.`,
        {
          position: toast.POSITION.BOTTOM_RIGHT,
          draggable: false,
        }
      );
    } catch (err) {
      toast.error(
        `${t("Invalid credentials")}. ${t(
          "Please check your email and password and try again!"
        )}`,
        {
          position: toast.POSITION.BOTTOM_RIGHT,
          draggable: false
        });
    } finally {
      setIsLoading(false)
    }
  };

  const handleClick = (e) => {
    if (!containerRef.current.contains(e.target)) {
      dispatch(setShowSignInBox());
    }
  };

  return (
    <div className="bg-opacity-70 w-screen h-screen fixed top-0 left-0 grid place-content-center z-50 bg-blackColor text-center">
      <div
        ref={containerRef}
        className="bg-whiteColor p-7 -mt-6 sm:p-8 md:p-10 rounded-xl shadow relative max-w-xs sm:max-w-md sm:-mt-0 md:max-w-lg"
      >
        <button
          onClick={() => dispatch(setShowSignInBox())}
          className="absolute top-3 left-5 p-3 text-blackColor rounded-full hover:bg-grayishColor "
        >
          <MdOutlineArrowBackIos size={20} />
        </button>
        <h2
          data-testid="welcome-back"
          className="text-2xl font-bold mt-5 mb-3 sm:text-3xl md:text-4xl md:mb-5 md:mt-6 "
        >
          {t("Welcome Back")}
          <br />
          {t("Change-Maker !")}
        </h2>
        <div className="flex flex-col justify-center max-w-xs sm:max-w-sm md:max-w-md m-auto ">
          <form onSubmit={handleSubmit(onsubmit)}>
            <input
              {...register("email")}
              id="mail"
              placeholder={t("Email")}
              className="border-b border-blackColor bg-whiteColor px-3 py-1 mb-6 w-full text-md outline-none sm:text-xl md:my-7"
            />
            <div className="">
              {errors.email && <div className="-mt-3"><Alert message={errors.email?.message} /></div>}
            </div>
            <input
              {...register("password")}
              id="password"
              type="password"
              placeholder={t("Password")}
              className="border-b border-blackColor bg-whiteColor px-3 py-1 mb-3 w-full outline-none text-md sm:text-xl md:mb-4"
            />
            <div className="">
              {errors.password && <Alert message={errors.password?.message} />}
            </div>
            <button disabled={isLoading} className="button-dark mt-4 w-full md:mt-3">
              {isLoading && <Spinner />} {t("Continue to sign in")}
            </button>
          </form>
        </div>
        <hr className="mt-4 mb-3 md:mt-5 md:mb-4" />
        <h2 className="text-md mb-1.5 font-semibold sm:text-xl md:text-2xl  md:mb-3">
          {t("New to our community?")}
        </h2>
        <p className="text-sm mb-3.5 md:mb-5 sm:text-base md:text-lg">
          {t("Make an impact today")}.
          <br />
          <Link
            href="/projects"
            onClick={() => {
              dispatch(setShowSignInBox());
            }}
            className="text-sm cursor-pointer text-blueColor hover:opacity-60 sm:text-base md:text-lg"
          >
            {t("Explore projects that need your help!")}
          </Link>
        </p>
        <p className="text-sm sm:text-base md:text-lg">
          {t("Unlock funding opportunities!")}
          <br />
          <Link
            href="/signup"
            onClick={() => {
              dispatch(setShowSignInBox());
            }}
            className="cursor-pointer text-blueColor hover:opacity-60"
          >
            {" "}
            {t("Create an account")}.
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
