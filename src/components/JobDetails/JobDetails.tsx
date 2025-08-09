"use client";

import RelatedJobs from "@/components/RelatedJobs/RelatedJobs";
import { useGetSingleFindJobQuery } from "@/redux/features/job/jobApi";
import FindJobLoading from "@/components/loader/FindJobLoading";
import ServerErrorCard from "@/components/card/ServerErrorCard";
import NotFoundCard from "@/components/card/NotFoundCard";
import SingleJob from "@/components/SingleJob/SingleJob";

type TProps = {
    id: string
}

const JobDetails = ({ id }: TProps) => {
  const { data, isLoading, isError } = useGetSingleFindJobQuery(id);

  if (isLoading) {
    return <FindJobLoading />;
  }

  if (!isLoading && isError) {
    return <ServerErrorCard />;
  }

  if (!isLoading && !isError && data?.data?.jobDetails?.title) {
    return (
      <>
        <SingleJob job={data?.data?.jobDetails} />
        {data?.data?.relatedJobs?.length > 0 && (
          <RelatedJobs jobs={data?.data?.relatedJobs} />
        )}
      </>
    );
  }

  return <NotFoundCard title="Job Not Found" />;
}


export default JobDetails;