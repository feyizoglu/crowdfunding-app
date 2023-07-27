
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

function DefaultNavbar({ linkStyle, activeLink }) {
  const dispatch = useDispatch();
  const selectedLink = useSelector(state => state.auth.selectedLink);
  const t = useTranslations('DefaultNavbar');

  useEffect(() => {
    const savedLink = localStorage.getItem('selectedItem');
    if (savedLink) {
      dispatch(setSelectedLink(savedLink));
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('selectedItem', selectedLink);
  }, [selectedLink])

  const handleLinkClicks = (e) => {
    dispatch(setSearchInputVal(''))
    dispatch(setSelectedLink(e.target.textContent))
  }

  return (
    <div className={style.container}>
      <Link onClick={handleLinkClicks} className={selectedLink === t('Home') ? activeLink : linkStyle} href="/">
        {t('Home')}
      </Link>
      <Link onClick={handleLinkClicks} className={selectedLink === t('Projects') ? activeLink : linkStyle} href="/projects">
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
