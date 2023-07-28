"use client";
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const MyProjectsAccordion = ({ title, component, isOpenDefault }) => {
  const [isOpen, setIsOpen] = useState(isOpenDefault);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className="flex items-center border-y border-blackColor py-5 cursor-pointer transition-all duration-1000 ease-in-out"
        onClick={toggleDropdown}
      >
        <h2 className="text-center text-[24px] w-full md:text-left">{title}</h2>
        <div className="grow" />
        {isOpen ? <FaChevronUp size={20} /> : <FaChevronDown size={20} />}
      </div>
      <div
        className={`overflow-hidden transition-all duration-1000 ease-in-out ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        style={{
          height: isOpen ? "auto" : 0,
          maxHeight: isOpen ? "1000px" : 0,
        }}
      >
        {isOpen && component}
      </div>
    </>
  );
};

export default MyProjectsAccordion;
