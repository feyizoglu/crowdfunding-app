import React from 'react';
import Link from 'next/link';

const style = {
  container: `flex items-center space-x-12`,
  headerLinks: `font-medium hover:opacity-60`,
  headerButton: `button-dark hover:bg-transparent`,
};

function DefaultNavbar() {
  return (
    <div className={style.container}>
      <Link className={style.headerLinks} href="/">
        Home
      </Link>
      <Link className={style.headerLinks} href="/projects">
        Projects
      </Link>
      <button className={style.headerButton}>
        Sing In
      </button>
    </div>
  );
}

export default DefaultNavbar;
