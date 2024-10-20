import React, { useState } from 'react';
import { FaTimes, FaBars, FaSearch } from 'react-icons/fa';
import Logo from '../assets/logo.svg'
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="border-b bg-white font-sans min-h-[60px] px-10 py-3 relative tracking-wide z-50">
      <div className="flex flex-wrap items-center max-lg:gap-y-6 max-sm:gap-x-4">
        <a href="#!">
          <img src={Logo} alt="logo" className="w-20" />
        </a>
        <div
          id="collapseMenu"
          className={`${
            menuOpen ? 'lg:flex lg:items-center' : 'max-lg:hidden'
          } max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-40 max-lg:before:inset-0 max-lg:before:z-50`}
        >
          <button
            id="toggleClose"
            className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3"
            onClick={() => setMenuOpen(false)}
          >
            <FaTimes className="w-4 fill-black" />
          </button>

          <ul className="lg:flex lg:gap-x-10 lg:absolute lg:left-1/2 lg:-translate-x-1/2 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-2/3 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:px-10 max-lg:py-4 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
            <li className="mb-6 hidden max-lg:block">
              <a href="#!">
                <img src={Logo} alt="logo" className="w-20" />
              </a>
            </li>
            <li className="max-lg:border-b max-lg:py-3">
              <a href="#!" className="hover:text-[#007bff] text-[15px] text-[#007bff] block font-bold">
                Home
              </a>
            </li>
            <li className="group max-lg:border-b max-lg:py-3 relative">
              <a href="#!" className="hover:text-[#007bff] text-gray-600 font-bold text-[15px] block">
                Pages
              </a>
            </li>
            <li className="group max-lg:border-b max-lg:py-3 relative">
              <a href="#!" className="hover:text-[#007bff] text-gray-600 font-bold text-[15px] block">
                Blog
              </a>
            </li>
            <li className="max-lg:border-b max-lg:py-3">
              <a href="#!" className="hover:text-[#007bff] text-gray-600 font-bold text-[15px] block">
                Team
              </a>
            </li>
            <li className="max-lg:border-b max-lg:py-3">
              <a href="#!" className="hover:text-[#007bff] text-gray-600 font-bold text-[15px] block">
                About
              </a>
            </li>
            <li className="max-lg:border-b max-lg:py-3">
              <a href="#!" className="hover:text-[#007bff] text-gray-600 font-bold text-[15px] block">
                Contact
              </a>
            </li>
            <li className="max-lg:border-b max-lg:py-3">
              <a href="#!" className="hover:text-[#007bff] text-gray-600 font-bold text-[15px] block">
                Source
              </a>
            </li>
          </ul>
        </div>

        <div className="flex items-center ml-auto space-x-8">
          {/* Additional Icons/Functionality */}
          <button id="toggleOpen" className="lg:hidden" onClick={() => setMenuOpen(true)}>
            <FaBars className="w-7 h-7" />
          </button>
        </div>
      </div>

      {/* Search Bar Section */}
      <div className="bg-gray-100 border border-transparent focus-within:border-blue-500 focus-within:bg-transparent flex px-6 rounded-full h-10 lg:w-2/4 mt-3 mx-auto max-lg:mt-6">
        <FaSearch className="w-4 h-4 my-auto" />
        <input
          type="text"
          placeholder="Search..."
          className="flex-grow bg-transparent outline-none px-4"
        />
      </div>
    </header>
  );
};

export default Header;
