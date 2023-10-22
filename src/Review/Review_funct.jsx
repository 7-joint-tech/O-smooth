import React from "react";


export default function Information({ data }) {
  return (
    <div
      className={`flex flex-wrap justify-center  ${
        data.isImgSecond == false 
      }`}>
      <div className="flex flex-col gap-2 w-full p-4 pb-4 ">
        <div className="flex flex-col justify-center m-auto">
        <h2 className="text-xl lg:text-2xl font-bold text-white">
          {data.title1}
        </h2>
        <div className="w-[4rem] h-[3px] bg-white my-5 m-auto"></div>
        </div>
         <div className="md:w-[80%] w-[100%] flex justify-around md:flex-row flex-col m-auto">
          <div className="flex md:flex-row flex-col items-center gap-x-4">
            <img src={data.img} className="mx-auto w-[6rem] max-w-[8rem] h-[6rem] object-fit-cover rounded-full border-4 border-white" alt={`O-smooth${data.id}`}/>
            <p className="text-center text-white py-2">
            {data.title2}
            </p>
          </div>
        <p className="text-base text-white w-full md:w-1/2">{data.description}</p>
        </div> 
       </div>
    </div>
  );
}
