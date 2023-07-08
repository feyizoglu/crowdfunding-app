import Link from 'next/link';
import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';

import InfoBox from '../InfoBox/InfoBox';
import { setShowInfoBox } from '@/app/redux/features/authSlice';

const style = {
  container: `relative flex items-center space-x-6`,
  headerLinks: `font-medium hover:opacity-60`,
  button: `button-dark hover:bg-transparent text-center text-sm lg:text-lg`,
  userContainer: `flex`,
  userImage: `rounded-full  hover:opacity-80`,
  InfoBoxContainer: `absolute flex flex-col top-16 right-0 py-2 px-6 rounded-md bg-grayishColor text-blackColor text-[12px] shadow-lg`,
  infoBoxLinks: `flex items-center gap-1 font-medium hover:opacity-60`,
  infoBoxPTags: `flex items-center gap-1 font-medium cursor-default `,
  userInfos: `flex flex-col items-start py-1  px-1 border-b border-blackColor `,
  userFeatures: `flex flex-col mt-1 `,
  infoBoxPointer: `absolute top-16 right-3`,
}


function NavbarWithUser() {
  const showInfoBox = useSelector((state) => state.auth.showInfoBox)
  const dispatch = useDispatch();

  return (
    <div className={style.container}>
      <Link className={style.headerLinks} href="/">
        Home
      </Link>
      <Link className={style.headerLinks} href="/projects">
        Projects
      </Link>
      <Link className={style.button} href="#">
        New Project
      </Link>
      <div className={style.userContainer}>
        <Link onClick={() => dispatch(setShowInfoBox())} href='#'>
          <Image
            className={style.userImage}
            src="/user.png"
            width={45}
            height={45}
            alt="Picture of the user"
          />
        </Link>
        {showInfoBox && <InfoBox style={style} />}
      </div>
    </div>
  );
}

export default NavbarWithUser;
