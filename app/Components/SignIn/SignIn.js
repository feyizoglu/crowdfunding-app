import Link from "next/link";
import { FaLessThan } from 'react-icons/fa';
import { useDispatch } from "react-redux";
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { auth } from "@/app/firebase/firebase-confing";
import { signInWithEmailAndPassword } from "firebase/auth";

import { setShowSignInBox } from "@/app/redux/features/authSlice";
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
  const onsubmit = async (data) => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      )
      dispatch(setShowSignInBox());
      alert('You have been succesfully signed in')
    } catch (err) {
      alert(err.message)
    }
  };

  return (
    <div className="bg-opacity-70 w-screen h-screen fixed top-0 left-0 grid place-content-center z-50 bg-blackColor text-center">
      <div
        className="bg-whiteColor p-4 sm:p-6 md:p-10 rounded-xl shadow relative max-w-xs sm:max-w-md md:max-w-lg"
      >
        <button
          onClick={() => dispatch(setShowSignInBox())}
          className="absolute top-3 left-5 p-3 text-blackColor hover:opacity-60"
        >
          <FaLessThan />
        </button>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-5 mt-6 ">
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
              className="border-b border-blackColor bg-whiteColor px-3 py-1 mt-5 mb-8 w-full text-lg outline-none sm:text-xl"
            />
            {errors.email && <Alert message={errors.email?.message} />}
            <input
              {...register('password')}
              id="password"
              type="password"
              placeholder="Password"
              className="border-b border-blackColor bg-whiteColor px-3 py-1 mb-5 w-full outline-none text-lg sm:text-xl"
            />
            {errors.password && <Alert message={errors.password?.message} />}
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
          <Link href="/projects" className="cursor-pointer text-blueColor hover:opacity-60">
            Explore projects that need your help!
          </Link>
        </p>
        <p>
          Unlock funding opportunities!
          <br />
          <Link href='/signup' onClick={() => dispatch(setShowSignInBox())} className="cursor-pointer text-blueColor hover:opacity-60"> Create an account.</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;