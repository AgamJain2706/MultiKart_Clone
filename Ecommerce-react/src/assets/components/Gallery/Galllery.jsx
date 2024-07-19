import React, { useRef } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Img1 from '../Gallery/1.jpg';
import Img3 from '../Gallery/3.jpg';
import Img4 from '../Gallery/4.jpg';
import Img5 from '../Gallery/5.jpg';
import Img6 from '../Gallery/6.jpg';
import '../Gallery/Galley.css'

const Gallery = () => {
  const sliderRef = useRef(null);

  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1, // Scroll two slides at a time
    arrows: true, // Enable arrows for navigation
    autoplay: true,
    autoplaySpeed: 3000, // Speed of the automatic sliding (2 seconds)
    pauseOnHover: true,
    infinite: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          arrows: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          arrows: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          arrows: true
        }
      }
    ]
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
    <div className='mt-20'>
  <div className='my-12'>
    <h2 className="text-sm text-center text-[#FF4C3B] sm:text-xl md:text-xl lg:text-2xl">Our Collection</h2>
    <h1 className="text-3xl font-bold text-black text-center justify-center">SPECIAL <span className="underline decoration-[#FF4C3B]">PRO</span>DUCTS</h1>
  </div>
  <div className='justify-between px-4' onWheel={handleWheel}>
    <Slider ref={sliderRef} {...settings}>
      <div className="card">
        <div className="card-image-wrapper">
          <img src={Img1} alt="1" className="card-image" />
          <div className='overlay'></div>
        </div>
        <div className="card-content">
          <h3>25 January 2018</h3>
          <p>LOREM IPSUM DOLOR SIT CONSECETETUR ADIPISCING ELIT</p>
          <p className="author">by: John Dio, 2 Comments</p>
        </div>
      </div>
      <div className="card">
        <div className="card-image-wrapper">
          <img src={Img3} alt="3" className="card-image" />
          <div className='overlay'></div>
        </div>
        <div className="card-content">
          <h3>27 January 2018</h3>
          <p>LOREM IPSUM DOLOR SIT CONSECETETUR ADIPISCING ELIT</p>
          <p className="author">by: John Dio, 2 Comments</p>
        </div>
      </div>
      <div className="card">
        <div className="card-image-wrapper">
          <img src={Img4} alt="4" className="card-image" />
          <div className='overlay'></div>
        </div>
        <div className="card-content">
          <h3>28 January 2018</h3>
          <p>LOREM IPSUM DOLOR SIT CONSECETETUR ADIPISCING ELIT</p>
          <p className="author">by: John Dio, 2 Comments</p>
        </div>
      </div>
      <div className="card">
        <div className="card-image-wrapper">
          <img src={Img5} alt="5" className="card-image" />
          <div className='overlay'></div>
        </div>
        <div className="card-content">
          <h3>29 January 2018</h3>
          <p>LOREM IPSUM DOLOR SIT CONSECETETUR ADIPISCING ELIT</p>
          <p className="author">by: John Dio, 2 Comments</p>
        </div>
      </div>
      <div className="card">
        <div className="card-image-wrapper">
          <img src={Img6} alt="6" className="card-image" />
          <div className='overlay'></div>
        </div>
        <div className="card-content">
          <h3>30 January 2018</h3>
          <p>LOREM IPSUM DOLOR SIT CONSECETETUR ADIPISCING ELIT</p>
          <p className="author">by: John Dio, 2 Comments</p>
        </div>
      </div>
    </Slider>
  </div>
</div>

  );
};

export default Gallery;
