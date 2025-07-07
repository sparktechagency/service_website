"use client";

import NotFoundCard from "@/components/card/NotFoundCard";
import ServerErrorCard from "@/components/card/ServerErrorCard";
import FindWorkList from "@/components/FindWork/FindWorkList";
import FindWorkLoading from "@/components/loader/FindWorkLoading";
import Pagination from "@/components/ui/Pagination";
import { useSearchJobsQuery } from "@/redux/features/job/jobApi";
import { useParams } from "next/navigation";
import { useState } from "react";

const JobsByCategoryPage = () => {
  const params = useParams<{ id: string }>();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { data, isLoading, isError } = useSearchJobsQuery([
      { name: "page", value: 1 },
      { name: "limit", value: 9 },
      {name: "category", value: [params.id]}
    ]);

  const jobs = data?.data?.jobs || [];
  const meta = data?.data?.meta || {};


  
    // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };


  if(isLoading){
    return <FindWorkLoading/>
  }

  if (!isLoading && !isError && jobs?.length > 0) {
    return (
      <>
        <FindWorkList jobs={jobs} />

        {meta?.total > 0 && (
          <div className="pb-8">
            <Pagination
              currentPage={currentPage}
              totalPages={meta?.totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        )}
      </>
    )
  }

  if (!isLoading && !isError && jobs?.length=== 0) {
    return <NotFoundCard title="There is no jobs available by this category" />
  }


  if(!isLoading && isError){
    return  <ServerErrorCard />
  }

}

export default JobsByCategoryPage;