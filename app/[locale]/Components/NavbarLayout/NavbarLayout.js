"use client";
import Link from "next/link";
import { useState, useEffect, startTransition } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setShowMobilNav, setUser, setCloseMobileNav, setProfilPic, setSearchInputVal, setCloseSignInBox, setCloseKickOffBox } from "@/app/redux/features/authSlice";
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
import LanguagePicker from "../LanguagePicker/LanguagePicker";

import { collection, onSnapshot, query, where } from "firebase/firestore";
import { usePathname } from "next/navigation";
import { useLocale, useTranslations } from 'next-intl';
import { throttle } from "lodash";

const style = {
  headerContainer: `relative container mx-auto z-50`,
  header: `fixed top-0 left-0 w-full bg-greenColor px-14 py-2 flex justify-between items-center h-[70px] text-lg text-blackColor space-x-2 md:justify-around md:px-10 lg:px-0 z-50`,
  headerLogo: `font-medium sm:text-xl lg:text-2xl`,
  headerLinks: `font-medium hover:opacity-60`,
  activeLink: `font-medium px-1.5 border-b border-blackColor hover:opacity-60 `,
  headerInput: `hidden rounded-needed outline-0 py-1 pl-4  md:block lg:pr-4`,
  nav: `hidden md:block`,
  hamMenu: `md:hidden`,
};

export default function NavbarLayOut() {
  const [bgColor, setBgColor] = useState(false);
  const [innerWidth, setInnerWidth] = useState(0);
  const [selectedLink, setSelectedLink] = useState('/')
  const locale = useLocale()
  const [selectedLang, setSelectedLang] = useState(locale);
  const t = useTranslations('NavbarLayout');
  const pathname = usePathname();

  const showMobilNav = useSelector(state => state.auth.showMobilNav);
  const showSignInBox = useSelector(state => state.auth.showSignInBox);
  const showKickOffBox = useSelector(state => state.auth.showKickOffBox);
  const user = useSelector(state => state.auth.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, (currentUser) => {
      dispatch(setUser({
        email: currentUser?.email,
        id: currentUser?.uid
      }));
      fetchProfilePicture(currentUser?.uid);
    });
    return () => {
      unsubscribeAuth();
    };
  }, [dispatch]);

  useEffect(() => {
    const handleResize = () => {
      setInnerWidth(window.innerWidth);
    };
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
    };
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      };
    };
  }, []);

  useEffect(() => {
    setSelectedLink(pathname)
  }, [pathname])

  useEffect(() => {
    setSelectedLang(locale)
  }, [locale])

  useEffect(() => {
    if (typeof window !== 'undefined' && innerWidth >= 768) {
      dispatch(setCloseMobileNav(false));
    }
  }, [innerWidth, dispatch]);

  useEffect(() => {
    setTimeout(() => { dispatch(setCloseSignInBox(false)) }, 100);
    window.addEventListener('scroll', throttledChangeBgColor);

    return () => {
      window.removeEventListener('scroll', throttledChangeBgColor)
    }
  }, [user, dispatch]);

  const fetchProfilePicture = (userId) => {
    if (userId) {
      const q = query(collection(db, 'profilPics'), where('id', '==', userId));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          dispatch(setProfilPic(data.profilPic));
        });
      });
      return unsubscribe;
    }
  };
  const changeBgColorOnScrolling = () => {
    if (window.scrollY >= 70) {
      setBgColor(true)
    } else {
      setBgColor(false)
    }
  };
  const throttledChangeBgColor = throttle(changeBgColorOnScrolling, 150)
  const handleHamIconClick = () => {
    dispatch(setShowMobilNav());
  }

  const handleLocaleChange = (lang) => {
    setSelectedLang(lang)
    startTransition(() => {
      window.location.href = `/${lang}`
    });
  }

  return (
    <div className={style.headerContainer}>
      <header className={`${style.header} ${bgColor && `bg-greenTransparent`}`}>
        <Link
          href="/"
          onClick={() => {
            dispatch(setCloseMobileNav(false));
            dispatch(setSearchInputVal(''))
          }}
          className={`${style.headerLogo}`}
        >
          Givingly
        </Link>
        <NavbarSearchInput style={style} placeholder={t('Search for projects')} />
        <nav className={style.nav}>
          {user?.email ? <NavbarWithUser selectedLink={selectedLink} defaultLink={style.headerLinks} activeLink={style.activeLink} /> : <DefaultNavbar selectedLink={selectedLink} defaultLink={style.headerLinks} activeLink={style.activeLink} />}
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
          {user?.email ? <MobilNavbarWithUser selectedLink={selectedLink} defaultLink={style.headerLinks} activeLink={style.activeLink} bgColor={bgColor} /> : <MobilDefaultNavbar selectedLink={selectedLink} defaultLink={style.headerLinks} activeLink={style.activeLink} bgColor={bgColor} />}
        </section>}
      {showSignInBox && <SignIn />}
      {showKickOffBox && <KickOffBox />}
      <LanguagePicker
        selectedLang={selectedLang}
        handleLocaleChange={handleLocaleChange}
      />
    </div>
  );
}