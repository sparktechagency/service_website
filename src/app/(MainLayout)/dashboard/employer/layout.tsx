import EmployerSidebar from "@/components/dashboard/employer/EmployerSidebar";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import React from "react";

type TProps = {
  children: React.ReactNode;
};
const EmployerDashboardLayout = ({ children }: TProps) => {
  return (
    <>
      <section className="flex min-h-screen flex-col md:flex-row max-w-7xl mx-auto">
        {/* Sidebar */}
        <EmployerSidebar/>
        {children}
        {/* <aside className="w-full border-r border-gray-200 bg-white md:w-64 lg:w-72">
          <div className="p-4 md:p-6">
            <h2 className="mb-6 text-xs font-semibold uppercase tracking-wider text-gray-500">
              Candidate Dashboard
            </h2>
            <nav className="space-y-1">
              <a
                href="#"
                className="flex items-center space-x-3 rounded-md bg-blue-50 px-3 py-2 text-sm font-medium text-blue-700"
              >
                <BriefcaseIcon className="h-5 w-5 text-blue-700" />
                <span>Overview</span>
              </a>
              <a
                href="#"
                className="flex items-center space-x-3 rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50"
              >
                <svg
                  className="h-5 w-5 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
                <span>Applied Jobs</span>
              </a>
              <a
                href="#"
                className="flex items-center space-x-3 rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50"
              >
                <Bookmark className="h-5 w-5 text-gray-500" />
                <span>Favorite Jobs</span>
              </a>
              <a
                href="#"
                className="flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50"
              >
                <div className="flex items-center space-x-3">
                  <Bell className="h-5 w-5 text-gray-500" />
                  <span>Job Alert</span>
                </div>
                <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-600">
                  09
                </span>
              </a>
              <a
                href="#"
                className="flex items-center space-x-3 rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50"
              >
                <Settings className="h-5 w-5 text-gray-500" />
                <span>Settings</span>
              </a>
            </nav>
          </div>
          {/* <div className="mt-auto p-4">
          <button className="flex w-full items-center space-x-2 rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50">
            <LogOut className="h-5 w-5 text-gray-500" />
            <span>Log-out</span>
          </button>
        </div> */}
        {/* </aside> */} 

        {/* Main Content */}
        {/* <main className="flex-1 overflow-auto"> */}
          {/* <div className="mx-auto max-w-5xl p-4 md:p-6 lg:p-8"> */}
           

            {/* Footer */}
            {/* <footer className="mt-12 text-center text-xs text-gray-500">
              © 2024 Tradeez - Job Portal. All rights Reserved
            </footer>
          </div>
        </main> */}

      </section>
    </>
  );
};

export default EmployerDashboardLayout;
