/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { Dispatch, SetStateAction, useState } from "react";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import DeleteJobModal from "@/components/modal/job/DeleteJobModal";
import JobListItem from "./JobListItem";
import { TEmployerJob } from "@/types/job.type";

type TProps = {
  jobs: TEmployerJob[]
}

const MyJobsList = ({jobs}: TProps) => {
  const [activeDropdown, setActiveDropdown] = useState(4);
  const [activePage, setActivePage] = useState(1);
  const router = useRouter();


  const toggleDropdown = (id: number) => {
    // if (activeDropdown === id) {
    //   setActiveDropdown(null)
    // } else {
    //   setActiveDropdown(id)
    // }
  };

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
