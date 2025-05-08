"use client"

import type React from "react"

import { useState } from "react"
import { Eye, EyeOff, X } from "lucide-react"

const ChangePasswordForm = () => {
  const [currentPassword, setCurrentPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [showCurrentPassword, setShowCurrentPassword] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle password change logic here
    console.log("Password change submitted")
  }

  const togglePasswordVisibility = (field: string) => {
    switch (field) {
      case "current":
        setShowCurrentPassword(!showCurrentPassword)
        break
      case "new":
        setShowNewPassword(!showNewPassword)
        break
      case "confirm":
        setShowConfirmPassword(!showConfirmPassword)
        break
    }
  }

  return (
    <div className="max-w-3xl mx-auto p-4 md:p-6">
      <h2 className="text-lg font-medium mb-6">Change Password</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Current Password */}
          <div className="space-y-1">
            <label htmlFor="current-password" className="block text-sm">
              Current Password
            </label>
            <div className="relative">
              <input
                id="current-password"
                type={showCurrentPassword ? "text" : "password"}
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="Password"
              />
              <button
                type="button"
                onClick={() => togglePasswordVisibility("current")}
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-500"
              >
                {showCurrentPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {/* New Password */}
          <div className="space-y-1">
            <label htmlFor="new-password" className="block text-sm">
              New Password
            </label>
            <div className="relative">
              <input
                id="new-password"
                type={showNewPassword ? "text" : "password"}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="Password"
              />
              <button
                type="button"
                onClick={() => togglePasswordVisibility("new")}
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-500"
              >
                {showNewPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div className="space-y-1">
            <label htmlFor="confirm-password" className="block text-sm">
              Confirm Password
            </label>
            <div className="relative">
              <input
                id="confirm-password"
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="Password"
              />
              <button
                type="button"
                onClick={() => togglePasswordVisibility("confirm")}
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-500"
              >
                {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="px-4 py-2 bg-[#1a365d] text-white font-medium rounded-md hover:bg-[#2a4365] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
          >
            Change Password
          </button>
        </div>
      </form>

      <div className="mt-12 border border-gray-200 rounded-md p-4">
        <h3 className="text-lg font-medium mb-2">Delete Your Company</h3>
        <p className="text-sm text-gray-600 mb-4">
          If you delete your Jobpilot account, you will no longer be able to get information about the matched jobs,
          following employers, and job alert, shortlisted jobs and more. You will be abandoned from all the services of
          Jobpilot.com.
        </p>
        <button
          type="button"
          className="inline-flex items-center px-4 py-2 border border-red-300 text-sm font-medium rounded-md text-red-500 hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors"
        >
          <X className="h-4 w-4 mr-2" />
          Close Account
        </button>
      </div>
    </div>
  )
}

export default ChangePasswordForm;
