"use client"

import { IFindJob } from "@/types/job.type"
import JobCard from "../FindWork/JobCard"

type TProps = {
  jobs: IFindJob[]
}

const FavouriteJobs = ({jobs}: TProps) => {


  return (
    <>
      <div className="flex-1 overflow-auto p-4 md:p-6 lg:p-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-xl font-medium text-gray-800">
              Favorite Jobs <span className="text-gray-500 text-sm">({jobs?.length})</span>
            </h1>
          </div>

          <div
        className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6`}
      >
        {jobs?.map((job, index) => (
          <JobCard key={index} job={job} />
        ))}
      </div>
        </div>
      </div>
    </>
  )
}

export default FavouriteJobs;
