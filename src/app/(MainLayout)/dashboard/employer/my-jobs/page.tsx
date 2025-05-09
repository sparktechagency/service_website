/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import { useState } from "react"
import {
  FileText,
  ChevronDown,
  MoreVertical,
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  XCircle,
  Eye,
  Award,
  Clock,
} from "lucide-react"

const MyJobsPage = () => {
  //const [activeMenu, setActiveMenu] = useState("my-jobs")
  const [activeDropdown, setActiveDropdown] = useState(4)
  const [activePage, setActivePage] = useState(1)
  const [filterValue, setFilterValue] = useState("All Jobs")

  const jobs = [
    {
      id: 1,
      title: "Water Supply",
      type: "Full Time",
      timeLeft: "27 days remaining",
      status: "Active",
      applications: 798,
    },
    {
      id: 2,
      title: "Water Supply",
      type: "Internship",
      timeLeft: "8 days remaining",
      status: "Active",
      applications: 185,
    },
    {
      id: 3,
      title: "Water Supply",
      type: "Full Time",
      timeLeft: "24 days remaining",
      status: "Active",
      applications: 583,
    },
    { id: 4, title: "Water Supply", type: "Full Time", timeLeft: "Dec 7, 2019", status: "Expire", applications: 740 },
    {
      id: 5,
      title: "Water Supply",
      type: "Part Time",
      timeLeft: "4 days remaining",
      status: "Active",
      applications: 556,
    },
    {
      id: 6,
      title: "Water Supply",
      type: "Contract Base",
      timeLeft: "Feb 2, 2019",
      status: "Expire",
      applications: 426,
    },
    {
      id: 7,
      title: "Water Supply",
      type: "Temporary",
      timeLeft: "9 days remaining",
      status: "Active",
      applications: 922,
    },
    {
      id: 8,
      title: "Water Supply",
      type: "Full Time",
      timeLeft: "7 days remaining",
      status: "Active",
      applications: 994,
    },
    { id: 9, title: "Water Supply", type: "Full Time", timeLeft: "Dec 4, 2019", status: "Expire", applications: 196 },
    {
      id: 10,
      title: "Water Supply",
      type: "Full Time",
      timeLeft: "4 days remaining",
      status: "Active",
      applications: 492,
    },
  ]


  const toggleDropdown = (id:number) => {
    // if (activeDropdown === id) {
    //   setActiveDropdown(null)
    // } else {
    //   setActiveDropdown(id)
    // }
  }

  return (
    <>
       {/* Main Content */}
       <div className="flex-1 p-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <h1 className="text-xl font-bold text-gray-800 mb-4 md:mb-0">
              My Jobs <span className="text-gray-500 font-normal">(589)</span>
            </h1>
            <div className="flex items-center">
              <span className="text-sm text-gray-600 mr-2">Job status</span>
              <div className="relative">
                <select
                  value={filterValue}
                  onChange={(e) => setFilterValue(e.target.value)}
                  className="appearance-none bg-white border border-gray-300 rounded-md pl-3 pr-10 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option>All Jobs</option>
                  <option>Active Jobs</option>
                  <option>Expired Jobs</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <ChevronDown className="h-4 w-4 text-gray-500" />
                </div>
              </div>
            </div>
          </div>

          {/* Jobs Table */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-12 bg-gray-100 py-3 px-4 text-sm font-medium text-gray-600">
              <div className="col-span-5 md:col-span-6">JOBS</div>
              <div className="col-span-3 md:col-span-2 text-center">STATUS</div>
              <div className="col-span-3 md:col-span-2 text-center">APPLICATIONS</div>
              <div className="col-span-1 md:col-span-2 text-center">ACTIONS</div>
            </div>

            {/* Table Body */}
            <div className="divide-y divide-gray-200">
              {jobs.map((job) => (
                <div
                  key={job.id}
                  className={`grid grid-cols-12 py-4 px-4 text-sm ${job.id === 5 ? "border border-blue-200 bg-blue-50 rounded-md" : ""}`}
                >
                  <div className="col-span-5 md:col-span-6">
                    <div className="font-medium text-gray-800">{job.title}</div>
                    <div className="text-gray-500 flex flex-col sm:flex-row sm:items-center mt-1">
                      <span>{job.type}</span>
                      <span className="hidden sm:inline mx-2">•</span>
                      <span className="flex items-center mt-1 sm:mt-0">
                        {job.status === "Active" ? (
                          <Clock className="h-3 w-3 text-gray-400 mr-1" />
                        ) : (
                          <Clock className="h-3 w-3 text-gray-400 mr-1" />
                        )}
                        {job.timeLeft}
                      </span>
                    </div>
                  </div>
                  <div className="col-span-3 md:col-span-2 flex justify-center items-center">
                    {job.status === "Active" ? (
                      <div className="flex items-center text-green-600">
                        <CheckCircle className="h-4 w-4 mr-1" />
                        <span>Active</span>
                      </div>
                    ) : (
                      <div className="flex items-center text-red-500">
                        <XCircle className="h-4 w-4 mr-1" />
                        <span>Expire</span>
                      </div>
                    )}
                  </div>
                  <div className="col-span-3 md:col-span-2 flex justify-center items-center text-gray-600">
                    <FileText className="h-4 w-4 mr-1" />
                    <span>{job.applications} Applications</span>
                  </div>
                  <div className="col-span-1 md:col-span-2 flex justify-end md:justify-center items-center relative">
                    <button className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-md text-xs font-medium hidden md:block">
                      View Applications
                    </button>
                    <button
                      className="text-gray-500 hover:text-gray-700 p-1 rounded-full hover:bg-gray-100"
                      onClick={() => toggleDropdown(job.id)}
                    >
                      <MoreVertical className="h-5 w-5" />
                    </button>

                    {/* Dropdown Menu */}
                    {activeDropdown === job.id && (
                      <div className="absolute right-0 top-8 z-10 w-48 bg-white rounded-md shadow-lg border border-gray-200">
                        <div className="py-1">
                          <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                            <Award className="h-4 w-4 mr-2 text-blue-600" />
                            Promote Job
                          </button>
                          <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                            <Eye className="h-4 w-4 mr-2 text-blue-600" />
                            View Detail
                          </button>
                          <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                            <Clock className="h-4 w-4 mr-2 text-blue-600" />
                            Make it Expire
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center py-4 border-t border-gray-200">
              <button className="p-2 rounded-full hover:bg-gray-100">
                <ChevronLeft className="h-5 w-5 text-gray-500" />
              </button>
              {[1, 2, 3, 4, 5].map((page) => (
                <button
                  key={page}
                  className={`w-8 h-8 mx-1 rounded-full flex items-center justify-center text-sm ${
                    activePage === page ? "bg-blue-800 text-white" : "text-gray-600 hover:bg-gray-100"
                  }`}
                  onClick={() => setActivePage(page)}
                >
                  {page.toString().padStart(2, "0")}
                </button>
              ))}
              <button className="p-2 rounded-full hover:bg-gray-100">
                <ChevronRight className="h-5 w-5 text-gray-500" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MyJobsPage;
