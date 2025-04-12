import React from "react";

function Proto({ port, mypro, p, btn ,show}) {
  return (
    <div className=" flex-col ml-3 sm:flex-row mt-33 flex justify-between sm:items-end ">
      <div className="">
        <h2 className="text-danger">{port}</h2>
        <h1 className=" text-me sm:text-abou font-semibold sm:w-[343px] ">
          {mypro} <span className="text-danger">{p}</span>
        </h1>
      </div>
      <button className={`bg-danger text-white  w-[130px] h-[40px] px-[13px] text-res sm:text-con flex items-center justify-center rounded-lg hover:scale-75 duration-200 transition-all ${(show) ? "block":"hidden"}`}>
        {btn}
        <img src="/assets/images/arrow-up.png"/>
      </button>
     
    </div>
  );
}

export default Proto;
