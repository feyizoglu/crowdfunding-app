"use client";
import Link from "next/link";
import { useState, useEffect, useTransition, startTransition } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setShowMobilNav, setUser, setCloseMobileNav, setProfilPic, setSelectedLink } from "@/app/redux/features/authSlice";
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

import { useLocale, useTranslations } from 'next-intl';

const style = {
  headerContainer: `relative container mx-auto z-50`,
  header: `fixed top-0 left-0 w-full bg-greenColor px-14 py-2 flex justify-between items-center h-[70px] text-lg text-blackColor space-x-2 md:justify-around md:px-10 lg:px-0 z-50`,
  headerLogo: `font-medium sm:text-xl lg:text-2xl`,
  headerLinks: `font-medium hover:opacity-60`,
  activeLink: `font-medium px-1.5 border-b border-blackColor hover:opacity-60 `,
  headerInput: `hidden rounded-needed outline-0 py-1 pl-4  md:block lg:pr-4`,
  nav: `hidden md:block`,
  hamMenu: `md:hidden`,
  langPickerContainer: `fixed z-50 top-1 right-0  lg:right-2 xl:right-12`,
  langPickerSelect: `inline-flex text-xl appearance-none outline-none cursor-pointer bg-transparent py-3 pl-2 pr-6 md:text-2xl`
};

export default function NavbarLayOut() {
  const [bgColor, setBgColor] = useState(false);
  const [innerWidth, setInnerWidth] = useState(0);
  const locale = useLocale()
  const [selectedLocale, setSelectedLocale] = useState(locale);
  const t = useTranslations('NavbarLayout')

  const showMobilNav = useSelector(state => state.auth.showMobilNav);
  const showSignInBox = useSelector(state => state.auth.showSignInBox);
  const showKickOffBox = useSelector(state => state.auth.showKickOffBox);
  const selectedLink = useSelector(state => state.auth.selectedLink);
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

    const savedLink = localStorage.getItem('selectedLink');
    if (savedLink) {
      dispatch(setSelectedLink(savedLink));
    }
    return () => {
      unsubscribeAuth();
    };
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('selectedLink', selectedLink)
  }, [selectedLink])

  useEffect(() => {
    const handleResize = () => {
      setInnerWidth(window.innerWidth);
    };
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
    }
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []);

  useEffect(() => {
    setSelectedLocale(locale);
  }, [locale])

  useEffect(() => {
    if (typeof window !== 'undefined' && innerWidth >= 768) {
      dispatch(setCloseMobileNav(false));
    }
  }, [innerWidth, dispatch]);

  useEffect(() => {
    window.addEventListener('scroll', changeBgColorOnScrolling);
    return () => {
      window.removeEventListener('scroll', changeBgColorOnScrolling)
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

  const handleHamIconClick = () => {
    dispatch(setShowMobilNav());
  }

  const handleLocaleChange = (e) => {
    const nextLocale = e.target.value;
    setSelectedLocale(nextLocale);
    startTransition(() => {
      window.location.href = `/${nextLocale}`
    });
  }

  return (
    <div className={style.headerContainer}>
      <header className={`${style.header} ${bgColor && `bg-greenTransparent`}`}>
        <Link href="/" onClick={() => {
          dispatch(setCloseMobileNav(false));
          dispatch(setSelectedLink('Home'))
        }} className={`${style.headerLogo}`}>
          Givingly
        </Link>
        <NavbarSearchInput style={style} placeholder={t('Search for projects')} />
        <nav className={style.nav}>
          {user?.email ? <NavbarWithUser defaultLink={style.headerLinks} activeLink={style.activeLink} /> : <DefaultNavbar defaultLink={style.headerLinks} activeLink={style.activeLink} />}
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
          {user?.email ? <MobilNavbarWithUser defaultLink={style.headerLinks} activeLink={style.activeLink} bgColor={bgColor} /> : <MobilDefaultNavbar defaultLink={style.headerLinks} activeLink={style.activeLink} bgColor={bgColor} />}
        </section>}
      {showSignInBox && <SignIn />}
      {showKickOffBox && <KickOffBox />}
      <section className={style.langPickerContainer}>
        <select
          className={style.langPickerSelect}
          onChange={handleLocaleChange}
          value={selectedLocale}
        >
          <option value="en">🇬🇧</option>
          <option value="tr">🇹🇷</option>
        </select>
      </section>
    </div>
  );
}
