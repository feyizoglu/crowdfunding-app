import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { setShowSignInBox, setShowMobilNav, setSearchInputVal } from '@/app/redux/features/authSlice';
import { useRouter } from 'next/navigation';

import NavbarSearchInput from '../NavbarSearchInput/NavbarSearchInput';

function MobilDefaultNavbar({ bgColor }) {
  const dispatch = useDispatch();
  const router = useRouter();

  const signInClickHandler = () => {
    router.push('/')
    dispatch(setShowMobilNav())
    setTimeout(() => {
      dispatch(setShowSignInBox())
    }, 1);
  }

  const hadnleLinkClicks = () => {
    dispatch(setSearchInputVal(''));
    dispatch(setShowMobilNav())
  }

  const style = {
    container: `fixed left-1/2 -translate-x-1/2 top-[69px] bg-greenColor flex flex-col items-center w-full space-y-3 md:hidden py-3 z-50 ${bgColor && `bg-greenTransparent`}`,
    headerLinks: `font-medium hover:opacity-60`,
    headerButton: `button-dark hover:bg-transparent`,
    headerInput: `rounded-needed outline-0 py-1 px-2 `,
  };

  return (
    <div className='container mx-auto'>
      <div className={style.container}>
        <NavbarSearchInput style={style} placeholder='Search for projects..' />
        <Link onClick={hadnleLinkClicks} className={style.headerLinks} href="/">
          Home
        </Link>
        <Link onClick={hadnleLinkClicks} className={style.headerLinks} href="/projects">
          Projects
        </Link>
        <button
          onClick={signInClickHandler}
          className={style.headerButton}
        >
          Sing In
        </button>
      </div>
    </div>
  );
}

export default MobilDefaultNavbar;
