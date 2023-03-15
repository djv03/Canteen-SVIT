import React from 'react'

import Logo from '../assets/vite.svg';

import './Header.css'

function Header() {
  return (
    <div className='header-section'>
        <img src={Logo} alt="logo" />
        <p>Kanteen</p>
      
    </div>
  )
}

export default Header
