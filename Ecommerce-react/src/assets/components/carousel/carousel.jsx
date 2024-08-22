import React, { useState } from 'react';
import Slider from '../carousel/carousel1.jpg'
import Slider2 from '../carousel/slider1.jpg'
const Images = [
  Slider,Slider2
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
    <div className="flex justify-between items-center p-0 pt-[5px]  ">
      <div className="left_arrow hover:bg-orange-200 rounded-full ml-4  " onClick={prevSlide}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.25 4.75L8.75 12l6.5 7.25" />
        </svg>
      </div>

      <div className="image w-[1600px] h-[650px] object-cover object-center ">
        {Images.map((item, index) => (
          current === index && (
            <img  key={index} src={item} alt={`Slide ${index}`} className="w-full h-[650px] object-cover object-center sm:w-full md:w-full " />
          )
        ))}
         <div className=" absolute  bottom-0  left-[5rem] text-white text-center justify-center p-[10rem] ">
          <span className='text-cyan-400 text-2xl font-sans font-bold text-center '>Welcome to fashion </span>
                <h2 className="text-4xl  text-black font-bold m-5 -ml-[0.75rem] ">Male & Female Fashion Are Here </h2>
                <button className= "bg-[#FF4C3B] text-white w-[9rem] h-16 mt-5 border-red-700  rounded-none flex md:ml-[7.5rem] sm:ml-[6rem] items-center justify-center ml-[11.5rem] cursor-pointer hover:bg-white active:bg-red-500 focus:outline-red-500 focus:border-red-500 focus:ring-red-500 hover:text-black font-bold  duration-300  ">Shop Now </button>
              </div>
      </div>

      <div className="right_arrow hover:bg-orange-200  rounded-full transition-shadow duration-100" onClick={nextSlide}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.75 4.75l6.5 7.25-6.5 7.25" />
        </svg>
      </div>
    </div>
  );
}

export default Carousel;
