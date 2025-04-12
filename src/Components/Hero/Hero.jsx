import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Hero({ hey, add, para, btn }) {
  const location=useLocation()
  useEffect(()=>{
    const hash = location.hash;
    if(hash){
      const ele= document.querySelector(hash);
      if(ele){
        ele.scrollIntoView({behavior:"smooth"})
      }
    }
  },[location])
  return (
    <div className="reltives ">
 
 {/* <img src="/assets/images/hero1111.png"  className="absolute top-[7.5rem] left-0"/>
 <img src="/assets/images/hero1111.png" className="absolute top-[8.5rem]  left-0"/> */}
    <div className="flex justify-between  text-prim items-center mt-33 p-[10px]" id="hero">
     
      <div className="mt-16">
        <h1 className=" text-abou sm:text-title font-normal sm:w-[645px] dark:text-white">
          {hey}
          <span className=" text-abou sm:text-title font-bold dark:text-white">{add}</span>
        </h1>
        <p className="text-par font-normal text-size text-opacity-75 dark:text-white">{para}</p>
        <button className=" border border-solid border-gray-50	 rounded-but px-md py-sm mt-2 dark:text-white hover:border-yellow-200	 dark:hover:bg-danger ">
          {btn}
        </button>
      </div>
      <div className="relative  hidden lg:block ml-3 ">
        <img
          className="w-[290px] h-[350px]  mx-3  relative z-10 mt-[65px]"
          src="/assets/images/laura.png"
        />
        <div className="bg-primary absolute top-[5.75rem] left-6  rounded-lg w-8 h-8  rotate-180 transition-all duration-0"></div>
        <div className="bg-danger absolute z-10 rounded  top-20 right-1  w-5 h-5  "></div>
        <div className="bg-danger  absolute z-10 top-36 right-3 rounded-lg w-4 h-4  "></div>
        <div className="bg-secondary absolute top-9 right-7   rounded-lg w-2 h-2"></div>
        <div className="bg-secondary absolute bottom-16 rounded-lg w-1 h-1"></div>
        <div className="w-80 h-80 absolute top-[4.75rem] right-2 left-5 rounded-full bg-circle"></div>
        <div className=""></div>
        <div></div>
      </div>
      <div className="border-b border-dashed border-secondary mt-33"></div>
    </div>
    </div>
  );
}

export default Hero;
