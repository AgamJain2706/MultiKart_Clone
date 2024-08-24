import React, { useState } from 'react';
import Logo from '../Navbar/logo.png';
import Menu from '../Navbar/Menu.svg';
import Search from "../Navbar/search.svg";
import Setting from '../Navbar/setting.svg';
import Cart from '../Navbar/cart.svg';
import Down from '../Navbar/down.svg';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isRight, setIsRight] = useState(false);

    const handleToggle = (side) => {
        setIsRight(side === 'right');
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
    <nav className="bg-white flex justify-between w-full h-[100px] p-4 sticky top-0 z-100">
            <div className="flex items-center">
               
                <img src={Logo} alt="Logo" className="cursor-pointer w-30 h-12
                 md:w-24 justify-center items-center " />
            </div>
            <ul className={`fixed inset-0 bg-white bg-opacity-75 flex flex-col items-center justify-center text-center space-y-4 z-40 md:flex md:flex-row md:static md:bg-transparent md:space-y-0 md:space-x-6 ${isOpen ? 'flex' : 'hidden'}`}>
                <li className="md:hidden">
                    <h1 className="text-lg font-bold text-black cursor-pointer" onClick={closeMenu}>Close</h1>
                </li>
                <li className="relative group">
                    <a href="#home" className="text-black flex items-center hover:text-orange-500">
                        Home
                        <img src={Down} alt="Down" className="w-4 h-4 inline ml-1" />
                    </a>
                    <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg hidden group-hover:block">
                        <li><a href="#shop1" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Home</a></li>
                        <li><a href="#shop2" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Flowers</a></li>
                        <li><a href="#shop2" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Clothing</a></li>
                        <li><a href="#shop2" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Basics</a></li>
                        <li><a href="#shop2" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Beauty</a></li>
                        <li><a href="#shop2" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Electronics</a></li>
                        <li><a href="#shop2" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Furniture</a></li>
                        <li><a href="#shop2" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Sports</a></li>
                        <li><a href="#shop2" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Games</a></li>
                        <li><a href="#shop2" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Groceries</a></li>
                        <li><a href="#shop2" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Interior</a></li>
                    </ul>
                </li>
                <li className="relative group">
                    <a href="#shop" className="text-black flex items-center hover:text-orange-500">
                        Shop
                        <img src={Down} alt="Down" className="w-4 h-4 inline ml-1" />
                    </a>
                    <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg hidden group-hover:block">
                        <li><a href="#shop1" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Shop 1</a></li>
                        <li><a href="#shop2" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Shop 2</a></li>
                        <li><a href="#shop2" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Shop 3</a></li>
                        <li><a href="#shop2" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Shop 4</a></li>
                        <li><a href="#shop2" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Shop 5</a></li>
                        <li><a href="#shop2" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Shop 6</a></li>
                        <li><a href="#shop2" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Shop 7</a></li>
                        <li><a href="#shop2" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Shop 8</a></li>
                        <li><a href="#shop2" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Shop 9</a></li>
                    </ul>
                </li>
                <li className="relative group">
                    <a href="#products" className="text-black flex items-center hover:text-orange-500">
                        Products
                        <img src={Down} alt="Down" className="w-4 h-4 inline ml-1" />
                    </a>
                    <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg hidden group-hover:block">
                        <li><a href="#shop1" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Sidebar 1</a></li>
                        <li><a href="#shop2" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Nails</a></li>
                        <li><a href="#shop2" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">3D Image</a></li>
                        <li><a href="#shop2" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">4K Image</a></li>
                        <li><a href="#shop2" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Home Design</a></li>
                        <li><a href="#shop2" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Mattress</a></li>
                        <li><a href="#shop2" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Vertical Tab</a></li>
                    </ul>
                </li>
                <li className="relative group">
                    <a href="#features" className="text-black flex items-center hover:text-orange-500">
                        Features
                        <img src={Down} alt="Down" className="w-4 h-4 inline ml-1" />
                    </a>
                    <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg hidden group-hover:block">
                        <li><a href="#shop1" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Shop 1</a></li>
                        <li><a href="#shop2" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Clothes</a></li>
                        <li><a href="#shop2" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Designer Saree</a></li>
                        <li><a href="#shop2" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Watches</a></li>
                        <li><a href="#shop2" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Designer World</a></li>
                        <li><a href="#shop2" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Rental India</a></li>
                        <li><a href="#shop2" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Analog Clocks</a></li>
                    </ul>
                </li>
                <li className="relative group">
                    <a href="#pages" className="text-black flex items-center hover:text-orange-500">
                        Pages
                        <img src={Down} alt="Down" className="w-4 h-4 inline ml-1" />
                    </a>
                    <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg hidden group-hover:block">
                        <li><a href="#shop1" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Shop 1</a></li>
                        <li><a href="#shop2" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Shop 2</a></li>
                        <li><a href="#shop2" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Shop 3</a></li>
                        <li><a href="#shop2" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Shop 4</a></li>
                        <li><a href="#shop2" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Shop 5</a></li>
                        <li><a href="#shop2" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Shop 6</a></li>
                        <li><a href="#shop2" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Shop 7</a></li>
                    </ul>
                </li>
                <li className="relative group">
                    <a href="#blog" className="text-black flex items-center hover:text-orange-500">
                        Blog
                        <img src={Down} alt="Down" className="w-4 h-4 inline ml-1" />
                    </a>
                    <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg hidden group-hover:block">
                        <li><a href="#shop1" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Shop 1</a></li>
                        <li><a href="#shop2" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Visitors</a></li>
                        <li><a href="#shop2" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Males Cloth</a></li>
                        <li><a href="#shop2" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Female Cloth</a></li>
                        <li><a href="#shop2" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Toys</a></li>
                        <li><a href="#shop2" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Accesories</a></li>
                    </ul>
                </li>
            </ul>
            <div className="flex items-center">
                <img src={Search} alt="Search" className={`w-8 h-8 mx-4 cursor-pointer ${isOpen ? 'flex' : 'hidden'} md:flex ` } />
                <img src={Setting} alt="Settings" className={`w-8 h-8 mx-4 cursor-pointer ${isOpen ? 'flex' : 'hidden'} md:flex ` } />
                <img src={Cart} alt="Cart" className={`w-8 h-8 mx-4 cursor-pointer ${isOpen ? 'flex' : 'hidden'} md:flex ` } />
                <img src={Menu} alt="Menu" className="w-8 h-8 mx-4 cursor-pointer md:hidden" onClick={handleToggle} />
            </div>
        </nav>
    );
};

export default Navbar;
