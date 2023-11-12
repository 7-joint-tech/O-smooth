import React from "react";
export default function ({ data }) {
  return (
    <div
    className={`${
      data.isImgSecond == false 
    }`} data-aos="zoom-in">
    <article className="flex flex-col bg-violet-400">
            <a rel="noopener noreferrer" href="#" aria-label="">
              <img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src={data.img} />
            </a>
            <div className="flex flex-col flex-1 p-6">
              <a rel="noopener noreferrer" href="#"></a>
              <a rel="noopener noreferrer" href="#" className="text-lg tracki uppercase hover:underlinetext-gray-500">{data.title1}</a>
              <h3 className="flex-1 py-2 text-lg font-semibold leadi">{data.description}</h3>
              <div className="flex flex-wrap justify-between pt-3 space-x-2 text-sm text-gray-900">
                <span>{data.date}</span>
                <span>RSVS</span>
              </div>
            </div>
          </article>
  </div>
  );
}















































