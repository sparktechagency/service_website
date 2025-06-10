"use client"

import type React from "react"
import { useState } from "react"

const VerifyAccountOtpPage = ()=> {
  const [email, setEmail] = useState("")
  const [verificationCode, setVerificationCode] = useState("")
  const [step, setStep] = useState(1) // 1: Enter email, 2: Enter verification code
  const [isLoading, setIsLoading] = useState(false)
  const [countdown, setCountdown] = useState(0)

  const handleSendCode = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      setStep(2)
      setCountdown(60) // Start 60 second countdown

      // Countdown timer
      const timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(timer)
            return 0
          }
          return prev - 1
        })
      }, 1000)
    }, 2000)

    console.log("Sending verification code to:", email)
  }

  const handleVerifyCode = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      console.log("Verifying code:", verificationCode)
      // Handle successful verification
      alert("Account verified successfully!")
    }, 2000)
  }

  const handleResendCode = () => {
    if (countdown === 0) {
      setCountdown(60)
      console.log("Resending verification code to:", email)

      // Restart countdown
      const timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(timer)
            return 0
          }
          return prev - 1
        })
      }, 1000)
    }
  }

  const handleBackToLogin = () => {
    console.log("Navigate back to login")
  }

  const handleChangeEmail = () => {
    setStep(1)
    setVerificationCode("")
    setCountdown(0)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Verify Account Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
          {/* Header */}
          <div className="text-center space-y-2">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
              {step === 1 ? (
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              ) : (
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              )}
            </div>
            <h1 className="text-2xl font-bold text-gray-900">
              {step === 1 ? "Verify Your Account" : "Enter Verification Code"}
            </h1>
            <p className="text-gray-600">
              {step === 1
                ? "We'll send a verification code to your email address"
                : `We've sent a 6-digit code to ${email}`}
            </p>
          </div>

          {/* Step 1: Enter Email */}
          {step === 1 && (
            <form onSubmit={handleSendCode} className="space-y-5">
              {/* Email Field */}
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <div className="relative">
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 pl-11"
                    placeholder="Enter your email address"
                    required
                  />
                  <svg
                    className="w-5 h-5 text-gray-400 absolute left-3 top-3.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  </svg>
                </div>
              </div>

              {/* Send Code Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 px-4 rounded-lg font-medium hover:from-green-600 hover:to-emerald-700 focus:ring-4 focus:ring-green-200 transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending Code...</span>
                  </div>
                ) : (
                  "Send Verification Code"
                )}
              </button>
            </form>
          )}

          {/* Step 2: Enter Verification Code */}
          {step === 2 && (
            <div className="space-y-5">
              <form onSubmit={handleVerifyCode} className="space-y-5">
                {/* Verification Code Field */}
                <div className="space-y-2">
                  <label htmlFor="code" className="block text-sm font-medium text-gray-700">
                    Verification Code
                  </label>
                  <div className="relative">
                    <input
                      id="code"
                      type="text"
                      value={verificationCode}
                      onChange={(e) => setVerificationCode(e.target.value.replace(/\D/g, "").slice(0, 6))}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 text-center text-2xl font-mono tracking-widest"
                      placeholder="000000"
                      maxLength={6}
                      required
                    />
                  </div>
                  <p className="text-xs text-gray-500 text-center">Enter the 6-digit code sent to your email</p>
                </div>

                {/* Verify Button */}
                <button
                  type="submit"
                  disabled={isLoading || verificationCode.length !== 6}
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 px-4 rounded-lg font-medium hover:from-green-600 hover:to-emerald-700 focus:ring-4 focus:ring-green-200 transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Verifying...</span>
                    </div>
                  ) : (
                    "Verify Account"
                  )}
                </button>
              </form>

              {/* Resend Code */}
              <div className="text-center space-y-3">
                <p className="text-sm text-gray-600">{"Didn't receive the code?"}</p>
                <button
                  onClick={handleResendCode}
                  disabled={countdown > 0}
                  className="text-green-600 hover:text-green-800 font-medium text-sm transition-colors disabled:text-gray-400 disabled:cursor-not-allowed"
                >
                  {countdown > 0 ? `Resend in ${countdown}s` : "Resend Code"}
                </button>
              </div>

              {/* Change Email */}
              <div className="text-center">
                <button
                  onClick={handleChangeEmail}
                  className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
                >
                  Wrong email? Change it
                </button>
              </div>
            </div>
          )}

          {/* Back to Login */}
          <div className="pt-4 border-t border-gray-200">
            <button
              onClick={handleBackToLogin}
              className="w-full text-gray-600 hover:text-gray-800 font-medium text-sm transition-colors flex items-center justify-center space-x-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span>Back to Login</span>
            </button>
          </div>
        </div>

        {/* Success Message (when verification is complete) */}
        <div className="mt-6 bg-green-50 border border-green-200 rounded-lg p-4 hidden" id="success-message">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <h3 className="text-green-800 font-medium">Account Verified!</h3>
              <p className="text-green-600 text-sm">Your account has been successfully verified.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VerifyAccountOtpPage;
