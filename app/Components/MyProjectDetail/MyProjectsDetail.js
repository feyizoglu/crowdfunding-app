import React from "react";
import Image from "next/image";

const MyProjectDetails = ({ project }) => {
  return (
    <div key={0} className="space-y-10">
      <h1 className="text-blackColor font-bold text-center text-4xl xl:text-[64px] lg:text-6xl md:text-left md:text-5xl">
        My Project
      </h1>
      <h2 className="text-blackColor text-xl text-center font-bold md:text-left">
        {project?.title}
      </h2>
      <div className="flex items-center justify-center ">
        <Image
          className="rounded-lg"
          src={project?.image ? project?.image : `https://placehold.co/600x400/D4EE25/FAFAFA.png`}
          alt='project image'
          width={500}
          height={500}
          priority
        />
      </div>
      <p className="text-blackColor font-semibold text-center  md:text-left ">
        {project?.description}
      </p>
    </div>
  );
};

export default MyProjectDetails;
