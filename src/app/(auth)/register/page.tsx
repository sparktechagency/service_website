"use client"
import CandidateRegisterForm from "@/components/auth/CandidateRegisterForm";
import EmplyerRegisterForm from "@/components/auth/EmplyerRegisterForm";
import LoginForm from "@/components/auth/LoginForm";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const RegisterPage = () => {
  const [userType, setUserType] = useState("Candidate");

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8 md:px-20">
      <div className="w-full max-w-md">

        <h2 className="text-3xl font-bold text-red-400 mb-1">Sign Up</h2>
        <p className="text-gray-600 mb-4">Enter Your Personal Data</p>
        <div className="border-b mb-6" />

        {/* Toggle Buttons */}
        <div className="flex gap-4 mb-6">
          {["Candidate", "Employer"].map((type) => (
            <button
            key={type}
            onClick={() => setUserType(type)}
            className={`px-4 py-2 cursor-pointer rounded-full border text-sm font-medium shadow-sm ${
              userType === type
              ? "bg-[#22385C] text-white"
              : "text-[#22385C] bg-white border-[#22385C]"
              }`}
              >
              {type}
            </button>
          ))}
        </div>
        
        {/* Register Form */}
        {
          userType=== "Candidate" ? (
            <CandidateRegisterForm/>
          ) : (
            <EmplyerRegisterForm/>
          )
        }

        <p className="text-sm text-center mt-4 text-gray-500">
          Already have an account?{" "}
          <Link href="/login" className="text-red-400 hover:underline">
            login
          </Link>
        </p>
        </div>
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
