"use client";
import VerifyotpForm from "@/components/auth/VerifyotpForm";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const VerifyOtpPage = () => {
  const router = useRouter();
  const [verifyEmail, setVerifyEmail] = useState<string | null>("");

    useEffect(() => {
      if (typeof window !== "undefined") {
        const emailFromStorage = localStorage.getItem("email");
        setVerifyEmail(emailFromStorage);
      }
    }, []);

  const handleBackToLogin = () => {
    router.push("/login");
  };

  return (
    <>
      <div className="min-h-screen flex flex-col justify-center md:justify-start md:flex-row bg-gray-50">
        {/* Left Side */}
        <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-50 p-3 sm:p-10">
          <div className="w-full max-w-md bg-white py-6 px-4 md:px-6 shadow-md rounded-md">
            <h2 className="text-3xl font-bold mb-2 text-title text-center">
              Verify OTP
            </h2>
            {/* <p className="text-gray-600 mb-6">Enter your email address and we will send you a
          verification code</p> */}
            <p className="text-gray-600 mb-6 text-center">
              {" "}
              {/* Enter the 6-digit code sent to your email. */}
              We have just sent otp to <span className="text-gray-900 font-semibold">{verifyEmail}</span>
            </p>

            <VerifyotpForm />
            {/* Back to Login */}
            <div className="pt-4 mt-3 border-t border-gray-200">
              <button
                onClick={handleBackToLogin}
                className="w-full text-gray-600 hover:text-gray-800 font-medium text-sm transition-colors flex items-center justify-center space-x-2"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                <span>Back to Login</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="hidden md:flex md:w-1/2 items-center justify-center bg-blue-50 p-10">
          <div className="text-center">
            <Image
              src="/images/auth/verify.png"
              alt="Login Illustration"
              width={600}
              height={600}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default VerifyOtpPage;
