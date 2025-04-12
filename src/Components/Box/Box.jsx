import React from "react";

function Box({conten,context,btn}) {
  return (
  <div className=" mt-[50px] w-[98%] relative mx-[15px]">
        <div className="  hidden sm:block bg-danger absolute -top-[1.75rem] left-[5.75rem]   rounded-lg w-2 h-2"></div>
      <div className=" bg-danger h-[186px] rounded-lg     ">
      <div className="flex justify-between  flex-col sm:flex-row sm:items-center  gap-2 bg-box rounded-xl py-[15px] px-[17px] h-[180px] absolute top-1 right-0  left-2   z-[99999]">
      
        <div className="text-white">
          <h1 className="sm:text-[48px]">{conten}</h1>
          <p>
          {context}
          </p>
        </div>
        <div className="">
          <button
            className= "bg-danger text-white text-con w-[100px] py-[10px] px-[12px] rounded-md flex items-center justify-center gap-[7px] hover:scale-75 duration-200 transition-all"
       
          >
            <a href="#cont">
            {btn}
            </a>
       
           <img src="/assets/images/a2.png"/>
          </button>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Box;
