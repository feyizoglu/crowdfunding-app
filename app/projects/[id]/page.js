import React from "react";
import Image from "next/image";
import projects from "@/app/data/projectData";

function Page({ params }) {
  const selectedProject = projects.filter((project) => {
    return project.id == params.id;
  })[0];
  console.log(selectedProject, "------------");

  return (
    <div>
      <Image
        alt={selectedProject.title}
        src={selectedProject.image}
        width={500}
        height={500}
      />
      <h1>{selectedProject.title}</h1>
      <h2>{selectedProject.creator}</h2>
      <div>
        <h1>About project</h1>
        <p>{selectedProject.description}</p>
      </div>

      <button className="button-dark mt-5 w-full">Fund This Project</button>
    </div>
  );
}

export default Page;
