'use client'
import React from 'react';
import { useSelector } from 'react-redux'
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
import { FaCopyright } from 'react-icons/fa';
import Image from 'next/image';


function Footer() {
    const projects = useSelector(state => state.auth.projects);

    return (
        <footer className="bg-greenColor pt-5 md:pt-10 text-center sm:text-left">
            <div className="container mx-auto px-4">
            <div className='border-b border-whiteColor pb-5 md:pb-10"'>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10">
                        <div className="firstcolumn flex flex-col">
                            <h1 className='font-semibold text-l sm:text-xl md:text-2xl py-4'>
                            Givingly
                            </h1>
                            <p className=''>
                            Join our vibrant community of changemakers and be a part of the crowdfunding revolution. Together, we can make a difference and turn ideas into reality.                
                            </p>
                            <div className='icons flex py-10 space-x-5 md:space-x-8 justify-center sm:justify-start'>
                                    <div className="flex">
                                    <FaInstagram className="text-3xl" />
                                    </div>
                                    <div className="flex">
                                    <FaFacebook className="text-3xl" />
                                    </div>
                                    <div className="flex">
                                    <FaTwitter className="text-3xl" />
                                    </div>
                            </div>     
                        </div>
                        <div className="secondcolumn">
                            <h1 className='font-semibold text-l sm:text-xl md:text-2xl py-4'>
                                Projects
                            </h1>
                            <div>
                                 {projects.slice(0, 2).map((project) => (
                                <div key={project.key} className="flex items-center mb-4">
                                    <Image
                                    src={project.image}
                                    alt={project.title}
                                    width={75}
                                    height={75}
                                    className="rounded-lg shadow-lg"
                                    />
                                    <h3 className="font-semibold ml-2">{project.title}</h3>
                                </div>
                                ))}
                            </div>
                        </div>
                        <div className="thirdcolumn ">
                        <h1 className='font-bold text-l sm:text-xl md:text-2xl py-4'>
                            Our Story
                            </h1>
                            <p className=''>
                            We connect passionate individuals and innovative projects with a community of backers. Our user-friendly platform empowers creators to raise funds and engage with supporters. Join us in bringing visions to life.
                            </p>
                        </div>
                </div>
            </div>
            <p className='text-center py-8'>
                    <FaCopyright className="inline-block mr-2" />
                    2023 All rights reserved.
            </p>
            </div>
      </footer>

  )
}

export default Footer