/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import type React from "react"

import { useState } from "react"
import { FiMapPin, FiDollarSign, FiClock, FiArrowRight, FiBookmark } from "react-icons/fi"

// Sample job data
const jobs = [
  {
    id: 1,
    title: "Water Supply",
    company: "Company1",
    logo: "#f64e8b",
    logoText: "🔮",
    location: "New Mexico, USA",
    salary: "$30k-80k/month",
    daysRemaining: 4,
    tags: ["Featured", "Remote"],
    bookmarked: true,
  },
  {
    id: 2,
    title: "Water Supply",
    company: "Company2",
    logo: "#1a1a2e",
    logoText: "🍎",
    location: "Dhaka, Bangladesh",
    salary: "$30k-80k/month",
    daysRemaining: 4,
    tags: ["Featured", "Full Time"],
    bookmarked: false,
  },
  {
    id: 3,
    title: "Water Supply",
    company: "Company3",
    logo: "#e94560",
    logoText: "📍",
    location: "New York, USA",
    salary: "$30k-80k/month",
    daysRemaining: 4,
    tags: ["Featured", "Full Time"],
    bookmarked: true,
  },
  {
    id: 4,
    title: "Water Supply",
    company: "Company4",
    logo: "#ff4757",
    logoText: "𝓤",
    location: "Washington, USA",
    salary: "$30k-$35k",
    daysRemaining: 4,
    tags: ["Full Time"],
    bookmarked: false,
  },
  {
    id: 5,
    title: "Water Supply",
    company: "Company5",
    logo: "#f0f0f0",
    logoText: "🪟",
    location: "Ohio, USA",
    salary: "$30k-80k/month",
    daysRemaining: 4,
    tags: ["Full Time"],
    bookmarked: false,
  },
  {
    id: 6,
    title: "Water Supply",
    company: "Company6",
    logo: "#70e000",
    logoText: "Up",
    location: "Natore, Bangladesh",
    salary: "$30k-$35k",
    daysRemaining: 4,
    tags: ["Full Time"],
    bookmarked: false,
  },
  {
    id: 7,
    title: "Water Supply",
    company: "Company7",
    logo: "#1da1f2",
    logoText: "𝕏",
    location: "Montana, USA",
    salary: "$30k-$35k",
    daysRemaining: 4,
    tags: ["Part Time"],
    bookmarked: false,
  },
  {
    id: 8,
    title: "Water Supply",
    company: "Company8",
    logo: "#1877f2",
    logoText: "𝒇",
    location: "Sivas, Turkey",
    salary: "$30k-$35k",
    daysRemaining: 4,
    tags: ["Contract Base"],
    bookmarked: false,
  },
]

export default function JobListings() {
  const [selectedJob, setSelectedJob] = useState(6)
  const [bookmarkedJobs, setBookmarkedJobs] = useState(
    jobs.reduce((acc, job) => ({ ...acc, [job.id]: job.bookmarked }), {}),
  )

  const toggleBookmark = (jobId: number, e: React.MouseEvent) => {
    e.stopPropagation()
    // setBookmarkedJobs((prev) => ({
    //   ...prev,
    //   [jobId]: !prev[jobId],
    // }))
  }

  return (
    <div className="max-w-3xl mx-auto p-4 space-y-4">
      {jobs.map((job) => (
        <div
          key={job.id}
          className={`flex items-center justify-between p-4 rounded-lg transition-all ${
            selectedJob === job.id ? "border border-gray-300 shadow-sm" : "border-b border-gray-100"
          }`}
          onClick={() => setSelectedJob(job.id)}
        >
          <div className="flex items-center space-x-4">
            <div
              className="w-12 h-12 flex items-center justify-center rounded-lg text-white font-bold"
              style={{ backgroundColor: job.logo }}
            >
              {job.logoText}
            </div>

            <div>
              <div className="flex items-center space-x-2">
                <h3 className="font-medium">{job.title}</h3>
                <div className="flex space-x-1">
                  {job.tags.map((tag, index) => (
                    <span
                      key={index}
                      className={`text-xs px-2 py-0.5 rounded ${
                        tag === "Featured"
                          ? "bg-red-100 text-red-500"
                          : tag === "Remote"
                            ? "bg-blue-100 text-blue-500"
                            : tag === "Full Time"
                              ? "bg-blue-100 text-blue-500"
                              : tag === "Part Time"
                                ? "bg-purple-100 text-purple-500"
                                : "bg-gray-100 text-gray-500"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center text-gray-500 text-sm mt-1 space-x-4">
                <div className="flex items-center">
                  <FiMapPin className="mr-1" size={14} />
                  <span>{job.location}</span>
                </div>

                <div className="flex items-center">
                  <FiDollarSign className="mr-1" size={14} />
                  <span>{job.salary}</span>
                </div>

                <div className="flex items-center">
                  <FiClock className="mr-1" size={14} />
                  <span>{job.daysRemaining} Days Remaining</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button onClick={(e) => toggleBookmark(job.id, e)} className="text-gray-400 hover:text-gray-600">
              {/* <FiBookmark size={20} className={bookmarkedJobs[job.id] ? "fill-current text-gray-600" : ""} /> */}
            </button>

            <button className="bg-blue-50 cursor-pointer hover:bg-primary hover:text-white text-primary px-4 py-2 rounded-md flex items-center duration-200 transition-colors">
              Apply Now
              <FiArrowRight className="ml-2" />
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}
