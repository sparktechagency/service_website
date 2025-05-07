"use client"

import { useState } from "react"
import { Eye, EyeOff, MapPin, Mail, FileText, AlertCircle } from "lucide-react"

const CandidateAccountSettings =() => {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [profileIsPublic, setProfileIsPublic] = useState(true)
  const [resumeIsPrivate, setResumeIsPrivate] = useState(true)

  return (
    <div className="container py-6 max-w-3xl">
      <div className="space-y-8">
        {/* Contact Info Section */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Contact Info</h2>
          <div className="space-y-4">
            <div>
              <label htmlFor="map-location" className="block text-sm font-medium text-gray-700 mb-1">
                Map Location
              </label>
              <input
                id="map-location"
                type="text"
                placeholder="Enter your location"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone
              </label>
              <div className="flex">
                <div className="relative">
                  <select className="h-10 rounded-l-md border border-r-0 border-gray-300 bg-white px-3 py-2 text-sm flex items-center gap-1 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>🇧🇩 +880</option>
                    <option>🇺🇸 +1</option>
                    <option>🇬🇧 +44</option>
                  </select>
                </div>
                <input
                  id="phone"
                  type="text"
                  placeholder="Phone number"
                  className="w-full px-3 py-2 border border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <input
                  id="email"
                  type="email"
                  placeholder="Email address"
                  className="w-full pl-10 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <button className="px-4 py-2 bg-blue-800 text-white rounded-md hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              Save Changes
            </button>
          </div>
        </div>

        {/* Notification Section */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Notification</h2>
          <div className="space-y-3">
            <div className="flex items-start space-x-2">
              <input type="checkbox" id="notify-shortlisted" className="mt-1" defaultChecked />
              <label htmlFor="notify-shortlisted" className="text-sm text-gray-700">
                Notify me when employers shortlisted me
              </label>
            </div>

            <div className="flex items-start space-x-2">
              <input type="checkbox" id="notify-saved" className="mt-1" />
              <label htmlFor="notify-saved" className="text-sm text-gray-700">
                Notify me when employers saved my profile
              </label>
            </div>

            <div className="flex items-start space-x-2">
              <input type="checkbox" id="notify-expire" className="mt-1" />
              <label htmlFor="notify-expire" className="text-sm text-gray-700">
                Notify me when my applied jobs are expire
              </label>
            </div>

            <div className="flex items-start space-x-2">
              <input type="checkbox" id="notify-rejected" className="mt-1" defaultChecked />
              <label htmlFor="notify-rejected" className="text-sm text-gray-700">
                Notify me when employers rejected me
              </label>
            </div>

            <div className="flex items-start space-x-2">
              <input type="checkbox" id="notify-alerts" className="mt-1" />
              <label htmlFor="notify-alerts" className="text-sm text-gray-700">
                Notify me when I have up to 5 job alerts
              </label>
            </div>
          </div>
        </div>

        {/* Job Alerts Section */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Job Alerts</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">
                Role
              </label>
              <div className="relative">
                <FileText className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <input
                  id="role"
                  type="text"
                  placeholder="Your job roles"
                  className="w-full pl-10 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                Location
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <input
                  id="location"
                  type="text"
                  placeholder="City, state, country name"
                  className="w-full pl-10 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          <div className="mt-4">
            <button className="px-4 py-2 bg-blue-800 text-white rounded-md hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              Save Changes
            </button>
          </div>
        </div>

        {/* Privacy Settings */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-xl font-semibold mb-4">Profile Privacy</h2>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <span className="font-medium">YES</span>
                  <p className="text-sm text-gray-500">Your profile is public now</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={profileIsPublic}
                    onChange={() => setProfileIsPublic(!profileIsPublic)}
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Resume Privacy</h2>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <span className="font-medium">NO</span>
                  <p className="text-sm text-gray-500">Your resume is private now</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={!resumeIsPrivate}
                    onChange={() => setResumeIsPrivate(!resumeIsPrivate)}
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Change Password Section */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Change Password</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <label htmlFor="current-password" className="block text-sm font-medium text-gray-700 mb-1">
                Current Password
              </label>
              <div className="relative">
                <input
                  id="current-password"
                  type={showCurrentPassword ? "text" : "password"}
                  placeholder="Password"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="button"
                  onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                  className="absolute right-3 top-2.5 text-gray-400"
                >
                  {showCurrentPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            <div>
              <label htmlFor="new-password" className="block text-sm font-medium text-gray-700 mb-1">
                New Password
              </label>
              <div className="relative">
                <input
                  id="new-password"
                  type={showNewPassword ? "text" : "password"}
                  placeholder="Password"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="button"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                  className="absolute right-3 top-2.5 text-gray-400"
                >
                  {showNewPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            <div>
              <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700 mb-1">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  id="confirm-password"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Password"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-2.5 text-gray-400"
                >
                  {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <button className="px-4 py-2 bg-blue-800 text-white rounded-md hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              Save Changes
            </button>
          </div>
        </div>

        {/* Delete Account Section */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Delete Your Account</h2>
          <p className="text-sm text-gray-600 mb-4">
            If you delete your JobSpot account, you will no longer be able to get information about the matched jobs,
            following employers, and job alert, shortlisted jobs and more. You will be abandoned from all the services
            of JobSpot.com.
          </p>
          <button className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 flex items-center gap-2">
            <AlertCircle className="h-4 w-4" />
            Close Account
          </button>
        </div>
      </div>
    </div>
  )
}

export default CandidateAccountSettings;
