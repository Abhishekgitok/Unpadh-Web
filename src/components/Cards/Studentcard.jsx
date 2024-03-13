import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function StudentCard() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 5000,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  const stuCard = [
    {
      img: "man1.avif",
      title:
        "I wanted to express my gratitude for the incredible experience I've had with your education platform. As a student, I've found immense value in the resources and opportunities provided, and I wanted to share some feedback ",
      subtitle: "Saraubh Kumar",
      course: "MCA Student",
    },
    {
      img: "man2.jpg",
      title:
        "Your educational platform has been an absolute game-changer for me, and I'm deeply appreciative of the enriching journey it has offered. The wealth of resources and opportunities available has truly transformed my learning experience.",
      subtitle: "Virendra Kumar",
      course: "B.tech Student",
    },
    {
      img: "women1.jpg",
      title: "I am profoundly grateful for the unparalleled educational journey your platform has enabled me to undertake. The abundance of resources and opportunities has been instrumental in equipping me with the skills and knowledge necessary for success. ",
      subtitle: "Roshni Srivastav",
      course: "MBA Student",
    },
    {
      img: "women2.jpg",
      title:
        "I am profoundly grateful for the exceptional educational journey your platform has enabled me to embark on. The diverse array of resources and opportunities have been instrumental in shaping my academic growth and development.",
      subtitle: "Bharti Singh",
      course: "PG & Advance Diploma Student",
    },
    {
      img: "man3.webp",
      title: "I wanted to extend my heartfelt appreciation for the extraordinary educational experience your platform has afforded me. The myriad of resources and opportunities have been instrumental in nurturing my intellectual curiosity and fostering academic excellence.",
      subtitle: "Aniket Kumar",
      course: "Msc Student",
    },
    {
      img: "women3.jpg",
      title: "I wanted to take a moment to express my sincere gratitude for the incredible educational journey your platform has facilitated for me. The diverse range of resources and opportunities have been instrumental in broadening my horizons and nurturing my passion for learning.",
      subtitle: "Anushka Anu",
      course: "Bsc Student",
    },
    {
      img: "man4.webp",
      title:
        "Words cannot express the depth of my gratitude for the invaluable learning experience your platform has provided. The abundance of resources and opportunities has been nothing short of remarkable, profoundly impacting my educational journey.",
      subtitle: "Rishul Verma",
      course: "MCA Student",
    },
  ];

  return (
    <>
      {/*********************** * left Right side Section **************************** */}
      <div className="slider-container">
        <Slider {...settings}>
          {stuCard.map((data, index) => (
            <div
              key={index}
              className=" h-[400px]  mt-20 cursor-pointe justify-center items-centerr"
            >
              <div className="flex mx-auto justify-around">
                <div className=" h-[280px] w-[280px] border-4 rounded-full bg-background shadow-xl justify-start items-center  ">
                  <img
                    className="h-[250px] w-[250px] rounded-full mt-3 ml-3"
                    src={data.img}
                    alt="icon"
                  />
                </div>

                <div className=" w-[50%]  ">
                  <div className=" ">
                    <h1>{data.title}</h1>
                  </div>

                  <div className="text-base text-textcolor mt-10  font-bold   ">
                    <p>{data.subtitle}</p>
                  </div>
                  <div className="text-base text-textcolor mt-4  ">
                    <p>{data.course}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}

export default StudentCard;
