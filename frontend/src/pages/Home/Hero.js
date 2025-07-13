import React from "react";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <div className="relative w-full overflow-hidden">
      <Slider {...settings}>
        {["slide1.jpg", "slide2.jpg", "slide4.jpg"].map((src, i) => (
          <div key={i}>
            <img
              src={`/images/${src}`}
              alt={`Slide ${i + 1}`}
              className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover"
            />
          </div>
        ))}
      </Slider>

      {/* Step Inside Button */}
      <button
        className="absolute bottom-16 left-4 sm:left-8 bg-transparent border-2 border-white text-white font-bold py-2 px-4 sm:px-6 rounded-md hover:bg-white hover:text-black transition-all duration-300 text-sm sm:text-base"
      >
        Step Inside →
      </button>

      {/* Apply Now Button */}
      <button
        className="absolute bottom-4 right-4 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 sm:px-6 rounded-md transition-all duration-300 text-sm sm:text-base"
        onClick={() => navigate("/admission/applynow")}
      >
        Apply Now
      </button>
    </div>
  );
};

// Custom Prev Arrow
const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <FaChevronLeft
      onClick={onClick}
      className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full cursor-pointer z-10 text-lg sm:text-xl"
    />
  );
};

// Custom Next Arrow
const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <FaChevronRight
      onClick={onClick}
      className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full cursor-pointer z-10 text-lg sm:text-xl"
    />
  );
};

export default Hero;

