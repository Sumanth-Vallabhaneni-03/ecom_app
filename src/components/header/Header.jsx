import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { IoHome } from "react-icons/io5";
import { FcAbout } from "react-icons/fc";
import { GiArchiveRegister } from "react-icons/gi";
import { BiLogOutCircle } from "react-icons/bi";
import { IoMdLogIn } from "react-icons/io";
import { Userlogincontext } from '../../context/Userlogincontext';
import { useContext } from 'react';

function Header() {
    let { logoutUser, userLoginStatus } = useContext(Userlogincontext);
  return (
    <div className='d-flex flex-wrap justify-content-around header phil'>
        <h1 className='text-warning'>MY SHOPS</h1>
        <ul className='nav fs-5 d-flex p-3 justify-content-around'>
            <li className='nav-item'>
                <Link to='' className='nav-link text-white'>
                <IoHome className='text-warning me-1'/>Home</Link>
            </li>
            <li className='nav-item'>
                <Link to='about' className='nav-link text-white'><FcAbout className='me-1' />About Us</Link>
            </li>
            <li className='nav-item'>
                <Link to='register' className='nav-link text-white'><GiArchiveRegister className='text-warning me-1'/>Register</Link>
            </li>
            {userLoginStatus == false?(
            <li className='nav-item'>
                <Link to='login' className='nav-link text-white'><IoMdLogIn className='text-warning me-1'/>Login</Link>
            </li>
            ):(
                <li className="nav-item">
            <Link to="login" className="nav-link text-white" onClick={logoutUser}>
            <BiLogOutCircle className='text-warning me-1' />
              Logout
            </Link>
          </li>
            )}
        </ul>
    </div>
  )
}

export default Header