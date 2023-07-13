import React from "react";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="bg-greenColor">
      <div className="h-screen container relative mx-auto px-4 flex flex-col items-center justify-center  md:flex-row md:justify-start ">
        <div className="flex flex-col w-3/5 text-center text-blackColor z-10 space-y-10 md:ml-20  md:text-left md:w-1/2 lg:w-1/3 xl:w-1/4">
          <h1 className="text-5xl font-semibold text-blackColor md:text-[100px]">
            Givingly
          </h1>
          <p className="text-[32px] font-semibold text-blackColor  ">
            Supporting great causes made easy
          </p>
          <p className="font-medium text-[18px] text-blackColor">
            We helped over 3,500 projects and causes. Sign in today and get your
            idea kicked off or support others kick off their amazing projects.
          </p>
          <div>
            <Link href='/starttoday' className="button-dark px-10 md:px-16">Start Today</Link>
          </div>
        </div>
        <div>
          <Image src="/background.png" alt="Background image" fill />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;