/* eslint-disable @typescript-eslint/no-unused-vars */
import JobDetails from "@/components/JobDetails/JobDetails";
import { Metadata } from "next";

interface TProps {
  params: Promise<{
    id: string;
  }>;
  searchParams: Promise<{
    title?: string;
  }>;
}


// ✅ FIXED: Both params and searchParams are now Promise types
export async function generateMetadata({
  params,
  searchParams,
}: TProps): Promise<Metadata> {
  const resolvedSearchParams = await searchParams;
  const title = resolvedSearchParams.title || "Machmakers Jobs";
  
  return {
    title,
    description: "This is Job",
  };
}

const JobDetailsPage = async ({ params }: TProps) => {
  const resolvedParams = await params;
  const { id } = resolvedParams;
  return (
    <>
      <JobDetails id={id}/>
    </>
  )
}

export default JobDetailsPage