import React, { useState } from 'react';
import Slider from '../carousel/carousel1.jpg'
import Slider2 from '../carousel/slider1.jpg'
const Images = [
  Slider, Slider2
];

function Carousel() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === Images.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? Images.length - 1 : current - 1);
  };

  return (
    <div className="relative flex justify-between items-center h-screen pt-4 sm:pt-0 md:pt-4 lg:pt-0">
    {/* <div className="left_arrow hover:bg-orange-200 rounded-full ml-4 cursor-pointer z-10" onClick={prevSlide}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.25 4.75L8.75 12l6.5 7.25" />
      </svg>
    </div> */}

    <div className="w-full h-[650px] sm:h-[500px] md:h-[650px] lg:h-[750px] overflow-hidden relative mt-0 sm:mt-4 md:mt-0">
      {Images.map((item, index) => (
        current === index && (
          <img key={index} src={item} alt={`Slide ${index}`} className="w-full h-full object-cover object-center" />
        )
      ))}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-white text-center p-10 sm:p-16 md:p-20">
        <span className="text-cyan-400 text-2xl font-sans font-bold">Welcome to fashion</span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-black font-bold my-5">Male & Female Fashion Are Here</h2>
        <button className="bg-[#FF4C3B] text-white w-36 h-12 sm:w-40 sm:h-14 md:w-48 md:h-16 mt-5 border-red-700 rounded-none cursor-pointer hover:bg-white active:bg-red-500 focus:outline-none hover:text-black font-bold duration-300">Shop Now</button>
      </div>
    </div>

    <div className="right_arrow hover:bg-orange-200 rounded-full cursor-pointer z-10" onClick={nextSlide}>
      {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.75 4.75l6.5 7.25-6.5 7.25" />
      </svg> */}
    </div>
    </div>
  );
}

export default Carousel;
