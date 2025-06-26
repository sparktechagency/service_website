"use client"

import FindWorkList from "@/components/FindWork/FindWorkList";
//import dynamic from "next/dynamic"
import SearchForm from "@/components/FindWork/SearchForm";

const FindWorkPage = () => {

    // Lazy load the heavy component
// const HeavyComponent = dynamic(() => import("@/components/FindWork/JobListing/JobListings"), {
//   loading: () => <div className="p-4 animate-pulse bg-gray-200 rounded">Loading...</div>,
//   ssr: false,
// })


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


      <FindWorkList />
    </>
  );
}

export default FindWorkPage