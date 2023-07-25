import React from "react";
import { Link } from "react-router-dom";

// import { Toast } from 'react-hot-toast
import { toast } from "react-hot-toast";

const Navbar = ({isLogin,setIslogIn}) => {
console.log(isLogin)
  return (
    <div className="flex justify-between items-center w-full  py-4 px-7   mx-auto bg-richblack-900 border ">
      <Link to="/" className="">
        {/* <img src={logo} alt="Logo" loading="lazy" width={160} height={32} /> */}
      </Link>
      <nav>
        <ul className="flex text-richblack-100  gap-x-6 ">
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
      </nav>
      {/* login singUp logout DashBoard */}
     <div className="flex gap-3 ml-10 ">
     {isLogin && (
          <Link to="/">
            <button
              className="bg-richblack-800 text-richblack-100 py-[12px] px-[12px] rounded-[8px] border border-richblack-700"
              onClick={() => {setIslogIn(false);toast.success("Logged Out")}}
            >
              Log Out
            </button>
          </Link>
        )}
        {isLogin && (
          <Link to="/dashboard">
            <button className="bg-richblack-800 text-richblack-100 py-[12px] px-[12px] rounded-[8px] border border-richblack-700">
              Dashboard
            </button>
          </Link>
        )}
     </div>
      </div>
    
  );
};

export default Navbar;
