/* eslint-disable @typescript-eslint/no-unused-vars */
import JobDetails from "@/components/JobDetails/JobDetails";
import { Metadata } from "next";

interface TProps {
  params: Promise<{
    id: string;
  }>;
  searchParams: Promise<{
    title?: string;
    description?: string;
  }>;
}


// ✅ FIXED: Both params and searchParams are now Promise types
export async function generateMetadata({
  params,
  searchParams,
}: TProps): Promise<Metadata> {
  const resolvedSearchParams = await searchParams;
//  const title = resolvedSearchParams.title || "Machmakers Jobs";
  //const description = resolvedSearchParams.description || "This is Job world next tyo updates all";
  const { id } = await params;
  const res = await fetch(`https://backend.machmakers.co.uk/jobs/get_details/${id}`).then((res) => res.json());
  const job = res?.data?.jobDetails;

  const plainText = job?.descriptions?.replace(/<[^>]+>/g, '')   // remove all HTML tags
  .replace(/\u00a0/g, ' ')   // replace &nbsp; with space
  .trim();

  const shortText = plainText.slice(0, 150) + '...';
  
  return {
    title: job?.title || "Machmakers Jobs",
    description: shortText || "This is Job world next tyo updates all"
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