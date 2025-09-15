import React, { useState } from 'react'
import {assets} from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {
    // to show and hide the menu
    const [showMenu,setShowMenu] = useState(false);
    const [token,setToken] = useState(true);

    const navigate = useNavigate();
  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-500'>
      <img src={assets.logo} alt="" className='w-44 cursor-pointer'/>
      <ul className='hidden md:flex items-start gap-5 font-medium'>
        <NavLink to='/'>
            <li className='py-1'>Home</li>
            <hr className='border-none outline-none h-0.5 bg-gray-500 w-3/5 m-auto hidden'/>
        </NavLink>
        <NavLink to='/doctors'>
            <li className='py-1'>All Doctors</li>
            <hr className='border-none outline-none h-0.5 bg-gray-500 w-3/5 m-auto hidden'/>
        </NavLink>
        <NavLink to='/about'>
            <li className='py-1'>About</li>
            <hr className='border-none outline-none h-0.5 bg-gray-500 w-3/5 m-auto hidden'/>
        </NavLink>
        <NavLink to='/contact'>
            <li className='py-1'>Contact</li>
            <hr className='border-none outline-none h-0.5 bg-gray -500 w-3/5 m-auto hidden'/>
        </NavLink>
      </ul>
      <div className='flex items-center gap-5'>
        {/* using arrow function because we want the function to called when button is 
        clicked not as soon as page is loaded  */}
        {
            token 
            ? <div className='flex items-center gap-5 cursor-pointer group relative'>
                <img className='w-8 rounded-full' src={assets.profile_pic} alt="" srcset="" />
                <img className='w-2.5' src={assets.dropdown_icon} alt="" />
                {/* create dropdown menu. */}
                <div className='absolut top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                  <div>
                  <p>My Profile</p>
                  <p>My Appointments</p>
                  <p>Logout</p>
                  </div>
                </div>
            </div>
            : <button onClick={()=> navigate('/login')} className='bg-blue-500 text-white px-8 py-3 rounded-full font-light hidden md:block cursor-pointer' >Create Account</button>
        }
      </div>
    </div>
  )
}

export default Navbar;
