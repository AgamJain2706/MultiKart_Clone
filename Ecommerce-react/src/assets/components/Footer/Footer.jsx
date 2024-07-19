import React from 'react';
import Logo from '../Footer/logo.png'
const Footer = () => {
  return (
    <footer className="bg-gray-100 py-10 r">
      <div className=" flex text-center mb-10">
        <div className='mb-2  p-4 '>
        <h1 className="text-2xl font-bold mb-2">KNOW IT ALL FIRST!</h1>
        <p className="mb-4">Never Miss Anything From Multikart By Signing Up To Our Newsletter.</p>         
        </div>
        <div className= "pl-[26rem] py-6">
        <form className="inline-block">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-2 w-[230px]  border border-gray-300 rounded-l"
            required
          />
          <button
            type="submit"
            className="p-2 ml-2 bg-red-500 text-white rounded-r"
          >
            SUBSCRIBE
          </button>
        </form>
        </div>
      </div>
      <div className="flex justify-around flex-wrap border-t border-gray-300 pt-10">
        <div className="flex-1 min-w-[200px] mb-6">
          <img src={Logo} alt="" className="m-6 " />
          <p className="text-gray-700 ml-8 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br />
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </p>
          <div className="flex mt-4 ml-8">
            <a href="#" className="mr-4 text-gray-700"><i className="fab fa-google-plus"></i></a>
            <a href="#" className="mr-4 text-gray-700"><i className="fab fa-facebook"></i></a>
            <a href="#" className="mr-4 text-gray-700"><i className="fab fa-instagram"></i></a>
            <a href="#" className="text-gray-700"><i className="fas fa-rss"></i></a>
          </div>
        </div>
        <div className= "flex m-4 p-4 justify-around ">

          <div className="flex-1 min-w-[200px] ">
            <h1 className="text-xl font-bold mb-4">MY ACCOUNT</h1>
            <ul className="text-gray-700">
              <li className="mb-2"><a href="#">Womens</a></li>
              <li className="mb-2"><a href="#">Clothing</a></li>
              <li className="mb-2"><a href="#">Accessories</a></li>
              <li><a href="#">Featured</a></li>
            </ul>
          </div>
          <div className="flex-1 min-w-[200px] ">
            <h1 className="text-xl font-bold mb-4">WHY WE CHOOSE</h1>
            <ul className="text-gray-700">
              <li className="mb-2"><a href="#">Shipping & Return</a></li>
              <li className="mb-2"><a href="#">Secure Shopping</a></li>
              <li className="mb-2"><a href="#">Gallery</a></li>
              <li className="mb-2"><a href="#">Affiliates</a></li>
              <li><a href="#">Contacts</a></li>
            </ul>
          </div>
          <div className="flex-1 min-w-[200px] ">
            <h1 className="text-xl font-bold mb-4">STORE INFORMATION</h1>
            <p className="text-gray-700 mb-2"><i className="fa-solid fa-location-dot"></i>  Multikart Demo Store, Demo Store India 345-659</p>
            <p className="text-gray-700 mb-2"><i className="fa-solid fa-phone"></i> Call Us: 123-456-7898</p>
            <p className="text-gray-700 mb-2"><i className="fa-solid fa-inbox"></i>  Email Us: Support@Fiot.Com</p>
            <p className="text-gray-700"><i className="fa-solid fa-fax"></i> Fax: 123456</p>
          </div>
        </div>
      </div>
      <div className="text-center border-t border-gray-300 pt-6 mt-10">
        &copy; 2023-24 themeforest  created by Agam@techpanda 
      </div>
    </footer>
  );
}

export default Footer;
