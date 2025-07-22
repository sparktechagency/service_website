"use client";
import NotFoundCard from "@/components/card/NotFoundCard";
import ServerErrorCard from "@/components/card/ServerErrorCard";
import ApplicationList from "@/components/dashboard/employer/applications/ApplicationList"
import ApplicationLoading from "@/components/loader/ApplicationLoading";
import Pagination from "@/components/ui/Pagination";
import { useGetApplicationsQuery } from "@/redux/features/job/jobApi";
import { useParams } from "next/navigation";
import { useState } from "react";

const ApplicationsPage = () => {
  const params = useParams<{ id: string }>();
  const [ currentPage, setCurrentPage ] = useState<number>(1);
  const { data, isLoading, isError } = useGetApplicationsQuery({
    args: [
        { name: "page", value: currentPage },
        { name: "limit", value: 8 },
    ],
    jobId: params.id,
  });
  const applications = data?.data?.result || [];
  const meta = data?.data?.meta || {};

  let content: React.ReactNode;
  
        
    // Handle page change
    const handlePageChange = (page: number) => {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  
  if(isLoading) {
      return <ApplicationLoading />;
  }

    if(!isLoading && !isError && applications?.length === 0){
    content = <NotFoundCard title="There are no applications available."/>
  }

  if (!isLoading && !isError && applications?.length > 0) {
    content = (
      <>
        <ApplicationList applications={applications}/>
         {meta?.total != 0 && (
            <Pagination
              currentPage={currentPage}
              totalPages={meta?.totalPage}
              onPageChange={handlePageChange}
            />
          )}
      </>
    )
  }
  
   if(!isLoading && isError){
    content = <ServerErrorCard/>
  }


  return (
    <>
      <div className="flex-1 overflow-auto p-4 md:p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">
          Job Applications <span className="text-gray-500 font-normal">({meta?.total})</span>
        </h1>
        {content}
      </div>
    </>
  );
}

export default ApplicationsPage;