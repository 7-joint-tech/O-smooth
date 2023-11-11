import React from "react";


export default function func({ data }) {
  return (
    <div className=" flex flex-col bg-[white] w-[330px] h-[354px] rounded-[20px] shadow-md z-[1]" data-aos="zoom-in">
      <img src={data.image} alt="Profile" className="w-full p-4 h-1/2"/>
      <div class="flex flex-col items-center justify-center">
      <div className="text-center pt-5">
        <div className="text-xl font-semibold text-gray-500">{data.name}</div>
        <div className="text-gray-500">{data.role}</div>
      </div>
      </div>
    </div>
  );
}

 

