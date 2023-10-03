import React from 'react'
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";



const Navbar = () => {
    const [navIcons, setNavIcons] = useState(<FaBars />);
    const [navToggle, setNavToggle] = useState("false");

    //  Open Navbar Links > 768px
   const openNavLink = () => {
    setNavToggle("true");
    setNavIcons(<FaTimes className='text-[gray]'/>);
  };
  //Close Navbar Links > 768px
  const closeNavLink = () => {
    setNavToggle("false");
    setNavIcons(<FaBars className='text-[gray]'/>);
  };
  //Function for closing and opening
  const navTogglingFunction = () => {
    navToggle == "false" ? openNavLink() : closeNavLink();
  };
  

    return(
        <nav className="flex justify-between w-full h-[4rem] items-center md:px-[7rem] px-4 bold" >
              <h1 className='text-[blue] text-xl font-[700]'>O-SMOOTH</h1>
            <ul data-nav-toggle={navToggle}>
                <div className="flex flex-col md:flex-row">
                  <li className='px-2'>Home</li>
                  <li className='px-2'>Home</li>
                  <li className='px-2'>Home</li>
                  <li className='px-2'>Home</li>
                  <li className='px-2'>Home</li>
                </div>
            </ul>
    <div className="block md:hidden text-2xl" onClick={navTogglingFunction}>
      {navIcons}
    </div>
        </nav>
    )
}
export default Navbar;