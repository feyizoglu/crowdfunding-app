import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useTranslations } from 'next-intl';
import { toast } from 'react-toastify';

import InfoBox from '../InfoBox/InfoBox';
import { setShowInfoBox, setShowKickOffBox, setSearchInputVal, setSelectedLink } from '@/app/redux/features/authSlice';

const style = {
  container: `relative flex items-center space-x-6`,
  button: `button-dark hover:bg-transparent text-center text-sm lg:text-lg`,
  userContainer: `flex w-[50px] h-[50px]`,
  userImage: `rounded-full hover:opacity-80 cursor-pointer`,
  InfoBoxContainer: `absolute flex flex-col top-16 right-0 py-2 px-6 rounded-md bg-grayishColor text-blackColor text-[12px] shadow-lg`,
  infoBoxLinks: `flex items-center w-[150px] gap-1 font-medium hover:opacity-60`,
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
  const selectedLink = useSelector(state => state.auth.selectedLink)
  const dispatch = useDispatch();
  const t = useTranslations('NavbarWithUser')

  useEffect(() => {
    const savedLink = localStorage.getItem('selectedItem');
    if (savedLink) {
      dispatch(setSelectedLink(savedLink))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('selectedItem', selectedLink)
  }, [selectedLink])

  useEffect(() => {
    setIsUserHaveProject(projects.some(project => project.id === user.id));
  }, [projects, user])

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

  const handleLinkClicks = (e) => {
    dispatch(setSearchInputVal(''))
    dispatch(setSelectedLink(e.target.textContent))
  }

  return (
    <div className={style.container}>
      <Link onClick={handleLinkClicks} className={selectedLink === t('Home') ? style.activeLink : style.headerLinks} href="/">
        {t('Home')}
      </Link>
      <Link onClick={handleLinkClicks} className={selectedLink === t('Projects') ? style.activeLink : style.headerLinks} href="/projects">
        {t('Projects')}
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
