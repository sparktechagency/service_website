"use client";

import AppliedJobs from "@/components/AppliedJobs/AppliedJobs";
import NotFoundCard from "@/components/card/NotFoundCard";
import ServerErrorCard from "@/components/card/ServerErrorCard";
import AppliedLoading from "@/components/loader/AppliedLoading";
import { useGetAppliedJobsQuery } from "@/redux/features/job/jobApi";



const AppliedJobsPage = () => {
  const {data, isLoading, isError} = useGetAppliedJobsQuery(undefined);
  const appliedJobs = data?.data?.result || []

  if (isLoading) {
    return <AppliedLoading/>
  }

  if(!isLoading && !isError && appliedJobs?.length === 0){
    return <NotFoundCard title="There is applied jobs"/>
  }

  if (!isLoading && !isError && appliedJobs?.length > 0) {
    return <AppliedJobs jobs={appliedJobs}/>
  }
  
   if(!isLoading && isError){
    return <ServerErrorCard/>
  }


};

export default AppliedJobsPage;
