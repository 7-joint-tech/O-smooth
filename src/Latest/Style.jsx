import React from "react";
import Button from '../Button';

export default function ({ data }) {
  return (
    <div
    className={`${
      data.isImgSecond == false 
    }`} data-aos="zoom-in">
    <div className="overcard rounded-lg flex flex-col" >
      <img src={data.img} className="object-cover" alt={`O-Smooth${data.id}`}/>
       <div className=" w-[100%] h-full p-4">
        <h3 className="font-[500] text-[#151515] text-[1.2rem]">{data.title1}</h3>
          <p className="pt-4 text-[.8rem] text-[#151515] leading-[1.1rem]  font-[400]">{data.description}</p>
          <a href="#" className="pt-4 text-[blue] ">Read more</a>
      </div> 
     </div>
  </div>
  );
}















































