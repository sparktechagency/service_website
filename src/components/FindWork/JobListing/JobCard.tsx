



import Image from "next/image";
import { FaMapMarkerAlt } from "react-icons/fa";

export type TJob = {
  company: string;
  location: string;
  jobType: string;
  salary: string;
  featured?: boolean;
};

const JobCard = ({ job }: { job: TJob }) => {
  return (
    <>
      <div className="p-4 bg-white border border-gray-300 rounded-lg shadow-md hover:shadow-lg hover:border-gray-800 flex flex-col space-y-4 cursor-pointer duration-200">
        <div className="flex items-center gap-4">
          <div>
            <Image
              src="/images/jobs/job1.png"
              alt="job_icon"
              width={600}
              height={600}
              className="w-[45px] h-[45px] rounded-md"
            />
          </div>
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-lg text-gray-800">{job.company}</h1>
              <button className="bg-orange-100 px-2 py-0.5 text-md text-orange-700 rounded-lg">
                Featured
              </button>
            </div>
            <div className="flex items-center text-sm text-gray-400 gap-1">
              <FaMapMarkerAlt />
              <span>{job.location}</span>
            </div>
          </div>
        </div>
        <div>
          {/* title */}
          <h1 className="text-2xl font-medium text-primary">Water Supply</h1>
          <div className="text-[#636A80] flex justify-between">
            <span>{job.jobType}</span>
            <span>$50k-$60K</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobCard;
