import React from "react";
import Image from "next/image";

const MyProjectDetails = ({ project }) => {
  return (
    <div key={0} className="space-y-10">
      <h1 className="text-blackColor font-bold text-center text-4xl xl:text-[64px] lg:text-6xl md:text-left md:text-5xl">
        My Project
      </h1>
      <h2 className="text-blackColor text-xl text-center font-bold md:text-left">
        {project.title}
      </h2>
      <div className="flex items-center justify-center ">
        <Image
          src={project.image}
          alt={project.title}
          width={500}
          height={500}
        />
      </div>
      <p className="text-blackColor font-semibold text-center text-xl md:text-left md:text-xl lg:text-[32px]">
        {project.description}
      </p>
    </div>
  );
};

export default MyProjectDetails;
