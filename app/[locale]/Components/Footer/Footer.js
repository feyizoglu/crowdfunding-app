'use client'
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux'
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
import { FaCopyright } from 'react-icons/fa';
import Image from 'next/image';
import { setSelectedLink } from '@/app/redux/features/authSlice';


function Footer() {
  const projects = useSelector(state => state.auth.projects);
  const dispatch = useDispatch();

  return (
    <footer className="bg-greenColor pt-5 md:pt-10 text-center md:text-left">
      <div className="container mx-auto px-4">
        <div className='border-b border-whiteColor pb-5 md:pb-10"'>
          <div className="grid grid-cols-1  md:grid-cols-3 gap-5 md:gap-10">
            <div className="firstcolumn flex flex-col">
              <h1 className='font-semibold text-l sm:text-xl md:text-2xl py-4'>
                Givingly
              </h1>
              <p className=''>
                Join our vibrant community of changemakers and be a part of the crowdfunding revolution. Together, we can make a difference and turn ideas into reality.
              </p>
              <div className='icons flex py-10 space-x-5 md:space-x-8 justify-center md:justify-start'>
                <Link href='#' className="flex hover:opacity-60">
                  <FaInstagram className="text-3xl" />
                </Link>
                <Link href='#' className="flex hover:opacity-60">
                  <FaFacebook className="text-3xl" />
                </Link>
                <Link href='#' className="flex hover:opacity-60">
                  <FaTwitter className="text-3xl" />
                </Link>
              </div>
            </div>
            <div className="secondcolumn">
              <h1 className='font-semibold text-l sm:text-xl md:text-2xl py-4'>
                Projects
              </h1>
              <div>
                {projects.slice(0, 2).map((project) => (
                  <Link onClick={() => {dispatch(setSelectedLink('Projects'))}} href={`/projects/${project.docId}`} key={project.id} className="flex items-center mb-4 ease-in duration-200 hover:scale-105">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={75}
                      height={50}
                      className="rounded-lg shadow-lg w-[75px] h-[50px]"
                    />
                    <h3 className="font-semibold ml-2">{project.title}</h3>
                  </Link>
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