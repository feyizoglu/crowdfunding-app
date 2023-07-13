import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className= "bg-[#D4EE25]">
      <div className="container relative mx-auto px-4 hero-section flex flex-col lg:flex-row items-center justify-start min-h-screen">
      <div className="content-column text-center lg:text-left text-black px-4 lg:px-0 lg:w-1/2 z-10">
        <h1 className="text-4xl lg:text-6xl font-bold text-blackColor mb-7">
          Givingly
        </h1>
        <p className="text-lg lg:text-2xl text-blackColor mb-8">
          Supporting great causes made easy
        </p>
        <p className="text-lg lg:text-2xl text-blackColor mb-8">
          We helped over 3,500 projects and causes. Sign in today and get your idea kicked off or support others kick off their amazing projects.
        </p>
        <button className="button-dark">
          Start Today
        </button>
      </div>
      
      <div className="absolute lg:w-2/2 flex items-center justify-end">
        <Image
          src="/background.png"
          alt="Background image"
          width={3000}
          height={3000}
        />
      </div>

    </div>
    </div>
  );
};


export default HeroSection;


