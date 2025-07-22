"use client";

import { useAppSelector } from "@/redux/hooks/hooks";
import { ChevronRight } from "lucide-react";
import JobListItem from "../MyJobs/JobListItem";
import NotFoundCard from "../card/NotFoundCard";
import Link from "next/link";

const RecentPostedJobs = () => {
  const { recentJobs } = useAppSelector((state) => state.job);

  return (
    <>
      <div className="mb-6">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-medium text-gray-900">
            Recently Posted Jobs
          </h2>
          <Link
            href="/dashboard/employer/my-jobs"
            className="flex items-center text-sm font-medium text-gray-500 hover:text-gray-700"
          >
            View all
            <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </div>

        <div className="overflow-hidden rounded-lg border border-gray-200 bg-white">
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

          {recentJobs?.length > 0 ? (
            <>
              {/* Table Body */}
              <div className="divide-y divide-gray-200">
                {recentJobs?.map((job, index) => (
                  <JobListItem job={job} key={index} />
                ))}
              </div>
            </>
          ) : (
            <>
              <NotFoundCard title="There are no recent posted jobs." />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default RecentPostedJobs;
