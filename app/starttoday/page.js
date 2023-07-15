import React from "react";
import StartToday from "../Components/StartToday/StartToday";
import NewsLetterBox from "../Components/NewsLetterBox/NewsLetterBox";

function page() {
  return (
    <div className="bg-whiteColor mt-[70px]">
      <div className="container py-10 mx-auto  flex flex-col  items-center space-y-12 justify-between md:h-screen-70 md:flex-row md:space-y-0 md:px-4 md:space-x-12">
        <StartToday />
        <NewsLetterBox />
      </div>
    </div>
  );
}

export default page;