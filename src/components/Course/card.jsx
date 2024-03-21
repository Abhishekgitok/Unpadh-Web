import { useState, useEffect } from "react";
import axios from "axios";
import { FaAngleRight } from "react-icons/fa6";

function Course() {
  const [myData, setMyData] = useState([]);
  const [isError, setIsError] = useState("");
  const [filter, setFilter] = useState(null); // State to hold the filter category

  // Fetch data from the server
  const getMyPostData = async () => {
    try {
      const res = await axios.get("https://chartreuse-green-bison-toga.cyclic.app/course");
      setMyData(res.data);
    } catch (error) {
      setIsError(error.message);
    }
  };

  // Filter items based on category
  const filterItems = (category) => {
    setFilter(category === "all" ? null : category); // Update the filter state. If "All" is selected, set filter to null
  };

  useEffect(() => {
    getMyPostData();
  }, []);

  // for slider
   const sliderLeft = () =>{
   var slider = document.getElementById('slider')
      slider.scrollLeft = slider.scrollLeft - 500
   }
   const sliderRight = () =>{
   var slider = document.getElementById('slider')
      slider.scrollLeft = slider.scrollLeft + 500
   }

  return (
    <>
      <section className=" h-full box-border   mx-auto mt-28">
        {/* Title And Subtitle  */}
        <div className="text-center">
          <div className="font-Poppins font-semibold text-3xl dark:text-white">
            <h>Learn From The Best Courses</h>
          </div>
          <div className=" font-Poppins text-lg font-medium mt-4 dark:text-white">
            <h1>
              Choose from 10,000 online video courses with new additions
              published every month
            </h1>
          </div>
        </div>
        {/********************Slider Card*************************/}
        <div className="flex mx-auto justify-around  items-center ">
          <div
            id="slider"
            className="mt-16    w-[60%]  scrollbar-hide  overflow-x-scroll  whitespace-nowrap scroll-smooth"
          >
            <button
              type="button"
              class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 dark:text-white  focus:outline-none bg-slate-200 dark:bg-zinc-900 rounded-full border-2 border-gray-400 dark:border-background  hover:bg-transparent  focus:z-10     hover:border-2 hover:border-background focus:bg-transparent focus:border-background focus:text-textcolor dark:focus:text-black dark:focus:bg-white   "
              onClick={() => filterItems("all")}
            >
              All
            </button>

            <button
              type="button"
              class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 dark:text-white  focus:outline-none bg-slate-200 dark:bg-zinc-900  rounded-full border-2 border-gray-400  hover:bg-transparent  focus:z-10     hover:border-2 hover:border-background focus:bg-transparent focus:border-background dark:border-background dark:focus:text-black dark:focus:bg-white focus:text-textcolor"
              onClick={() => filterItems("engineering")}
            >
              Engineering
            </button>

            <button
              type="button"
              class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 dark:text-white  focus:outline-none bg-slate-200 dark:bg-zinc-900 rounded-full border-2 border-gray-400  hover:bg-transparent  focus:z-10     hover:border-2 hover:border-background focus:bg-transparent focus:border-background dark:border-background dark:focus:text-black dark:focus:bg-white focus:text-textcolor"
              onClick={() => filterItems("science")}
            >
              Science
            </button>

            <button
              type="button"
              class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 dark:text-white  focus:outline-none bg-slate-200 dark:bg-zinc-900 rounded-full border-2 border-gray-400  hover:bg-transparent  focus:z-10    r hover:border-2 hover:border-background focus:bg-transparent focus:border-background dark:border-background dark:focus:text-black dark:focus:bg-white focus:text-textcolor"
              onClick={() => filterItems("management")}
            >
              Management
            </button>

            <button
              type="button"
              class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 dark:text-white  focus:outline-none bg-slate-200 dark:bg-zinc-900   rounded-full border-2 border-gray-400  hover:bg-transparent  focus:z-10     hover:border-background focus:bg-transparent focus:border-background dark:border-background dark:focus:text-black dark:focus:bg-white focus:text-textcolor"
              onClick={() => filterItems("Design")}
            >
              Design
            </button>
            
          </div>

          <div className="  items-center mt-12 ">
            <FaAngleRight
              onClick={sliderRight}
              className="text-sm    bg-slate-800 w-16 h-16 rounded-full p-1 mr-16 text-background "
            />
            {/* <FaAngleRight onClick={sliderLeft} className=' text-2xl' /> */}
          </div>
        </div>
        {isError !== "" && <h2>{isError}</h2>}

        <div className=" grid grid-cols-2 md:grid-cols-4 mx-10 md:mx-24 gap-10 gap mt-10   ">
          {myData.filter((post) => !filter || post.category === filter) // Filter based on selected category
          .map((post) => {
              const {
                id,
                img,
                title,
                name,
                time,
               
                price,
                maxprice,
                
               
              } = post;

              return (
                <div 
                  data-aos="fade-up" key={id}
                  className="rounded-lg p-4 max-w-[300px] dark:bg-zinc-800   hover:bg-slate-200 dark:hover:bg-background hover:no-underline  active:rounded   transform transition duration-150 border border-outline-variant item-center justify-center hover:scale-105 cursor-pointer overflow-hidden   border-gray-400   hover:text-white "
                >
                  <a href="#">
                    <img
                      className=" h-[150px] w-full   object-cover   rounded-lg "
                      src={img}
                      alt=""
                    />
                  </a>

                  <div className="pt-2 text-black dark:text-white   font-semibold text- ">
                    <h1>{title}</h1>
                  </div>

                  <div className="py-3 justify-between relative  flex text-textcolor dark:text-white">
                    <span>{name}</span>
                    {/* <span className="absolute right-[75px] top-[12px]">
                      {timeicon}
                    </span> */}
                    <span>{time}</span>
                  </div>

                  <div className="p-2 justify-start gap-5  font-semibold text-2xl text-blue-900 flex">
                    <h1>{price}</h1>
                    <h1 className="line-through text-black dark:text-white font-semibold text-lg">
                      {maxprice}
                    </h1>
                  </div>
                </div>
              );
            })}
        </div>
      </section>
    </>
  );
}

export default Course;
