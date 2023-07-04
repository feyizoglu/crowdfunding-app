import Link from "next/link";
import { FaLessThan } from 'react-icons/fa';
import { useDispatch } from "react-redux";
import { setShowSignInBox } from "@/app/redux/features/authSlice";


const SignUp = () => {
  const dispatch = useDispatch();

  return (
    <div className="bg-opacity-70 w-screen h-screen fixed top-0 left-0 grid place-content-center z-50 bg-black text-center">
      <div
        className="bg-white p-4 sm:p-6 md:p-10 rounded-xl shadow relative max-w-xs sm:max-w-md md:max-w-lg"
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

        <div className="flex flex-col justify-center max-w-xs sm:max-w-sm md:max-w-md m-auto">
          <form >
            <input
              id="mail"
              type="email"
              placeholder="Email"
              className="border-b border-blackColor px-3 py-1 mt-5 mb-8 w-full text-lg outline-none sm:text-xl"
            />
            <input
              id="password"
              type="password"
              placeholder="Password"
              className="border-b border-blackColor px-3 py-1 mb-5 w-full outline-none text-lg sm:text-xl"
            />
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
          <Link href='/signup' className="cursor-pointer text-blueColor hover:opacity-60"> Create an account.</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
