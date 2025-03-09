import React, { useState } from "react";
import { FaBox, FaSearch, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router";
import { FaChevronDown } from "react-icons/fa";
import { IoCall } from "react-icons/io5";

const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <header>
      {/* Header Top Part */}
      <div className="container">
        <div className="flex justify-between items-center py-8">
          <Link to="/">
            <img src="/logo.png" alt="logo" />
          </Link>
          <div className="border-2 border-brand p-5 rounded w-full max-w-[700px] flex items-center">
            <select name="" id="" className="pr-3.5 border-r-2 text-primary">
              <option value="">All Categories</option>
              <option value="">All Categories</option>
              <option value="">All Categories</option>
            </select>
            <input
              type="text"
              placeholder="Search for items..."
              className="px-3.5 w-2/3"
            />
            <FaSearch className="ml-auto" />
          </div>
          <div>
            <ul className="flex gap-8">
              <li>
                <Link
                  to="/"
                  className="flex gap-2 items-end relative text-secondary"
                >
                  <span className="w-6 h-6 rounded-full bg-brand text-white flex items-center justify-center absolute -top-2 right-5">
                    0
                  </span>
                  <FaShoppingCart className="text-3xl text-primary" /> Cart
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="flex gap-2 items-end relative text-secondary"
                >
                  <span className="w-6 h-6 rounded-full bg-brand text-white flex items-center justify-center absolute -top-2 right-5">
                    0
                  </span>
                  <FaShoppingCart className="text-3xl text-primary" /> Cart
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="flex gap-2 items-end relative text-secondary"
                >
                  <span className="w-6 h-6 rounded-full bg-brand text-white flex items-center justify-center absolute -top-2 right-5">
                    0
                  </span>
                  <FaShoppingCart className="text-3xl text-primary" /> Cart
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <nav>
        <div className="container flex items-center gap-9">
          <div className="relative">
            <h3
              onClick={() => setShow(!show)}
              className="py-3 px-6 bg-brand rounded-md text-white font-bold flex items-center gap-2 cursor-pointer"
            >
              <FaBox /> Browse All Categories <FaChevronDown />
            </h3>
            {show && (
              <div className="w-md rounded-lg absolute top-20 left-0 p-7 border-2 border-brand grid grid-cols-2 gap-6">
                <div className="flex items-center gap-2 cursor-pointer shadow py-2 px-3">
                  <img src="/category-1.svg" alt="category1" className="w-6" />
                  <p className="font-bold text-sm text-primary">
                    Milks and Dairies
                  </p>
                </div>
                <div className="flex items-center gap-2 cursor-pointer shadow py-2 px-3">
                  <img src="/category-1.svg" alt="category1" className="w-6" />
                  <p className="font-bold text-sm text-primary">
                    Milks and Dairies
                  </p>
                </div>
                <div className="flex items-center gap-2 cursor-pointer shadow py-2 px-3">
                  <img src="/category-1.svg" alt="category1" className="w-6" />
                  <p className="font-bold text-sm text-primary">
                    Milks and Dairies
                  </p>
                </div>
                <div className="flex items-center gap-2 cursor-pointer shadow py-2 px-3">
                  <img src="/category-1.svg" alt="category1" className="w-6" />
                  <p className="font-bold text-sm text-primary">
                    Milks and Dairies
                  </p>
                </div>
                <div className="flex items-center gap-2 cursor-pointer shadow py-2 px-3">
                  <img src="/category-1.svg" alt="category1" className="w-6" />
                  <p className="font-bold text-sm text-primary">
                    Milks and Dairies
                  </p>
                </div>
                <div className="flex items-center gap-2 cursor-pointer shadow py-2 px-3">
                  <img src="/category-1.svg" alt="category1" className="w-6" />
                  <p className="font-bold text-sm text-primary">
                    Milks and Dairies
                  </p>
                </div>
              </div>
            )}
          </div>
          <ul className="flex gap-8 font-bold text-primary text-lg">
            <li>
              <Link to="/" className="hover:text-brand transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-brand transition">
                About
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-brand transition">
                Shop
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-brand transition">
                Mega menu
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-brand transition">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-brand transition">
                Contact
              </Link>
            </li>
          </ul>
          <Link
            to="tel: 1900 - 888"
            className="ml-auto flex items-center gap-2"
          >
            <IoCall className="text-4xl" />
            <div>
              <p className="text-brand font-bold text-2xl"> 1900 - 888</p>
              <p className="text-secondary font-medium text-sm">
                24/7 Support Center
              </p>
            </div>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
