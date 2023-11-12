// Your Button component
import React from 'react';
 // Import your styles

const Button = ({ label }) => {
  return (
    <button
      className="text-white w-[180px] h-[50px] flex-shrink-0 bg-violet-400 border-2 rounded-[3.4rem] text-gradient shadow-md"
      data-aos="fade-up"
      data-aos-duration="3000"
      
    >
      {label}
    </button>
  );
};

export default Button;
