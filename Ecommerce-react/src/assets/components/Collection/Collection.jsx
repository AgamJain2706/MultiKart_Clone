import React from 'react'
import Truck from '../Collection/1.svg'
const Collection = () => {
  return (
<>
<div className="box-border   w-full   p-4 border-4 ">
<div className= "flex  items-start">
<img src={Truck} alt=""  className= "w-32  h-40 p-4 ml-6  " />
<h1 className= "text-xl pt-8 pr-8 font-bold hover:text-[#FF4C3B] cursor-pointer ">FREE  SHIPPING 
    <h2 className= "text-lg font-light text-center  ">Free shipping world wide </h2>
      </h1>
</div>
</div>
</>
  )
}

export default Collection