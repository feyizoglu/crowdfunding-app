'use client'
import { useSelector } from 'react-redux';
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from 'next-intl';

function ProjectOfTheWeek() {
  const t = useTranslations('ProjectOfTheWeek');
  const projects = useSelector(state => state.auth.projects);
  if (!projects || projects.length === 0) {
    return (
      <></>
    );
  }
  const mostRecentProject = projects[0]
  return (
    <div className='bg-whiteColor text-center md:text-start'>
      <div className="container mx-auto project-of-the-week pt-20 pb-10 px-4 ">
        <div className='border-b border-blackColor pb-20'>
          <h1 className="project-of-the-week__title text-4xl sm:text-5xl md:text-6xl font-bold mb-4 pb-10 ">{t("Project of the Week")}</h1>
          <div className="project-of-the-week__content grid grid-cols-1 md:grid-cols-2 gap-10  ">
            <div className="img-container flex flex-col items-center  rounded-lg border-0 md:items-start">
              <Link href={`/projects/${mostRecentProject.docId}`}>
                <Image
                  className="rounded-lg h-[200px] w-[200px] md:h-[350px] md:w-[400px] lg:h-[400px] lg:w-[400px] object-cover"
                  src={mostRecentProject.image}
                  width={400}
                  height={400}
                  alt="projectImage"
                  priority
                />
              </Link>
            </div>
            <div className=" flex flex-col justify-center space-y-8 md:pr-10 lg:-ml-20">
              <div>
                <h1 className="text-3xl sm:text-4xl  font-bold mb-2">
                  <Link href={`/projects/${mostRecentProject.docId}`} passHref>
                    {mostRecentProject.title[0].toUpperCase() + mostRecentProject.title.slice(1)}
                  </Link>
                </h1>
                <div className='flex items-center justify-center space-x-2 mt-2 md:justify-start'>
                  <Image
                    src={mostRecentProject.profilPic}
                    height={30}
                    width={30}
                    alt={`${mostRecentProject.creator} profil picture`}
                    className='rounded-full w-[30px] h-[30px]'
                  />
                  <h2>
                    {mostRecentProject.creator.split('@')[0]}
                  </h2>
                </div>
              </div>
              <div>
                <p className="mb-2">
                  {mostRecentProject.description[0].toUpperCase() + mostRecentProject.description.slice(1)}
                </p>
              </div>
              <div className="progress-bar flex flex-col justify-between">
                <div className="h-4 bg-grayishColor rounded-lg">
                  <div
                    className="h-full rounded-lg bg-greenColor"
                    style={{ width: `${(mostRecentProject.moneyRaised / mostRecentProject.goalAmount) * 100}%` }}
                  />
                </div>
                <div className="flex justify-between">
                  <div className="raised flex flex-col justify-between">
                    <p className="text-sm sm:text-base md:text-lg">{t("Raised:")}</p>
                    <p className="text-lg sm:text-xl md:text-2xl font-bold py-1 sm:py-2 md:py-3">
                      ${mostRecentProject.moneyRaised}
                    </p>
                  </div>
                  <div className="goal flex flex-col justify-between">
                    <p className="text-sm sm:text-base md:text-lg">{t("Goal:")}</p>
                    <p className="text-lg sm:text-xl md:text-2xl font-bold py-1 sm:py-2 md:py-3">
                      ${mostRecentProject.goalAmount}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectOfTheWeek;

