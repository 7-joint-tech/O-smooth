import React from "react";

import { Usinfo } from "./Usinfo";

const Us = () => {
  return (
    <div className="w-full max-w-[1536px] py-24 px-4 lg:px-20 xl:px-56" name='Us' id="Us">
      <h1
      className="text-center text-3xl md:text-[6vw] lg:text-5xl font-bold mb-12 text-gradient"
      data-aos="fade-up"
      data-aos-duration="3000"
    >
      What is O-Smooth
    </h1>
      <div className="flex flex-wrap justify-center items-start gap-6">
        {Usinfo.map((information) => {
          return (
            <div
              data-aos="flip-up"
              key={information.id}
              className="basis-[300px] grow bg-background dark:bg-white shadow-2xl p-6 rounded-lg hover:-translate-y-4 duration-200">
              <p className="num">{information.id}</p>
              <p className="text-[#B9B9B9] dark:text-[#212121]">
                {information.detail}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Us;
