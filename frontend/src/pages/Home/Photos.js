import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

const imageUrls = [
  "/images/img1.jpg",
  "/images/img2.jpg",
  "/images/img3.jpg",
  "/images/img4.jpg",
  "/images/codin quest image cer.jpg",
  "/images/img5.jpg",
  "/images/img10.jpg",
  "/images/img11.jpg",
  "/images/img12.jpg",
  "/images/img13.jpg",
  "/images/img14.jpg",
  "/images/img15.jpg",
  "/images/img16.jpg",
  "/images/img21.jpg",
  "/images/img22.jpg",
  "/images/img23.jpg"
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
      }, 4000); // ⏳ Slower scroll (4s per image)
    }
  };

  const stopAutoScroll = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  return (
    <div className="text-center px-4 py-10 bg-[#f9fafb]">
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

        {/* Image Slider Container */}
        <div
          className="relative w-full sm:w-[80%] max-w-5xl h-[220px] sm:h-[420px] md:h-[520px] overflow-hidden rounded-lg shadow-lg"
          onMouseEnter={() => { setIsHovered(true); stopAutoScroll(); }}
          onMouseLeave={() => { setIsHovered(false); startAutoScroll(); }}
        >
          {/* ✅ Image with smooth slide transition */}
          <div
            className="w-full h-full transition-transform duration-[1300ms] ease-in-out"
            style={{ transform: `translateX(0)` }}
          >
            <img
              src={imageUrls[scrollIndex]}
              alt="Gallery"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
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


