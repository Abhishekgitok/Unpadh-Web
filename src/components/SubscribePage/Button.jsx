import React from 'react'
import { MdOutlineEmail } from "react-icons/md";

function Button()  {
  return (
    <>
       {/* btn  */}
       <div className="w-[520px] ">
                <form class=" mx-auto">
                  <label
                    for="default-search"
                    class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                  ></label>
                  <div class="relative">
                    <div class="absolute inset-y-0 start-0  flex items-center ps-3 pointer-events-none">
                    <MdOutlineEmail className='text-lg text-gray-500 ' />
                    </div>
                    <input
                      type="search"
                      id="default-search"
                      class="block w-full p-5 ps-10 text-sm text-gray-900 border border-gray-300 rounded-full outline-none"
                      placeholder="Enter your email address..."
                      required
                    />
                    <button
                      type="submit"
                      class="text-white absolute end-2.5 bottom-[9px] 
            
                      bg-background hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-full text-sm px-6 py-3 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Join now
                    </button>
                  </div>
                </form>
              </div>
    </>
  )
}

export default Button
