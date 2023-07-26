import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import InfoBox from '../InfoBox/InfoBox';
import { setShowInfoBox, setShowKickOffBox, setSearchInputVal, setCloseKickOffBox } from '@/app/redux/features/authSlice';

const style = {
  container: `relative flex items-center space-x-6`,
  headerLinks: `font-medium hover:opacity-60`,
  button: `button-dark hover:bg-transparent text-center text-sm lg:text-lg`,
  userContainer: `flex w-[50px] h-[50px]`,
  userImage: `rounded-full hover:opacity-80 cursor-pointer`,
  InfoBoxContainer: `absolute flex flex-col top-16 right-0 py-2 px-6 rounded-md bg-grayishColor text-blackColor text-[12px] shadow-lg`,
  infoBoxLinks: `flex items-center w-[130px] gap-1 font-medium hover:opacity-60`,
  infoBoxUserName: `flex items-center gap-1 font-medium cursor-default capitalize `,
  infoBoxEmail: `flex items-center gap-1 font-medium cursor-default `,
  userInfos: `flex flex-col items-start py-2 px-1 border-b border-blackColor space-y-2`,
  userFeatures: `flex flex-col items-start  px-1 py-2 space-y-2`,
  infoBoxPointer: `absolute top-16 right-4`,
}

function NavbarWithUser() {
  const [isUserHaveProject, setIsUserHaveProject] = useState(false);
  const showInfoBox = useSelector((state) => state.auth.showInfoBox)
  const user = useSelector(state => state.auth.user);
  const projects = useSelector(state => state.auth.projects);
  const profilPic = useSelector(state => state.auth.profilPic);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsUserHaveProject(projects.some(project => project.id === user.id));
  }, [projects, user])

  useEffect(() => {
    if (isUserHaveProject) {
      dispatch(setCloseKickOffBox(false))
    }
  }, [isUserHaveProject, dispatch])

  const handleNewProjectClick = () => {
    if (isUserHaveProject) {
      toast.error(`Existing active project under ${user?.email}. Wait or delete it before creating a new one.`, {
        position: toast.POSITION.BOTTOM_RIGHT
      });
    } else {
      setTimeout(() => {
        dispatch(setShowKickOffBox())
      }, 1);
    }
  }

  const handleInfoBoxClick = () => {
    dispatch(setSearchInputVal(''))
    setTimeout(() => {
      dispatch(setShowInfoBox());
    }, 1)
  }

  const handleLinkClicks = () => {
    dispatch(setSearchInputVal(''))
  }

  return (
    <div className={style.container}>
      <Link onClick={handleLinkClicks} className={style.headerLinks} href="/">
        Home
      </Link>
      <Link onClick={handleLinkClicks} className={style.headerLinks} href="/projects">
        Projects
      </Link>
      {!isUserHaveProject &&
        <button onClick={handleNewProjectClick} className={style.button}>
          New Project
        </button>}
      <div className={style.userContainer}>
        <Image
          onClick={handleInfoBoxClick}
          className={style.userImage}
          src={profilPic ? profilPic : `https://via.placeholder.com/150/0A0A0A/FAFAFA?text=${user.email[0].toUpperCase()}`}
          width={50}
          height={50}
          alt="Picture of the user"
        />
        {showInfoBox && <InfoBox style={style} />}
      </div>
    </div>
  );
}

export default NavbarWithUser;
