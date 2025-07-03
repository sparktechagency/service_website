"use client";

import NotFoundCard from "@/components/card/NotFoundCard";
import ServerErrorCard from "@/components/card/ServerErrorCard";
import JobsLoading from "@/components/loader/JobsLoading";
import MyJobsList from "@/components/MyJobs/MyJobsList";
import Pagination from "@/components/ui/Pagination";
import { useGetEmployerJobsQuery } from "@/redux/features/job/jobApi";
import { ChevronDown } from "lucide-react";
import React, { useState } from "react";

const MyJobsPage = () => {
  const [status, setStatus] = useState("");
  const [ currentPage, setCurrentPage ] = useState<number>(1);
  //const [ pageSize, setPageSize ] = useState<number>(5);
  const { data, isLoading, isError } = useGetEmployerJobsQuery(
    status === ""
      ? [
          { name: "page", value: currentPage },
          { name: "limit", value: 2 },
        ]
      : [
          { name: "page", value: currentPage },
          { name: "limit", value: 2 },
          { name: "status", value: status },
        ]
  );
  const jobs = data?.data?.result || [];
  const meta = data?.data?.meta || {};

  let content: React.ReactNode;

      
  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  

  if (isLoading) {
    return <JobsLoading/>
  }

  if(!isLoading && !isError && jobs?.length === 0){
    content = <NotFoundCard title="There is no jobs available."/>
  }

  if (!isLoading && !isError && jobs?.length > 0) {
    content = (
      <>
        <MyJobsList jobs={jobs}/>
         {meta?.total != 0 && (
            <Pagination
              currentPage={currentPage}
              totalPages={meta?.totalPage}
              onPageChange={handlePageChange}
            />
          )}
      </>
    )
  }
  
   if(!isLoading && isError){
    content = <ServerErrorCard/>
  }



  
  return (
    <>
      {/* Main Content */}
      <div className="flex-1 overflow-auto p-3 sm:p-4 md:p-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 md:mb-6">
            <h1 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 md:mb-0">
              My Jobs <span className="text-gray-500 font-normal">({meta?.total})</span>
            </h1>
            <div className="flex items-center">
              <span className="text-xs sm:text-sm text-gray-600 mr-2">
                Job status
              </span>
              <div className="relative">
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  className="appearance-none bg-white border border-gray-300 rounded-md pl-2 sm:pl-3 pr-8 sm:pr-10 py-1.5 sm:py-2 text-xs sm:text-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500"
                >
                  <option value="">All Jobs</option>
                  <option value="Active">Active Jobs</option>
                  <option value="Expire">Expired Jobs</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <ChevronDown className="h-3 sm:h-4 w-3 sm:w-4 text-gray-500" />
                </div>
              </div>
            </div>
          </div>

          {content}
        </div>
      </div>
    </>
  );

};

export default MyJobsPage;
