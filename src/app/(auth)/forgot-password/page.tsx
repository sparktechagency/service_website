"use client"
import ForgotPasswordForm from "@/components/auth/ForgotPasswordForm";
import Image from "next/image";

const ForgostPasswordPage = () => {
  return (
    <>
     <div className="min-h-screen flex flex-col justify-center md:justify-start md:flex-row">
      {/* Left Side */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-white p-10">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold mb-2 text-title">Forgot Password?</h2>
          <p className="text-gray-600 mb-6">Enter your email address and we will send you a
          verification code</p>

          {/* Login Form */}
          <ForgotPasswordForm/>

        </div>
      </div>

      {/* Right Side */}
      <div className="hidden md:flex md:w-1/2 items-center justify-center bg-blue-50 p-10">
        <div className="text-center">
          <Image src="/images/auth/forgot.png" alt="Login Illustration" width={400} height={400} />
        </div>
      </div>
    </div>
    </>
  )
}

export default ForgostPasswordPage;