"use client"

import NotFoundCard from "@/components/card/NotFoundCard";
import PolicyLoading from "@/components/loader/PolicyLoading";
import AboutUs from "@/components/Policy/AboutUs";
import { useGetAboutUsQuery } from "@/redux/features/policy/policyApi";

const AboutUsPage = () =>{
   const { data, isLoading, isError } = useGetAboutUsQuery(undefined);

   if (isLoading) {
      return <PolicyLoading />;
    }
  
    if (!isLoading && isError) {
      return <h1>Server Error Occured</h1>;
    }
  
    if (!isLoading && !isError && data?.data?._id) {
      return (
        <>
          <AboutUs description={data?.data?.description} />
        </>
      );
    }
  
    if (!isLoading && !isError && !data?.data?.jobDetails?.title) {
      return <NotFoundCard title="About us Not Found" />;
    }
}


export default AboutUsPage;