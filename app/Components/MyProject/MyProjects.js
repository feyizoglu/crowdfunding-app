import React from "react";
import projects from "@/app/data/projectData";
import MyProjectDetails from "../MyProjectDetail/MyProjectsDetail";
import MyProjectsTransaction from "../MyProjectTransaction/MyProjectsTransaction";
import MyProjectsStatistics from "../MyProjectStatistics/MyProjectsStatistics";

const MyProjects = () => {
  const project = projects[3];

  return (
    <>
      <div className="bg-whiteColor">
        <div className="container min-h-screen mx-auto w-4/5 pt-[calc(70px+5rem)] pb-10 px-4 space-y-10 flex flex-col lg:flex-row lg:space-x-24 md:space-y-0 md:w-full">
          <div className="space-y-10 lg:w-3/5">
            <MyProjectDetails project={project} />
            <div className="progress-bar flex flex-col justify-between">
              <div className="h-4 bg-grayishColor rounded-lg">
                <div
                  className="h-full rounded-lg bg-greenColor"
                  style={{
                    width: `${
                      (project.moneyRaised / project.goalAmount) * 100
                    }%`,
                  }}
                />
              </div>
              <div className="flex justify-between">
                <div className="raised flex flex-col justify-between">
                  <p className="mt-1.5 text-[18px] font-semibold ">Raised:</p>
                  <p className="text-lg sm:text-xl font-bold py-1 sm:py-2 md:py-3 md:text-2xl lg:text-[32px]">
                    ${project.moneyRaised}
                  </p>
                </div>
                <div className="goal flex flex-col justify-between">
                  <p className="text-[18px] font-semibold mt-1.5">Goal:</p>
                  <p className="text-lg sm:text-xl font-bold py-1 sm:py-2 md:py-3 md:text-2xl lg:text-[32px]">
                    ${project.goalAmount}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-2/5">
            <MyProjectsTransaction project={project} />
            <MyProjectsStatistics project={project} />
          </div>
        </div>
      </div>
    </>
  );
};

export default MyProjects;
