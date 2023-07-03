"use client";
import React, { useState } from "react";
import Link from "next/link";

import styles from './navbarLayout.module.css'
import DefaultNavbar from "../DefaultNavbar/DefaultNavbar";
import MobilDefaultNavbar from "../MobilDefaultNavbar/MobilDefaultNavbar";
import NavbarWithUser from "../NavbarWithUser/NavbarWithUser";
import MobilNavbarWithUser from "../MobilNavbarWithUser/MobilNavbarWithUser";
import NavbarSearchInput from "../NavbarSearchInput/NavbarSearchInput";

const style = {
  header: `container mx-auto px-12 pt-2 flex justify-between items-center h-[70px] text-lg text-blackColor md:px-4 lg:px-0`,
  headerLinks: `font-medium hover:opacity-60`,
  headerInput: `hidden rounded-needed outline-0 py-1.5 px-2 w-60 md:block`,
  nav: `hidden md:block`,
  hamMenu: `md:hidden`,
};

export default function NavbarLayOut() {
  const [isClickedHamIcon, setIsClickedHamIcon] = useState(false);

  return (
    <div className="bg-greenColor">
      <header className={style.header}>
        <Link href="/" className={style.headerLinks}>
          Givingly
        </Link>
        <NavbarSearchInput style={style} placeholder='Enter your email..' />
        <nav className={style.nav}>
          {true  ? <NavbarWithUser /> : <DefaultNavbar />}
        </nav>
        <section className={style.hamMenu} onClick={() => setIsClickedHamIcon(prev => !prev)}>
          <div className={`${styles.container} ${isClickedHamIcon && styles.change}`}>
            <div className={styles.bar1}></div>
            <div className={styles.bar2}></div>
            <div className={styles.bar3}></div>
          </div>
        </section>
      </header>
      {isClickedHamIcon &&
        <section>
          {true  ? <MobilNavbarWithUser /> : <MobilDefaultNavbar />}
        </section>}
    </div>
  );
}
