"use client"

import NotFoundCard from "@/components/card/NotFoundCard";
import PolicyLoading from "@/components/loader/PolicyLoading";
import TermsCondition from "@/components/Policy/TermsCondition";
import { useGetTermsConditionsQuery } from "@/redux/features/policy/policyApi";

const TermsAndConditionsPage = () =>{
   const { data, isLoading, isError } = useGetTermsConditionsQuery(undefined);

   if (isLoading) {
      return <PolicyLoading />;
    }
  
    if (!isLoading && isError) {
      return <h1>Server Error Occured</h1>;
    }
  
    if (!isLoading && !isError && data?.data?._id) {
      return (
        <>
          <TermsCondition description={data?.data?.description} />
        </>
      );
    }
  
    if (!isLoading && !isError && !data?.data?.jobDetails?.title) {
      return <NotFoundCard title="Terms-Condition Not Found" />;
    }
}


export default TermsAndConditionsPage;