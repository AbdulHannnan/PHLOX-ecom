import React, { useState } from "react";
import { FiUser, FiShoppingCart, FiSearch } from "react-icons/fi";
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai"; // Close icon

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md py-4">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Left Side - Logo */}
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-red-500">PHLOX</h1>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="block lg:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-xl text-gray-700 hover:text-red-500 focus:outline-none focus:ring-2 focus:ring-red-500">
            {menuOpen ? <AiOutlineClose /> : <HiMenuAlt3 />}
          </button>
        </div>

        {/* Center - Menu (Desktop and Mobile) */}
        <ul
          className={`${
            menuOpen ? "block shadow-md" : "hidden"
          } lg:flex lg:space-x-6 lg:block lg:static absolute top-20 left-0 w-full bg-white lg:bg-transparent flex-col lg:flex-row items-start lg:items-center gap-4 px-6 py-4 z-10 list-none m-0 p-0`}
        >
          <li>
            <a href="#" className="text-gray-800 hover:text-red-500 block">Home</a>
          </li>
          <li>
            <a href="#" className="text-gray-800 hover:text-red-500 block">Shop</a>
          </li>
          <li>
            <a href="#" className="text-gray-800 hover:text-red-500 block">About Us</a>
          </li>
          <li>
            <a href="#" className="text-gray-800 hover:text-red-500 block">Blog</a>
          </li>
          <li>
            <a href="#" className="text-gray-800 hover:text-red-500 block">Contact</a>
          </li>
        </ul>

        {/* Right Side - Icons (Desktop only) */}
        <div className="hidden lg:flex space-x-4 text-gray-700 text-xl">
          <FiSearch className="hover:text-red-500 cursor-pointer" />
          <FiUser className="hover:text-red-500 cursor-pointer" />
          <FiShoppingCart className="hover:text-red-500 cursor-pointer" />
        </div>
      </div>

      {/* Mobile Menu Icons - Show when menu is open (optional) */}
      {menuOpen && (
        <div className="lg:hidden flex space-x-4 text-gray-700 text-xl py-4 px-6 bg-white shadow-md">
          <FiSearch className="hover:text-red-500 cursor-pointer" />
          <FiUser className="hover:text-red-500 cursor-pointer" />
          <FiShoppingCart className="hover:text-red-500 cursor-pointer" />
        </div>
      )}
    </nav>
  );
};

export default Navbar;