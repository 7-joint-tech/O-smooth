import React from 'react'
import { FaBars, FaTimes } from "react-icons/fa";
import { useState, useEffect } from "react";
 import { Link } from 'react-scroll';
import logo from '../../public/Oslogo.png';
import { Link as RouterLink } from 'react-router-dom';






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
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('nav');
      const scrollY = window.scrollY;

      if (scrollY >= 10) {
        navbar.classList.add('nav_active');
      } else {
        navbar.classList.remove('nav_active');
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 
  

    return(
      <nav className="w-full h-[80px] flex justify-between items-center fixed top-0 left-0 z-50 md:px-16 px-4">
     <a href="#" className="flex justify-center items-center gap-x-2">
       <img className="w-[8rem] object-cover h-[8rem]" src={logo} alt="logo" /><h1 className="font-[600] font-poppins text-violet-400 text-[24px] line-[36px] hidden md:block">O-Smooth</h1>
     </a>

       {/* Nav as */}
       <ul className="animation" data-nav-toggle={navToggle}>
         <div className="flex flex-col md:flex-row">
       <a className="py-2 px-5  bg-home_button font-[600] w-[100px]font-[600] h-[40px] text-center rounded-[5px] text-gray"
           >
           <Link to="Header" smooth={true} duration={500} onClick={closeNavLink}>Home</Link>
       </a> 
       <a className="py-2 px-5  rounded-[7px] font-[600] text-violet-400 text-center nav-link"
          href='#programmes'>
            <Link to="Latest" smooth={true} duration={500} onClick={closeNavLink}>Events</Link>
         
       </a>
       <a className="py-2 px-5 rounded-lg my-2 md:my-0 font-[600] text-violet-400 md:mr-4 mb-2 md:mb-0 text-center nav-link"
            href='#team'>
             <Link to="Us" smooth={true} duration={500 }onClick={closeNavLink}>About</Link>
       </a>  
       <a className="py-2 px-5  rounded-[7px]  font-[600] text-violet-400 text-center nav-link"
         href="#contact" >
         <Link to="About" smooth={true} duration={500} onClick={closeNavLink}>Services</Link>
       </a>
       <a className="py-2 px-5  rounded-[7px]  font-[600] text-violet-400 text-center nav-link"
         href="#contact" >
         <Link to="Review" smooth={true} duration={500} onClick={closeNavLink}>FeedBacks</Link>
       </a>
       <RouterLink
          to={`/faq`}
          className='py-2 px-5  rounded-[7px]  font-[600] text-violet-400 text-center nav-link'>
          FAQ
        </RouterLink>
         </div>  
     </ul>
     
     {/* icons for toggling */}
     <div className="block md:hidden text-2xl" onClick={navTogglingFunction}>
     {navIcons}
     </div>
   </nav>
 );
 };


export default Navbar;

