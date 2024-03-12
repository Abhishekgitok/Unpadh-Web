import React from "react";
import Headingcard from "./Cards/Headingcard";

function Header(props) {
  const rows = 4;
  const cols = 4;

  return (
    <>
      <section className=" mt-20  w-full mx-auto flex  justify-around ">
        {/* Left Side  */}
        <div className="relative">
          <div className="font-Poppins font-semibold text-[40px]">
            <h>
              Start Learning with <span className="text-background">Unpadh</span> 
              <br /> and achieve your goals
            </h>
          </div>
          <div className="absolute w-[80px] h-[75px] bg-background rounded-[15px] top-[150px]">

          </div>
          <div className="absolute top-[160px] left-3">
            <img src="Group 17.png" alt="" />
          </div>
        </div>

        {/* Right Side  */}
        <div>
          <div className=" font-Poppins text-[16px] font-normal mt-2">
            <h1>
              Some of the benefits that you will get if you join us and become a<br/>
              passionate student, you will get insight and knowledge as well as<br/>
              relationships and international certificates
            </h1>
          </div>
          <div className="mt-[90px]">
            
            <Headingcard />
          </div>
          
        </div>
      </section>
    </>
  );
}

export default Header;
