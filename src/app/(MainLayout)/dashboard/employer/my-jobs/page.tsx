"use client";

import NotFoundCard from "@/components/card/NotFoundCard";
import ServerErrorCard from "@/components/card/ServerErrorCard";
import JobsLoading from "@/components/loader/JobsLoading";
import MyJobsList from "@/components/MyJobs/MyJobsList";
import { useGetEmployerJobsQuery } from "@/redux/features/job/jobApi";

const MyJobsPage = () => {
   const {data, isLoading, isError} = useGetEmployerJobsQuery(undefined);
  const jobs = data?.data?.result || []

  if (isLoading) {
    return <JobsLoading/>
  }

  if(!isLoading && !isError && jobs?.length === 0){
    return <NotFoundCard title="There is no jobs available."/>
  }

  if (!isLoading && !isError && jobs?.length > 0) {
    return <MyJobsList/>
  }
  
   if(!isLoading && isError){
    return <ServerErrorCard/>
  }

};

export default MyJobsPage;
