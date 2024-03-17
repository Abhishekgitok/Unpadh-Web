import React from "react";
import { FcRight } from "react-icons/fc";
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import'./programcard.css';


function ProgramCard () {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };

    const card = [
        {
            img: "Icon.png",
            title: "Non Credit Programmes",
            subtitle: "Join Now",
            icon: <FcRight />
        },
        {
            img: "Icon (1).png",
            title: "Management",
            subtitle: "Join Now",
            icon: <FcRight />
        },
        {
            img: "Icon(2).png",
            title: "Bachlor's Degree",
            subtitle: "Join Now",
            icon: <FcRight />
        },
        {
            img: "Icon (3).png",
            title: "PG & Advance Diploma",
            subtitle: "Join Now",
            icon: <FcRight />
        },
        {
            img: "Icon (4).png",
            title: "Bachlor's Degree",
            subtitle: "Join Now",
            icon: <FcRight />
        },
        {
            img: "Icon (5).png",
            title: "Bachlor's Degree",
            subtitle: "Join Now",
            icon: <FcRight />
        },
        
       
    ];

    return (
        <div className=" ">
            <Slider {...settings}>
                {card.map((data, index) => (
                    <div  key={index} className=" h-[250px] rounded-lg overflow-hidden  bg-slate-50 dark:bg-zinc-900  shadow-slate-400 border-2 border-gray-300 dark:border-background  transform transition duration-500 hover:scale-90   justify-center items-start flex cursor-pointer" >
                        <div className=" ">
                            <div  className=" h-20 w-20  mt-8 items-center mx-auto justify-center">
                                <img src={data.img} alt="icon" />
                            </div>
                            <div className=" text-center mt-8 text-blue-950 dark:text-white  text-[20px] font-semibold">
                                <h1>{data.title}</h1>
                            </div>
                          
                                <div className=" my-4 border-2 mx-32 p-2 rounded-lg  font-medium flex gap-5 justify-center items-center text-textcolor dark:text-white   ">
                                    <p>
                                        {data.subtitle}
                                    </p>
                                    {data.icon}

                                </div>
                            
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default ProgramCard;
