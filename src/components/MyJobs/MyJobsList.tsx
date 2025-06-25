"use client";

import JobListItem from "./JobListItem";
import { TEmployerJob } from "@/types/job.type";

type TProps = {
  jobs: TEmployerJob[]
}

const MyJobsList = ({jobs}: TProps) => {

  return (
    <>
      {" "}
      {/* Jobs Table */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        {/* Table Header */}
        <div className="grid grid-cols-12 bg-gray-100 py-3 px-3 sm:px-4 text-xs sm:text-sm font-medium text-gray-600">
          <div className="col-span-6 md:col-span-6">JOBS</div>
          <div className="col-span-3 md:col-span-2 text-center">STATUS</div>
          {/* <div className="col-span-3 md:col-span-2 text-center">View Details</div> */}
          <div className="col-span-3 md:col-span-2 text-center hidden sm:block">
            APPLICATIONS
          </div>
          <div className="hidden md:block md:col-span-2 text-center">
            ACTIONS
          </div>
        </div>

        {/* Table Body */}
        <div className="divide-y divide-gray-200">
          {jobs?.map((job, index) => (
            <JobListItem job={job} key={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default MyJobsList;
