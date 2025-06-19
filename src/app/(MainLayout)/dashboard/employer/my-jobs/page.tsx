"use client";

import NotFoundCard from "@/components/card/NotFoundCard";
import ServerErrorCard from "@/components/card/ServerErrorCard";
import JobsLoading from "@/components/loader/JobsLoading";
import MyJobsList from "@/components/MyJobs/MyJobsList";
import { useGetAllJobsQuery } from "@/redux/features/employer/employerApi";

const MyJobsPage = () => {
   const {data, isLoading, isError} = useGetAllJobsQuery(undefined);
  const appliedJobs = data?.data?.result || []

  if (isLoading) {
    return <JobsLoading/>
  }

  if(!isLoading && !isError && appliedJobs?.length === 0){
    return <NotFoundCard title="There is no jobs available."/>
  }

  if (!isLoading && !isError && appliedJobs?.length > 0) {
    return <MyJobsList/>
  }
  
   if(!isLoading && isError){
    return <ServerErrorCard/>
  }

};

export default MyJobsPage;
