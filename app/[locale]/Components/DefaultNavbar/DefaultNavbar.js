
'use client'
import React, { useEffect } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useDispatch, useSelector } from 'react-redux';
import { setShowSignInBox, setSearchInputVal, setSelectedLink } from '@/app/redux/features/authSlice';

const style = {
  container: `flex items-center space-x-6`,
  headerButton: `button-dark text-center text-lg md:text-sm lg:text-lg hover:bg-transparent`,
};

function DefaultNavbar({ defaultLink, activeLink }) {
  const dispatch = useDispatch();
  const selectedLink = useSelector(state => state.auth.selectedLink);
  const t = useTranslations('DefaultNavbar');

  const handleLinkClicks = (e) => {

  }

  return (
    <div className={style.container}>
      <Link onClick={() => {
        dispatch(setSearchInputVal(''))
        dispatch(setSelectedLink('Home'))
      }} className={selectedLink === 'Home' ? activeLink : defaultLink} href="/">
        {t('Home')}
      </Link>
      <Link onClick={() => {
        dispatch(setSearchInputVal(''))
        dispatch(setSelectedLink('Projects'))
      }} className={selectedLink === 'Projects' ? activeLink : defaultLink} href="/projects">
        {t('Projects')}
      </Link>
      <Link href='/' onClick={() => {
        dispatch(setSelectedLink('Home'))
        setTimeout(() => {
          dispatch(setShowSignInBox());
        }, 1)
      }} className={style.headerButton}>
        {t('Sign In')}
      </Link>
    </div >
  );
}

export default DefaultNavbar;
