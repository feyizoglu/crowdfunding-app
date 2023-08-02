
'use client'
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useDispatch } from 'react-redux';
import { setShowSignInBox, setSearchInputVal } from '@/app/redux/features/authSlice';

const style = {
  container: `flex items-center space-x-6`,
  headerButton: `button-dark text-center text-lg md:text-sm lg:text-lg hover:bg-transparent`,
};

function DefaultNavbar({ defaultLink, activeLink, selectedLink }) {
  const dispatch = useDispatch();
  const t = useTranslations('DefaultNavbar');

  const handleLinkClicks = () => {
    dispatch(setSearchInputVal(''))
  }

  return (
    <div className={style.container}>
      <Link
        onClick={handleLinkClicks}
        className={selectedLink === '/' || selectedLink === '/tr'  ? activeLink : defaultLink}
        href="/"
      >
        {t('Home')}
      </Link>
      <Link
        onClick={handleLinkClicks}
        className={selectedLink === '/projects' || selectedLink === '/tr/projects'  ? activeLink : defaultLink}
        href="/projects"
      >
        {t('Projects')}
      </Link>
      <Link
        href='/'
        onClick={() => {
          setTimeout(() => {
            dispatch(setShowSignInBox());
          }, 1)
        }}
        className={style.headerButton}
      >
        {t('Sign In')}
      </Link>
    </div >
  );
}

export default DefaultNavbar;
