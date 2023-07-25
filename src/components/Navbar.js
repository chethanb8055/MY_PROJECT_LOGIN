import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import {             AiFillHome
} from 'react-icons/ai'
import {FcAbout} from 'react-icons/fc'
import {MdContacts} from 'react-icons/md'
import {LuLayoutDashboard } from "react-icons/lu"
import {BiLogOut} from "react-icons/bi"

const Navbar = ({ isLogin, setIslogIn }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="bg-richblack-900">
      <div className="flex justify-between items-center w-full py-4 px-7 mx-auto md:hidden">
        <Link to="/" className="">
          {/* <img src={logo} alt="Logo" loading="lazy" width={160} height={32} /> */}
        </Link>

        <button
          className="text-richblack-100 text-[30px]"
          onClick={toggleMenu}
          aria-label="Open Sidebar"
        >
          ☰
        </button>
      </div>

      <div
        className={`w-64 pt-16 bg-richblack-800 h-full border rounded-2xl fixed left-0 top-0 transition-transform duration-300 transform ${
          showMenu ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="py-4 px-7 ">
          <Link
            to="/"
            className="block py-2 text-richblack-100 flex  gap-6 items-center text-2xl px-2 hover:bg-richblack-700 "
            onClick={toggleMenu}
          >
            <AiFillHome/>
            
            Home
          </Link>
          <Link
            to="/about"
            className="block py-2 flex mt-2 gap-6 items-center px-2 text-2xl text-richblack-100 hover:bg-richblack-700"
            onClick={toggleMenu}
          > <FcAbout/>
            About
          </Link>
          <Link
            to="/contact"
            className="block py-2 mt-2 text-richblack-100 hover:bg-richblack-700  flex  gap-6 items-center px-2 text-2xl "
            onClick={toggleMenu}
          ><MdContacts/>
            Contact
          </Link>
          {/* You can add more menu items here */}
          {isLogin && (
            <>
              <Link
                to="/dashboard"
                className="block py-2 mt-2 text-richblack-100 hover:bg-richblack-700  flex  gap-6 items-center px-2 text-2xl "
                onClick={toggleMenu}
              >
                <LuLayoutDashboard/>
                Dashboard
              </Link>
              <Link to="/">
                <button
                  className="block py-2 mt-2 text-richblack-100 bg-richblack-800 hover:bg-richblack-700  flex  gap-6 items-center px-2 text-2xl "
                  onClick={() => {
                    setIslogIn(false);
                    toast.success("Logged Out");
                  }}
                >
                  <BiLogOut/>
                  Log Out
                </button>
              </Link>
            </>
          )}
        </div>
      </div>

      <nav
        className={`hidden md:flex justify-between items-center w-full py-4 px-7 mx-auto ${
          showMenu ? "opacity-30 pointer-events-none" : ""
        }`}
      >
        <div className="flex items-center">
          <Link to="/" className="">
            {/* <img src={logo} alt="Logo" loading="lazy" width={160} height={32} /> */}
          </Link>
          <ul className="flex text-richblack-100 gap-x-6">
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="flex gap-3">
          {/* Conditional rendering based on isLogin */}
          {isLogin ? (
            <>
              <Link to="/dashboard">
                <button className="bg-richblack-800 text-richblack-100 py-[12px] px-[12px] rounded-[8px] border border-richblack-700">
                  Dashboard
                </button>
              </Link>
              <Link to="/">
                <button
                  className="bg-richblack-800 text-richblack-100 py-[12px] px-[12px] rounded-[8px] border border-richblack-700"
                  onClick={() => {
                    setIslogIn(false);
                    toast.success("Logged Out");
                  }}
                >
                  Log Out
                </button>
              </Link>
            </>
          ) : (
            <Link to="/login">
              <button className="bg-richblack-800 text-richblack-100 py-[12px] px-[12px] rounded-[8px] border border-richblack-700">
                Login
              </button>
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
