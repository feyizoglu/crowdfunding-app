"use client";
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import placeholderDonations from "@/app/data/placeholderDonations";
import MyProjectsDonorCard from "../MyProjectDonorCard/MyProjectsDonorCard";

const MyProjectsTransactionDetails = () => {
  const [showAllDonors, setShowAllDonors] = useState(false);
  const [sortOrder, setSortOrder] = useState("desc");

  const sortAmounts = () => {
    const sortedAmounts = [...placeholderDonations];
    if (sortOrder === "asc") {
      sortedAmounts.sort((a, b) => a.amount - b.amount);
    } else {
      sortedAmounts.sort((a, b) => b.amount - a.amount);
    }
    return sortedAmounts;
  };

  const displayedDonors = showAllDonors
    ? sortAmounts()
    : sortAmounts().slice(0, 3);

  const handleSort = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const handleViewMore = () => {
    setShowAllDonors(!showAllDonors);
  };

  const handleViewLess = () => {
    setShowAllDonors(false);
  };
  return (
    <div className="w-full mx-auto bg-gradient-to-r from-whiteColor to-grayishColor p-5 rounded-md shadow-lg my-5">
      <div className="text-blackColor flex items-center space-x-10">
        <h3>All Projects</h3>
        <div
          className="flex items-center space-x-2 cursor-pointer"
          onClick={handleSort}
        >
          <h3>Sort</h3>
          {sortOrder === "asc" ? (
            <FaChevronUp size={15} />
          ) : (
            <FaChevronDown size={15} />
          )}
        </div>
      </div>
      <div className="mt-5 space-y-5 p-2">
        {displayedDonors.map((donor) => (
          <MyProjectsDonorCard key={donor.id} donor={donor} />
        ))}
        {placeholderDonations.length > 3 && (
          <button
            className="button-light w-full "
            onClick={showAllDonors ? handleViewLess : handleViewMore}
          >
            {showAllDonors ? "View Less" : "View More"}
          </button>
        )}
      </div>
    </div>
  );
};

export default MyProjectsTransactionDetails;
