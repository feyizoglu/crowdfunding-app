"use client";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { setShowMobilNav, setUser } from "@/app/redux/features/authSlice";
import { auth } from "@/app/firebase/firebase-confing";
import { onAuthStateChanged } from "firebase/auth";

import styles from './navbarLayout.module.css'
import DefaultNavbar from "../DefaultNavbar/DefaultNavbar";
import MobilDefaultNavbar from "../MobilDefaultNavbar/MobilDefaultNavbar";
import NavbarWithUser from "../NavbarWithUser/NavbarWithUser";
import MobilNavbarWithUser from "../MobilNavbarWithUser/MobilNavbarWithUser";
import NavbarSearchInput from "../NavbarSearchInput/NavbarSearchInput";
import SignIn from "../SignIn/SignIn";

const style = {
  header: `container mx-auto px-4 py-2 flex justify-between items-center h-[70px] text-lg text-blackColor space-x-5 `,
  headerLinks: `font-medium hover:opacity-60`,
  headerInput: `hidden rounded-needed outline-0 py-1 px-2 w-60 md:block`,
  nav: `hidden md:block`,
  hamMenu: `md:hidden`,
};

export default function NavbarLayOut() {
  const showMobilNav = useSelector(state => state.auth.showMobilNav);
  const showSignInBox = useSelector(state => state.auth.showSignInBox);
  const user = useSelector(state => state.auth.user);
  const dispatch = useDispatch();

  onAuthStateChanged(auth, (currentUser) => {
    dispatch(setUser(currentUser?.email));
  })

  return (
    <div className="bg-greenColor">
      <header className={style.header}>
        <Link href="/" className={style.headerLinks}>
          Givingly
        </Link>
        <NavbarSearchInput style={style} placeholder='Search for projects..' />
        <nav className={style.nav}>
          {user ? <NavbarWithUser /> : <DefaultNavbar />}
        </nav>
        <section className={style.hamMenu} onClick={() => dispatch(setShowMobilNav())}>
          <div className={`${styles.container} ${showMobilNav && styles.change}`}>
            <div className={styles.bar1}></div>
            <div className={styles.bar2}></div>
            <div className={styles.bar3}></div>
          </div>
        </section>
      </header>
      {showMobilNav &&
        <section>
          {user ? <MobilNavbarWithUser /> : <MobilDefaultNavbar />}
        </section>}
      {showSignInBox && <SignIn />}
    </div>
  );
}
