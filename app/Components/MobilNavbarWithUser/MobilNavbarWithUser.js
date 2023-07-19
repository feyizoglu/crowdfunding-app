'use client'
import Link from 'next/link';
import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { setShowInfoBox, setShowKickOffBox, setShowMobilNav } from '@/app/redux/features/authSlice';
import NavbarSearchInput from '../NavbarSearchInput/NavbarSearchInput';
import InfoBox from '../InfoBox/InfoBox';

function MobilNavbarWithUser({ bgColor }) {
  const showInfoBox = useSelector((state) => state.auth.showInfoBox);
  const user = useSelector(state => state.auth.user)
  const projects = useSelector(state => state.auth.projects);
  const profilPic = useSelector(state => state.auth.profilPic)
  const dispatch = useDispatch();

  const style = {
    container: `fixed top-[69px] left-1/2 -translate-x-1/2 w-full bg-greenColor flex flex-col space-y-3 py-5 items-center md:hidden z-50 ${bgColor && `bg-greenTransparent`}`,
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

  const handleNewProjectClick = () => {
    dispatch(setShowMobilNav())
    const isUserHaveProject = projects.find(project => project.id === user.id)
    if (isUserHaveProject) {
      let username = user?.email.split('@')[0];
      toast.error(`Existing active project under ${username}. Wait or delete it before creating a new one.`, {
        position: toast.POSITION.BOTTOM_RIGHT
      });
    } else {
      setTimeout(() => {
        dispatch(setShowKickOffBox())
      }, 1)
    }
  }

  const handleLinkClicks = () => {
    dispatch(setShowMobilNav())
  }

  const handleInfoBoxClick = () => {
    setTimeout(() => {
      dispatch(setShowInfoBox())
    }, 1)
  }

  return (
    <div className={style.container}>
      <div className={style.userContainer}>
        <Image
          className='rounded-full'
          onClick={handleInfoBoxClick}
          src={profilPic ? profilPic : '/user.png'}
          width={50}
          height={50}
          alt="Picture of the user"
        />
        {showInfoBox && <InfoBox style={style} />}
      </div>
      <NavbarSearchInput style={style} placeholder='Search for projects..' />
      <Link onClick={handleLinkClicks} className={style.headerLinks} href="/">
        Home
      </Link>
      <Link onClick={handleLinkClicks} className={style.headerLinks} href="/projects">
        Projects
      </Link>
      <button onClick={handleNewProjectClick} className={style.button}>
        New Project
      </button>
    </div>
  );
}

export default MobilNavbarWithUser;
