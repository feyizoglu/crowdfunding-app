import { useEffect, useRef } from "react";
import Link from "next/link";
import { FaLessThan } from 'react-icons/fa';
import { useDispatch } from "react-redux";
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { auth } from "@/app/firebase/firebase-confing";
import { signInWithEmailAndPassword } from "firebase/auth";
import { toast } from 'react-toastify';

import { setSelectedLink, setShowSignInBox } from "@/app/redux/features/authSlice";
import Alert from "../SignUpAlert/Alert";

const schema = yup.object({
  email: yup.string().email("please enter a valid email address.").required(),
  password: yup
    .string()
    .required()
    .min(6, "password must be at least 6 characters"),
}).required();

const SignUp = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const containerRef = useRef();

  useEffect(() => {
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('click', handleClick)
    }
  }, [])

  const onsubmit = async (data) => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      dispatch(setShowSignInBox());
      let userName = data.email.split('@')[0];
      toast.success(`Congratulations ${userName[0].toUpperCase() + userName.slice(1, userName.length)}! You have successfully logged in.`, {
        position: toast.POSITION.BOTTOM_RIGHT
      });
    } catch (err) {
      toast.error(`Invalid credentials. Please check your email and password and try again!`, {
        position: toast.POSITION.BOTTOM_RIGHT
      });
    }
  };

  const handleClick = (e) => {
    if (!containerRef.current.contains(e.target)) {
      dispatch(setShowSignInBox());
    }
  }


  return (
    <div className="bg-opacity-70 w-screen h-screen fixed top-0 left-0 grid place-content-center z-50 bg-blackColor text-center">
      <div
        ref={containerRef}
        className="bg-whiteColor p-6 sm:p-8 md:p-10 rounded-xl shadow relative max-w-xs sm:max-w-md md:max-w-lg"
      >
        <button
          onClick={() => dispatch(setShowSignInBox())}
          className="absolute top-3 left-5 p-3 text-blackColor hover:opacity-60"
        >
          <FaLessThan />
        </button>
        <h2 className="text-2xl font-bold mb-5 mt-6  sm:text-3xl md:text-4xl ">
          Welcome Back
          <br />
          Change-Maker !
        </h2>
        <div className="flex flex-col justify-center max-w-xs sm:max-w-sm md:max-w-md m-auto ">
          <form onSubmit={handleSubmit(onsubmit)} >
            <input
              {...register('email')}
              id="mail"
              placeholder="Email"
              className="border-b border-blackColor bg-whiteColor px-3 py-1 mt-7 mb-8 w-full text-lg outline-none sm:text-xl"
            />
            <div className="">
              {errors.email && <Alert message={errors.email?.message} />}
            </div>
            <input
              {...register('password')}
              id="password"
              type="password"
              placeholder="Password"
              className="border-b border-blackColor bg-whiteColor px-3 py-1 mb-5 w-full outline-none text-lg sm:text-xl"
            />
            <div className="">
              {errors.password && <Alert message={errors.password?.message} />}
            </div>
            <button className="button-dark mt-5 w-full">
              Continue to sign in
            </button>
          </form>
        </div>
        <hr className="mt-5 mb-6" />
        <h2 className="text-lg sm:text-xl md:text-3xl font-semibold mb-3">
          New to our community?
        </h2>
        <p className="mb-5">
          Make an impact today.
          <br />
          <Link href="/projects" onClick={() => {
            dispatch(setShowSignInBox())
            dispatch(setSelectedLink('Projects'))
          }} className="cursor-pointer text-blueColor hover:opacity-60">
            Explore projects that need your help!
          </Link>
        </p>
        <p>
          Unlock funding opportunities!
          <br />
          <Link href='/signup' onClick={() => {
            dispatch(setShowSignInBox())
            setTimeout(() => { dispatch(setSelectedLink('')) }, 100)
          }} className="cursor-pointer text-blueColor hover:opacity-60"> Create an account.</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
