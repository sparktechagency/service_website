"use client";

import ServerErrorCard from "@/components/card/ServerErrorCard";
import EmployerOverview from "@/components/EmployerOverview/EmployerOverview";
import OverviewLoading from "@/components/loader/OverviewLoading";
import { useGetEmployerOverviewQuery } from "@/redux/features/employer/employerApi";
import { useAppSelector } from "@/redux/hooks/hooks";


const EmployerOverviewPage = () => {
  const { overview } = useAppSelector((state) => state.candidate);
 const { isLoading, isError} = useGetEmployerOverviewQuery(undefined);

  if (isLoading) {
    return <OverviewLoading/>
  }

  if (!isLoading && overview) {
    return <EmployerOverview/>
  }
  
   if(!isLoading && isError){
    return <ServerErrorCard/>
  }
}

export default EmployerOverviewPage;