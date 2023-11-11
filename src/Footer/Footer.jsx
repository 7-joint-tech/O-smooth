import React from 'react';
import logo from "../../public/Oslogo.png";
import { Link } from 'react-scroll';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';


const Footer =() => {
    return(
<div className="w-full h-[50vh] bg-slate-950 mt-16 px-4 flex flex-col justify-between p-4">
    <div className="relative max-w-md mx-auto top-8 w-full">
      <input type="email" className="w-full pr-16 pl-2 py-2 border rounded-r-md border-gray-300 rounded-l-md focus:outline-none focus:border-blue-500" placeholder="Subscribe for our Newsletter"/>
      <button type="submit" className="absolute top-0 right-0 h-full px-4 py-2 bg-indigo-950 text-white rounded-r-md">
        Subscribe
      </button>
    </div>
    <div className="w-full flex justify-between items-center md:px-16 px-4 h-1/2">
     <a href="#" className="md:flex justify-center items-center gap-x-2 hidden">
       <img className="w-[100px] h-[100px] sm:w-[50px]" src={logo} alt="logo" /><h1 className="font-[600] font-poppins text-white text-[24px] line-[36px]">O-Smooth</h1>
     </a>

       {/* Nav as */}
       <ul className="animation">
         <div className="flex flex-row flex-wrap">

         <a className="font-[600] text-white text-center nav-link "
           >
           <Link to="header" smooth={true} duration={500}>Home</Link>
       </a> 
       <a className="font-[600] text-white text-center nav-link"
          href='#programmes'>
            <Link to="programmes" smooth={true} duration={500}>Programmes</Link>
       </a>
       <a className=" rounded-lg font-[600] text-white text-center nav-link"
            href='#team'>
             <Link to="team" smooth={true} duration={500}>Team</Link>
       </a>
       <a className="  rounded-lg font-[600] text-white  text-center nav-link"
            href="#about">
       <Link to="about" smooth={true} duration={500}>About Us</Link>
       </a> 
       <a className="  rounded-lg ] font-[600] text-white  text-center nav-link"
            href="#advisory">
         <Link to="advisory" smooth={true} duration={500}>Advisory Board</Link>
       </a> 
       <a className="   rounded-[7px]  font-[600] text-white text-center nav-link"
         href="#sponsors" >
        <Link to="sponsors" smooth={true} duration={500}>Sponsors</Link>
       </a>
       <a className="  rounded-[7px]  font-[600] text-white text-center nav-link"
         href="#contact" >
         <Link to="contact" smooth={true} duration={500}>Contact</Link>
       </a>
         </div> 
     </ul>
     
   </div>
   <div className="flex justify-center items-center space-x-4">
      <a href="#" className="social-icon">
        <FaFacebook />
      </a>
      <a href="#" className="social-icon">
        <FaTwitter />
      </a>
      <a href="#" className="social-icon">
        <FaInstagram />
      </a>
      <a href="#" className="social-icon">
        <FaLinkedin />
      </a>
    </div> 
</div>
    )
}
export default Footer;










