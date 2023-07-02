import Link from 'next/link';

import { BiUser, BiUserX } from 'react-icons/bi'
import { HiOutlineMail } from 'react-icons/hi'
import { RiProfileLine } from 'react-icons/ri'

function InfoBox({ style }) {
  return (
    <div className='relative'>
      <section className={style.InfoBoxContainer}>
        <div className={`${style.userInfos}`}>
          <Link className={style.infoBoxLinks} href='#'>
            <BiUser size={15} />
            John Doe
          </Link>
          <Link className={style.infoBoxLinks} href='#'>
            <HiOutlineMail size={15} />
            johndoe@gmail.com
          </Link>
        </div>
        <div className={style.userFeatures}>
          <Link className={style.infoBoxLinks} href="#" >
            <RiProfileLine size={15} />
            View your profile
          </Link>
          <button className={style.infoBoxLinks}>
            <BiUserX size={15} />
            Sign out
          </button>
        </div>
      </section>
      <div className={style.infoBoxPointer}>
        <div className="w-3 h-3 bg-grayishColor transform rotate-45 origin-top-right "></div>
      </div>
    </div>
  )
}

export default InfoBox;
