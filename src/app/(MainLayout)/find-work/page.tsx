"use client"

import FilterWithDropdown from "@/components/FindWork/JobListing/FilterWithDropdown"
import JobListings from "@/components/FindWork/JobListing/JobListings"
import SearchForm from "@/components/FindWork/SearchForm"

const FindWorkPage = () => {
  return (
    <>
      <SearchForm/>
      <FilterWithDropdown/>
      <JobListings/>
    </>
  )
}

export default FindWorkPage