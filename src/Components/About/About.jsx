import React from "react";
import { SiTailwindcss } from "react-icons/si";

function About() {
  const about = [
    {
      det: "Html",

      width: "85%"
    },
    {
      det: "Css ",
      width: "80%"
    },
    {
      det: "java script",
      width: "70%"
    },
    {
      det: "React",
      width: "70%"
    },
    {
      det: "Tailwind",
      width: "75%"
    }]
  return (
    <div className="flex mt-33 " id="about">
      <div className=" w-9/12 ml-5 py-3 px-4  hidden relative lg:block">
        <img
          src="assets/images/Circles.png"
          className="h-[300px] text-prim  "
        />
        <img
          className=" z-9999 absolute  inset-[125px] w-ic h-iche"
          src="assets/images/css.png"
          alt=""
        />
        <img
          className="w-ic h-iche absolute top-[48px] left-[4.25rem]"
          src="assets/images/html.png"
          alt=""
        />
        <img
          className="w-ic h-iche absolute top-[5rem] left-[12rem] "
          src="assets/images/figma.png"
          alt=""
        />
        <img
          className="w-ic h-iche absolute right-[6rem] bottom-[111px] "
          src="assets/images/react.png"
          alt=""
        />
        <img
          className="w-ic h-iche absolute bottom-[7.25rem] left-[6.25rem] z-10"
          src="assets/images/get hup.png"
          alt=""
        />
        <span className="absolute  bottom-[11.5rem] left-[3.25rem]"><SiTailwindcss className=" text-danger text-title  h-12  p-1 w-12 rounded-full bg-black " /> </span>
      </div>
      <div className="p-[10px]">
        <h1 className="text-abou font-semibold">About Me </h1>
        <p className="text-par text-opacity-75 dark:text-white">
         Graduate of the Faculty of Information Engineering from the University of Latakia ,
         specializing in Software and Information Systems.
         I have two years of experience in the field of Web development. 
        </p>
        {
          about.map((element, index) => {
            return (
              <div className="" key={index}>
                <h1 className="py-[8px] text-prim font-semibold  dark:text-white">{element.det}</h1>
                <div className="  bg-slate-200 rounded-but  h-2  w-[400px] font-semibold flex justify-start items-center ">
                  <div className='bg-danger h-full rounded-but  ' style={{ width: element.width }} />
                  <img src="assets/images/ci.png" className="w-8 h-8 mt-1 -ml-[1.25rem]" alt="" />
                </div>
                {/* <div className="bg-danger h-3 w-5 absolute top-0 right-0"> {element.width}</div> */}
              </div>
            )
          })
        }

      </div>
    </div>
  );
}

export default About;
