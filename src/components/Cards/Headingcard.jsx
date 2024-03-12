import React from "react";
import { RiGraduationCapFill } from "react-icons/ri";
import { FaMedal } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";

function HeadingCard() {

    const card =[
        {
            icon: <RiGraduationCapFill />,
            title: "Expert Mentor’s",
            subtitle: "The best mentors in the world from the best college graduates"
        },
        {
            icon: <FaMedal />,
            title: "Lifetime Access",
            subtitle: "Certificate that can be used to apply for work"
        },
        {
            icon:<FaUser />,
            title: "Ofline and online",
            subtitle: "Wide relationship and get my opportunities to work"
        },
    ];

    return (
        <div className="grid grid-cols-1 gap-4 ">
            {card.map((data, index) => (
                <div key={index} className="max-w-xs rounded overflow-hidden  bg-white hover:shadow-xl transition duration-300 ease-in-out">
                    <div className="p-2 flex text-2xl  text-background">
                        {data.icon}
                        <h1 className="ml-[20px]  text-lg font-semibold text-textcolor tracking-wide">{data.title}</h1>
                    </div>
                    <div className="">
                        <p className="ml-[53px] mb-3 text-sm  text-gray-600 tracking-wide">
                            {data.subtitle}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default HeadingCard;