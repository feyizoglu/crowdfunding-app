import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const SuccessPage = () => {
  return (
    <div className='container mx-auto px-4 flex flex-col h-screen items-center justify-center'>
      <Image
                    src="/thankyou.png"
                    width={1000}
                    height={1000}
                    alt='donationImage'
                    className='mx-auto pt-10'
                  />
        <div className='pb-10'>
            <h1 className=' text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-center'>Thank you!</h1>
            <h2 className='text-2xl font-bold mb-2 text-center'>for supporting us!</h2>
        </div>
      <div className='donation-buttons flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center text-center'>
        <Link href="/projects" className='button-light'>
            Make another donation
        </Link>
        <Link href="/" className='px-10 button-light'>
          Go to home page
        </Link>
      </div>
    </div>
  );
};

export default SuccessPage;
