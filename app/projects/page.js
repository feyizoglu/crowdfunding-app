"use client"
import { useState, useEffect } from 'react';
import ProjectOfTheWeek from '../Components/ProjectOfTheWeek/ProjectOfTheWeek';
import Categories from '../Components/Projects/Categories';
import Cards from '../Components/Projects/Cards';
import { useSelector } from 'react-redux';

const Page = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const projects = useSelector(state => state.auth.projects);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className='bg-whiteColor'>
      <div className='mt-[70px]'>
        <ProjectOfTheWeek />
      </div>
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
