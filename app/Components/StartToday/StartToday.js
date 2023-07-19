"use client";
import Link from "next/link";
import { useState } from "react";
import { FaCheck } from "react-icons/fa";

const StartToday = () => {
  const [supportCheck, setSupportCheck] = useState(true);
  const [kickOffCheck, setKickOffCheck] = useState(false);

  const supportClickHandle = () => {
    setSupportCheck((prev) => !prev);
    setKickOffCheck(prev => !prev)
  };
  const kickOffClickHandle = () => {
    setKickOffCheck((prev) => !prev);
    setSupportCheck(prev => !prev)
  };

  return (
    <div className="flex flex-col items-center  space-y-16 md:w-4/6 md:items-start">
      <div className="text-3xl md:ml-14">
        <h1 className="font-semibold">I want to:</h1>
      </div>
      <div className=" justify-center items-center md:ml-10">
        <Link
          onClick={supportClickHandle}
          className="flex items-center space-x-6"
          href="/projects"
        >
          <div className="relative">
            <input
              onChange={supportClickHandle}
              checked={supportCheck}
              type="checkbox"
              id="support"
              className={` appearance-none border border-blackColor p-4 rounded-md ${supportCheck && `bg-greenColor border-greenColor`
                }`}
            />
            {supportCheck && <FaCheck className="absolute top-0 left-0 translate-x-1/2 translate-y-1/2" />}
          </div>
          <div className="flex flex-col space-y-2.5  items-center">
            <span className="text-4xl font-bold">Support</span>
            <span className="text-2l font-semibold">other projects</span>
          </div>
        </Link>
      </div>
      <div className="border-b border-black w-full "></div>
      <div className=" justify-center px-12 items-center md:px-0 md:ml-10 ">
        <Link
          onClick={kickOffClickHandle}
          className="flex items-center space-x-6"
          href="/"
        >
          <div className="relative">
            <input
              onChange={kickOffClickHandle}
              checked={kickOffCheck}
              type="checkbox"
              id="support"
              className={` appearance-none border border-blackColor p-4 rounded-md ${kickOffCheck && `bg-greenColor border-greenColor`
                }`}
            />
            {kickOffCheck && <FaCheck className="absolute top-0 left-0 translate-x-1/2 translate-y-1/2" />}
          </div>
          <div className="flex flex-col space-y-2.5 items-center">
            <span className="text-4xl font-bold flex">Kick<span>-</span>off</span>
            <span className="text-2l font-semibold">my project</span>
          </div>
        </Link>
      </div>
    </div>
  );
};
export default StartToday;