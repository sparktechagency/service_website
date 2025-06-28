"use client";

import { useParams } from "next/navigation";
import { useGetSingleJobQuery } from "@/redux/features/job/jobApi";
import FindJobLoading from "@/components/loader/FindJobLoading";
import ServerErrorCard from "@/components/card/ServerErrorCard";
import NotFoundCard from "@/components/card/NotFoundCard";
import EmployerSimpleJob from "@/components/SingleJob/EmployerSimpleJob";

export default function JobDetailsPage() {
  const params = useParams<{ id: string }>();
  const { data, isLoading, isError } = useGetSingleJobQuery(params.id);

  if (isLoading) {
    return <FindJobLoading />;
  }

  if (!isLoading && isError) {
    return <ServerErrorCard />;
  }

  if (!isLoading && !isError && data?.data?.jobDetails?.title) {
    return (
      <>
        <EmployerSimpleJob job={data?.data?.jobDetails} />
      </>
    );
  }

  if (!isLoading && !isError && !data?.data?.jobDetails?.title) {
    return <NotFoundCard title="Job Not Found" />;
  }
}
