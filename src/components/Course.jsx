
import React, {useState} from 'react';
import cardData from './Api/Api';
import { FaAngleRight } from "react-icons/fa6";

import Slider from "react-slick";
// Import css files
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";


function Course () {
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 3,
  //   slidesToScroll: 1
  // };
    const [apiData, setapiData]= useState(cardData);

    const filterItem = (categitem) =>{
           const updateditems = cardData.filter((elem) => {
            return elem.category == categitem;
           })
         setapiData(updateditems);
    } 

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
    <section className=' h-full box-border max-w-[1280px]  mx-auto mt-[80px]'>
        {/* Title And Subtitle  */}
        <div className='text-center'>
        <div className="font-Poppins font-semibold text-[40px]">
            <h> 
            Learn From The Best Courses 
            </h>
          </div>
          <div className=" font-Poppins text-[20px] font-normal mt-8">
            <h1>
            Choose from 10,000 online video courses with new additions published every month




            </h1>
          </div>
        </div>
        {/********************Slider Card*************************/}
        {/* <div className='absolute right-[700px] top-[128.6rem] text-4xl text-text-gray-900'>
              <FaAngleRight onClick={sliderLeft} size={40}/>
              </div> */}
              <div id='slider' className='mt-5 absolute right-[150px] w-[30%] scrollbar-hide  overflow-x-scroll  whitespace-nowrap scroll-smooth'>
              <button type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white dark:bg-gray-800 rounded-full border-2  hover:bg-transparent  focus:z-10  dark:focus:ring-gray-700  dark:text-gray-400 dark:hover:text-textcolor hover:border-2 hover:border-background focus:bg-transparent focus:border-background focus:text-textcolor " onClick={() => setapiData(cardData)}>All</button>

              <button type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white dark:bg-gray-800 rounded-full border-2  hover:bg-transparent  focus:z-10  dark:focus:ring-gray-700  dark:text-gray-400 dark:hover:text-textcolor hover:border-2 hover:border-background focus:bg-transparent focus:border-background focus:text-textcolor" onClick={() => filterItem('engineering')}>Engineering</button>

              <button type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white dark:bg-gray-800 rounded-full border-2  hover:bg-transparent  focus:z-10  dark:focus:ring-gray-700  dark:text-gray-400 dark:hover:text-textcolor hover:border-2 hover:border-background focus:bg-transparent focus:border-background focus:text-textcolor" onClick={() => filterItem('science')}>Science</button>

              <button type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white dark:bg-gray-800 rounded-full border-2  hover:bg-transparent  focus:z-10  dark:focus:ring-gray-700  dark:text-gray-400 dark:hover:text-textcolor hover:border-2 hover:border-background focus:bg-transparent focus:border-background focus:text-textcolor" onClick={() => filterItem('management')}>Management</button>

              <button type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white dark:bg-gray-800 rounded-full border-2  hover:bg-transparent  focus:z-10  dark:focus:ring-gray-700  dark:text-gray-400 dark:hover:text-textcolor hover:border-2 hover:border-background focus:bg-transparent focus:border-background focus:text-textcolor" onClick={() => filterItem('Design')}>Design</button>
              <button type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white dark:bg-gray-800 rounded-full border-2  hover:bg-transparent  focus:z-10  dark:focus:ring-gray-700  dark:text-gray-400 dark:hover:text-textcolor hover:border-2 hover:border-background focus:bg-transparent focus:border-background focus:text-textcolor" onClick={() => filterItem('Design')}>Design</button>
              <button type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white dark:bg-gray-800 rounded-full border-2  hover:bg-transparent  focus:z-10  dark:focus:ring-gray-700  dark:text-gray-400 dark:hover:text-textcolor hover:border-2 hover:border-background focus:bg-transparent focus:border-background focus:text-textcolor" onClick={() => filterItem('Design')}>Design</button>
              <button type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white dark:bg-gray-800 rounded-full border-2  hover:bg-transparent  focus:z-10  dark:focus:ring-gray-700  dark:text-gray-400 dark:hover:text-textcolor hover:border-2 hover:border-background focus:bg-transparent focus:border-background focus:text-textcolor" onClick={() => filterItem('Design')}>Design</button>
              <button type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white dark:bg-gray-800 rounded-full border-2  hover:bg-transparent  focus:z-10  dark:focus:ring-gray-700  dark:text-gray-400 dark:hover:text-textcolor hover:border-2 hover:border-background focus:bg-transparent focus:border-background focus:text-textcolor" onClick={() => filterItem('Design')}>Design</button>
                
              </div>
              <div className='absolute right-[120px] top-[128.6rem] text-4xl text-text-gray-900'>
              <FaAngleRight className='cursor-pointer' onClick={sliderRight} />
              </div>
            
             
                <div className=" flex flex-wrap   gap-8 justify-center items-center   mt-24 ">
             
                    
                     {apiData.map((ele) =>{
                              const {img, title, name, time, views, price, maxprice,timeicon, viewicon}= ele;

                   return (

                   <div className='bg-gray-700  transform transition duration-300  hover:scale-105 cursor-pointer rounded-lg shadow-xl h-[380px] w-[400px]   justify-center  items-center overflow-hidden'>
                          <a href="#" >
                                <img className='h-[180px] rounded-t-lg w-full    items-center justify-center mx-auto' src={img} alt="" />
                         </a>
                     
                       <div className='mt-4 text-gray-400 ml-5  font-semibold text-lg '>
                         <h1>{title}</h1>
                       </div>
                      
                  <div className='mt-5 justify-around relative  flex text-gray-300'>
                       <span>{name}</span>
                       <span className='absolute right-[190px] top-[4px]'>{timeicon}</span>
                       <span className='mr-[-20px]'>{time}</span>
                       <span className='absolute right-24 top-[5px]'>{viewicon}</span>
                       <span>{views}</span>
                    </div>

                       <div className='mt-8 justify-start gap-5 ml-6 font-semibold text-2xl text-background flex'>
                          <h1>{price}</h1>
                          <h1 className='line-through text-black font-semibold text-lg'>{maxprice}</h1>
                       </div>
                     
                        
                  </div>
            )})}
                   </div>
               
                
                  


        


    </section>
      
    </>
  )
}

export default Course;
