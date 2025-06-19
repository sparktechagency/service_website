"use client";

import CandidateOverview from "@/components/CandidateOverview/CandidateOverview";
import ServerErrorCard from "@/components/card/ServerErrorCard";
import OverviewLoading from "@/components/loader/OverviewLoading";
import { useGetCandidateOverviewQuery } from "@/redux/features/candidate/candidateApi";
import { useAppSelector } from "@/redux/hooks/hooks";


const CandidateOverviewPage = () => {
 const { overview } = useAppSelector((state) => state.candidate);
 const { isLoading, isError} = useGetCandidateOverviewQuery(undefined);

  if (isLoading) {
    return <OverviewLoading/>
  }

  if (!isLoading && overview) {
    return <CandidateOverview/>
  }
  
   if(!isLoading && isError){
    return <ServerErrorCard/>
  }
};

export default CandidateOverviewPage;
