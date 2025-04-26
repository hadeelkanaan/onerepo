import React, { useEffect, useState } from "react";

function DarkMode() {
  
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
   
    <div  >
      <button className="relative " >
     
        <img
          src="assets/images/moon.png"
         onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          alt=""
          className={` absolute z-10 top-2 w-8 cursor-pointer transition-all duration-300 ${theme==="dark" ?"opacity-0" :"opacity-100"} `}
        />


        <img
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        src="assets/images/sun.png"
        className={`w-12 cursor-pointer transition-all duration-700  ${theme==="light" ? "opacity-0" :"opacity-100"}`}/>
        

      </button>
  
      </div>
  );
}

export default DarkMode;
