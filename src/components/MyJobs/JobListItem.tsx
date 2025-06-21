"use client";

import { CheckCircle, XCircle, Eye, SquarePen } from "lucide-react";
import { useRouter } from "next/navigation";
import DeleteJobModal from "@/components/modal/job/DeleteJobModal";
import { TEmployerJob } from "@/types/job.type";
import getType from "@/utils/getType";

type TProps = {
    job: TEmployerJob
}

const JobListItem = ({ job }: TProps) => {
  const router = useRouter();
  const type = getType(job?.types);

  return (
    <>
      <div
        className="grid grid-cols-12 py-3 sm:py-4 px-3 sm:px-4 text-xs sm:text-sm hover:bg-blue-50 duration-200 rounded-md"
      >
        <div className="col-span-6 md:col-span-6">
          <div className="font-medium text-gray-800 truncate">{job.title}</div>
          <div className="text-gray-500 flex flex-col sm:flex-row sm:items-center mt-1">
            <span className="text-xs sm:text-sm">{type}</span>
            <span className="hidden sm:inline mx-2">•</span>
            <span
              onClick={() => router.push(`/job-details/${job.id}`)}
              className="underline text-blue-400 cursor-pointer hover:text-blue-600"
            >
              view details
            </span>
            {/* <span className="flex items-center text-xs sm:text-sm mt-1 sm:mt-0">
                        {job.status === "Active" ? (
                          <Clock className="h-3 w-3 text-gray-400 mr-1" />
                        ) : (
                          <Clock className="h-3 w-3 text-gray-400 mr-1" />
                        )}
                        <span className="truncate">{job.timeLeft}</span>
                      </span> */}
          </div>
        </div>
        <div className="col-span-3 md:col-span-2 flex justify-center items-center">
          {job.status === "Active" ? (
            <div className="flex items-center text-green-600 text-xs sm:text-sm">
              <CheckCircle className="h-3 sm:h-4 w-3 sm:w-4 mr-1" />
              <span className="hidden xs:inline">Active</span>
            </div>
          ) : (
            <div className="flex items-center text-red-500 text-xs sm:text-sm">
              <XCircle className="h-3 sm:h-4 w-3 sm:w-4 mr-1" />
              <span className="hidden xs:inline">Expire</span>
            </div>
          )}
        </div>
        <div className="col-span-3 md:col-span-2 flex justify-center gap-1 items-center text-gray-600 text-xs sm:text-sm">
          {/* <FileText className="h-3 sm:h-4 w-3 sm:w-4 mr-1" /> */}
          <span className="hidden sm:inline">{job?.applications?.length}</span>
          <Eye
            onClick={() =>
              router.push(`/dashboard/employer/applications/${job?._id}`)
            }
            className="h-3 sm:h-4 w-3 sm:w-4 mr-1 text-blue-500 cursor-pointer"
          />
          <span className="sm:hidden">{job.applications}</span>
          <span className="sm:hidden text-xs text-blue-500 underline hover:text-blue-600">
            Applications
          </span>
        </div>
        <div className="hidden md:flex md:col-span-2 justify-center items-center gap-2">
          {/* <button
                      onClick={() => router.push(`/dashboard/employer/applications/${job.id}`)}
                      className="rounded-md bg-gray-100 hover:bg-primary border border-gray-300 hover:border-primary hover:text-white px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm font-medium text-gray-700 cursor-pointer duration-200 whitespace-nowrap"
                    >
                      View Applications                     
                    </button> */}
          <SquarePen
            onClick={() =>
              router.push(`/dashboard/employer/edit-job/${job?._id}`)
            }
            className="h-3 sm:h-4 w-3 sm:w-4 mr-1 text-green-500 cursor-pointer"
          />
          <DeleteJobModal />
        </div>
        {/* Mobile Actions - Only visible on small screens */}
        <div className="col-span-12 mt-2 flex justify-end md:hidden">
          {/* <button
                      onClick={() => router.push(`/dashboard/employer/applications/${job.id}`)}
                      className="rounded-md bg-gray-100 hover:bg-primary border border-gray-300 hover:border-primary hover:text-white px-3 py-1 text-xs font-medium text-gray-700 cursor-pointer duration-200"
                    >
                      View Applications
                    </button> */}
          <SquarePen
            onClick={() =>
              router.push(`/dashboard/employer/edit-job/${job?._id}`)
            }
            className="h-3 sm:h-4 w-3 sm:w-4 mr-1 text-green-500 cursor-pointer"
          />
          <DeleteJobModal />
        </div>
      </div>
    </>
  );
};

export default JobListItem;
