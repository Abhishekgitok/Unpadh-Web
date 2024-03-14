
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
       <div className='flex mx-auto justify-around  items-center '>
       <div id='slider' className='mt-5    w-[60%]  scrollbar-hide  overflow-x-scroll  whitespace-nowrap scroll-smooth'>
              <button type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-slate-300 rounded-full border-2  hover:bg-transparent  focus:z-10     hover:border-2 hover:border-background focus:bg-transparent focus:border-background focus:text-textcolor " onClick={() => setapiData(cardData)}>All</button>

              <button type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-slate-300  rounded-full border-2  hover:bg-transparent  focus:z-10     hover:border-2 hover:border-background focus:bg-transparent focus:border-background focus:text-textcolor" onClick={() => filterItem('engineering')}>Engineering</button>

              <button type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-slate-300 rounded-full border-2  hover:bg-transparent  focus:z-10     hover:border-2 hover:border-background focus:bg-transparent focus:border-background focus:text-textcolor" onClick={() => filterItem('science')}>Science</button>

              <button type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-slate-300 rounded-full border-2  hover:bg-transparent  focus:z-10    r hover:border-2 hover:border-background focus:bg-transparent focus:border-background focus:text-textcolor" onClick={() => filterItem('management')}>Management</button>

              <button type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-slate-300  rounded-full border-2  hover:bg-transparent  focus:z-10     hover:border-background focus:bg-transparent focus:border-background focus:text-textcolor" onClick={() => filterItem('Design')}>Design</button>
              <button type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-slate-300  rounded-full border-2  hover:bg-transparent  focus:z-10    hover:border-background focus:bg-transparent focus:border-background focus:text-textcolor" onClick={() => filterItem('Design')}>Design</button>
              <button type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-slate-300  rounded-full border-2  hover:bg-transparent  focus:z-10      hover:border-background focus:bg-transparent focus:border-background focus:text-textcolor" onClick={() => filterItem('Design')}>Design</button>
              <button type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-slate-300 rounded-full border-2  hover:bg-transparent  focus:z-10      hover:border-background focus:bg-transparent focus:border-background focus:text-textcolor" onClick={() => filterItem('Design')}>Design</button>
              <button type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-slate-300 rounded-full border-2  hover:bg-transparent  focus:z-10     hover:border-background focus:bg-transparent focus:border-background focus:text-textcolor" onClick={() => filterItem('Design')}>Design</button>
                
        </div>
       
       <div className='  items-center mt-2 '>
              <FaAngleRight onClick={sliderRight} className='text-4xl bg-slate-400 w-16 rounded-full p-1 mr-11 text-background top-0' />
        {/* <FaAngleRight onClick={sliderLeft} className=' text-2xl' /> */}
       </div>

       </div>
        
        
            
             
        <div className=" flex flex-wrap   gap-8    mt-20 ">
             
                    
                     {apiData.map((ele) =>{
                              const {img, title, name, time, views, price, maxprice,timeicon, viewicon}= ele;

                   return (

                   <div className='rounded-2xl block   hover:bg-slate-400 hover:no-underline  active:rounded  transform transition duration-150 border border-outline-variant text-center  hover:scale-105 cursor-pointer overflow-hidden  h-[420px] w-[400px]  hover:text-white '>
                          <a href="#" >
                                <img className=' rounded-3xl pt-3  p-4 mx-auto' src={img} alt="" />
                         </a>
                     
                       <div className='mt-4 text-gray-950   font-semibold text-lg '>
                         <h1>{title}</h1>
                       </div>
                      
                   <div className='mt-5 justify-around relative  flex text-textcolor'>
                       <span>{name}</span>
                       <span className='absolute right-[190px] top-[4px]'>{timeicon}</span>
                       <span className='mr-[-20px]'>{time}</span>
                       <span className='absolute right-24 top-[5px]'>{viewicon}</span>
                       <span>{views}</span>
                    </div>

                       <div className='mt-8 justify-start gap-5 ml-6 font-semibold text-2xl text-blue-900 flex'>
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
