import JobCard from "../FindWork/JobCard";
import { IFindJob } from "@/types/job.type";


type TProps = {
  jobs: IFindJob[];
};


export default function RelatedJobs({ jobs }: TProps) {
 

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          Related Jobs
        </h2>
      </div>
      <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6`}>
        {jobs?.map((job, index) => (
          <JobCard key={index} job={job} />
        ))}
      </div>
    </div>
  );
}
