import React from 'react'
import User from '../Navbar/user.svg'
import Heart from '../Navbar/heart.svg'


const Header1 = () => {
  return (
    <>
      <header className="bg-gray-200 flex bg-fixed justify-between w-full h-3/4   text-gray-400 mx-2 p-4   py-6 px-4     items-center  " >
        <div className="flex space-x-4">
          <h1 className="px-1 cursor-text">Welcome to Our store Multikart</h1>
          <h1 className="px-1 cursor-text">Call Us: 123 - 456 - 7890</h1>
        </div>
        <div className="flex space-x-4">
        <img src={Heart} alt="" className='w-4 h-4 cursor-pointer' />
          <h1 className="px-1 cursor-pointer">wishlist</h1>
          <img src = {User} alt="" className= "w-4 h-4 cursor-pointer " />
          <h1 className="px-1 cursor-pointer">MyAccount</h1>
        </div>
      </header>
    </>
  )
}

export default Header1 