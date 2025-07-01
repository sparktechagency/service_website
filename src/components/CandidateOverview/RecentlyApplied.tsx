"use client";

import { useAppSelector } from "@/redux/hooks/hooks";
import { ChevronRight } from "lucide-react";
import AppliedJobCard from "../AppliedJobs/AppliedJobCard";

const RecentlyApplied = () => {
  const { recentAppliedJobs } = useAppSelector((state) => state.job);



  return (
    <>
      <div className="mb-6">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-medium text-gray-900">
            Recently Applied
          </h2>
          <a
            href="#"
            className="flex items-center text-sm font-medium text-gray-500 hover:text-gray-700"
          >
            View all
            <ChevronRight className="ml-1 h-4 w-4" />
          </a>
        </div>

        <div
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6`}
          >
            {recentAppliedJobs?.map((job, index) => (
              <AppliedJobCard key={index} job={job} />
            ))}
          </div>
      </div>
    </>
  );
};

export default RecentlyApplied;
