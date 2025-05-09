"use client"

import { useState } from "react"
import { User, UserCircle, Cog, Upload, LinkIcon, FileText, MoreVertical, Plus } from "lucide-react";

const tabItems =  [
  {
    title: "Personal",
    key: "personal",
    icon: User
  },
  {
    title: "Profile",
    key: "personal",
    icon: UserCircle
  },
  {
    title: "Account Settings",
    key: "personal",
    icon: Cog
  }
]

const CandidateTabs = () =>{
  const [activeTab, setActiveTab] = useState("personal")

  // Mock components for the other tabs
  const CandidateProfileForm = () => <div>Profile Form Content</div>
  const CandidateAccountSettings = () => <div>Account Settings Content</div>

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Tabs Navigation - Scrollable on mobile */}
      <div className="w-full mb-6 border-b border-gray-200 overflow-x-auto scrollbar-hide">
        <div className="flex min-w-max">
          <button
            onClick={() => setActiveTab("personal")}
            className={`flex items-center gap-2 px-4 py-3 text-sm font-medium whitespace-nowrap cursor-pointer ${
              activeTab === "personal"
                ? "border-b-2 border-blue-600 text-blue-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            <User className="w-4 h-4" />
            <span>Personal</span>
          </button>
          <button
            onClick={() => setActiveTab("profile")}
            className={`flex items-center gap-2 px-4 py-3 text-sm font-medium whitespace-nowrap cursor-pointer ${
              activeTab === "profile" ? "border-b-2 border-blue-600 text-blue-600" : "text-gray-500 hover:text-gray-700"
            }`}
          >
            <UserCircle className="w-4 h-4" />
            <span>Profile</span>
          </button>
          <button
            onClick={() => setActiveTab("account")}
            className={`flex items-center gap-2 px-4 py-3 text-sm font-medium whitespace-nowrap cursor-pointer ${
              activeTab === "account" ? "border-b-2 border-blue-600 text-blue-600" : "text-gray-500 hover:text-gray-700"
            }`}
          >
            <Cog className="w-4 h-4" />
            <span className="whitespace-nowrap">Account Settings</span>
          </button>
        </div>
      </div>

      {/* Tab Content */}
      <div className="w-full">
        {activeTab === "personal" && (
          <div className="space-y-8">
            <section>
              <h2 className="text-lg font-medium text-gray-900 mb-6">Basic Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="col-span-1">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Profile Picture</label>
                  <div className="border border-dashed border-gray-300 rounded-md p-4 sm:p-6 flex flex-col items-center justify-center">
                    <div className="mb-4">
                      <Upload className="h-8 w-8 sm:h-10 sm:w-10 text-gray-400" />
                    </div>
                    <p className="text-sm font-medium text-gray-900 text-center">Browse photo or drop here</p>
                    <p className="text-xs text-gray-500 mt-1 text-center">
                      A photo larger than 400 pixels work best. Max photo size 5 MB.
                    </p>
                  </div>
                </div>

                <div className="col-span-1 md:col-span-2 space-y-6">
                  <div>
                    <label htmlFor="fullname" className="block text-sm font-medium text-gray-700 mb-2">
                      Full name
                    </label>
                    <input
                      id="fullname"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                      Title/headline
                    </label>
                    <input
                      id="title"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Experience</label>
                  <div className="relative">
                    <select className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none">
                      <option disabled>
                        Select...
                      </option>
                      <option value="entry">Entry Level</option>
                      <option value="junior">Junior (1-3 years)</option>
                      <option value="mid">Mid-Level (3-5 years)</option>
                      <option value="senior">Senior (5+ years)</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                      <svg
                        className="h-5 w-5 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Education</label>
                  <div className="relative">
                    <select className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none">
                      <option disabled>
                        Select...
                      </option>
                      <option value="highschool">High School</option>
                      <option value="associate">Associate Degree</option>
                      <option value="bachelor">Bachelor's Degree</option>
                      <option value="master">Master's Degree</option>
                      <option value="phd">PhD</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                      <svg
                        className="h-5 w-5 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Personal Website</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <LinkIcon className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Website url..."
                  />
                </div>
              </div>

              <div className="mt-6">
                <button className="px-4 py-2 bg-blue-800 hover:bg-blue-900 text-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  Save Changes
                </button>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-medium text-gray-900 mb-6">Your CV/Resume</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Resume Card 1 */}
                <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-4 flex items-start justify-between">
                  <div className="flex items-center">
                    <FileText className="h-6 w-6 text-gray-500 mr-3 flex-shrink-0" />
                    <div className="min-w-0">
                      <p className="text-sm font-medium truncate">Professional Resume</p>
                      <p className="text-xs text-gray-500">3.5 MB</p>
                    </div>
                  </div>
                  <div className="relative ml-2 flex-shrink-0">
                    <button
                      className="p-1 rounded-full hover:bg-gray-100"
                      onClick={() => {
                        // Toggle dropdown logic would go here
                      }}
                    >
                      <MoreVertical className="h-4 w-4" />
                    </button>
                    {/* Dropdown would go here */}
                  </div>
                </div>

                {/* Resume Card 2 */}
                <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-4 flex items-start justify-between">
                  <div className="flex items-center">
                    <FileText className="h-6 w-6 text-gray-500 mr-3 flex-shrink-0" />
                    <div className="min-w-0">
                      <p className="text-sm font-medium truncate">Product Designer</p>
                      <p className="text-xs text-gray-500">4.7 MB</p>
                    </div>
                  </div>
                  <div className="relative ml-2 flex-shrink-0">
                    <button
                      className="p-1 rounded-full hover:bg-gray-100"
                      onClick={() => {
                        // Toggle dropdown logic would go here
                      }}
                    >
                      <MoreVertical className="h-4 w-4" />
                    </button>
                    {/* Dropdown would go here */}
                  </div>
                </div>

                {/* Resume Card 3 */}
                <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-4 flex items-start justify-between">
                  <div className="flex items-center">
                    <FileText className="h-6 w-6 text-gray-500 mr-3 flex-shrink-0" />
                    <div className="min-w-0">
                      <p className="text-sm font-medium truncate">Visual Designer</p>
                      <p className="text-xs text-gray-500">1.3 MB</p>
                    </div>
                  </div>
                  <div className="relative ml-2 flex-shrink-0">
                    <button
                      className="p-1 rounded-full hover:bg-gray-100"
                      onClick={() => {
                        // Toggle dropdown logic would go here
                      }}
                    >
                      <MoreVertical className="h-4 w-4" />
                    </button>
                    {/* Dropdown would go here */}
                  </div>
                </div>

                {/* Add Resume Card */}
                <div className="bg-white border border-dashed border-gray-200 rounded-lg p-4 flex items-center justify-center cursor-pointer hover:bg-gray-50">
                  <div className="text-center">
                    <div className="mb-2 flex justify-center">
                      <Plus className="h-6 w-6 text-gray-400" />
                    </div>
                    <p className="text-sm font-medium">Add CV/Resume</p>
                    <p className="text-xs text-gray-500">Browse file or drop here, only pdf</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {activeTab === "profile" && <CandidateProfileForm />}
        {activeTab === "account" && <CandidateAccountSettings />}
      </div>
    </div>
  )
}


export default CandidateTabs;