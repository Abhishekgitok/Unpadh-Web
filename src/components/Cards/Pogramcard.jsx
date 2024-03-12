import React from "react";
import { FcRight } from "react-icons/fc";
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ProgramCard() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1
    };

    const card = [
        {
            img: "public/icon/icon.png",
            title: "Expert Mentor’s",
            subtitle: "Join Now",
            icon: <FcRight />
        },
        {
            img: "public/icon/Icon (1).png",
            title: "Expert Mentor’s",
            subtitle: "Join Now",
            icon: <FcRight />
        },
        {
            img: "public/icon/icon(2).png",
            title: "Expert Mentor’s",
            subtitle: "Join Now",
            icon: <FcRight />
        },
        {
            img: "public/icon/Icon (3).png",
            title: "Expert Mentor’s",
            subtitle: "Join Now",
            icon: <FcRight />
        },
        {
            img: "public/icon/Icon (4).png",
            title: "Expert Mentor’s",
            subtitle: "Join Now",
            icon: <FcRight />
        },
        {
            img: "public/icon/Icon (5).png",
            title: "Expert Mentor’s",
            subtitle: "Join Now",
            icon: <FcRight />
        },
        
       
    ];

    return (
        <div className=" m-auto">
            <Slider {...settings}>
                {card.map((data, index) => (
                    <div key={index} className=" h-[250px] rounded overflow-hidden  bg-slate-50  shadow-slate-400 border-2 hover: transform transition duration-500 hover:scale-90 hover:shadow-md  justify-center items-start flex cursor-pointer" >
                        <div className=" ">
                            <div className=" h-14 w-14 ml-14 mt-8">
                                <img src={data.img} alt="icon" />
                            </div>
                            <div className=" text-center mt-10 text-blue-950  text-[20px] font-semibold">
                                <h1>{data.title}</h1>
                            </div>
                            <div className="mt-10 flex justify-around">
                                <div className="text-base text-textcolor    ">
                                    <p>
                                        {data.subtitle}
                                    </p>
                                </div>
                                <div className=" text-2xl">
                                    {data.icon}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default ProgramCard;
