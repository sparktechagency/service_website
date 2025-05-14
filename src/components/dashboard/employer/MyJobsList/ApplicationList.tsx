"use client"

const ApplicationList = () =>{
  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-6">
      {/* Breadcrumb Navigation */}
      <nav className="text-sm mb-4">
        <ol className="flex flex-wrap items-center">
          <li className="flex items-center">
            <a href="#" className="text-gray-500 hover:text-gray-700">
              Home
            </a>
            <span className="mx-2 text-gray-400">/</span>
          </li>
          <li className="flex items-center">
            <a href="#" className="text-gray-500 hover:text-gray-700">
              Job
            </a>
            <span className="mx-2 text-gray-400">/</span>
          </li>
          <li className="flex items-center">
            <a href="#" className="text-gray-500 hover:text-gray-700">
              Water Supply
            </a>
            <span className="mx-2 text-gray-400">/</span>
          </li>
          <li className="text-gray-900 font-medium">Applications</li>
        </ol>
      </nav>

      {/* Page Title */}
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Job Applications</h1>

      {/* Application Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* All Applications Section */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="flex justify-between items-center p-4 border-b">
            <h2 className="font-medium">All Application (213)</h2>
            <button className="text-gray-400 hover:text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
              </svg>
            </button>
          </div>

          <div className="divide-y">
            {/* Applicant Card - Ronald Richards */}
            <div className="p-4">
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 bg-gray-500 rounded-full flex-shrink-0"></div>
                <div>
                  <h3 className="font-medium">Ronald Richards</h3>
                  <p className="text-sm text-gray-500">Water Supply</p>
                </div>
              </div>
              <ul className="mt-4 space-y-1 text-sm">
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2">•</span>
                  <span>7 Years Experience</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2">•</span>
                  <span>Education: Master Degree</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2">•</span>
                  <span>Applied: Jan 23, 2022</span>
                </li>
              </ul>
              <button className="mt-3 text-blue-600 hover:text-blue-800 flex items-center text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
                Download CV
              </button>
            </div>

            {/* Applicant Card - Theresa Webb */}
            <div className="p-4">
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 bg-gray-500 rounded-full flex-shrink-0"></div>
                <div>
                  <h3 className="font-medium">Theresa Webb</h3>
                  <p className="text-sm text-gray-500">Water Supply</p>
                </div>
              </div>
              <ul className="mt-4 space-y-1 text-sm">
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2">•</span>
                  <span>7 Years Experience</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2">•</span>
                  <span>Education: High School Degree</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2">•</span>
                  <span>Applied: Jan 23, 2022</span>
                </li>
              </ul>
              <button className="mt-3 text-blue-600 hover:text-blue-800 flex items-center text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
                Download CV
              </button>
            </div>

            {/* Applicant Card - Devon Lane */}
            <div className="p-4">
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 bg-gray-500 rounded-full flex-shrink-0"></div>
                <div>
                  <h3 className="font-medium">Devon Lane</h3>
                  <p className="text-sm text-gray-500">Water Supply</p>
                </div>
              </div>
              <ul className="mt-4 space-y-1 text-sm">
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2">•</span>
                  <span>7 Years Experience</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2">•</span>
                  <span>Education: Master Degree</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2">•</span>
                  <span>Applied: Jan 23, 2022</span>
                </li>
              </ul>
              <button className="mt-3 text-blue-600 hover:text-blue-800 flex items-center text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
                Download CV
              </button>
            </div>

            {/* Applicant Card - Kathryn Murphy (partial) */}
            <div className="p-4">
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 bg-gray-500 rounded-full flex-shrink-0"></div>
                <div>
                  <h3 className="font-medium">Kathryn Murphy</h3>
                  <p className="text-sm text-gray-500">Water Supply</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Shortlisted Section */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="flex justify-between items-center p-4 border-b">
            <h2 className="font-medium">Shortlisted (2)</h2>
            <button className="text-gray-400 hover:text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
              </svg>
            </button>
          </div>

          <div className="divide-y">
            {/* Shortlisted Applicant - Darrell */}
            <div className="p-4">
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 bg-gray-500 rounded-full flex-shrink-0"></div>
                <div className="flex-grow">
                  <div className="flex justify-between items-start">
                    <h3 className="font-medium">Darrell</h3>
                    <div className="relative group">
                      <button className="text-red-500 hover:text-red-700 flex items-center text-sm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 mr-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                        Delete
                      </button>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500">Water Supply</p>
                </div>
              </div>
              <ul className="mt-4 space-y-1 text-sm">
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2">•</span>
                  <span>7 Years Experience</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2">•</span>
                  <span>Education: Intermediate Degree</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2">•</span>
                  <span>Applied: Jan 23, 2022</span>
                </li>
              </ul>
              <button className="mt-3 text-blue-600 hover:text-blue-800 flex items-center text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
                Download CV
              </button>
            </div>

            {/* Shortlisted Applicant - Jenny Wilson */}
            <div className="p-4">
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 bg-gray-500 rounded-full flex-shrink-0"></div>
                <div>
                  <h3 className="font-medium">Jenny Wilson</h3>
                  <p className="text-sm text-gray-500">Water Supply</p>
                </div>
              </div>
              <ul className="mt-4 space-y-1 text-sm">
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2">•</span>
                  <span>7 Years Experience</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2">•</span>
                  <span>Education: Bachelor Degree</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2">•</span>
                  <span>Applied: Jan 23, 2022</span>
                </li>
              </ul>
              <button className="mt-3 text-blue-600 hover:text-blue-800 flex items-center text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
                Download CV
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ApplicationList;
