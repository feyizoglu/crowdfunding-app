"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Link from "next/link";
import { FaUpload } from "react-icons/fa";
import { auth } from "../../firebase/firebase-confing";
import { createUserWithEmailAndPassword, AuthErrorCodes } from "firebase/auth";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { db, storage } from "@/app/firebase/firebase-confing";
import { addDoc, collection } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useTranslations } from "next-intl";

import { setShowSignInBox } from "../../redux/features/authSlice";
import Alert from "../Components/SignUpAlert/Alert";
import Spinner from "../Components/Spinner/Spinner";

const Page = () => {
  const [isLoading, setIsLoading] = useState(false);
  const t = useTranslations("SignUp");
  const schema = yup.object().shape({
    email: yup
      .string()
      .email(`${t("please enter a valid email address")}`)
      .required(`${t("email is a required field")}`),
    password: yup
      .string()
      .required(`${t("password is a required field")}`)
      .min(6, `${t("password must be at least 6 characters long")}`),
    profilePic: yup
      .mixed()
      .test("fileRequired", "Image is required", (value) => {
        return value.length > 0;
      }),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const dispatch = useDispatch();
  const route = useRouter();

  const onSubmit = async (data) => {
    setIsLoading(true)
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      route.push("/");
      const profilePicFile = data.profilePic[0];
      const storageRef = ref(storage, `profil-pic/${profilePicFile.name}`);
      const snapshot = await uploadBytes(storageRef, profilePicFile);
      const downloadURL = await getDownloadURL(snapshot.ref);
      await addDoc(collection(db, "profilPics"), {
        id: user.user.uid,
        profilPic: downloadURL,
      });
      let userName = data.email.split("@")[0];
      toast.success(
        `${t("Congratulations")} ${userName[0].toUpperCase() + userName.slice(1, userName.length)
        }! ${t("Your sign-up was successful")}. ${t(
          "Welcome to our community"
        )}.`,
        {
          position: toast.POSITION.BOTTOM_RIGHT,
          draggable: false,
        }
      );
    } catch (err) {
      let errorMsg = `${t("default")}`;
      switch (err.code) {
        case AuthErrorCodes.EMAIL_EXISTS:
          errorMsg = `${t(
            "The email address is already in use by another account"
          )}.`;
          break;
        case AuthErrorCodes.INVALID_EMAIL:
          errorMsg = `${t("The email address is invalid")}`;
          break;
        default:
          errorMsg = err.message;
      }
      toast.error(errorMsg, {
        position: toast.POSITION.BOTTOM_RIGHT,
        draggable: false
      })
    } finally {
      setIsLoading(false)
    }
  };

  const handleAlreadyMemberClick = () => {
    setTimeout(() => {
      dispatch(setShowSignInBox());
    }, 1);
  };

  return (
    <div className="flex flex-col py-12 justify-start items-center mt-[70px] md:justify-center md:h-screen-70 sm:py-20">
      <h2 className="text-4xl font-bold mb-7 text-blackColor">
        {t("Sign-Up")}
      </h2>
      <div className="max-w-2xl w-full  flex flex-col items-center justify-start p-6 bg-whiteColor rounded-md shadow-md">
        <p className="text-md mb-3 max-w-lg text-center md:text-lg">
          {t("To reach people's needs, to help people, simplify life with")}
          <br /> {t("Crownfunding App")}.
        </p>
        <hr className="bg-blackColor w-24 mt-1 mb-5" />
        <Link
          href="/"
          onClick={handleAlreadyMemberClick}
          className="text-sm text-[#0361FD] hover:opacity-60 md:text-lg"
        >
          {t("Already a member? Sign-in")}
        </Link>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full p-8">
          <div className="mb-4">
            <label htmlFor="email" className="text-xl mb-1 font-semibold block ">
              {t("Your personal email address")}
            </label>
            <input
              id="email"
              placeholder={t("Email")}
              className="bg-whiteColor w-full px-4 py-2 border-b border-blackColor border-opacity-100 focus:outline-none"
              {...register("email")}
            />
          </div>
          {errors.email && <Alert message={errors.email?.message} />}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="text-xl font-semibold block "
            >
              {t("Password")}
            </label>
            <input
              type="password"
              id="password"
              placeholder={t("Password")}
              className="bg-whiteColor w-full px-4 py-2 border-b border-blackColor border-opacity-100 focus:outline-none"
              {...register("password")}
            />
          </div>
          {errors.password && <Alert message={errors.password?.message} />}
          <div className="mb-4">
            <label htmlFor="image" className="text-xl font-semibold block mb-2">
              {t("Upload Profile Picture")}
            </label>
            <div className="file-input m-5 ml-0">
              <label
                htmlFor="file-upload"
                className={`file-label button-light ${errors.profilePic &&
                  `bg-redColor text-red-500 border-red-500 hover:bg-lightRedColor hover:text-red-500 hover:opacity-60`
                  }`}
              >
                <FaUpload
                  className={`text-[#0361FD] mr-4 ${errors.profilePic && "text-darkRedColor"
                    }`}
                />{" "}
                {t("Upload Profile Picture")}
              </label>
              <input
                {...register("profilePic")}
                id="file-upload"
                type="file"
                style={{ display: "none" }}
              />
            </div>
          </div>
          <button disabled={isLoading} type="submit" className="w-full h-10 button-dark">
            {isLoading && <Spinner />} {t("Submit")}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Page;
