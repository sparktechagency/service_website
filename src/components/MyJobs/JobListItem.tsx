"use client";

import {
  Eye,
  SquarePen,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { TEmployerJob } from "@/types/job.type";
import getType from "@/utils/getType";
import { ErrorToast } from "@/helper/ValidationHelper";
import EditJobStatusModal from "../modal/job/EditJobStatusModal";

type TProps = {
  job: TEmployerJob;
};

const JobListItem = ({ job }: TProps) => {
  const router = useRouter();
  const type = getType(job?.types);

  return (
    <>
      <div className="grid grid-cols-12 py-3 sm:py-4 px-3 sm:px-4 text-xs sm:text-sm hover:bg-blue-50 duration-200 rounded-md">
        <div className="col-span-6 md:col-span-6">
          <div className="font-medium text-gray-800 truncate">{job.title}</div>
          <div className="text-gray-500 flex flex-col sm:flex-row sm:items-center mt-1">
            <span className="text-xs sm:text-sm">{type}</span>
            <span className="hidden sm:inline mx-2">•</span>
            <span
              onClick={() => router.push(`/job-details/${job._id}`)}
              className="underline text-blue-400 cursor-pointer hover:text-blue-600"
            >
              view details
            </span>
          </div>
        </div>
        <div className="col-span-3 md:col-span-2 flex justify-center items-center">
          {job.status === "Active" ? (
            <div className="flex items-center text-green-600 text-xs sm:text-sm">
              <span className="text-sm font-medium">Active</span>
            </div>
          ) : (
            <div className="flex items-center text-red-500 text-xs sm:text-sm">
              <span className="text-sm font-medium">Expired</span>
            </div>
          )}
         <EditJobStatusModal jobId={job?._id} status={job?.status}/>
        </div>
        <div className="col-span-3 md:col-span-2 flex justify-center gap-1 items-center text-gray-600 text-xs sm:text-sm">
          {/* <FileText className="h-3 sm:h-4 w-3 sm:w-4 mr-1" /> */}
          <span className="hidden sm:inline">{job?.applications?.length}</span>
          <Eye
            onClick={() => {
              if (job?.applications?.length === 0) {
                ErrorToast("There is no applications");
              } else {
                router.push(`/dashboard/employer/applications/${job?._id}`);
              }
            }}
            className="h-3 sm:h-4 w-3 sm:w-4 mr-1 text-blue-500 cursor-pointer"
          />
          <span className="sm:hidden">{job.applications?.length}</span>
          <span className="sm:hidden text-xs text-blue-500 underline hover:text-blue-600">
            Applications
          </span>
        </div>
        <div className="hidden md:flex md:col-span-2 justify-center items-center gap-2">
          <SquarePen
            onClick={() =>
              router.push(`/dashboard/employer/edit-job/${job?._id}`)
            }
            className="h-3 sm:h-4 w-3 sm:w-4 mr-1 text-green-500 cursor-pointer"
          />
        </div>
        {/* Mobile Actions - Only visible on small screens */}
        <div className="col-span-12 mt-2 flex justify-end md:hidden">
          <SquarePen
            onClick={() =>
              router.push(`/dashboard/employer/edit-job/${job?._id}`)
            }
            className="h-3 sm:h-4 w-3 sm:w-4 mr-1 text-green-500 cursor-pointer"
          />  
        </div>
      </div>
    </>
  );
};

export default JobListItem;
