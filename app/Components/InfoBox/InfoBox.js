import Link from 'next/link';
import { useSelector } from 'react-redux';
import { auth } from '@/app/firebase/firebase-confing';
import { signOut } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setShowInfoBox } from '@/app/redux/features/authSlice';

import { BiUser, BiUserX } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";
import { RiProfileLine } from "react-icons/ri";

function InfoBox({ style }) {
  const user = useSelector(state => state.auth.user);
  const router = useRouter();

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
    router.push("/");
  };

  return (
    <div className='relative'>
      <section ref={infoRef} className={style.InfoBoxContainer}>
        <div className={`${style.userInfos}`}>
          <p className={style.infoBoxPTags}>
            <BiUser size={15} />
            {user.split("@")[0]}
          </p>
          <p className={style.infoBoxPTags}>
            <HiOutlineMail size={15} />
            {user}
          </p>
        </div>
        <div className={style.userFeatures}>
          <Link className={`${style.infoBoxLinks}`} href="/myprojectpage">
            <RiProfileLine size={15} />
            View your project
          </Link>
          <button onClick={signOutHandler} className={style.infoBoxLinks}>
            <BiUserX size={15} />
            Sign out
          </button>
        </div>
      </section>
      <div className={style.infoBoxPointer}>
        <div className="w-3 h-3 bg-grayishColor transform rotate-45 origin-top-right "></div>
      </div>
    </div>
  );
}

export default InfoBox;
