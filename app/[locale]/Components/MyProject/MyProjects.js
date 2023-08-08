"use client";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

import Loader from "../Loader/Loader";
import ConfirmationBox from "../ConfirmationBox/ConfirmationBox";
import MyProjectDetails from "../MyProjectDetail/MyProjectsDetail";
import MyProjectsTransaction from "../MyProjectTransaction/MyProjectsTransaction";
import MyProjectsStatistics from "../MyProjectStatistics/MyProjectsStatistics";


const MyProjects = () => {
  const [matchedProject, setMatchedProject] = useState([]);
  const projects = useSelector((state) => state.auth.projects);
  const user = useSelector((state) => state.auth.user);
  const t = useTranslations("MyProject");
  const showConfirmationBox = useSelector(
    (state) => state.auth.showConfirmationBox
  );
  useEffect(() => {
    const filterForMatch = projects.filter((project) => project.id === user.id);
    setMatchedProject(filterForMatch);
  }, [projects, user]);

  if (matchedProject.length == 0) {
    return <Loader />;
  }
  const moneyRaised = matchedProject[0].donations.reduce((acc, donation) => acc + Number(donation.amount), 0)

  return (
    <>
      <div className="bg-whiteColor">
        <div className="container min-h-screen-70 mx-auto w-4/5 pt-[calc(70px+4rem)] pb-20 px-4 space-y-10 flex flex-col lg:flex-row lg:space-x-24 md:space-y-0 md:w-full">
          <div className="space-y-10 lg:w-3/5">
            <MyProjectDetails project={matchedProject[0]} />
            <div className="progress-bar flex flex-col justify-between">
              <div className="h-4 bg-grayishColor rounded-lg">
                <div
                  className="h-full rounded-lg bg-greenColor"
                  style={{
                    width: `${(moneyRaised /
                      matchedProject[0]?.goalAmount) *
                      100
                      }%`,
                  }}
                />
              </div>
              <div className="flex justify-between">
                <div className="raised flex flex-col justify-between">
                  <p className="mt-1.5 text-[18px] text-center font-semibold ">
                    {t("Raised:")}
                  </p>
                  <p className="text-lg sm:text-xl font-bold py-1 md:text-2xl lg:text-[32px]">
                    ${moneyRaised}
                  </p>
                </div>
                <div className="goal flex flex-col justify-between">
                  <p className="text-[18px] text-center font-semibold mt-1.5">
                    {t("Goal:")}
                  </p>
                  <p className="text-lg sm:text-xl font-bold py-1 md:text-2xl lg:text-[32px]">
                    ${matchedProject[0]?.goalAmount}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-2/5">
            {showConfirmationBox && (
              <ConfirmationBox project={matchedProject[0]} user={user} />
            )}
            <MyProjectsTransaction project={matchedProject[0]} />
            <MyProjectsStatistics project={matchedProject[0]} />
          </div>
        </div>
      </div>
    </>
  );
};

export default MyProjects;
