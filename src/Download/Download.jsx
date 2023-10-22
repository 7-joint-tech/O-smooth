import React from 'react';
import Info from "./Download_function";
import { SMOOTH } from "./Download_info";





const Download = () => {
    return(
       <div className="flex flex-col md:flex-row w-full md:px-[5rem] mt-[15%] mb-[10rem]">
        <div className="px-4 md:px-12 lg:px-24  flex flex-col gap-24 lg:gap-48">
          {SMOOTH.map((data) => {
            return <Info data={data} key={data.id} />;
          })}
        </div>
       </div>    
    )
}
export default Download;