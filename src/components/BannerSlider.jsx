import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slide1 from "./Slide1";
import { FaChevronRight } from "react-icons/fa6";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "60px",
        height: "60px",
        backgroundColor: "grey",
        opacity: "70%",
        borderRadius: "50%",
        right: "-25px", 
        zIndex: 1, 
        cursor: "pointer",
        color: "red"
      }}
      onClick={onClick}
    >
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "60px",
        height: "60px",
        opacity: "70%",
        backgroundColor: "grey",
        borderRadius: "50%",
        left: "-20px", 
        zIndex: 1, 
        cursor: "pointer",
      }}
      onClick={onClick}
    >

     
    </div>
  );
}

function AutoPlay() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 700,
    autoplaySpeed: 10000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />, 
    prevArrow: <SamplePrevArrow />, 
  };

  return (
    <div
      className="slider-container"
      style={{
        width: "98%",
        height: "100%",
        borderRadius: "10px"
      }}
    >
      <Slider
        {...settings}
        style={{
          width: "100%",
          height: "100%",
            borderRadius: "10px"
        }}
      >
        <div className="bg-blue-950 h-[50vh] w-full rounded-[10px] ">
         <Slide1/>
        </div>


        <div className="bg-blue-950 h-[50vh] w-full rounded-[10px]">
        <Slide1/>
        </div>
        
      </Slider>
    </div>
  );
}

export default AutoPlay;
