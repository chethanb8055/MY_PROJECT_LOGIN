import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from "react-hot-toast";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import img from '../Pages/Avatar.png';
import useHook from '../CustomHook/useHook';

const Login = ({setIslogIn}) => {
 
  const {formData,showPassword,setShowPassword,navigate,changeHandler} =useHook("login")  


// console.log(formData)


  function submitHandler(event) {
    event.preventDefault();
    setIslogIn(true)
    toast.success("Logged In");
    navigate("/home");
  }

  return (
    <div className='w-full h-screen bg-richblack-900 flex justify-between items-center'>
      <div className='my-auto w-[50%] hidden sm:block '>
        <img src={img} alt="avatar-img" loading='lazy'/>
      </div>
      <div className='flex flex-col items-center justify-center md:w-[100%] mx-auto'>
      <form onSubmit={submitHandler} className="w-full max-w-[600px] h-full flex flex-col justify-center mx-auto pl-8 pr-16">
        <h1 className='text-white mb-5 font-bold text-[25px]'>STUDENT LOGIN FORM</h1>
        <label className="w-full">
          <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375]">
            Email Address <sup className="text-pink-200">*</sup>
          </p>

          <input
            type="email"
            required
            name="email"
            value={formData.email}
            onChange={changeHandler}
            placeholder="Enter email id"
            className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
          />
        </label>
        <label htmlFor="" className="relative mt-4">
          <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375]">
            Password<sup className="text-pink-200">*</sup>
          </p>

          <input
            type={showPassword ? "text" : "password"}
            required
            name="password"
            value={formData.password}
            onChange={changeHandler}
            placeholder="Enter Password"
            className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
          />
          <span
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 top-[37px] cursor-pointer"
            >
              {showPassword? (
                <AiOutlineEyeInvisible fontSize={20} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={20} fill="#AFB2BF" />
              )}
            </span>
          <div to="#">
            <p className="text-xs mt-1 text-blue-100 max-w-max ml-auto">Forgot Password</p>
          </div>
        </label>
        <button className="bg-yellow-50 text-richblack-900 font-semibold px-[12px] rounded-[8px] py-[8px] w-full mt-6">Login</button>
        <div className='mt-10  w-full '>
            <Link to="/singup" className="text-white">New here? <span className='hover:border-b-2 hover:border-yellow-50 text-yellow-50'>Create an Account</span></Link>
      </div>
      <div>

      </div>
      </form>
    
      </div>
  
     
    </div>
  );
};

export default Login;
