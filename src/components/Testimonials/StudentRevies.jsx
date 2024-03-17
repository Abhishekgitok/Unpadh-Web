import React from "react";
import StudentReviesFile from "./StudentReviesFile";



function StudentRevies() {
   
  

  return (
    <>
      <section className="  h-screen max-w-[1280px] mx-auto mt-16 items-center    ">
        {/*********************** * Top side Section **************************** */}

        {/* Title And Subtitle  */}
        <div className="text-center">
          <div className="font-Poppins font-semibold text-[20px] capitalize tracking-widest text-background">
            {/* <h>testimonials</h> */}
          </div>
          <div className=" font-Poppins text-[40px] font-semibold mt-4 tracking-wide">
            <h1>What’s Our Students Are Sayying</h1>
          </div>
        </div>

        {/*********************** *  bottom side Section **************************** */}
        
         <StudentReviesFile/>
        
  


      </section>
    </>
  );
}

export default StudentRevies;
