import React from 'react';
import Button from '../Button';
import img1 from '../assets/element.svg'
import img2 from '../../public/01.png'
const Hero = () => {
    return(
       <header className='flex flex-col md:flex-row w-full h-screen md:px-[7rem] px-4 justify-around md:justify-between item-center relative md:mt-[10%] mt-[30%]' id='Header' name='Header'>
          <div className="md:w-1/2">
            <div className=" top-[6rem] left-[-1px] fixed"><img src={img1} alt="" className='w-3/4  opacity-[70%]' /></div>
            <h2
  className='text-4xl md:text-7xl py-3 font-[700] text-transparent'
  style={{
    background: '-webkit-linear-gradient(#4f46e5, #ac38ff)',
    WebkitBackgroundClip: 'text',
    color: 'transparent',
  }}
  data-aos="fade-up"
  data-aos-duration="1000"
>
  O-Smoooooth
</h2>

             <p className='py-10 font-[500] text-xl text-[#7D7987] md:w-3/4 w-full'>Welcome to O-Smooth – your tech event companion. Discover, plan, and experience the latest in tech seamlessly. Elevate your events with O-Smooth – where tech meets simplicity.
                 on mobile and online for everyone </p>
             <Button label="Read More"/>    
          </div>
          <div className="md:w-1/2">
          <div class="grid grid-flow-col grid-rows-2 grid-cols-3 gap-8">
  <div >
    <img src={img2} alt="" loading="lazy" className='w-full h-full object-cover'/>
  </div>
  <div class="col-start-3">
    <img src={img2} alt="" loading="lazy" className='w-full h-full object-cover'/>
  </div>
  <div>
    <img src={img2} alt="" loading="lazy" className='w-full h-full object-cover'/>
  </div>
  <div>
    <img src={img2} alt="" loading="lazy" className='w-full h-full object-cover'/>
  </div>
  <div class="row-start-1 col-start-2 col-span-2">
    <img src={img2} alt="" loading="lazy" className='w-full h-full object-cover'/>
  </div>
</div>
          </div>
       </header>
    )
}
export default Hero;