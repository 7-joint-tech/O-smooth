import React from 'react';

const Button = ({ label }) => {
  return (
   <button  className="text-white w-[180px] h-[50px] flex-shrink-0 bg-[#458FF6] border-2 rounded-[3.4rem]">
    {label}
   </button>
  );
};

export default Button;



