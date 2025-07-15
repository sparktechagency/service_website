"use client";

import NotFoundCard from "@/components/card/NotFoundCard";
import FindWorkList from "@/components/FindWork/FindWorkList";
import FindWorkLoading from "@/components/loader/FindWorkLoading";
import { useSearchJobsQuery } from "@/redux/features/job/jobApi";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Pagination from "../ui/Pagination";

const FindWork = () => {
  const searchParams = useSearchParams();

  const [searchQuery, setSearchQuery] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [currentPage, setCurrentPage] = useState<number>(1);

  const { data, isLoading, isError } = useSearchJobsQuery([
    { name: "searchTrams", value: searchQuery },
    { name: "location", value: location },
    { name: "postalCode", value: postalCode },
    { name: "page", value: currentPage },
    { name: "limit", value: 9 },
  ]);

  const jobs = data?.data?.jobs || [];
  const meta = data?.data?.meta || {};

  useEffect(() => {
    const initialSearchTerm = searchParams.get("searchTerm");
    const initialLocation = searchParams.get("location");
    const initialPostalCode = searchParams.get("postalCode");

    if (initialSearchTerm) setSearchTerm(initialSearchTerm);
    if (initialLocation) setLocation(initialLocation);
    if (initialPostalCode) setPostalCode(initialPostalCode);
  }, [searchParams]);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchQuery(searchTerm);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div>
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold">
              Find a job that works for you
            </h1>
            <div className="hidden md:flex items-center gap-2 text-sm text-gray-500">
              <span>Home</span>
              <span>/</span>
              <span>Find jobs</span>
            </div>
          </div>

          {/* Search Form */}
          <div className="w-full">
            <form
              onSubmit={handleSearch}
              className="flex flex-col md:flex-row md:flex-wrap gap-3 bg-white p-4 rounded-lg shadow-sm"
            >
              {/* Job Title */}
              <div className="w-full md:flex-1">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search by job title, skills, keywords"
                  className="w-full h-12 px-4 text-sm text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 transition-all"
                  required
                />
              </div>

              {/* Location */}
              <div className="w-full md:w-[200px]">
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Location"
                  className="w-full h-12 px-4 text-sm text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 transition-all"
                  required
                />
              </div>

              {/* Postal Code */}
              <div className="w-full md:w-[160px]">
                <input
                  type="text"
                  value={postalCode}
                  onChange={(e) => setPostalCode(e.target.value)}
                  placeholder="Postal code"
                  className="w-full h-12 px-4 text-sm text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 transition-all"
                  required
                />
              </div>

              {/* Submit */}
              <div className="w-full md:w-auto">
                <button
                  type="submit"
                  className="w-full h-12 px-6 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-md shadow-sm transition-colors"
                >
                  Find Job
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Job Results */}
      {isLoading ? (
        <FindWorkLoading />
      ) : isError ? (
        <h1 className="text-center text-red-500 py-10">
          Something went wrong.
        </h1>
      ) : jobs?.length > 0 ? (
        <>
          <FindWorkList jobs={jobs} />
          {meta?.totalPages > 1 && (
            <div className="pb-8">
              <Pagination
                currentPage={currentPage}
                totalPages={meta?.totalPages}
                onPageChange={handlePageChange}
              />
            </div>
          )}
        </>
      ) : (
        <NotFoundCard title="There are no jobs available." />
      )}
    </>
  );
};

export default FindWork;
