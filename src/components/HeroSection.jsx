import React from "react";

function HeroSection() {
  const rows = 4;
  const cols = 4;
  return (
    <>
      <section className=" w-full h-[85vh]  overflow-hidden   bg-background mx-auto items-center justify-center   ">
        <div className=" w-full justify-center  items-center  ">
          <div className="   flex mx-auto justify-evenly     ">
            {/*************************************Left Side Section Start******************************************/}
            <div className=" pt-20 ml-16  ">
              <h1 className="text-[46px]  font-semibold  text-white ">
                Dis cover the <span className="text-teal-950 uppercase font-bold">best course</span> <br />
                online for the <span className="text-teal-950 uppercase font-bold" >best learning</span>
              </h1>
              <p className=" mt-8 text-[15px] leading-8 tracking-normal font-normal  text-white">
                Relatively permanent change in behavior or potential behavior as
                a result of the <br /> or practice occurring learning is the
                result of the interaction between stimulus a <br /> person has
                learned something if he can show a change in behavior.
              </p>

              {/* Btn */}
              <div className="w-[550px] mt-8">
                <form class=" mx-auto">
                  <label
                    for="default-search"
                    class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                  ></label>
                  <div class="relative">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                      <svg
                        class="w-4 h-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                      </svg>
                    </div>
                    <input
                      type="search"
                      id="default-search"
                      class="block w-full p-5 ps-10 text-sm text-gray-900 border border-gray-300 rounded-full outline-none"
                      placeholder="Search your course here..."
                      required
                    />
                    <button
                      type="submit"
                      class="text-white absolute end-2.5 bottom-[9px] 
            
                      bg-background hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-full text-sm px-6 py-3 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Get started
                    </button>
                  </div>
                </form>
              </div>
              {/*  Button  */}
            </div>
            {/************************************* Left Side Section End ******************************************/}

            {/************************************* Right Side Section Start******************************************/}
            <div class="relative bg-transparent  border- rounded-full justify-center items-center mt-[40px] ">
              {/* image  */}
              <img
                className=" relative   z-20  mt-[1.7rem] "
                src="student.png"
                alt=""
              />

              {/* image background  */}

              <div class=" absolute z-10 inset-0 flex justify-center items-center">
                <div class="h-[450px] w-[450px]  bg-teal-400 rounded-full"></div>
              </div>

              <div class=" absolute  inset-0 flex justify-center items-center">
                <div class="h-[550px] w-[550px]  bg-teal-800 border-2 rounded-full"></div>
              </div>
            </div>

            {/* image  */}
          </div>
          {/* <DotGrid gridSize={4} />  */}
          <div className="absolute flex  justify-end right-10 top-[160px]">
            <div className="grid grid-cols-4 gap-4">
              {Array.from({ length: rows * cols }).map((_, index) => (
                <div
                  key={index}
                  className="w-2 h-2 bg-white rounded-full"
                ></div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroSection;
