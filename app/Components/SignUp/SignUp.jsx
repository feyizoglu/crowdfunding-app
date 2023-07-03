"use client";
import React, { useState } from "react";
import Link from "next/link";

const SignUp = () => {
  const [showCard, setShowCard] = useState(false);

  const handleSignIn = () => {
    setShowCard(true);
  };

  const handleCloseCard = () => {
    setShowCard(false);
  };
  const handleOuterClick = (e) => {
    e.stopPropagation();
    handleCloseCard();
  };

  const handleCardClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div>
      <button className="button-dark mt-5" onClick={handleSignIn}>
        Sign Up
      </button>

      {showCard && (
        <div
          className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-opacity-70 bg-black"
          onClick={handleOuterClick}
        >
          <div
            className="bg-white p-4 sm:p-6 md:p-10 rounded-xl shadow z-10 relative max-w-xs sm:max-w-md md:max-w-lg"
            onClick={handleCardClick}
          >
            <button
              className="absolute top-0 right-2 p-3 text-gray-500 hover:text-gray-700 text-xl font-bold"
              onClick={handleCloseCard}
            >
              X
            </button>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-5 mt-6 ">
              Welcome Back
              <br />
              Change-Maker !
            </h2>

            <div className="flex flex-col justify-center max-w-xs sm:max-w-sm md:max-w-md m-auto">
              <form>
                <input
                  id="mail"
                  type="email"
                  placeholder="Email"
                  className="border-b border-black px-3 py-1 mt-5 mb-8 w-full text-lg sm:text-xl"
                />
                <input
                  id="password"
                  type="password"
                  placeholder="Password"
                  className="border-b border-black px-3 py-1 mb-5 w-full text-lg sm:text-xl"
                  autoComplete="on"
                />
                <Link href="/signin">
                  <button type="submit" className="button-dark mt-5 w-full">
                    Continue to sign in
                  </button>
                </Link>
              </form>
            </div>
            <hr className="mt-5 mb-6" />
            <h2 className="text-lg sm:text-xl md:text-3xl font-semibold mb-3">
              New to our community?
            </h2>
            <p className="mb-5">
              Make an impact today.
              <br />
              <Link href="/projects" className="cursor-pointer text-blue-500">
                Explore projects that need your help
              </Link>
              !
            </p>
            <p>
              Unlock funding opportunities!
              <br />
              <a className="cursor-pointer text-blue-500"> Create an account</a>
              .
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignUp;
