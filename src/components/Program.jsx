
import React from "react";
import ProgramCard from "./Cards/Pogramcard";



function Program () {
  


  return (
    <>
    <section className='max-w-[1280px]   mx-auto mt-[80px]'>
        {/* Title And Subtitle  */}
        <div className="text-center">
         <div className="font-Poppins font-semibold text-[40px]">
            <h>
               Popular Program
            </h>
           </div>
           <div className=" font-Poppins text-[20px] font-normal mt-8">
            <h1>
                 Get the world class & verified program (UGC Approved)

            </h1>
          </div>
        </div>
        
        {/********************Slider Card*************************/}
        <div className="mt-24   ">
            <ProgramCard/>
           
        </div>
        
        


    </section>
      
    </>
  )
}

export default Program;
