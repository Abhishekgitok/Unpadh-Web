import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import NavLinks from "./Navmenu";
import { BiSolidSun,  BiSolidMoon } from "react-icons/bi";



 
function Nav (){

  // for dark mode 

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light",
  );

  const element = document.documentElement;
  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
      console.log("dark theme");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
      console.log("light theme");
    }
  }, [theme]);
//  for responsive navbar 
 const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white">
      <div className="flex items-center font-medium justify-around">
        <div className="z-50 p-5 md:w-auto w-full flex justify-between">
          {/* for logo  */}

         
          <img src="logo.png" alt="logo" className="md:cursor-pointer h-9" />
         

          {/* for responsive nav icon  */}
          <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
          </div>
          
        </div>
        <ul className="md:flex hidden capitalize items-center  font-[Poppins]">
          
          <NavLinks />
          <li>
            <Link to="/" className="nav-link py-7 px-3 inline-block">
              Become instructure
            </Link>
          </li>
          <li>
            <Link to="/" className="nav-link py-7 px-3 inline-block">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/" className="nav-link py-7 px-3 inline-block">
              Contact Us
            </Link>
          </li>
          
          
         </ul>
          {/* Light and dark mode switcher */}
         <div className="pb-2 md:pb-0">
         {theme === "dark" ? (
                <BiSolidSun
                  onClick={() => setTheme("light")}
                  className="text-2xl"
                />
              ) : (
                <BiSolidMoon
                  onClick={() => setTheme("dark")}
                  className="text-2xl"
                />
              )}
         </div>
         <div className="md:block hidden ">
         <div className="relative rounded-full flex xs:ml-12 mt-4 sm:gap-5 sm:ml-10 sm:mt-4 lg:gap-4 lg:ml-0 lg:mt-0 box-border">
              
              <button
               className="relative z-[2] rounded-full  border-solid border-2 border-background px-7 p-2 text-center justify-center   text-sm font-medium capitalize  text-textcolor hover:transition duration-200 ease-out  hover:border-zinc-50   hover:text-white  focus:outline-none    dark:hover:bg-blue-950 "
               type="button"
               id="button-addon3"
               data-twe-ripple-init
              >
               Log in
              </button>
              <button
               className="relative z-[2] rounded-full  hover:border-background border-2 border-primary px-7 text-center justify-center   text-sm font-medium capitalize  text-white hover:transition duration-200 ease-out  bg-background hover:bg-transparent   hover:text-textcolor  focus:outline-none  "
               type="button"
               id="button-addon3"
               data-twe-ripple-init
              >
               <Link to="/signup">Sign Up</Link>
             </button>
           </div>


          </div>
        
        
        {/* Mobile nav */}
        <ul
          className={`
        md:hidden bg-white z-30 fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
        >
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
         
          <NavLinks />
        
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
