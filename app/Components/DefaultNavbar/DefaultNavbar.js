"use client";
import React from "react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { setShowSignInBox } from "@/app/redux/features/authSlice";
import { useRouter } from "next/navigation";

const style = {
  container: `flex items-center space-x-12`,
  headerLinks: `font-medium hover:opacity-60`,
  headerButton: `button-dark hover:bg-transparent`,
};

function DefaultNavbar() {
  const dispatch = useDispatch();
  const router = useRouter();

  const signInClickHandler = () => {
    router.push("/");
    setTimeout(() => {
      dispatch(setShowSignInBox());
    }, 400);
  };

  return (
    <div className={style.container}>
      <Link className={style.headerLinks} href="/">
        Home
      </Link>
      <Link className={style.headerLinks} href="/projects">
        Projects
      </Link>
      <button onClick={signInClickHandler} className={style.headerButton}>
        Sign In
      </button>
    </div>
  );
}

export default DefaultNavbar;
