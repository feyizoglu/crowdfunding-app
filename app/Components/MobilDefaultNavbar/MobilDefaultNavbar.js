import Link from 'next/link';

import NavbarSearchInput from '../NavbarSearchInput/NavbarSearchInput';

const style = {
  container: `flex flex-col items-center space-y-3 md:hidden py-3`,
  headerLinks: `font-medium hover:opacity-60`,
  headerButton: `button-dark hover:bg-transparent`,
  headerInput: `rounded-needed outline-0 py-1 px-2 `,
};

function MobilDefaultNavbar() {
  return (
    <div className={style.container}>
      <NavbarSearchInput style={style} placeholder='Search for projects..' />
      <Link className={style.headerLinks} href="/">
        Home
      </Link>
      <Link className={style.headerLinks} href="/projects">
        Projects
      </Link>
      <button className={style.headerButton}>
        Sing In
      </button>
    </div >
  );
}

export default MobilDefaultNavbar;
