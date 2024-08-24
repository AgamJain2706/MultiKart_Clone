import React, { useRef } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Importing images (ensure these paths are correct)
import Ig1 from '../Instagram/1.jpg';
import Ig2 from '../Instagram/2.jpg';
import Ig3 from '../Instagram/3.jpg';
import Ig4 from '../Instagram/4.jpg';
import Ig5 from '../Instagram/5.jpg';
import Ig6 from '../Instagram/6.jpg';
import Ig7 from '../Instagram/7.jpg';
import Ig8 from '../Instagram/8.jpg';

const SlickSlider = () => {
  const sliderRef = useRef(null);

  const settings = {
    slidesToShow: 6,
    slidesToScroll: 4,
    arrows: false,
  };

  const handleWheel = (e) => {
    e.preventDefault();
    if (e.deltaY < 0) {
      sliderRef.current.slickNext();
    } else {
      sliderRef.current.slickPrev();
    }
  };

  return (
    <div onWheel={handleWheel}>
      <h1 className="font-bold text-3xl justify-center  my-12 text-center text-[#FF4C3B] ">#INSTAGRAM</h1>
      <Slider ref={sliderRef} {...settings}>
        <div><img src={Ig1} alt="1" /></div>
        <div><img src={Ig2} alt="2" /></div>
        <div><img src={Ig3} alt="3" /></div>
        <div><img src={Ig4} alt="4" /></div>
        <div><img src={Ig5} alt="5" /></div>
        <div><img src={Ig6} alt="6" /></div>
        <div><img src={Ig7} alt="7" /></div>
        <div><img src={Ig8} alt="8" /></div>
      </Slider>
    </div>
  );
};

export default SlickSlider;
