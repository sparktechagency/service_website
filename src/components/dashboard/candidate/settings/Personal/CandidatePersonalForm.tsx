"use client";
import CVForm from "./CVForm";
import WorkExperienceForm from "./WorkExperience/WorkExperienceForm";
import React, { useState } from "react";
import Image from "next/image";

const CandidatePersonalForm = () => {
  const [logo, setLogo] = useState<File | null>(null);
  const [logoPreview, setLogoPreview] = useState<string | null>(null);

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setLogo(file);
      setLogoPreview(URL.createObjectURL(file));
    }
  };

  const handleRemoveLogo = () => {
    setLogo(null);
    setLogoPreview(null);
  };

  return (
    <>
      <div className="space-y-8 bg-white p-6 rounded-lg shadow-sm">
        <section>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Logo Upload */}
            <div className="col-span-1">
              <p className="text-lg mb-2">Upload Profile Picture</p>
              <div className="relative">
                <div className="bg-slate-400 max-h-[200px] w-full aspect-square rounded-md overflow-hidden">
                  {logoPreview ? (
                    <Image
                      src={logoPreview || "/placeholder.svg"}
                      alt="Logo preview"
                      fill
                      className="object-cover h-full"
                    />
                  ) : (
                    <label
                      htmlFor="logo-upload"
                      className="flex items-center justify-center h-full cursor-pointer"
                    >
                      <span className="sr-only">Upload Profile Picture</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                      </svg>
                    </label>
                  )}
                  <input
                    id="logo-upload"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleLogoChange}
                  />
                </div>
                {logo && (
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-xs text-gray-500">
                      {(logo.size / (1024 * 1024)).toFixed(1)} MB
                    </span>
                    <div className="space-x-2">
                      <button
                        onClick={handleRemoveLogo}
                        className="text-xs text-blue-600 hover:underline"
                      >
                        Remove
                      </button>
                      <label
                        htmlFor="logo-upload"
                        className="text-xs text-blue-600 hover:underline cursor-pointer"
                      >
                        Replace
                      </label>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="col-span-1 md:col-span-2 space-y-6">
              <div>
                <label
                  htmlFor="fullname"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Full name
                </label>
                <input
                  id="fullname"
                  placeholder="Enter full name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                />
              </div>

               <div>
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Job Title(multiple, comma separated)
                </label>
                <input
                  id="title"
                  placeholder="e.g.Manufacturing Associate, Process Technician"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Job Seeking Title(multiple, comma separated)
                </label>
                <input
                  id="title"
                  placeholder="Enter title"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Experience
              </label>
              <div className="relative">
                <select className="block w-full px-3 py-2 border border-gray-300 rounded-md text-gray-600 focus:border-blue-500 focus:outline-none focus:ring-blue-500 appearance-none">
                  <option disabled>Select...</option>
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
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Education
              </label>
              <div className="relative">
                <select className="block w-full px-3 py-2 border border-gray-300 rounded-md text-gray-600 focus:border-blue-500 focus:outline-none focus:ring-blue-500 appearance-none">
                  <option disabled>Select...</option>
                  <option value="highschool">High School</option>
                  <option value="associate">Associate Degree</option>
                  <option value="bachelor">Bachelor &apos s Degree</option>
                  <option value="master">Master&aposs Degree</option>
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
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Availability
              </label>
              <div className="relative">
                <select className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none text-gray-600 focus:ring-blue-500 appearance-none">
                  <option>Select Type</option>
                  <option>Part Time</option>
                  <option>Full Time</option>
                  <option>Internship</option>
                  <option>Remote</option>
                  <option>Temporary</option>
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
          {/* <div className="space-y-6 mt-8">
            <SectionTitle
              title="Legal Information"
              subtitle="Please confirm the following"
            />

            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    type="checkbox"
                    //checked={checked}
                    //onChange
                    required
                    className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="right" className="font-medium text-gray-700">
                    I confirm that I have the Right to Work in the U{" "}
                    <span className="text-red-500 ml-1">*</span>
                  </label>
                </div>
              </div>

              <p className="text-sm text-gray-500 mt-4">
                By submitting this form, you confirm that the information
                provided is true and complete. We will process your data in
                accordance with our privacy policy.
              </p>
            </div>
          </div> */}

          {/* <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Personal Website
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <LinkIcon className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Website url..."
                  />
                </div>
              </div> */}
          <WorkExperienceForm />

          <div className="mt-6">
            <button className="px-4 py-2 bg-primary hover:bg-[#2b4773] cursor-pointer text-white rounded-md shadow-sm focus:outline-none">
              Save Changes
            </button>
          </div>
        </section>

        <CVForm />
      </div>
    </>
  );
};

export default CandidatePersonalForm;
