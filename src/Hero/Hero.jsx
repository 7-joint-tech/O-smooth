import React from 'react';
import Button from '../Button';
import img1 from '../assets/element.svg'
import img2 from '../assets/1.png'
const Hero = () => {
    return(
       <header className='flex flex-col md:flex-row w-full h-screen md:px-[7rem] px-4 justify-around md;justify-between item-center relative md:mt-[5%] mt-[15%]'>
          <div className="md:w-1/2">
            <div className=" top-[6rem] left-[-1px] fixed"><img src={img1} alt="" className='w-3/4  opacity-[70%]' /></div>
             <h2 className='text-4xl md:text-5xl py-3 font-[700]'>Virtual healthcare for you</h2>
             <p className='py-10 font-[500] text-xl text-[#7D7987] md:w-3/4 w-full'>O-Smooth provides progressive and affordable healthcare assesable
                 on mobile and online for everyone </p>
             <Button label="Read More"/>    
          </div>
          <div className="md:w-1/2">
          <img src={img2} alt="" className='mt-[0] md:h-[full] md:m-[-3%]'/>
          </div>
       </header>
    )
}
export default Hero;