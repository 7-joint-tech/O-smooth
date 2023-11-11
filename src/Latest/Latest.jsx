import React from 'react';
import TeamCard from "./Style";
import { SMOOTH } from "./Info.js";
import Button from '../Button';
const Latest = () => {
    return(
    <div className="container mx-auto mt-[5%] h-full w-full px-4" id='Latest' name='Latest'> 
      <div className="flex flex-col justiy-center items-center md:w-1/2 m-auto">
               <p className="text-[3em] font-bold text_gradient  text-primary z-[1] text-center">Check out your latest Events</p>
          </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-y-20 md:gap-y-40 place-items-center mt-[4rem] w-full">
        {SMOOTH.map((member, index) => (
          <TeamCard key={index} data={member} />
        ))}
          <div className="">
          <Button label="View All"/> 
          </div>
      </div>
    </div>
    )
}
export default Latest;


