'use client'
import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import Image from "next/image";
import Link from "next/link";
import Loader from "../Loader/Loader";


function projectOfTheWeek() {
  const projects = useSelector(state => state.auth.projects);
  const dispatch = useDispatch();

  // Check if the projects array is empty or undefined
  if (!projects || projects.length === 0) {
    return (
      <div className="bg-whiteColor h-screen-70">
        <Loader />
      </div>
    );
  }

  const mostRecentProject = projects.reduce((prev, curr) => (
    curr.uploadTimestamp > prev.uploadTimestamp ? curr : prev
  ));

  return (
    <div className='bg-whiteColor text-center md:text-start'>
      <div className="container mx-auto project-of-the-week py-20 px-4 ">
        <div className='border-b border-blackColor pb-20'>
          <h1 className="project-of-the-week__title text-4xl sm:text-5xl md:text-6xl font-bold mb-4 pb-10 ">Project of the Week</h1>
          <div className="project-of-the-week__content grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 ">
            <div className="img-container flex flex-col justify-center items-center rounded-lg border-0">
              <Link href={`/projects/${mostRecentProject.docId}`}>
               
                <Image
                  className="rounded-lg object-cover" 
                  src={mostRecentProject.image}
                  width={400}
                  height={400}
                  alt="projectImage"
                  priority
                />
                
              </Link>
            </div>
            <div className="flex flex-col justify-center space-y-16">
              <div className="mb-2">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
                <Link href={`/projects/${mostRecentProject.docId}`} passHref>
                {mostRecentProject.title}
               </Link>
                </h1>
              </div>
              <div>
                <p className="mb-2">
                  {mostRecentProject.description}
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
                    <p className="text-sm sm:text-base md:text-lg">Raised:</p>
                    <p className="text-lg sm:text-xl md:text-2xl font-bold py-1 sm:py-2 md:py-3">
                      ${mostRecentProject.moneyRaised}
                    </p>
                  </div>
                  <div className="goal flex flex-col justify-between">
                    <p className="text-sm sm:text-base md:text-lg">Goal:</p>
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

export default projectOfTheWeek;

