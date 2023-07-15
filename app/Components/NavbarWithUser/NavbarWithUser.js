import Link from 'next/link';
import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';

import InfoBox from '../InfoBox/InfoBox';
import { setShowInfoBox, setShowKickOffBox } from '@/app/redux/features/authSlice';

const style = {
  container: `relative flex items-center space-x-6`,
  headerLinks: `font-medium hover:opacity-60`,
  button: `button-dark hover:bg-transparent text-center text-sm lg:text-lg`,
  userContainer: `flex`,
  userImage: `rounded-full  hover:opacity-80`,
  InfoBoxContainer: `absolute flex flex-col top-16 right-0 py-2 px-6 rounded-md bg-grayishColor text-blackColor text-[12px] shadow-lg`,
  infoBoxLinks: `flex items-center w-[130px] gap-1 font-medium hover:opacity-60`,
  infoBoxPTags: `flex items-center gap-1 font-medium cursor-default `,
  userInfos: `flex flex-col items-start py-2 px-1 border-b border-blackColor space-y-2`,
  userFeatures: `flex flex-col items-start  px-1 py-2 space-y-2`,
  infoBoxPointer: `absolute top-16 right-3`,
}

function NavbarWithUser() {
  const showInfoBox = useSelector((state) => state.auth.showInfoBox)
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setShowKickOffBox());
  }

  return (
    <div className={style.container}>
      <Link className={style.headerLinks} href="/">
        Home
      </Link>
      <Link className={style.headerLinks} href="/projects">
        Projects
      </Link>
      <button onClick={() => setTimeout(() => dispatch(setShowKickOffBox()), 1)} className={style.button}>
        New Project
      </button>
      <div className={style.userContainer}>
        <button onClick={() => dispatch(setShowInfoBox())}>
          <Image
            className={style.userImage}
            src="/user.png"
            width={45}
            height={45}
            alt="Picture of the user"
          />
        </button>
        {showInfoBox && <InfoBox style={style} />}
      </div>
    </div>
  );
}

export default NavbarWithUser;
