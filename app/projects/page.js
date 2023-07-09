"use client"
import React, { useState } from 'react';
import ProjectOfTheWeek from '../Components/ProjectOfTheWeek/ProjectOfTheWeek';
import Categories from '../Components/Projects/Categories';
import Cards from '../Components/Projects/Cards';
import projects from '../data/projectData';
import Loading from '../Components/Projects/Loading';

const Page = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  // Filter projects based on the selected category
  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter((project) => project.category === selectedCategory);

  return (
    <>
      <ProjectOfTheWeek />
      
      {/* Check if projects data is available */}
      {projects ? (
        <div className=" ">
          {/* Render other components */}
          <Categories selectedCategory={selectedCategory} handleCategoryChange={handleCategoryChange} />
          <Cards projects={filteredProjects} />
        </div>
      ) : (
        <Loading /> // Display the Loading component if projects data is not available
      )}
    </>
  );
};

export default Page;
