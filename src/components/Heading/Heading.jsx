import React from "react";
import HeadingCard from "./Headingcard";

function Header(props) {
  const rows = 4;
  const cols = 4;

  return (
    <>
      <section className=" justify-center items-center   mt-16  w-full mx-auto  ">
        {/* Left Side  */}
        <div className="text-center">
          <div className="font-Poppins font-semibold text-[40px]">
            <h>
              Start Learning with <span className="text-background">Unpadh</span> 
              <br /> and achieve your goals
            </h>
          </div>
          {/* <div className="absolute w-[80px] h-[75px] bg-background rounded-[15px] top-[150px]">

          </div> */}
          
        </div>

        {/* Right Side  */}
       <div className="container flex flex-col items-center pt-16 ">
       <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center justify-center "> 
       {/* images  */}
        <div className="items-center justify-center ">
            <img src="Group 17.png" alt="" />
          </div>
           {/* text container  */}
          <div className=" font-Poppins text-[16px] font-normal ">
            <h1>
              Some of the benefits that you will get if you join us and become a<br/>
              passionate student, you will get insight and knowledge as well as<br/>
              relationships and international certificates
            </h1>
            <HeadingCard />
          </div>
         
          
        </div>
       </div>
      </section>
    </>
  );
}

export default Header;
