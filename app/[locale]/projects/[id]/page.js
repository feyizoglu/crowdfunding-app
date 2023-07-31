"use client";
import { useEffect, useState } from "react";
import { db } from "@/app/firebase/firebase-confing";
import { doc, getDoc } from "firebase/firestore";
import Image from "next/image";
import { FaCalendarAlt } from "react-icons/fa";
import { parse, differenceInDays } from "date-fns";
import { useTranslations } from "next-intl";

import Loader from "@/app/[locale]/Components/Loader/Loader";

function Page({ params }) {
  const [project, setProject] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const docRef = doc(db, "projects", params.id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setProject(docSnap.data());
      } else {
        console.log("no such doc!!");
      }
    };
    fetchData();
  }, [params]);
  const t = useTranslations("Project");
  const today = new Date();
  const endDate = parse(project?.timeline, "dd/MM/yy", new Date());
  const dayLeft = differenceInDays(endDate, today);
  let message;
  if (t("Lang") === "English") {
    if (dayLeft === 1) {
      message = "1 day left";
    } else if (dayLeft === 0) {
      message = "Ends today";
    } else {
      message = `${dayLeft} days left`;
    }
  } else {
    if (dayLeft === 0) {
      message = "Bugün sona eriyor";
    } else {
      message = `${dayLeft} gün kaldı`;
    }
  }

  const progressPercentage = (project?.moneyRaised / project?.goalAmount) * 100;

  return (
    <div className="bg-whiteColor md:h-screen mt-[70px]">
      {project ? (
        <div className="container mx-auto px-4 py-6 flex flex-col justify-around items-center text-center md:flex-row  md:text-start md:space-y-0 md:h-screen">
          <div className=" mt-4 rounded-xl md:w-2/5 md:mt-0 md:flex md:items-center md:h-[calc(100%-20rem)] grid place-content-center">
            <Image
              className="rounded-xl h-[500px] w-[500px]"
              alt={project?.title}
              src={project?.image}
              width={500}
              height={500}
            />
          </div>
          <div className="flex flex-col px-6 space-y-3 py-3 md:w-3/5 md:text-start ">
            <h1 className="text-2xl font-bold">{project?.title}</h1>
            <div className="flex flex-row space-x-1 items-center justify-center md:justify-start">
              <Image
                className=" w-6 h-6 items-start rounded-full"
                alt={project?.title}
                src={project.profilPic ? project.profilPic : "/user.png"}
                width={50}
                height={50}
              />
              <h2 className="text-lg">{project?.creator.split("@")[0]}</h2>
            </div>
            <div className="flex flex-col justify-between  md:border-y md:border-blackColor md:flex-row md:space-y-0 md:container">
              <div className="flex flex-col space-y-5 px-2 md:w-1/2 md:pt-5">
                <h1 className="text-lg font-bold">{t("About Project")}</h1>
                <p className="text-lg pb-5">{project?.description}</p>
              </div>
              <div className="md:border-l md:border-blackColor "></div>
              <div className="md:w-1/2 md:py-5">
                <div className="space-y-5 progress-bar flex flex-col justify-between md:px-2  ">
                  <div className="flex justify-between">
                    <div className="raised flex flex-col px-4 py-2 justify-between">
                      <p className="text-sm sm:text-base md:text-lg">
                        {t("Raised:")}
                      </p>
                      <p className="text-lg sm:text-xl md:text-xl font-bold py-1 sm:py-2 md:py-3">
                        ${project?.moneyRaised}
                      </p>
                    </div>
                    <div className="bg-greenColor px-6 py-2 rounded-lg flex flex-col justify-between ">
                      <p className="text-sm sm:text-base md:text-lg">
                        {t("Goal:")}
                      </p>
                      <p className="text-lg sm:text-xl md:text-xl font-bold py-1 sm:py-2 md:py-3">
                        ${project?.goalAmount}
                      </p>
                    </div>
                  </div>
                  <div className="h-4 bg-grayishColor rounded-lg">
                    <div
                      className="h-full rounded-lg bg-greenColor"
                      style={{ width: `${progressPercentage}%` }}
                    />
                  </div>
                </div>
                <div className="flex justify-center space-x-2 pt-2 md:py-5 text-lg">
                  <FaCalendarAlt size={20} />
                  <p>{message}</p>
                </div>
              </div>
            </div>
            <div>
              <button className="button-dark mt-2 w-full md:w-1/2">
                {t("Fund This Project")}
              </button>
            </div>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default Page;
