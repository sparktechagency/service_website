import React from "react";
import { MapPin, Clock } from "lucide-react";
import { useRouter } from "next/navigation";
import { TAppliedJob } from "@/types/job.type";
import useUserInfo from "@/hooks/useUserInfo";
import getDaysRemaining from "@/utils/getDaysRemaining";
import FavouriteCard from "../FindWork/FavouriteCard";
import CategoryBadge from "../FindWork/CategoryBadge";

type TProps = {
  job: TAppliedJob;
};

const AppliedJobCard: React.FC<TProps> = ({ job }) => {
  const router = useRouter();
  const userInfo = useUserInfo();

  const daysRemaining = getDaysRemaining(job?.jobId?.application_dateline);

  return (
    <div className="bg-white rounded-lg shadow-md transition-all duration-300 hover:shadow-lg border border-gray-100 overflow-hidden flex flex-col h-full">
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-3">
          <h2 className="text-lg font-semibold text-gray-800 line-clamp-2">
            {job?.jobId?.title}
          </h2>
          {userInfo?.authId && userInfo?.role === "USER" && (
            <FavouriteCard jobId={job?.jobId?._id} />
          )}
        </div>

        <div className="flex items-center text-gray-600 mt-1 mb-2">
          <MapPin size={16} className="mr-1 text-gray-400" />
          <span className="text-sm">{job?.jobId?.address}</span>
        </div>

        <div className="text-gray-800 font-medium mt-1 mb-2">
          vacancy: {job?.jobId?.vacancies}
        </div>

        <div className="flex items-center justify-between text-sm text-gray-500 mt-auto">
          <div className="flex items-center text-sm">
            <Clock size={16} className="mr-1 text-gray-400" />
            <span>
              {daysRemaining > 0
                ? `${daysRemaining} days remaining`
                : "Deadline passed"}
            </span>
          </div>
          <CategoryBadge category={job?.jobId?.category?.category} />
        </div>
      </div>

      <div className="p-4 border-t border-gray-100 bg-gray-50">
        <button
          onClick={() => router.push(`/jobs/job-details/${job?.jobId?._id}`)}
          className="w-full py-2 px-4 bg-gray-900 hover:bg-gray-800 cursor-pointer text-white text-sm font-medium rounded-md transition-colors duration-300 focus:outline-none"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default AppliedJobCard;
