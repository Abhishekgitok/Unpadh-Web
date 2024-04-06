
import React from "react";
import ProgramCard from "./Pogramcard";



function Program () {


  
  


  return (
    <>
    <section className='max-w-[1280px]   mx-auto mt-[80px]'>
        {/* Title And Subtitle  */}
        <div className="text-center">
         <div className="font-Poppins font-semibold text-4xl dark:text-white">
            <h>
               Our Popular Program
            </h>
           </div>
           <div className=" font-Poppins dark:text-white text-xl font-medium pt-3">
            <h1>
                 Get the world class & verified program 

            </h1>
          </div>
        </div>
        
        {/********************Slider Card*************************/}
        <div   data-aos="fade-up" className="mt-16   ">
            <ProgramCard/>
           
        </div>
        
        


    </section>
      
    </>
  )
}

export default Program;
