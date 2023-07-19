import React from "react";
import Image from "next/image";
import Link from "next/link";

const Cards = ({ projects }) => {
  if (projects.length === 0) {
    return <div className="text-center text-4xl pb-20">No projects available in this category</div>;
  };

  return (
    <div className="projects-part container mx-auto place-content-center pb-20 px-12 grid gap-8 md:gap-6 xl:gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {projects.map((project) => (
        <div
          key={project.id}
          className="w-full bg-whiteColor border border-grayishColor rounded-lg shadow "
        >
          <div className="img-container flex flex-col justify-center items-center bg-grayishColor rounded-lg border-0">
            <Link href={`/projects/${project.docId}`}>
              <div className="image-wrapper flex justify-center items-center ">
                <Image
                  alt={project.title}
                  src={project.image}
                  width={500}
                  height={500}
                  className="rounded-lg"
                />
              </div>
            </Link>
          </div>
          <div className="p-5">
            <Link href={`/projects/${project.docId}`}>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-blackColor">
                {project.title}
              </h5>
            </Link>
            <div className="progress-bar flex flex-col justify-between">
              <div className="h-4 bg-grayishColor rounded-lg">
                <div
                  className="h-full rounded-lg bg-greenColor"
                  style={{
                    width: `${(project.moneyRaised / project.goalAmount) * 100
                      }%`,
                  }}
                />
              </div>
              <div className="flex justify-between">
                <div className="raised flex flex-col justify-between">
                  <p className="text-sm  md:text-lg mt-1.5 ">Raised:</p>
                  <p className="text-md  font-semibold  py-2 ">
                    ${project.moneyRaised}
                  </p>
                </div>
                <div className="goal flex flex-col justify-between">
                  <p className="text-sm  md:text-lg mt-1.5">Goal:</p>
                  <p className="text-md  font-semibold  py-2 ">
                    ${project.goalAmount}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
