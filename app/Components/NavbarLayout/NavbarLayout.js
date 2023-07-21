"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setShowMobilNav, setUser, setCloseMobileNav, setProfilPic } from "@/app/redux/features/authSlice";
import { auth, db } from "@/app/firebase/firebase-confing";
import { onAuthStateChanged } from "firebase/auth";

import styles from './navbarLayout.module.css'
import DefaultNavbar from "../DefaultNavbar/DefaultNavbar";
import MobilDefaultNavbar from "../MobilDefaultNavbar/MobilDefaultNavbar";
import NavbarWithUser from "../NavbarWithUser/NavbarWithUser";
import MobilNavbarWithUser from "../MobilNavbarWithUser/MobilNavbarWithUser";
import NavbarSearchInput from "../NavbarSearchInput/NavbarSearchInput";
import SignIn from "../SignIn/SignIn";
import KickOffBox from "../KickOffBox/KickOffBox";
import { collection, onSnapshot, query, where } from "firebase/firestore";

const style = {
  headerContainer: `container mx-auto z-50`,
  header: `fixed top-0 left-0 w-full bg-greenColor px-12  py-2 flex justify-between items-center h-[70px] text-lg text-blackColor space-x-5 lg:px-24 z-50`,
  headerLogo: `font-md`,
  headerLinks: `font-medium hover:opacity-60`,
  headerInput: `hidden rounded-needed outline-0 py-1 px-2 w-60 md:block`,
  nav: `hidden md:block`,
  hamMenu: `md:hidden`,
};

export default function NavbarLayOut() {
  const [bgColor, setBgColor] = useState(false);
  const showMobilNav = useSelector(state => state.auth.showMobilNav);
  const showSignInBox = useSelector(state => state.auth.showSignInBox);
  const showKickOffBox = useSelector(state => state.auth.showKickOffBox);
  const user = useSelector(state => state.auth.user);
  const dispatch = useDispatch()

  useEffect(() => {
    window.addEventListener('scroll', changeBgColorOnScrolling);
    const fetchProfilePicture = () => {
      if (user?.id) {
        const q = query(collection(db, 'profilPics'), where('id', '==', user.id));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
          querySnapshot.forEach((doc) => {
            const data = doc.data();
            dispatch(setProfilPic(data.profilPic));
          });
        });
        return unsubscribe;
      }
    };
    const unsubscribeProfilePicture = fetchProfilePicture();
    return () => {
      window.removeEventListener('scroll', changeBgColorOnScrolling)
      unsubscribeProfilePicture && unsubscribeProfilePicture();
    }
  }, [user, dispatch]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      dispatch(setUser({
        email: currentUser?.email,
        id: currentUser?.uid
      }));
    });
    return () => {
      unsubscribe();
    };
  }, [dispatch]);

  const changeBgColorOnScrolling = () => {
    if (window.scrollY >= 70) {
      setBgColor(true)
    } else {
      setBgColor(false)
    }
  };

  const handleHamIconClick = () => {
    dispatch(setShowMobilNav());
  }

  return (
    <div className={style.headerContainer}>
      <header className={`${style.header} ${bgColor && `bg-greenTransparent`}`}>
        <Link href="/" onClick={() => dispatch(setCloseMobileNav(false))} className={`${style.headerLogo}`}>
          Givingly
        </Link>
        <NavbarSearchInput style={style} placeholder='Search for projects..' />
        <nav className={style.nav}>
          {user?.email ? <NavbarWithUser /> : <DefaultNavbar />}
        </nav>
        <section className={style.hamMenu} onClick={handleHamIconClick}>
          <div className={`${styles.container} ${showMobilNav && styles.change}`}>
            <div className={styles.bar1}></div>
            <div className={styles.bar2}></div>
            <div className={styles.bar3}></div>
          </div>
        </section>
      </header>
      {showMobilNav &&
        <section>
          {user?.email ? <MobilNavbarWithUser bgColor={bgColor} /> : <MobilDefaultNavbar bgColor={bgColor} />}
        </section>}
      {showSignInBox && <SignIn />}
      {showKickOffBox && <KickOffBox />}
    </div>
  );
}
