import React from "react";
import { toast } from "react-hot-toast";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

import img from "./singup.png"
import { Link } from 'react-router-dom';
import useHook from "../CustomHook/useHook";


const Singup = ({setIslogIn}) => {

  const {formData,showPassword,setShowPassword,showConfirmPassword,setShowConfirmPassword,navigate,changeHandler} =useHook("type")



  function submitHandler(event) {

    event.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error("Password do not match");
      return;
    } else {
      navigate("/home");
      toast.success("Account Created");
      setIslogIn(true)
    }
  }
  return (
    <div className='w-full h-screen bg-richblack-900 flex justify-between items-center'>
        <div className='my-auto  w-[500px] md:w-[50%] hidden sm:block '>
        <img src={img} alt="avatar-img"  loading='lazy'/>
      </div>
      <div className="flex bg-richblack-800 p-2 gap-z-1 mt-8 mb-2 ml-0 rounded-full max-w-max">
      </div>
      <form action="" onSubmit={submitHandler}  className="w-full max-w-[600px] h-full flex flex-col justify-center mx-auto pl-8 pr-16">
      <h1 className='text-white mb-5 font-bold text-[25px]'>STUDENT SINGUP FORM</h1>
        <div className="flex gap-x-4">
          <label htmlFor="" className="w-full mt-2">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375]">
              First Name <sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type="text"
              name="firstName"
              onChange={changeHandler}
              placeholder="Enter First Name"
              value={formData.firstName}
              className="bg-richblack-800 w- rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
            />
          </label>
          <label htmlFor="" className="w-full mt-2">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375]">
              Last Name <sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type="text"
              name="lastName"
              onChange={changeHandler}
              placeholder="Enter Last Name"
              value={formData.lastName}
              className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
            />
          </label>
        </div>
        {/* emails Add*/}

        <label htmlFor="" className="mt-2">
          <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375]">
            Email Address <sup className="text-pink-200">*</sup>
          </p>
          <input
            required
            type="email"
            name="email"
            onChange={changeHandler}
            placeholder="Enter Email Address"
            value={formData.email}
            className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
          />
        </label>
        {/* create Password and conform password */}
        <div className="flex gap-x-4 w-full justify-between">
          {/* create Password */}

          <label className="relative mt-2">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375]">
              Create password <sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type={showConfirmPassword ? "text" : "password"}
              name="password"
              onChange={changeHandler}
              placeholder="Enter Your Password"
              value={formData.password}
              className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
            />
            <span
              onClick={() => setShowConfirmPassword((prev) => !prev)}
              className="absolute right-3 top-[37px] cursor-pointer"
            >
              {showConfirmPassword ? (
                <AiOutlineEyeInvisible fontSize={20} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={20} fill="#AFB2BF" />
              )}
            </span>
          </label>
          {/* confirm Password */}
          <label htmlFor="" className="relative mt-2">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375]">
              Confirm password <sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type={showPassword ? "text" : "password"}
              name="confirmPassword"
              onChange={changeHandler}
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
            />
            <span
              className="absolute right-3 top-[37px] cursor-pointer"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? (
                <AiOutlineEyeInvisible fontSize={20} fill="#FBBF24" />
              ) : (
                <AiOutlineEye fontSize={20} fill="#FFEEA7" />
              )}
            </span>
          </label>
        </div>

        <button className="bg-yellow-50 text-richblack-900 font-semibold px-[12px] rounded-[8px] py-[8px] mt-6 w-full">
          Create Account
        </button>
        <div className='mt-10  w-full '>
            <Link to="/" className="text-white">You Have Account? <span className='hover:border-b-2 hover:border-yellow-50 text-yellow-50'>Back</span></Link>
      </div>
      </form>
    </div>
  );
};

export default Singup;
