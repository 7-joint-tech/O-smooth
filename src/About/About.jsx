import React  from "react";
import Info from "./Informaton.json";
import Func from "./func";
import Button from "../Button";


const About = () =>  {


    return(
      <section name='About' id="About">
        <div className="text-[black] w-full px-4">
          <div className="flex flex-col justiy-center items-center m-auto md:w-1/2">
            <h1 className="text-black font-bold text-2xl">OUR SERVICES</h1>
            <div className="w-[3rem] h-[2px] bg-black my-5"></div>
            <p className="text-center">O-smooth is  platform that enable you locate your amazing =Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores
               eos quae aspernatur ratione tempora
               facere vitae delectus deleniti, minus hic repellat mollitia fuga.</p>
          </div>
          {/* backgroung svg */}
          <div className="md:block hidden left-0 absolute md:w-[58.62194rem] md:h-[41.9595rem]">
          <svg xmlns="http://www.w3.org/2000/svg" width="765" height="619" viewBox="0 0 765 619" fill="none">
              <path d="M-154.953 141.268C-93.577 70.7806 27.6289 161.97 203.25 122.061C355.359 87.4787 364.11 -4.37809 485.642 0.176955C574.431 3.48723 671.183 54.755 724.356 144.072C782.997 242.551 761.68 342.81 755.696 367.139C728.983 476.263 649.698 533.826 621.728 553.487C506.488 634.44 377.173 620.254 315.136 613.479C82.0999 587.957 -167.386 421.583 -178.495 240.701C-179.971 217.021 -182.658 173.098 -154.953 141.268Z" fill="url(#paint0_linear_23_3)"/>
              <defs>
               <linearGradient id="paint0_linear_23_3" x1="429.823" y1="-145.173" x2="195.583" y2="560.635" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#F3F7FF"/>
                  <stop offset="1" stop-color="#DEEEFE"/>
              </linearGradient>
             </defs>
            </svg>
          </div>
          {/* card start */}
          <div className="grid grid-cols-1 md:grid-cols-3 grid-flow-row gap-y-10 place-items-center mt-[4rem] md:w-[90%] w-full m-auto" >
              {Info.map((member, index) => (
              <Func key={index} data={member} />
            ))}
            <Button label="Learn More"/>
         </div>
          {/* card ends */}
          
        </div>
      </section>
    )
};
export default About;