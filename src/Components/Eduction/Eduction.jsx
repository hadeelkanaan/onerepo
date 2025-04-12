import React, { useEffect, useState } from 'react'

function Eduction() {

   
  const eduction = [

    {
      text: "Experince Designer",
      para: "Expertise in designing user-friendly interfaces and improving user experiences through research and testing.Skilled in creating wireframes, prototypes, and user flows ",
    },
    {
      text: "Frontend Developer",
      para: "  Proficient in HTML, CSS, JavaScript, and React for building responsive and interactive web applications. Skilled in creating wireframes, prototypes, and user flows  ",
    },
  ];

  const edu = [
    {
      text: "Experince Designer" ,
      para: "Skilled in creating wireframes, prototypes, and user flows.Skilled in creating wireframes, prototypes, and user flows  ",
    },
    {
      text: "Frontend Developer",
      para: " Experienced in optimizing web performance and integrating APIs for seamless functionality.Experienced in optimizing web performance and integrating APIs for seamless functionality. ",
    },
  ];
  const[isVisible,setIsVisible]=useState(false)
  const toggleVisibility=()=>{
    if(window.scrollY>  800){
      setIsVisible(true)
    }else{
      setIsVisible(false)
    }
  }
   const scrollToTop =()=>{
    window.scrollTo({
      top:0,
      behavior:'smooth'
    })
   }
   useEffect(()=>{
    window.addEventListener('scroll',toggleVisibility)
    return()=>{
        window.addEventListener('scroll',toggleVisibility)
    }
   },[isVisible])
  return (
    <div className="mt-33 flex flex-col   sm:flex-row  relative ">
      <div>
        {eduction.map((element, index) => {
          return (
          
            <div key={index} className=" border-l border-dashed  border-secondary  p-[18px] ml-[10px]">
              <h1 className="text-bat dark:text-white">{element.text}</h1>
              <p className="text-batt">{element.para}</p>
            </div>
         
          );
        })}
      </div>

      <div>
        {edu.map((element, index) => {
          return (
            <div key={index} className="border-l border-dashed  border-secondary  p-[18px] ml-[10px] relative ">
              <div className="border-1 border-dashed rounded-full  border-zinc-300 w-2 h-2 absolute top-0  "/>
              <h1 className="text-bat dark:text-white">{element.text}</h1>
              <p className="text-batt">{element.para}</p>
            </div>
          );
        })}
      </div>
    <div className="hidden sm:block">
    <div className="bg-danger absolute  -left-[2.5rem] bottom-[29px]  rounded-full w-6 h-6   transition-all duration-0"></div>
      <div className="bg-cir absolute -bottom-[49PX] -left-[1.75rem] rounded-lg w-9 h-9"></div>
        <div className="bg-cir absolute z-10 rounded  -top-[3rem] right-[3.25rem]  w-9 h-9  "></div>
        <div className="bg-danger  absolute z-10 top-[1rem] right-3 rounded-lg w-4 h-4  "></div>
        <div className="bg-secondary absolute -top-[6.75rem] right-[5.75rem]   rounded-lg w-2 h-2"></div>
    </div>
       
           {isVisible&& <div><button className="bg-danger text-white rounded-md w-[40px] h-[40px]  fixed bottom-5 right-5 hover:scale-75 duration-200 transition-all" onClick={()=>scrollToTop()}  >
         <img src="/assets/images/a1.png" className="px-[10px]" alt=""/> </button></div>}
    </div>
  );
  
}

export default Eduction
