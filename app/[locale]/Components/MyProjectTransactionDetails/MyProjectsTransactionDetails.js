"use client";
import React, { useState, useEffect } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import MyProjectsDonorCard from "../MyProjectDonorCard/MyProjectsDonorCard";
import { useTranslations } from "next-intl";

const MyProjectsTransactionDetails = (project) => {
  const [showAllDonors, setShowAllDonors] = useState(false);
  const [sortOrder, setSortOrder] = useState("desc");
  const t = useTranslations("MyProjectTransactionDetails");

  const sortAmounts = () => {
    const sortedAmounts = [...project.project.donations];
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


  const displayDonationCards = displayedDonors.length <= 0 ? (
    <div className="text-center text-blackColor md:text-start">{t('Currently, no donations have been made')}</div>
  ) : (
    displayedDonors.map((donation, i) => (
      <MyProjectsDonorCard key={i} donation={donation} />
    ))
  )


  return (
    <div className="w-full mx-auto bg-gradient-to-r from-whiteColor to-grayishColor p-5 rounded-md shadow-lg my-5">
      <div className="text-blackColor flex items-center space-x-10">
        <h3>{t("All donations")}</h3>
        <div
          className="flex items-center space-x-2 cursor-pointer"
          onClick={handleSort}
        >
          <h3>{t("Sort")}</h3>
          {sortOrder === "asc" ? (
            <FaChevronUp size={15} />
          ) : (
            <FaChevronDown size={15} />
          )}
        </div>
      </div>
      <div className="mt-5 space-y-5 p-2">
        {displayDonationCards}
        {project.project.donations.length > 3 && (
          <button
            className="button-light w-full "
            onClick={showAllDonors ? handleViewLess : handleViewMore}
          >
            {showAllDonors ? `${t("View Less")}` : `${t("View More")}`}
          </button>
        )}
      </div>
    </div>
  );
};

export default MyProjectsTransactionDetails;
