"use client";
import LogInComponent from "./LogInComponent";
import Image from "next/image";
import React, { useState } from "react";
// import { FaUser, FaLock } from "react-icons/fa";

const LogInForm = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  return (
    <div className="w-[600px] shadow-2xl shadow-gray-200 flex flex-col justify-center rounded-lg items-center mt-[40px] m-auto bg-gray-300 p-5">
      <Image
        src="/user-logo.png"
        alt="User Logo"
        width={200}
        height={200}
        className="mt-[15px] p-6 shadow-lg shadow-gray-500 rounded-full bg-white"
      />
      <form className="flex flex-col justify-center items-center">
        {isSignUp && (
          <>
            <div className="my-2 p-3">
              <label className="text-2xl text-[#000000]">First Name</label>
              <input
                type="text"
                placeholder="Enter your first name"
                className="border border-gray-500 mx-2 rounded-md w-[550px] h-[39px] mt-2"
              />
            </div>
            <div className="my-2 p-3">
              <label className="text-2xl text-[#000000]">Last Name</label>
              <input
                type="text"
                placeholder="Enter your last name"
                className="border border-gray-500 mx-2 rounded-md w-[550px] h-[39px] mt-2"
              />
            </div>
            <div className="my-2 p-3">
              <label className="text-2xl text-[#000000]">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="border border-gray-500 mx-2 rounded-md w-[550px] h-[39px]"
              />
            </div>

            <div className="my-2 p-3">
              <label className="text-2xl text-[#000000]">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="border border-gray-500 mx-2 rounded-md w-[550px] h-[39px]"
              />
            </div>

            <div className="my-2 p-3">
              <label className="text-2xl text-[#000000]">
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="Confirm your password"
                className="border border-gray-500 mx-2 rounded-md w-[550px] h-[39px]"
              />
            </div>

            <div className="my-2 p-3">
              <label className="text-2xl text-[#000000]">
                Phone Number (Optional)
              </label>
              <input
                type="text"
                placeholder="Enter your phone number"
                className="border border-gray-500 mx-2 rounded-md w-[550px] h-[39px] mt-2"
              />
            </div>
            <div className="my-2 p-3">
              <label className="text-2xl text-[#000000]">Gender</label>
              <select className="border border-gray-500 mx-2 rounded-md w-[550px] h-[39px] mt-2">
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="my-2 p-3">
              <label className="text-2xl text-[#000000]">Date of Birth</label>
              <input
                type="date"
                className="border border-gray-500 mx-2 rounded-md w-[550px] h-[39px] mt-2"
              />
            </div>
          </>
        )}
        {!isSignUp && (
          <>
            <div className="my-2 p-3 relative">
              <label className="text-2xl text-[#000000]">Email</label>
              <div className="flex flex-row bg-gray-500 w-[550px] rounded-md p-2 mt-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="border-none mx-2 rounded-md h-[39px] w-[480px]"
                />
                {/* <FaUser className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer text-white w-[30px] h-[22px] mt-[15px] mr-[9px]" /> */}
              </div>
            </div>
            <div className="my-2 p-3 relative">
              <label className="text-2xl text-[#000000]">Password</label>
              <div className="flex flex-row bg-gray-500 w-[550px] rounded-md p-2 mt-2">
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="border-none mx-2 rounded-md h-[39px] w-[480px]"
                />
                {/* <FaLock className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer text-white w-[30px] h-[22px] mt-[15px] mr-[9px]" /> */}
              </div>
            </div>
          </>
        )}
        <button className="bg-orange-300 mt-3 rounded-md flex justify-center items-center text-2xl p-2 w-[550px]">
          {isSignUp ? "Sign Up" : "Log In"}
        </button>
      </form>
      <LogInComponent />
      <p className="mt-5 text-lg">
        {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
        <span
          className="text-blue-500 cursor-pointer"
          onClick={() => setIsSignUp(!isSignUp)}
        >
          {isSignUp ? "Log In" : "Sign Up"}
        </span>
      </p>
    </div>
  );
};
export default LogInForm;
