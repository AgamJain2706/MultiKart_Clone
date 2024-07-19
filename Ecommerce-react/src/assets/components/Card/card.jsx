import React, { useState } from 'react'
import Card1 from '../Card/subcard1.jpg'
import Card2 from '../Card/subcard2.jpg'




function card() {

    return (
        <div className="flex flex-wrap justify-center  m-6 relative">
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 relative overflow-hidden">
                <div className="relative overflow-hidden">
                    <img src={Card1} alt="" className=" justify-around transition-transform duration-300 transform hover:scale-125 xl:w-full  xl:h-[15rem] " />
                    <div className="absolute inset-0 flex items-center justify-center ml-[5rem] sm:ml-[10rem] md:ml-[5rem] lg:ml-[9rem]">
                        <span className="text-orange-500 text-xl font-bold">10% off <br />
                            <h1 className="text-black text-6xl md:text-4xl sm:font-size-[3.5rem]">MEN</h1>
                        </span>
                    </div>
                </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 relative overflow-hidden">
                <div className="relative overflow-hidden">
                    <img src={Card2} alt="" className=" justify-around transition-transform duration-300 transform hover:scale-125 w-full lg:w-full xl:h-[15rem] xl:w-full " />
                    <div className="absolute  inset-0 flex items-center justify-center ml-[5rem] sm:ml-[10rem] md:ml-[5rem] lg:ml-[9rem]">
                        <span className="text-orange-500 text-xl font-bold">10% off <br />
                            <h1 className="text-black text-6xl  md:text-4xl sm:font-size-[3.5rem] ">WOMEN</h1>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default card