"use client";

import ServerErrorCard from "@/components/card/ServerErrorCard";
import EmployerOverview from "@/components/EmployerOverview/EmployerOverview";
import OverviewLoading from "@/components/loader/OverviewLoading";
import { useGetEmployerOverviewQuery } from "@/redux/features/employer/employerApi";
import { useGetRecentPostedJobsQuery } from "@/redux/features/job/jobApi";
import { useAppSelector } from "@/redux/hooks/hooks";


const EmployerOverviewPage = () => {
  const { overview } = useAppSelector((state) => state.candidate);
  const { isLoading, isError} = useGetEmployerOverviewQuery(undefined);
  const { data, isLoading:jobLoading, isError:jobError } = useGetRecentPostedJobsQuery([
    { name: "page", value: 1 },
    { name: "limit", value: 4 },
  ]);

  if (isLoading || jobLoading) {
    return <OverviewLoading/>
  }

  if (!isLoading && overview && data) {
    return <EmployerOverview/>
  }
  
   if(!isLoading && !jobLoading && (isError || jobError)){
    return <ServerErrorCard/>
  }
}

export default EmployerOverviewPage;