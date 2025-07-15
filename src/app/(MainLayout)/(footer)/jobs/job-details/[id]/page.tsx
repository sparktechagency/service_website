"use client";

import RelatedJobs from "@/components/RelatedJobs/RelatedJobs";
import { useParams } from "next/navigation";
import { useGetSingleFindJobQuery } from "@/redux/features/job/jobApi";
import FindJobLoading from "@/components/loader/FindJobLoading";
import ServerErrorCard from "@/components/card/ServerErrorCard";
import NotFoundCard from "@/components/card/NotFoundCard";
import SingleJob from "@/components/SingleJob/SingleJob";

// Removed useGetMeQuery

export default function JobDetailsPage() {
  const params = useParams<{ id: string }>();
  const { data, isLoading, isError } = useGetSingleFindJobQuery(params.id);

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
