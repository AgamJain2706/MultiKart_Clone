import React from 'react'
import Img1 from '../Designer/Img.jpg'
const Heroo = () => {
  return (
    <div className="relative h-screen overflow-hidden">
    <div className="absolute bg-fixed bg-center bg-cover ">
        <img src={Img1} alt=""   className="object-cover bg-fixed bg-center  object-center w-full h-full z-0  " />
    </div>
    <div className="relative z-50 flex flex-col  justify-center h-full text-left ml-20 top-0 text-black">
        <h1 className="text-8xl font-bold text-[#FF4C3B]">2023</h1>
        <h1 className="text-5xl font-semibold text-gray-400">FASHION TRENDS</h1>
        <p className="mt-4 text-3xl font-semibold text-gray-400">Special Offer</p>
    </div>
</div>
  )
}

export default Heroo;