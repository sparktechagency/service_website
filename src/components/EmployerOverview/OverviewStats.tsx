"use client";

import { useAppSelector } from "@/redux/hooks/hooks";
import { Bookmark, BriefcaseIcon } from "lucide-react";

const OverviewStats = () => {
  const { overview } = useAppSelector((state) => state.employer);

  return (
    <>
      <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2">
        <div className="flex items-center justify-between rounded-lg bg-blue-50 p-4">
          <div>
            <div className="text-2xl font-bold text-gray-900">{overview?.totalJobs}</div>
            <div className="text-sm text-gray-500">Total jobs</div>
          </div>
          <div className="rounded-md bg-white p-3 shadow-sm">
            <BriefcaseIcon className="h-6 w-6 text-blue-600" />
          </div>
        </div>
        <div className="flex items-center justify-between rounded-lg bg-amber-50 p-4">
          <div>
            <div className="text-2xl font-bold text-gray-900">{overview?.totalApplications}</div>
            <div className="text-sm text-gray-500">Applications</div>
          </div>
          <div className="rounded-md bg-white p-3 shadow-sm">
            <Bookmark className="h-6 w-6 text-amber-500" />
          </div>
        </div>
      </div>
    </>
  );
};

export default OverviewStats;
