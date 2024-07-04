import React, { useState } from 'react';
import { RiMenuFoldFill, RiCloseFill } from "react-icons/ri";
import './Header.css';
import { NavLink } from 'react-router-dom';
import { TbHome2 } from "react-icons/tb";
import { GoProject } from "react-icons/go";
import { IoMdContact } from "react-icons/io";
import { FaCircleInfo } from "react-icons/fa6";


const Header = () => {
  const [showHeader, setShowHeader] = useState(false);
  // const path = window.location.pathname;

  const handleClick = () => {
    setShowHeader(() => !showHeader)
  }

  return (
    <>
      <div className='header'>
        {showHeader ?
          (<RiCloseFill className='ri-icon' onClick={handleClick} />

          ) :
          (<RiMenuFoldFill onClick={handleClick} className='ri-icon' />
          )}

        <ul className={`${showHeader ? 'show-header' : 'hide-header'}`}>
          <li><NavLink to='/'><TbHome2 className='home-icon'/> Home</NavLink></li>
          <li><NavLink to='/project'><GoProject className='home-icon'/>Projects</NavLink></li>
          <li><NavLink to='/contact'><IoMdContact className='home-icon'/>Contact</NavLink></li>
          <li><NavLink to='/about'><FaCircleInfo className='home-icon'/>About</NavLink></li>
        </ul>
      </div>


    </>
  )
}

export default Header;