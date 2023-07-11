import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const SuccessPage = () => {
  return (
    <div className='container mx-auto px-4 flex flex-col'>
      <Image
                    src="/donation.jpg"
                    width={500}
                    height={500}
                    alt='donationImage'
                    className='mx-auto pb-10 pt-10'
                  />
        <div className='py-10'>
            <h1 className=' text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-center'>Thank you!</h1>
            <h2 className='text-2xl font-bold mb-2 text-center'>for supporting us!</h2>
        </div>
      <div className='donation-buttons flex space-x-4 justify-center pb-20'>
        <Link href="/projects" className='px-5 py-2 hover:bg-blackColor hover:text-whiteColor border border-grayishColor focus:ring-4 focus:outline-none focus:ring-grayishColor font-medium rounded-lg text-sm text-center mr-2 mb-2'>
            Make another donation
        </Link>
        <button disabled className='px-10 py-2 hover:bg-blackColor hover:text-whiteColor  border border-grayishColor focus:ring-4 focus:outline-none focus:ring-grayishColor font-medium rounded-lg text-sm text-center mr-2 mb-2  '>
          Go to home page
        </button>
      </div>
    </div>
  );
};

export default SuccessPage;
