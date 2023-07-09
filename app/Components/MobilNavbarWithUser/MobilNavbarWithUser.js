'use client'
import Link from 'next/link';
import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';

import { setShowInfoBox } from '@/app/redux/features/authSlice';
import NavbarSearchInput from '../NavbarSearchInput/NavbarSearchInput';
import InfoBox from '../InfoBox/InfoBox';

const style = {
  container: `flex flex-col space-y-3 py-3 items-center md:hidden`,
  headerLinks: `font-medium hover:opacity-60`,
  button: `button-dark hover:bg-transparent`,
  userContainer: `flex flex-col items-center space-y-1`,
  signOutButton: `flex space-x-[1px] items-center text-xs text-red-600 hover:opacity-60`,
  headerInput: `rounded-needed outline-0 py-1 px-2`,
  InfoBoxContainer: `flex flex-col mt-3 py-2 px-6 rounded-md bg-grayishColor text-blackColor text-[12px] shadow-lg`,
  infoBoxLinks: `flex items-center gap-1 font-medium hover:opacity-60`,
  infoBoxPTags: `flex items-center gap-1 font-medium cursor-default `,
  userInfos: `flex flex-col items-start py-2 px-1 border-b border-blackColor space-y-2`,
  userFeatures: `flex flex-col items-start  px-1 py-2 space-y-2`,
  infoBoxPointer: `absolute top-3 left-1/2 -translate-x-1`,
}


function MobilNavbarWithUser() {
  const showInfoBox = useSelector((state) => state.auth.showInfoBox);
  const dispatch = useDispatch();

  return (
    <div className={style.container}>
      <div className={style.userContainer}>
        <Link href='#'>
          <Image
            onClick={() => dispatch(setShowInfoBox())}
            src="/user.png"
            width={45}
            height={45}
            alt="Picture of the user"
          />
        </Link>
        {showInfoBox && <InfoBox style={style} />}
      </div>
      <NavbarSearchInput style={style} placeholder='Search for projects..' />
      <Link className={style.headerLinks} href="/">
        Home
      </Link>
      <Link className={style.headerLinks} href="/projects">
        Projects
      </Link>
      <Link className={style.button} href="#">
        New Project
      </Link>
    </div>
  );
}

export default MobilNavbarWithUser;
