import React from 'react'
import Img1 from '../Designer/Img.jpg'
import '../Designer/Hero.css'
const Heroo = () => {
  return (
    <div className="parallax-container">
    <div className="parallax-bg " style={{ backgroundImage: `url(${Img1})` }}></div>
    <div className="content">
      <h1 className="title text-6xl ">2023</h1>
      <h1 className="subtitle text-4xl font-semibold">FASHION TRENDS</h1>
      <p className="offer text-4xl font-light">Special Offer</p>
    </div>
  </div>
  )
}

export default Heroo;