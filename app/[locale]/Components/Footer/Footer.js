'use client'
import Link from 'next/link';
import { useSelector } from 'react-redux'
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
import { FaCopyright } from 'react-icons/fa';
import Image from 'next/image';


function Footer() {
  const projects = useSelector(state => state.auth.projects);

  return (
    <footer className="bg-greenColor pt-5 md:pt-10 text-center md:text-left text-blackColor">
      <div className="container mx-auto px-4">
        <div className='border-b border-whiteColor pb-5 md:pb-10"'>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10">
            <div className="firstcolumn flex flex-col order-3 md:order-1">
              <h1 className='font-semibold text-l sm:text-xl md:text-2xl py-4'>
                Givingly
              </h1>
              <p className=''>
                Join our vibrant community of changemakers and be a part of the crowdfunding revolution. Together, we can make a difference and turn ideas into reality.
              </p>
              <div className='icons flex py-10 space-x-5 md:space-x-8 justify-center  md:justify-start'>
                <Link href='https://www.instagram.com/explore/tags/crowdfunding/' target='blank' className="flex hover:opacity-60">
                  <FaInstagram className="text-3xl" />
                </Link>
                <Link href='https://www.facebook.com/groups/2903714209899706/' target='blank' className="flex hover:opacity-60">
                  <FaFacebook className="text-3xl" />
                </Link>
                <Link href='https://twitter.com/crowdfunding' target='blank' className="flex hover:opacity-60">
                  <FaTwitter className="text-3xl" />
                </Link>
              </div>
            </div>
            <div className="secondcolumn order-2">
              <h1 className='font-semibold text-l sm:text-xl md:text-2xl py-4'>
                Projects
              </h1>
              <div className='flex flex-col space-y-6 items-center md:items-start'>
                {projects.slice(0, 2).map((project) => (
                  <Link href={`/projects/${project.docId}`} key={project.id} className="flex items-center space-x-3 ease-in duration-200 hover:scale-105 ">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={70}
                      height={50}
                      className="rounded-lg shadow-lg w-[70px] h-[50px] object-fill "
                    />
                    <h3 className="font-semibold">{project.title}</h3>
                  </Link>
                ))}
              </div>
            </div>
            <div className="thirdcolumn order-1 md:order-3">
              <h1 className='font-bold text-l sm:text-xl md:text-2xl py-4'>
                Our Story
              </h1>
              <p >
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