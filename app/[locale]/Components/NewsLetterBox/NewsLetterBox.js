import React from "react";
import Image from "next/image";

function NewsLetterBox() {
  return (
    <div className="flex flex-col items-center w-5/6 sm:w-2/3 py-12 px-7 bg-blackColor rounded-xl space-y-6  md:w-3/6 lg:w-2/6 ">
      <div className="topBox bg-greenColor rounded-xl">
        <Image
          src="/newsletterbox.png"
          alt="newsletterbox image"
          width={450}
          height={450}
          priority
        />
      </div>
      <div
        className="bottomBox flex flex-col text-whiteColor p-3  justify-center space-y-7 "
      >
        <h1 className="font-semibold text-[32px] -mb-2 ">Stay informed</h1>
        <p className="leading-[24px]  text-[18px]">
          Want to be among the first people to know about amazing projects on
          our platform? Join our monthly digest of the best causes.
        </p>
        <button className="button-green text-[18px] ">Join Newsletter</button>
      </div>
    </div>
  );
}

export default NewsLetterBox;