import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Cards = ({ projects }) => {
  return (

<div className="projects-part container mx-auto place-content-center pb-20 px-12 grid gap-8 md:gap-6 xl:gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {projects.map((project) => (
        <div
          key={project.id}
          className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 "
        >
          <div className="img-container flex flex-col justify-center items-center bg-grayishColor rounded-lg border-0">
            <Link href={`/project-details/${project.id}`}>
              <div className="image-wrapper flex justify-center items-center">
                <Image src={project.image} width={500} height={500} />
              </div>
            </Link>
          </div>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {project.title}
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{project.description}</p>

            {/* Progress bar */}
            <div className="progress-bar flex flex-col justify-between">
              <div className="h-4 bg-grayishColor rounded-lg">
                <div
                  className="h-full rounded-lg bg-greenColor"
                  style={{ width: `${(project.moneyRaised / project.goalAmount) * 100}%` }}
                />
              </div>
              <div className="flex justify-between">
                <div className="raised flex flex-col justify-between">
                  <p className="text-sm sm:text-base md:text-lg">Raised:</p>
                  <p className="text-lg sm:text-xl md:text-2xl font-bold py-1 sm:py-2 md:py-3">${project.moneyRaised}</p>
                </div>
                <div className="goal flex flex-col justify-between">
                  <p className="text-sm sm:text-base md:text-lg">Goal:</p>
                  <p className="text-lg sm:text-xl md:text-2xl font-bold py-1 sm:py-2 md:py-3">${project.goalAmount}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      )
      )}
</div>

  );
};

export default Cards;