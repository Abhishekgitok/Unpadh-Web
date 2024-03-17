
import React, {useState} from 'react';
import cardData from './Api';
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
    <section className=' h-full box-border   mx-auto mt-28'>
        {/* Title And Subtitle  */}
        <div className='text-center'>
        <div className="font-Poppins font-semibold text-3xl dark:text-white">
            <h> 
            Learn From The Best Courses 
            </h>
          </div>
          <div className=" font-Poppins text-lg font-medium mt-4 dark:text-white">
            <h1>
            Choose from 10,000 online video courses with new additions published every month




            </h1>
          </div>
        </div>
        {/********************Slider Card*************************/}
       <div className='flex mx-auto justify-around  items-center '>
       <div id='slider' className='mt-16    w-[60%]  scrollbar-hide  overflow-x-scroll  whitespace-nowrap scroll-smooth'>
              <button type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 dark:text-white  focus:outline-none bg-slate-200 dark:bg-zinc-900 rounded-full border-2 border-gray-400 dark:border-background  hover:bg-transparent  focus:z-10     hover:border-2 hover:border-background focus:bg-transparent focus:border-background dark:focus:bg-white focus:text-textcolor dark:focus:text-black  " onClick={() => setapiData(cardData)}>All</button>

              <button type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-slate-200  rounded-full border-2 border-gray-400  hover:bg-transparent  focus:z-10     hover:border-2 hover:border-background focus:bg-transparent focus:border-background focus:text-textcolor" onClick={() => filterItem('engineering')}>Engineering</button>

              <button type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-slate-200 rounded-full border-2 border-gray-400  hover:bg-transparent  focus:z-10     hover:border-2 hover:border-background focus:bg-transparent focus:border-background focus:text-textcolor" onClick={() => filterItem('science')}>Science</button>

              <button type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-slate-200 rounded-full border-2 border-gray-400  hover:bg-transparent  focus:z-10    r hover:border-2 hover:border-background focus:bg-transparent focus:border-background focus:text-textcolor" onClick={() => filterItem('management')}>Management</button>

              <button type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-slate-200  rounded-full border-2 border-gray-400  hover:bg-transparent  focus:z-10     hover:border-background focus:bg-transparent focus:border-background focus:text-textcolor" onClick={() => filterItem('Design')}>Design</button>
              <button type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-slate-200  rounded-full border-2 border-gray-400  hover:bg-transparent  focus:z-10    hover:border-background focus:bg-transparent focus:border-background focus:text-textcolor" onClick={() => filterItem('Design')}>Design</button>
              <button type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-slate-200  rounded-full border-2 border-gray-400  hover:bg-transparent  focus:z-10      hover:border-background focus:bg-transparent focus:border-background focus:text-textcolor" onClick={() => filterItem('Design')}>Design</button>
              <button type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-slate-200 rounded-full border-2 border-gray-400  hover:bg-transparent  focus:z-10      hover:border-background focus:bg-transparent focus:border-background focus:text-textcolor" onClick={() => filterItem('Design')}>Design</button>
              <button type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-slate-200 rounded-full border-2 border-gray-400  hover:bg-transparent  focus:z-10     hover:border-background focus:bg-transparent focus:border-background focus:text-textcolor" onClick={() => filterItem('Design')}>Design</button>
                
        </div>
       
       <div className='  items-center mt-12 '>
              <FaAngleRight onClick={sliderRight} className='text-sm    bg-slate-800 w-16 h-16 rounded-full p-1 mr-16 text-background ' />
        {/* <FaAngleRight onClick={sliderLeft} className=' text-2xl' /> */}
       </div>

       </div>
        
        
            
             
        <div className=" grid grid-cols-2 md:grid-cols-4 mx-10 md:mx-24 gap-10 gap mt-10   ">
             
                    
                     {apiData.map((ele) =>{
                              const {img, title, name, time, views, price, maxprice,timeicon, viewicon}= ele;

                   return (

                   <div data-aos="fade-up" className='rounded-lg    hover:bg-slate-200 hover:no-underline  active:rounded  transform transition duration-150 border border-outline-variant item-center justify-center hover:scale-105 cursor-pointer overflow-hidden  h-[350px] w-[300px] p-3 border-gray-400  hover:text-white '>
                          <a href="#" >
                                <img className=' h-[150px] w-full  rounded-lg ' src={img} alt="" />
                         </a>
                     
                       <div className='p-2 text-black   font-semibold text- '>
                         <h1>{title}</h1>
                       </div>
                      
                   <div className='p-2 justify-between relative  flex text-textcolor'>
                       <span>{name}</span>
                       <span className='absolute right-[75px] top-[12px]'>{timeicon}</span>
                       <span>{time}</span>
                     
                       </div>

                       <div className='p-2 justify-start gap-5  font-semibold text-2xl text-blue-900 flex'>
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
