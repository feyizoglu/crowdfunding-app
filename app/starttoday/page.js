import React from "react";
import StartToday from "../Components/StartToday/StartToday";
import NewsLetterBox from "../Components/NewsLetterBox/NewsLetterBox";

function page() {
  return (
    <div className="bg-whiteColor pt-[70px]">
      <div className="container mx-auto py-12 flex flex-col items-center space-y-12 justify-between md:flex-row  md:space-y-0 md:px-4 md:space-x-12">
        <StartToday />
        <NewsLetterBox />
      </div>
    </div>
  );
}

export default page;