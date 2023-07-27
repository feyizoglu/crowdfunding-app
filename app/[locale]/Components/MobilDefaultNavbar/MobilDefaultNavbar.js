import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { setShowSignInBox, setShowMobilNav, setSearchInputVal, setSelectedLink } from '@/app/redux/features/authSlice';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';

import NavbarSearchInput from '../NavbarSearchInput/NavbarSearchInput';

function MobilDefaultNavbar({ bgColor, activeLink, linkStyle }) {
  const selectedLink = useSelector(state => state.auth.selectedLink);
  const dispatch = useDispatch();
  const router = useRouter();
  const t = useTranslations('MobilDefaultNavbar');

  const signInClickHandler = () => {
    router.push('/')
    dispatch(setShowMobilNav())
    setTimeout(() => {
      dispatch(setShowSignInBox())
    }, 1);
  }

  const hadnleLinkClicks = (e) => {
    dispatch(setSearchInputVal(''));
    dispatch(setShowMobilNav());
    dispatch(setSelectedLink(e.target.textContent))
  }

  const style = {
    container: `fixed left-1/2 -translate-x-1/2 top-[69px] bg-greenColor flex flex-col items-center w-full space-y-3 md:hidden py-3 z-50 ${bgColor && `bg-greenTransparent`}`,
    headerButton: `button-dark hover:bg-transparent`,
    headerInput: `rounded-needed outline-0 py-1 px-4 `,
  };

  return (
    <div className='container mx-auto'>
      <div className={style.container}>
        <NavbarSearchInput style={style} placeholder={t('Search for projects')} />
        <Link onClick={hadnleLinkClicks} className={selectedLink === t('Home') ? activeLink : linkStyle} href="/">
          {t('Home')}
        </Link>
        <Link onClick={hadnleLinkClicks} className={selectedLink === t('Projects') ? activeLink : linkStyle} href="/projects">
          {t('Projects')}
        </Link>
        <button
          onClick={signInClickHandler}
          className={style.headerButton}
        >
          {t('Sign In')}
        </button>
      </div>
    </div>
  );
}

export default MobilDefaultNavbar;
