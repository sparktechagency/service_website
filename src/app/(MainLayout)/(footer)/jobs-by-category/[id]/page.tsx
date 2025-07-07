"use client";

import { useSearchJobsQuery } from "@/redux/features/job/jobApi";
import { useParams } from "next/navigation";

const JobsByCategoryPage = () => {
   const params = useParams<{ id: string }>();
    const { data } = useSearchJobsQuery([
      { name: "page", value: 1 },
      { name: "limit", value: 9 },
      {name: "category", value: [params.id]}
    ]);

    console.log(data)
  return (
    <>
      <h1>Hello</h1>
    </>
  )
}

export default JobsByCategoryPage;