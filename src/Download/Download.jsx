import React from 'react';
import img1 from '../assets/i.svg'


const Download = () => {
    return(
       <div className="flex flex-col md:flex-row-reverse w-full md:px-[7rem] px-4 mt-[15%]">
        <div className="flex flex-col items-start md:w-1/2  md:mx-10">
            <h1 className="text-black font-bold text-xl">Leading Health care product</h1>
            <div className="w-[3rem] h-[2px] bg-black my-5"></div>
            <p className="text-start whitespace-normal text-base">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores
               eos quae aspernatur ratione tempora. Facere vitae delectus deleniti, minus hic repellat mollitia fuga
               facere vitae delectus deleniti, facere vitae delectus deleniti, minus hic repellat mollitia fuga minus hic repellat mollitia fuga.</p>
          </div>
          <div className="md:w-1/2 w-full max-w-[100vw] md:mx-10 overflow-x-hidden mt-20 md:mt-0">
            <img src={img1} alt="image illustration" className='' />
          </div>
       </div>
    )
}
export default Download;