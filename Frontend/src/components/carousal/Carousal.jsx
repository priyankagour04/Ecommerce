import React, { useState } from "react";
import img1 from "../../assets/images/Carouselimg1.png";
import img2 from "../../assets/images/Carouselimg2.png";
import img3 from "../../assets/images/Carouselimg3.webp";
import img4 from "../../assets/images/Carouselimg4.png";

const Carousel = () => {
  const images = [img1, img2, img3, img4];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative h-64 md:h-96 lg:h-[550px] overflow-hidden container mx-auto mt-2">
      {/* Images */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute w-full h-full lg:px-16 transition-all duration-700 ease-in-out ${
            currentIndex === index ? "block" : "hidden"
          }`}
        >
          <img
            src={img}
            className="block w-full h-full object-cover"
            alt={`Slide ${index + 1}`}
          />
        </div>
      ))}

      {/* Indicators */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            type="button"
            className={`w-2 h-2 md:w-3 md:h-3 lg:w-3 lg:h-3 rounded-full ${
              currentIndex === index ? "bg-gray-800" : "bg-gray-100"
            }`}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>

      {/* Previous Button */}
      <button
        type="button"
        className="absolute top-0 lg:left-20 left-3 z-30 flex items-center justify-center h-full px-2 md:px-4 cursor-pointer group focus:outline-none"
        onClick={handlePrev}
      >
        <span className="inline-flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/30 group-hover:bg-white/50 focus:ring-2 focus:ring-white">
          <svg
            className="w-4 h-4 text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>

      {/* Next Button */}
      <button
        type="button"
        className="absolute top-0 lg:right-20 right-0  z-30 flex items-center justify-center h-full px-2 md:px-4 cursor-pointer group focus:outline-none"
        onClick={handleNext}
      >
        <span className="inline-flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/30 group-hover:bg-white/50 focus:ring-2 focus:ring-white">
          <svg
            className="w-4 h-4 text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1l4 4-4 4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default Carousel;
