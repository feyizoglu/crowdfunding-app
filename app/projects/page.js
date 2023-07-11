"use client"
import React, { useState } from 'react';
import ProjectOfTheWeek from '../Components/ProjectOfTheWeek/ProjectOfTheWeek';
import Categories from '../Components/Projects/Categories';
import Cards from '../Components/Projects/Cards';
import projects from '../data/projectData';

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
      <div className='bg-whiteColor'>
        <ProjectOfTheWeek />
        <div>
          <Categories
            selectedCategory={selectedCategory}
            handleCategoryChange={handleCategoryChange}
          />
          <Cards projects={filteredProjects} />
        </div>
      </div>
    );
  };
  export default Page;
