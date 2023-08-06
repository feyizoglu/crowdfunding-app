'use client'
import { useDispatch } from "react-redux";
import { setCloseMobileNav } from "@/app/redux/features/authSlice";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from 'next-intl';

const HeroSection = () => {
  const dispatch = useDispatch();
  const t = useTranslations('HeroSection')

  return (
    <div className="bg-greenColor pt-[70px] z-0">
      <div className="relative container mx-auto px-4  py-16  flex flex-col items-center justify-center md:py-0  md:flex-row md:justify-start md:h-screen-70">
        <div className="flex flex-col w-3/5 text-center text-blackColor space-y-10  md:text-left md:w-1/2 lg:w-1/3 z-10">
          <h1 className="text-5xl font-semibold text-blackColor md:text-[100px]">
            Givingly
          </h1>
          <p className="text-[32px] font-semibold text-blackColor  ">
            {t('Supporting great causes made easy')}
          </p>
          <p className="font-medium text-[18px] text-blackColor">
            {t('We helped over 3,500 projects and causes Sign in today and get your idea kicked off or support others kick off their amazing projects')}
          </p>
          <div className="md:mr-4">
            <Link
              onClick={() => {
                dispatch(setCloseMobileNav())
              }}
              href='/starttoday'
              className="button-dark py-1.5 w-full "
            >
              {t('Start Today')}
            </Link>
          </div>
        </div>
        <div>
          <Image
            src="/background.png"
            alt="Background image"
            height={1200}
            width={1200}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
