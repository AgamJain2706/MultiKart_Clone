import React,{useRef} from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; 
import Ig1 from '../Authorise/1.png'
import Ig2 from '../Authorise/2.png'
import Ig3 from '../Authorise/3.png'
import Ig4 from '../Authorise/4.png'
import Ig5 from '../Authorise/5.png'
import Ig6 from '../Authorise/6.png'

const Auth = () => {
    const sliderRef = useRef(null);

    const settings = {
      slidesToShow: 5,
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
        <div className='my-8' onWheel={handleWheel}>
      <Slider ref={sliderRef} {...settings}>
        <div>
          <img src={Ig1} alt="1" className="opacity-50 hover:opacity-100" />
        </div>
        <div>
          <img src={Ig2} alt="2" className="opacity-50 hover:opacity-100" />
        </div>
        <div>
          <img src={Ig3} alt="3" className="opacity-50 hover:opacity-100" />
        </div>
        <div>
          <img src={Ig4} alt="4" className="opacity-50 hover:opacity-100" />
        </div>
        <div>
          <img src={Ig5} alt="5" className="opacity-50 hover:opacity-100" />
        </div>
        <div>
          <img src={Ig6} alt="6" className="opacity-50 hover:opacity-100" />
        </div>
      </Slider>
    </div>

    )

}

export default Auth