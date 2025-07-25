import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 py-2">
      
  
      <ul className="flex items-center justify-center gap-8 mr-20">
        <img
            src="cook.webp.png"
            alt="Pickle Logo"
            className="h-20 w-27 animate-bounce duration-200 delay-500 mt-4 "
          />
          <h1 className='text-white bg-grey mr-90 w-80 text-4xl font-bold' >A to Z PICKLE</h1>
        <li>
         
          <Link
            to="/"
            className="text-white border border-white rounded px-4 py-1 hover:bg-white hover:text-gray-800 transition"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="text-white border border-white rounded px-4 py-1 hover:bg-white hover:text-gray-800 transition"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/products"
            className="text-white border border-white rounded px-4 py-1 hover:bg-white hover:text-gray-800 transition"
          >
            Products
          </Link>
        </li>
        <li>
          <Link
            to="/contacts"
            className="text-white border border-white rounded px-4 py-1 hover:bg-white hover:text-gray-800 transition"
          >
            Contacts
          </Link>
        </li>
        <li className="flex items-center">
          <Link
            to="/cart"
            className="bg-white p-2 w-12 rounded-full hover:bg-gray-200 transition"
          >
            <img
              src="add cart.png"
              alt="Cart"
              className="h-8 w-8 object-contain"
            />
          </Link>
        </li>
        <li>
          <Link
            to="/login"
            className="text-white border border-white rounded px-4 py-1 hover:bg-white hover:text-gray-800 transition"
          >
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
