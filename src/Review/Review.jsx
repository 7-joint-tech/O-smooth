import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import img1 from '../../public/i.svg'
import Info from "./Review_funct";
import { SMOOTH } from "./Review_info";

const SimpleCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <section name='Review' id='Review'>
    <Slider {...settings} className='md:w-2/3 w-[90%] mx-auto  rounded-[0.7rem] bg-violet-400'>
          {SMOOTH.map((data) => {
            return <Info data={data} key={data.id} />;
          })}
    </Slider>
    </section>
   
  );
};

export default SimpleCarousel;
