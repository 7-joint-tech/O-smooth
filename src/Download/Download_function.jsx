import React from "react";
import Button from '../Button';

export default function Information({ data }) {
  return (
    <div
      className={`flex flex-wrap items-start gap-8 ${
        data.isImgSecond == false && "flex-row-reverse"
      }`}>
      <div className="flex flex-col lg:basis-[50%] gap-2">
        <h2 className="text-3xl lg:text-4xl text_gradient font-bold">
          {data.title1}
        </h2>
        <div className="w-[4rem] h-[3px] bg-black my-5"></div>
        <h2 className="text-3xl lg:text-4xl text_gradient font-bold">
          {data.title}
        </h2>
        <p className="text-base md:text-xl">{data.description}</p>
        <div className='mt-5'>
        <Button label="Read More"/> 
        </div>
      </div>
      <img src={data.img} className="mx-auto w-full max-w-[400px] h-[20rem] object-fit-cover" alt={`Why-spaces-lounge IMG${data.id}`}/>
    </div>
  );
}
