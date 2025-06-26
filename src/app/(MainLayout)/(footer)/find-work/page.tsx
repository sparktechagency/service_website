"use client";

import NotFoundCard from "@/components/card/NotFoundCard";
import ServerErrorCard from "@/components/card/ServerErrorCard";
import FindWorkList from "@/components/FindWork/FindWorkList";
//import dynamic from "next/dynamic"
import SearchForm from "@/components/FindWork/SearchForm";
import FindWorkLoading from "@/components/loader/FindWorkLoading";
import { useSearchJobsQuery } from "@/redux/features/job/jobApi";
import React from "react";

const FindWorkPage = () => {
  // Lazy load the heavy component
  // const HeavyComponent = dynamic(() => import("@/components/FindWork/JobListing/JobListings"), {
  //   loading: () => <div className="p-4 animate-pulse bg-gray-200 rounded">Loading...</div>,
  //   ssr: false,
  // })

  const { data, isLoading, isError } = useSearchJobsQuery(undefined);
  const jobs = data?.data?.jobs || [];

  
  return (
    <>
      <div className="">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">
              Find a job that works for you
            </h1>
            <div className="flex items-center gap-2 text-sm">
              <span>Home</span>
              <span>/</span>
              <span>Find jobs</span>
            </div>
          </div>

          <SearchForm />
        </div>
      </div>

      {isLoading ? (
        <>
          <FindWorkLoading />
        </>
      ) : (
        <>
          {!isLoading && isError ? (
            <ServerErrorCard />
          ) : (
            <>
              {jobs?.length > 0 ? (
                <>
                  <FindWorkList jobs={jobs}/>

                  {/* {meta?.totalPages > 1 && (
                      <Pagination
                        currentPage={currentPage}
                        totalPages={meta?.totalPages}
                        onPageChange={handlePageChange}
                      />
                    )} */}
                </>
              ) : (
                <NotFoundCard title="There is no jobs available." />
              )}
            </>
          )}
        </>
      )}

      {/* <FindWorkList /> */}
    </>
  );
};

export default FindWorkPage;
