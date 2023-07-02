import React from 'react'

function NavbarSearchInput({ style, placeholder }) {
  return (
    <input type="search" className={style.headerInput} placeholder={placeholder} />
  )
}
export default NavbarSearchInput;