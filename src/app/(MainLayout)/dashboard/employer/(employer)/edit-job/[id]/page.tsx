"use client";

import NotFoundCard from "@/components/card/NotFoundCard";
import ServerErrorCard from "@/components/card/ServerErrorCard";
import EditJobForm from "@/components/EditJobForm/EditJobForm";
import PostJobLoading from "@/components/loader/PostJobLoading";
import { useGetSingleJobQuery } from "@/redux/features/job/jobApi";
import { useParams } from "next/navigation";


const EditJobPage = () => {
  const params = useParams<{ id: string; }>()
  const { data, isLoading,isFetching, isError } = useGetSingleJobQuery(params.id);

  if(isLoading || isFetching){
    return <PostJobLoading/>
  }

  if(!isLoading && isError){
    return <ServerErrorCard/>
  }


  if(!isLoading && !isError && data?.data?.jobDetails?.title){
    return <EditJobForm job={data?.data?.jobDetails}/>
  }
 
  if(!isLoading && !isError && !data?.data?.userDetails?.name){
    return <NotFoundCard title="Job Not Found"/>
  }

}

export default EditJobPage