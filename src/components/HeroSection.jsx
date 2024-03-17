import React from "react";

function HeroSection() {
  const rows = 4;
  const cols = 4;
  return (
    <>
      <div className=" h-[750px] md:h-[580px]  bg-background  ">
        <section className="container flex flex-col items-center justify-between ">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
            {/* text container  */}
            <div className="max-w-[580px]  flex flex-col items-center gap-5 text-center text-white md:items-start md:text-left ">
              <h1 className=" text-5xl font-extrabold leading-tight tracking-normal "> Discover the best course online
                 for the <span className="text-yellow-300">best learning</span></h1>
              <p className="text-md">
                Relatively permanent change in behavior or potential behavior as
                a result of the or practice occurring learning is the
                result of the interaction between stimulus  a person has
                learned something if he can show a change in behavior.
            </p>

            {/* btn  */}
            <div className="w-[520px] ">
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
            </div>
            {/* images container  */}
            <div className="">
            <div className="  max-w-[400px] md:max-w-lg pl-8 md:pt-12 ">
              <img src="about.png" alt="" className="   relative     " />
              
            </div>

            {/* <DotGrid gridSize={4} />  */}
            <div className="  grid grid-cols-4 gap-4 absolute  right-16 top-28 ">
                {Array.from({ length: rows * cols }).map(( index) => (
                  <div
                    key={index}
                    className="md:opacity-100 opacity-0  w-2 h-2  bg-yellow-300 rounded-full "
                  ></div>
                ))}
              </div>

              {/* <div class="w-[400px] h-[400px] sm:top-[500px] bg-slate-900 absolute animate-morph animate-spin top-40 right-24 rounded-full opacity-50"></div> */}

            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default HeroSection;
