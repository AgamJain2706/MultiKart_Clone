import React from 'react';
import Logo from '../Footer/logo.png'
const Footer = () => {
  return (
    <footer className="bg-gray-100 p-8 w-full ">
    <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-around items-start lg:items-center border-b border-gray-300 pb-8 mb-8">
            <div className="mb-8 lg:mb-0">
                <img src={Logo} alt="logo" className="w-52 h-auto" />
                <p className="text-md mt-4">
                    NEVER MISS ANYTHING FROM MULTIKART BY SIGNING UP TO OUR NEWSLETTER.
                </p>
                <div className="mt-4 flex">
                    <input type="text" placeholder="Enter your email" className="px-4 py-2 border border-gray-300 rounded-l-md outline-none" />
                    <button className="px-4 py-2 bg-red-500 text-white rounded-r-md">Subscribe</button>
                </div>
                <div className='flex flex-row space-x-4 mt-6 cursor-pointer '>
                <i  class="fa-brands fa-linkedin"></i>
                <i class="fa-brands fa-x-twitter"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-solid fa-wifi"></i>
                <i class="fa-brands fa-google-plus-g "></i>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-16">
                <div className="flex flex-col">
                    <h4 className="font-bold mb-4">MY ACCOUNT</h4>
                    <ul className="space-y-2">
                        <li><a href="#">Womens</a></li>
                        <li><a href="#">Clothing</a></li>
                        <li><a href="#">Accessories</a></li>
                        <li><a href="#">Featured</a></li>
                    </ul>
                </div>
                <div className="flex flex-col">
                    <h4 className="font-bold mb-4">WHY WE CHOOSE</h4>
                    <ul className="space-y-2">
                        <li><a href="#">Shipping & Return</a></li>
                        <li><a href="#">Secure Shopping</a></li>
                        <li><a href="#">Gallery</a></li>
                        <li><a href="#">Affiliates</a></li>
                        <li><a href="#">Contacts</a></li>
                    </ul>
                </div>
                <div className="flex flex-col">
                    <h4 className="font-bold mb-4">STORE INFORMATION</h4>
                    <ul className="space-y-2">
                        <li><a href="#">Multikart Demo Store, Demo Store India 345-659</a></li>
                        <li><a href="#">Call Us: 123-456-7890</a></li>
                        <li><a href="#">Email Us: support@example.com</a></li>
                        <li><a href="#">Fax: 123456</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="text-center border-t border-gray-300 pt-4">
            <p>2024 &copy; Copyright   </p>
        </div>
    </div>
</footer>
  );
}

export default Footer;
