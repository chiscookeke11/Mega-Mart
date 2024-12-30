import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slide1 from "./components/ElectronicBranSlides/Slide1";
import Side2 from "./components/ElectronicBranSlides/Side2";
import Slide3 from "./components/ElectronicBranSlides/Slide3";

function Responsive() {
  const settings = {
    dots: true,
    infinite: true, 
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    slidesToShow: 3,  
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,  
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,  
          slidesToScroll: 1,
          initialSlide: 0  
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,  
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="slider-container w-full py-3 my-7 ">
      <Slider 
     className=" flex items-center justify-center gap-3"
       {...settings} >
        <div className="max-w-[330px] bg-red-500   h-[22vh]  rounded-[16px]   " >
          <Slide1/>
        </div>
        <div  className="  max-w-[330px]  h-[22vh]  rounded-[16px] ">
          <Side2/>
        </div>
        <div  className="  max-w-[330px]    h-[22vh]  rounded-[16px] ">
          <Slide3/>
        </div>
      </Slider>
    </div>
  );
}

export default Responsive;
