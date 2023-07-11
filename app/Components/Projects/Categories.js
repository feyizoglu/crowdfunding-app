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
                <h1 className="projects__title text-center text-4xl sm:text-5xl md:text-6xl font-bold mb-4 pb-10 sm:text-start">Categories</h1>
          </header>
        <div className="cat-buttons flex justify-center sm:justify-start space-x-5 flex-wrap">
          <div className="flex flex-col items-center">
            <button
              className={`category-button ${selectedCategory === 'all' ? `bg-blackColor text-whiteColor` : ''} px-4 py-4 hover:bg-blackColor hover:text-whiteColor  border border-grayishColor focus:ring-4 focus:outline-none focus:ring-grayishColor font-medium rounded-lg text-sm text-center mr-2 mb-2   `}
              onClick={() => handleCategoryChange('all')}
            >
              <TfiWorld size={20} />
            </button>
            <p className="text-center">All</p>
          </div>
          <div className="flex flex-col items-center">
            <button
              className={`category-button ${selectedCategory === 'education' ? `bg-blackColor text-whiteColor` : ''} px-4 py-4 hover:bg-blackColor hover:text-whiteColor   border border-grayishColor focus:ring-4 focus:outline-none focus:ring-grayishColor font-medium rounded-lg text-sm text-center mr-2 mb-2  `}
              onClick={() => handleCategoryChange('education')}
            >
              <FaGraduationCap size={20} />
            </button>
            <p className="text-center">Education</p>
          </div>
          <div className="flex flex-col items-center">
            <button
              className={`category-button ${selectedCategory === 'culture' ?  `bg-blackColor text-whiteColor` : ''} px-4 py-4 hover:bg-blackColor hover:text-whiteColor   border border-grayishColor focus:ring-4 focus:outline-none focus:ring-grayishColor font-medium rounded-lg text-sm text-center mr-2 mb-2  `}
              onClick={() => handleCategoryChange('culture')}
            >
              <FaTheaterMasks size={20} />
            </button>
            <p className="text-center">Culture</p>
          </div>
          <div className="flex flex-col items-center">
            <button
              className={`category-button ${selectedCategory === 'animals' ?  `bg-blackColor text-whiteColor` : ''} px-4 py-4 hover:bg-blackColor hover:text-whiteColor   border border-grayishColor focus:ring-4 focus:outline-none focus:ring-grayishColor font-medium rounded-lg text-sm text-center mr-2 mb-2  `}
              onClick={() => handleCategoryChange('animals')}
            >
              <IoIosPaw size={20}  />
            </button>
            <p className="text-center">Animals</p>
          </div>
          <div className="flex flex-col items-center">
            <button
              className={`category-button ${selectedCategory === 'children' ?  `bg-blackColor text-whiteColor` : ''} px-4 py-4 hover:bg-blackColor hover:text-whiteColor border border-grayishColor focus:ring-4 focus:outline-none focus:ring-grayishColor font-medium rounded-lg text-sm text-center mr-2 mb-2  `}
              onClick={() => handleCategoryChange('children')}
            >
              <FaBaby size={20} />
            </button>
            <p className="text-center">Children</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
