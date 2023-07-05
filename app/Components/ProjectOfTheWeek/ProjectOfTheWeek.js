import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ProjectOfTheWeek = () => {
  const moneyRaised = 2500;
  const goalAmount = 3500;
  const progressPercentage = (moneyRaised / goalAmount) * 100;

  return (
    <div className="container mx-auto project-of-the-week grid place-content-center  mb-10 py-20 gap-10 px-4 sm:px-6 md:px-8 xl:px-20 2xl:px-32">
      <div className='border-b border-blackColor pb-20'>
        <h1 className="project-of-the-week__title text-4xl sm:text-5xl md:text-6xl font-bold mb-4 pb-10 ">Project of the Week</h1>
        <div className="project-of-the-week__content grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-20 ">
          <div className="img-container flex flex-col justify-center items-center bg-grayishColor rounded-lg border-0">
            <Link href="/project-details">
              <div className="image-wrapper flex justify-center items-center w-full h-full">
                <Image
                  src="/mango.png"
                  width={500}
                  height={500}
                />
              </div>
            </Link>
          </div>
          <div className="flex flex-col justify-between">
            <div className="mb-2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
                Help us release cookbook for parents and kids.
              </h1>
            </div>
            <div>
              <p className="mb-2">
                We want to create a beautiful and helpful cookbook for parents and kids to have fun in the kitchen.
              </p>
            </div>
            <div className="progress-bar flex flex-col justify-between">
              <div className="h-4 bg-grayishColor rounded-lg">
                <div
                  className="h-full rounded-lg bg-greenColor"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
              <div className="flex justify-between">
                <div className="raised flex flex-col justify-between">
                  <p className="text-sm sm:text-base md:text-lg">Raised:</p>
                  <p className="text-lg sm:text-xl md:text-2xl font-bold py-1 sm:py-2 md:py-3">${moneyRaised}</p>
                </div>
                <div className="goal flex flex-col justify-between">
                  <p className="text-sm sm:text-base md:text-lg">Goal:</p>
                  <p className="text-lg sm:text-xl md:text-2xl font-bold py-1 sm:py-2 md:py-3">${goalAmount}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectOfTheWeek;
