import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

const imageUrls = [
  "/images/img1.jpg",
  "/images/img2.jpg",
  "/images/img3.jpg",
  "/images/img4.jpg",
  "/images/codin quest image cer.jpg",
  "/images/img5.jpg",
  "/images/img6.jpg",
  "/images/img7.jpg",
  "/images/img8.jpg",
  "/images/img9.jpg",
];

const Photos = () => {
  const [scrollIndex, setScrollIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef(null);
  const { t } = useTranslation();

  useEffect(() => {
    startAutoScroll();
    return () => stopAutoScroll();
  }, []);

  const handleNext = () => {
    setScrollIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
  };

  const handlePrev = () => {
    setScrollIndex((prevIndex) => (prevIndex - 1 + imageUrls.length) % imageUrls.length);
  };

  const startAutoScroll = () => {
    if (!intervalRef.current) {
      intervalRef.current = setInterval(() => {
        setScrollIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
      }, 2000);
    }
  };

  const stopAutoScroll = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  return (
    <div className="text-center px-4 py-10">
      <h1 className="text-3xl sm:text-4xl font-bold text-green-600 mb-6">
        {t("life_at_wit")}
      </h1>

      <div className="flex items-center justify-center gap-4 flex-wrap">
        {/* Prev Button */}
        <button
          onClick={handlePrev}
          className="bg-green-600 text-white px-4 py-2 text-xl rounded hover:bg-green-700"
        >
          &lt;
        </button>

        {/* Image Display */}
        <div
          className="w-full sm:w-[80%] flex justify-center overflow-hidden"
          onMouseEnter={() => {
            setIsHovered(true);
            stopAutoScroll();
          }}
          onMouseLeave={() => {
            setIsHovered(false);
            startAutoScroll();
          }}
        >
          <img
            src={imageUrls[scrollIndex]}
            alt="Gallery"
            className="w-full h-[200px] sm:h-[400px] md:h-[500px] object-cover rounded-lg transition duration-500"
          />
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="bg-green-600 text-white px-4 py-2 text-xl rounded hover:bg-green-700"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Photos;

