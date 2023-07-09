import React from 'react';
import { TfiWorld } from 'react-icons/tfi';
import { FaGraduationCap } from 'react-icons/fa';
import { FaTheaterMasks } from 'react-icons/fa';
import { IoIosPaw } from 'react-icons/io';
import { FaBaby } from 'react-icons/fa';

const Categories = ({ selectedCategory, handleCategoryChange }) => {
  return (
    <div className="container mx-auto place-content-center pb-5rem pb-20 px-12">
      <div className="categories-part flex flex-col justify-between">
          <header>
                <h1 className="projects__title text-4xl sm:text-5xl md:text-6xl font-bold mb-4 pb-10">Categories</h1>
          </header>
        <div className="cat-buttons flex justify-center sm:justify-start space-x-5 flex-wrap">
          <div className="flex flex-col items-center">
            <button
              className={`category-button ${selectedCategory === 'all' ? 'selected' : ''} px-4 py-4 whiteColor hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800rounded`}
              onClick={() => handleCategoryChange('all')}
            >
              <TfiWorld className="w-8 h-8" />
            </button>
            <p className="text-center">All</p>
          </div>
          <div className="flex flex-col items-center">
            <button
              className={`category-button ${selectedCategory === 'education' ? 'selected' : ''} px-4 py-4 whiteColor hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800rounded`}
              onClick={() => handleCategoryChange('education')}
            >
              <FaGraduationCap className="w-8 h-8" />
            </button>
            <p className="text-center">Education</p>
          </div>
          <div className="flex flex-col items-center">
            <button
              className={`category-button ${selectedCategory === 'culture' ? 'selected' : ''} px-4 py-4 whiteColor hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800rounded`}
              onClick={() => handleCategoryChange('culture')}
            >
              <FaTheaterMasks className="w-8 h-8" />
            </button>
            <p className="text-center">Culture</p>
          </div>
          <div className="flex flex-col items-center">
            <button
              className={`category-button ${selectedCategory === 'animals' ? 'selected' : ''} px-4 py-4 whiteColor hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800rounded`}
              onClick={() => handleCategoryChange('animals')}
            >
              <IoIosPaw className="w-8 h-8" />
            </button>
            <p className="text-center">Animals</p>
          </div>
          <div className="flex flex-col items-center">
            <button
              className={`category-button ${selectedCategory === 'children' ? 'selected' : ''} px-4 py-4 whiteColor hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800rounded`}
              onClick={() => handleCategoryChange('children')}
            >
              <FaBaby className="w-8 h-8" />
            </button>
            <p className="text-center">Children</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
