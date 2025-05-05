"use client"
import Image from "next/image";
import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { HiEye, HiEyeOff } from "react-icons/hi";

const RegisterPage = () => {
  const [userType, setUserType] = useState("Employer");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center p-8 md:px-20">
        <h2 className="text-3xl font-bold text-red-400 mb-1">Sign Up</h2>
        <p className="text-gray-600 mb-4">Enter Your Personal Data</p>
        <div className="border-b mb-6" />

        {/* Toggle Buttons */}
        <div className="flex gap-4 mb-6">
          {["Candidate", "Employer"].map((type) => (
            <button
              key={type}
              onClick={() => setUserType(type)}
              className={`px-4 py-2 rounded-full border text-sm font-medium shadow-sm ${
                userType === type
                  ? "bg-[#22385C] text-white"
                  : "text-[#22385C] bg-white border-[#22385C]"
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Input Fields */}
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 border rounded-full outline-none"
          />
          <input
            type="email"
            placeholder="andrew101@gmail.com"
            className="w-full px-4 py-2 border rounded-full outline-none"
          />
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full px-4 py-2 border rounded-full outline-none pr-10"
            />
            <span
              className="absolute right-4 top-2.5 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <HiEyeOff /> : <HiEye />}
            </span>
          </div>
          <div className="relative">
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full px-4 py-2 border rounded-full outline-none"
            />
          </div>

          {/* Terms */}
          <div className="flex items-start text-sm text-gray-700">
            <FaCheckCircle className="text-green-500 mr-2 mt-0.5" />
            I agree with{" "}
            <a href="#" className="text-red-400 underline mx-1">
              terms
            </a>
            of service and{" "}
            <a href="#" className="text-red-400 underline mx-1">
              privacy policy
            </a>
          </div>

          {/* Submit */}
          <button className="w-full bg-[#22385C] text-white py-2 rounded-full shadow-md hover:bg-[#1a2e4b] transition-colors font-semibold">
            Sign Up
          </button>
        </form>

        <p className="text-sm text-center mt-4 text-gray-500">
          Already have an account?{" "}
          <a href="#" className="text-red-400 hover:underline">
            login
          </a>
        </p>
      </div>

      {/* Right Side Illustration */}
      <div className="hidden md:flex w-1/2 items-center justify-center bg-blue-50 p-6">
        <Image
          src="/images/auth/register.png"
          alt="Signup"
          width={400} height={400}
        />
      </div>
    </div>
  );
}

export default RegisterPage;
