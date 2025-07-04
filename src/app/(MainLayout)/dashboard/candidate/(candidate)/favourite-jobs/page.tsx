"use client"

import NotFoundCard from "@/components/card/NotFoundCard";
import ServerErrorCard from "@/components/card/ServerErrorCard";
import FavouriteJobs from "@/components/FavouriteJobs/FavouriteJobs";
import AppliedLoading from "@/components/loader/AppliedLoading";
import { useGetFavouriteJobsQuery } from "@/redux/features/job/jobApi";



const FavouriteJobsPage = () => {
  const {data, isLoading, isError} = useGetFavouriteJobsQuery(undefined);
  const favouriteJobs = data?.data?.jobs || [];

  if (isLoading) {
    return <AppliedLoading/>
  }

  if(!isLoading && !isError && favouriteJobs?.length === 0){
    return <NotFoundCard title="There are no favourite jobs"/>
  }

  if (!isLoading && !isError && favouriteJobs?.length > 0) {
    return <FavouriteJobs jobs={favouriteJobs}/>
  }
  
   if(!isLoading && isError){
    return <ServerErrorCard/>
  }
}

export default FavouriteJobsPage;
