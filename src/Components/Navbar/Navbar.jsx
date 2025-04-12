import React, { useState } from "react";
import DarkMode from "../DarkMode/DarkMode";
import { LuAlignJustify } from "react-icons/lu";
import { IoCloseSharp } from "react-icons/io5";
import { NavLink, useNavigate } from "react-router-dom";


export default function Navbar({ logo }) {

  const navigate = useNavigate()
  const nav = useNavigate()

  const scrollToSection = (id) => {
    navigate(`/#${id}`)
  }
  const scrollToPage = () => {
    nav(`/project`)
  }




  const [show, setShow] = useState(false);

  return (
    <div className="fixed  top-0 left-0 right-0 z-[999999] bg-white dark:bg-black/75">
      <div className="flex justify-between items-center p-5 text-prim h-[100px]">
        <h1 className="text-2xl dark:text-white hidden md:flex ">{logo}</h1>
        <button className="block md:hidden" onClick={() => setShow(true)}>
          <LuAlignJustify className="text-abou dark:text-white" />
        </button>
        <div className="hidden  md:flex">
          <ul className="flex justify-between gap-11 dark:text-white">


            <li onClick={() => scrollToSection("hero")} >  Home</li>
            <li onClick={() => scrollToSection("about")}>About Me</li>
            <li onClick={() => scrollToSection("ed")}> Education </li>
            <li onClick={() => scrollToSection("cont")}> Contact</li>
            <li onClick={() => scrollToPage()}> Projects</li>




          </ul>
        </div>
        <DarkMode  />
      </div>




      {show && (
        <div className="fixed inset-0 z-40 bg-white/25 w-[170px] flex justify-between items-start backdrop-blur-md p-[19px] md:hidden dark:bg-black dark:text-white">
          <div >
            <ul className="flex flex-col gap-1">
              <li >
                <NavLink to='/' className={({ isActive }) => (isActive ? "text-danger" : "")} onClick={() => scrollToSection("hero")}> Home</NavLink></li>
              <li> <NavLink to='/' className={({ isActive }) => (isActive ? "text-danger" : "")} onClick={() => scrollToSection("about")}>About Me</NavLink></li>
              <li> <NavLink to='/' className={({ isActive }) => (isActive ? "text-danger" : "")} onClick={() => scrollToSection("ed")}> Education</NavLink></li>
              <li>  <NavLink to='/' className={({ isActive }) => (isActive ? "text-danger" : "")} onClick={() => scrollToSection("Contact")}> Contact</NavLink></li>
              <li>  <NavLink to='/project' className={({ isActive }) => (isActive ? "text-danger" : "")}> Projects</NavLink></li>
            </ul>
          

          </div>

          <button
            className="block md:hidden cursor-pointer text-size"
            onClick={() => setShow(false)}
          > <IoCloseSharp className="text-red-500   text-intro" />
          </button>

        </div>

      )}


    </div>
  );
}

