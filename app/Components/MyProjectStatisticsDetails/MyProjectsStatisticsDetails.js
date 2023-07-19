import React from "react";

const MyProjectsStatisticsDetails = ({ project }) => {
  return (
    <div className="w-full mx-auto bg-gradient-to-r from-whiteColor to-grayishColor text-blackColor p-5 rounded-md shadow-lg mt-5 flex items-center space-x-1.5 md:w-2/3 lg:w-full">
      <div className="font-semibold">
        <p>Creator :</p>
        <p>Backers :</p>
        <p>Project End Date :</p>
        <p>Project Category :</p>
      </div>
      <div className="text-center">
        <p>{project.creator}</p>
        <p>{project.backers}</p>
        <p className="bg-redColor rounded-xl">{project.endDate}</p>
        <p>{project.category}</p>
      </div>
    </div>
  );
};

export default MyProjectsStatisticsDetails;
