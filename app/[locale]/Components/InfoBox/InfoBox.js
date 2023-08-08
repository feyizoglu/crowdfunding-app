import Link from 'next/link';
import { useSelector } from 'react-redux';
import { auth } from '@/app/firebase/firebase-confing';
import { signOut } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslations } from 'next-intl';
import { setShowInfoBox, setShowMobilNav, setCloseMobileNav, setCloseInfoBox } from '@/app/redux/features/authSlice';
import { toast } from 'react-toastify';

import { BiUser, BiUserX } from 'react-icons/bi'
import { HiOutlineMail } from 'react-icons/hi'
import { RiProfileLine } from 'react-icons/ri'

function InfoBox({ style }) {
  const user = useSelector(state => state.auth.user);
  const projects = useSelector(state => state.auth.projects);
  const router = useRouter();
  const t = useTranslations('InfoBox')

  const dispatch = useDispatch();
  const infoRef = useRef();

  useEffect(() => {
    window.addEventListener('click', handleOutBoxClick);

    return () => {
      window.removeEventListener('click', handleOutBoxClick)
    }
  }, [])

  const handleOutBoxClick = (e) => {
    if (!infoRef.current.contains(e.target)) {
      dispatch(setShowInfoBox());
    }
  }

  const signOutHandler = async () => {
    await signOut(auth);
    router.push('/');
    dispatch(setCloseInfoBox(false))
    dispatch(setCloseMobileNav())
  }

  const viewProjectClickHandler = () => {
    let isUserHaveProject = projects.find(project => project.id === user.id);
    if (isUserHaveProject) {
      dispatch(setShowInfoBox());
      dispatch(setShowMobilNav());
      router.push('/myproject');
    } else {
      toast.error(
        `${t("Oops! You don't have any projects yet")}.
      ${t("Please create a project first to access the 'My Project' page")}.
      ${t("Click 'New Project' to create a new project")}.`,
        {
          position: toast.POSITION.BOTTOM_RIGHT,
        }
      );
    }
  }

  return (
    <div className='relative'>
      <section ref={infoRef} className={style.InfoBoxContainer}>
        <div className={`${style.userInfos}`}>
          <p className={style.infoBoxUserName} >
            <BiUser size={15} />
            {user.email.split('@')[0].replace(/[0-9]/g, '')}
          </p>
          <p className={style.infoBoxEmail} >
            <HiOutlineMail size={15} />
            {user.email}
          </p>
        </div>
        <div className={style.userFeatures}>
          <button onClick={viewProjectClickHandler} className={`${style.infoBoxLinks}`} >
            <RiProfileLine size={15} />
            {t('View your project')}
          </button>
          <button onClick={signOutHandler} className={style.infoBoxLinks}>
            <BiUserX size={15} />
            {t('Sign out')}
          </button>
        </div>
      </section>
      <div className={style.infoBoxPointer}>
        <div className="w-3 h-3 bg-grayishColor transform rotate-45 origin-top-right "></div>
      </div>
    </div>
  )
}

export default InfoBox;
